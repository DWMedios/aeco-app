import BackButton from "../../components/backButton/BackButton";
import ScreenLayout from "../../components/layout/screenLayout";
import { useState } from 'react';
import Button from '../../components/button';
import { BorderRadiusEnum, FontSizeEnum, MetaDataLanguage } from '../../interfaces';
import { usePageData } from '../../hooks/usePageData';

function Language() {

  const { data: metas} = usePageData<MetaDataLanguage>('Language');

      const [selectedLanguage, setSelectedLanguage] = useState<string>('es');

      const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedLanguage(event.target.value);
      };

      if (!metas) return <div>No metadata available</div>;

  return (
    <>
      <ScreenLayout image={metas.background}>
      <div className="p-4 h-screen flex flex-col items-center justify-center gap-11 select-none">
      <BackButton url="/home" imageSrc='images/backbutton.png'/>
      <h1 className='text-center text-7xl mt-20 mb-5 z-10'>
        Seleccione un idioma
      </h1>
      <form className="flex flex-col justify-center items-center space-y-4 z-10">
      <label className="flex items-center text-5xl  text-center p-6 tracking-wider">
        <input
          type="radio"
          name="language"
          value="es"
          checked={selectedLanguage === 'es'}
          onChange={handleLanguageChange}
          className="hidden"
        />
        <span
          className={`cursor-pointer py-6 px-4 rounded-full w-80 font-medium ${
            selectedLanguage === 'es' ? 'bg-[#90c9ac] text-black' : 'bg-white'
          }`}
          onClick={() => setSelectedLanguage('es')}
        >
          Español
        </span>
      </label>

      <label className="flex items-center text-5xl text-center p-6 tracking-wider">
        <input
          type="radio"
          name="language"
          value="en"
          checked={selectedLanguage === 'en'}
          onChange={handleLanguageChange}
          className="hidden"
        />
        <span
          className={`cursor-pointer py-6 px-4 rounded-full w-80 font-medium ${
            selectedLanguage === 'en' ? 'bg-[#90c9ac] text-black' : 'bg-white'
          }`}
          onClick={() => setSelectedLanguage('en')}
        >
          Inglés
        </span>
      </label>
    </form>
      <div className="flex justify-center mt-8 w-full">
      <Button 
      label={metas.button.labelEs}
      url={metas.button.url}
      borderRadius={BorderRadiusEnum[metas.button.borderRadious as keyof typeof BorderRadiusEnum]} 
      fontSize={FontSizeEnum[metas.button.fontSize as keyof typeof FontSizeEnum]} 
      />
      </div>
    </div>
      </ScreenLayout>
    </>
  );
}

export default Language;
