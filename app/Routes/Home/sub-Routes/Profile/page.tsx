'use client'

// Bibliotecas React
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsGear } from "react-icons/bs";
import { useState } from "react"; 

// Biblioteca externa
import { motion, AnimatePresence } from "framer-motion";
import DynamicBackground from "../../Components/DynamicBgColor";

const Home: React.FC = () => {
  // Lista de opções de seleção
  const list = ['Personalizar sistema', 'Acessibilidade', 'Idioma'];

  // States
  const [validConfig, setValidConfig] = useState(false);
  const [validPersonlizeOption, setValuePersonlizeOption] = useState(false);

  // Cores e temas 
  const [colorTheme, setColorTheme] = useState('black');
  const [colorTextTheme, setColorTextTheme] = useState('white');
  const [colorH1Theme, setH1ColorTheme] = useState('#529552');

  // Manipuladores
  const handleValidConfig = () => {
    setValidConfig(value => !value);
  };

  const handleClick = (item: string) => {
    if (item === "Personalizar sistema") {
      setValuePersonlizeOption(value => !value);
    }
  };

  const handleColorTheme = (value: string) => {
    setColorTheme(value === colorTheme ? 'black' : value);
  };

  const handleColorTextTheme = (value: string) => {
    setColorTextTheme(value === colorTextTheme ? 'white' : value);
  };

  const handleColorTextH1Theme = (value: string) => {
    setH1ColorTheme(value === colorH1Theme ? '#529552' : value);
  };


  return (
    <DynamicBackground
      className='flex flex-col w-full h-dvh overflow-y-auto'
      $bgColor={colorTheme}
      $textColor={colorTextTheme}
      $h1Color={colorH1Theme}
    >
      <title>I'm seeing you! 👀</title>

      {/* CONTACT ME & CONFIG */}
      <div className="flex items-center select-none">
        
        <motion.div
          id="PrincipalColor"
          className="fixed right-0 cursor-pointer "
          animate={{ rotate: validConfig ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleValidConfig}
        >
          <BsGear size={30} />
        </motion.div>

        <AnimatePresence>
          {validConfig && (
            <motion.div
              id="UpOptionConfigs"
              className={`fixed flex-col text-center right-0 mr-24 mt-10 p-2 w-[20%] bg-woodsmoke-950 rounded-lg font-extralight`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {list.map((item, index) => (
                <motion.div
                  key={index}
                  className={`mt-2 cursor-pointer hover:text-${colorTextTheme.replace('#', '')}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {validPersonlizeOption && (
          <motion.div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1000]">
            <motion.div className="p-5 border-solid border-[1px] bg-woodsmoke-950 w-[500px] h-[300px] rounded-md font-light text-sm pointer-events-auto">
              <h3>Selecione o conjunto de cores do novo tema:</h3>
              <div>
                <span>Azul/Rosa:</span>
                <div className="flex cursor-pointer"
                 onClick={() => {
                  handleColorTheme('#f6a168');
                  handleColorTextTheme('#d2d2d2');
                  handleColorTextH1Theme('white');
                }}
                >
                  <motion.div className="bg-Personalize1_blue w-5 h-5"> ‎ </motion.div>
                  <motion.div className="bg-Personalize1_pink w-5 h-5"> ‎ </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      
    </DynamicBackground>
  );
};

export default Home;
