const WebSocket = require('ws')

const { setupSerialPort } = require('./serial')
const { sendCommandLetters, receivedCommandArduino } = require('./serial/arduinoCommands')

const setupWebSocket = async (server) => {
  const wss = new WebSocket.Server({ server })
  let { port: portSerial, parser: serialParser } = await setupSerialPort()

  const handleSerialData = (ws) => (data) => {
    console.log('Datos recibidos del puerto serial:', data)
    const receivedCommand = receivedCommandArduino[data]
    if (!receivedCommand) {
      console.log('Comando del arduino no encontrado:', data)
    }
    if (receivedCommand) {
      ws.send(JSON.stringify({ success: true, message: receivedCommand }))
    }
  }

  const setupWebSocketConnection = (ws) => {
    console.log('Nuevo cliente conectado')

    if (serialParser) {
      serialParser.on('data', handleSerialData(ws))
    }

    ws.on('message', async (message) => {
      if (!portSerial || !portSerial.isOpen) {
        console.error('Puerto serial no encontrado o cerrado, intentando reconectar...')
        const serialReconnected = await setupSerialPort()

        if (!serialReconnected.port) {
          ws.send(JSON.stringify({ success: false, message: 'No se encontró un puerto serial, intenta de nuevo' }))
          return
        } else {
          portSerial = serialReconnected.port
          serialParser = serialReconnected.parser

          // Reasignar el listener de datos del nuevo serialParser
          serialParser.on('data', handleSerialData(ws))
        }
      }

      const parsedMessage = JSON.parse(message.toString('utf8'))
      const sendArduinoCommand = sendCommandLetters[parsedMessage.command]

      if (!sendArduinoCommand) {
        ws.send(JSON.stringify({ success: false, message: 'Comando no encontrado' }))
        return
      }

      if (portSerial) {
        portSerial.write(sendArduinoCommand, (err) => {
          if (err) {
            console.error('Error al escribir en el puerto serial:', err.message)
            ws.send(JSON.stringify({ success: false, message: 'Error al enviar mensaje al puerto serial' }))
          } else {
            console.log('Enviando mensaje al puerto serial...: ', sendArduinoCommand)
            ws.send(JSON.stringify({ success: true, message: 'Mensaje enviado al puerto serial' }))
          }
        })
      }
    })

    ws.on('close', () => {
      console.log('Cliente desconectado')
      // Limpiar el listener de datos del serialParser cuando el cliente se desconecta
      if (serialParser) {
        serialParser.removeListener('data', handleSerialData(ws))
      }
    })
  }

  wss.on('connection', setupWebSocketConnection)
}

module.exports = setupWebSocket
