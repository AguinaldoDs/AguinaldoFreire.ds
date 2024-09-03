'use client'

// Bibliotecas React
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsGear } from "react-icons/bs";
import { useState, useEffect } from "react"; // Adicionar o useEffect

// Biblioteca externa
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

// Componentes
import DynamicBackground from "./Components/DynamicBgColor";

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
    if(value === colorTheme){
      setColorTheme('black')
    }else{
    setColorTheme(value);}
  };

  const handleColorTextTheme = (value: string) => {
    if(value === colorTextTheme){
      setColorTextTheme('white')
    }else{
      setColorTextTheme(value);}
  };

  return (
    <DynamicBackground className='flex flex-col w-full overflow-y-auto h-[6000px]' $bgColor={colorTheme} 
                                                                              $textColor={colorTextTheme}
                                                                              $h1Color = {colorH1Theme}>
      <title>I'm seeing you! 👀</title>

      {/* CONTACT ME & CONFIG */}
      <div className="flex w-full items-center select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex relative font-light h-auto p-2 rounded-lg gap-3 mt-2
                               border-solid bottom-1 justify-start w-full"
        >
          
          <div className="flex gap-20 w-max p-2 justify-between items-center bg-woodsmoke-950 rounded-t-lg rounded-r-lg">
            <div className="cursor-pointer" onClick={() => { window.open('https://www.linkedin.com/in/aguinaldo-freire-95bb5a181/', '_blank') }}>
              <FaLinkedin size={40} />
            </div>
            <div className="cursor-pointer" onClick={() => { window.open('https://github.com/AguinaldoDs', '_blank') }}>
              <FaGithub size={40} />
            </div>
            <div className="cursor-pointer" onClick={() => { window.open('https://mail.google.com/mail/?view=cm&fs=1&to=aguinaldofreire.ds@gmail.com', '_blank') }}>
              <SiGmail size={40} />
            </div>
          </div>

          <motion.div
          id="PrincipalColor"
          className="flex cursor-pointer"
          animate={{ rotate: validConfig ? 120 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleValidConfig}
        >
          <BsGear size={30} />
        </motion.div>
        </motion.div>



        <AnimatePresence>
          {validConfig && (
            <motion.div
              className="fixed right-0 mr-20 flex flex-col h-max bg-woodsmoke-950 p-4 rounded-md mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {list.map((item, index) => (
                <motion.div
                  key={index}
                  className=" mt-2 cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                  }}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {validPersonlizeOption && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1000]"
          >
            <motion.div
              className="p-5 border-solid border-[1px] bg-woodsmoke-950 w-[500px] h-[300px] rounded-md font-light text-sm pointer-events-auto"
            >
              <h3>Selecione o conjunto de cores do novo tema:</h3>
              <div onClick={() => {
                                    handleColorTheme('#003B4A');
                                    handleColorTextTheme('#E66EB2');
                                    }}>
                <span>Azul/Rosa:</span>
                <div className="flex cursor-pointer">
                  <motion.div className="bg-Personalize1_blue w-5 h-5"> ‎ </motion.div>
                  <motion.div className="bg-Personalize1_pink w-5 h-5"> ‎ </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* ref.1 (aclopa welcome e opções ) */}
      <motion.div className="flex justify-evenly ">
        {/* Welcome */}
        <div className="flex p-10 w-max h-auto font-extralight mt-10 rounded-lg bg-woodsmoke-950">
          <motion.div
            initial={{ y: "20%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-10%" }}
            transition={{ duration: 0.7 }}
            className="p-10"
          >
            <h1 className="text-8xl" 
             id="PrincipalColor"
            >Welcome!</h1>
            <p className="mt-5">I'm Aguinaldo,</p>
            <span className="mt-5">A 23yo Data Analyst and Scientist in Brazil🇧🇷</span>
          </motion.div>
        </div>

        {/* Menu */}
        <motion.div className="flex flex-col mt-10 w-[600px] gap-10 font-light justify-center items-center bg-woodsmoke-950 rounded-lg
                               underline underline-offset-8 decoration-white decoration-double" 
                    id="PrincipalColor">
          <motion.span className="cursor-pointer ">Profile</motion.span>
          <span className="cursor-pointer">About me</span>
          <span className="cursor-pointer">Jobs & Feedback</span>
        </motion.div>
      </motion.div>
    </DynamicBackground>
  );
};

export default Home;
