'use client'

// Bibliotecas React
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsGear } from "react-icons/bs";

// Biblioteca externa
import { motion, AnimatePresence } from "framer-motion";
import { Loop } from "framer/core/Loop.js";
import { useState } from "react";


const Home: React.FC = () => {
  // Lista de opções de seleção
  const list = ['Personalizar sistema', 'Acessibilidade','Idioma'];
  const ColorsThemeWindow = {'default': 'default', 
                              'Pink': 'Pink'}


  // States
  const [validConfig, setValidConfig] = useState(false)
  const [validPersonlizeOption, setValuePersonlizeOption] = useState(false);
  const [colorTheme,setColorTheme] = useState('default')

  //Handles
  const handleValidConfig = () => {setValidConfig(value => !value)}

  const handleClick = (item: string) => {
    if (item === "Personalizar sistema") {
      setValuePersonlizeOption(value => !value);
    }
  };

  const handleColorTheme = (value: string) => {
        setColorTheme(value)
        console.log(colorTheme)
  }




  return (
    <main className='flex flex-col bg-crowshead-950 w-full overflow-y-auto h-dvh'>
      <title>I'm seeing you! 👀</title>


      {/* CONTACT ME  & CONFIG */}
      <div className="flex w-full items-center  select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex relative font-light w-maxh-auto p-2 rounded-2xl gap-3
                   mt-2 ml-2">
          <p className="flex mt-6"> Contact me: </p>
          <div className="flex gap-20 mr-5 justify-center items-center">
            <div className="cursor-pointer" onClick={()=>{window.open('https://www.linkedin.com/in/aguinaldo-freire-95bb5a181/', '_blank') }}>
              <FaLinkedin size={40} />
            </div>
            <div className="cursor-pointer" onClick={()=>{window.open('https://github.com/AguinaldoDs', '_blank') }}>
              < FaGithub size={40} />
            </div>
            <div className="cursor-pointer" onClick={()=>{window.open('https://mail.google.com/mail/?view=cm&fs=1&to=aguinaldofreire.ds@gmail.com', '_blank') }}>
              <SiGmail size={40} />
            </div>
          </div>
            </motion.div>

          <motion.div 
           className="fixed right-0 mr-4 cursor-pointer"
           animate={{ rotate: validConfig ? 120 : 0 }}
           transition={{ duration: 0.5 }}
           onClick={handleValidConfig}
          > 
            <BsGear size={30}/>   
          </motion.div>
        
        <motion.div className="fixed right-0 mr-20 ">
        {/* return options  */}
        {validConfig ? 
        <motion.div
        className="flex flex-col h-max bg-crowshead-900 p-4 rounded-md mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {list.map((item, index) => (
          <motion.div
            key={index}
            className="text-white mt-2 cursor-pointer"
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
      </motion.div> : null}
      </motion.div>

      {/* ref. options config */}
      {validPersonlizeOption ? 
      <motion.div
      className="flex absolute p-5 border-solid border-[1px] bg-crowshead-950 w-[500px] h-[300px] rounded-md font-light text-sm
      ml-[50%] -translate-x-[50%]
      mt-[50%] -translate-y-[50%] 
      z-[1000]"
      >
      <h3> Selecione o conjunto de cores do novo tema: </h3>
      <div 
       onClick={() => {handleColorTheme('Pink')}}
      >
        <span> Azul/Rosa: </span>
        <div className="flex cursor-pointer"
        >
        <motion.div
        className="bg-Personalize1_blue w-5 h-5"
        > ‎ </motion.div>
        <motion.div
        className="bg-Personalize1_pink w-5 h-5"
        > ‎ </motion.div>
        </div>
      </div>
      </motion.div> 
      : null}



      </div>
      {/* ref.1 (aclopa welcome e opções ) */}
      <motion.div className="flex bg-cyan-500">
        {/* Welcome */}

        <div className="flex p-10 w-max h-auto font-extralight  mt-10">
          <motion.div
            initial={{ y: "20%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-10%" }}
            transition={{ duration: 0.7 }}
            className=" p-10">
            <p
              className="text-8xl"
            > Welcome!</p>
            <p
              className="mt-5 text-slate-50"
            >Im Aguinaldo,</p>
            <span
              className="mt-5 text-slate-50"
            > A 23yo Data Analyst and Scientist in
              <span
                className=""
              > Brazil🇧🇷</span>
            </span>
          </motion.div>
        </div>

      
      {/* Menu */}
      <motion.div className=" flex flex-col gap-10 font-light  justify-center items-center">
      <motion.span
      className="cursor-pointer"
      // animate={{
      //   x: [0, 2, 0],
      //   y:[0,2,0]}}
      // transition={{
      //   duration: 3,
      //   repeat: Infinity,
      //   repeatType: 'loop'}}
      // viewport={{ once: false }}
    >
      Profile
    </motion.span>

        <span className="cursor-pointer"
          > About me </span>

        <span className="cursor-pointer"
          > Jobs & Feedback </span>
      </motion.div>


      </motion.div>
    </main>
  );
};

export default Home;
