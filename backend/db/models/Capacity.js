
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Capacity extends Model {}

  Capacity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      packaging: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      factor: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Capacity',
      tableName: 'capacities',
      timestamps: true,
      underscored: true,
    }
  )
  return Capacity
}
