'use client'

// Bibliotecas React
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState, useEffect } from "react";

// Biblioteca externa
import { motion, AnimatePresence } from "framer-motion";

// Componentes
import AboutMe from "@/app/Components/AboutMe";
import AboutMePlus from "@/app/Components/AboutMePlus";
import HoverEffect from "@/app/Components/GhostDiv"

//----------------------------------- ---------------------------------------------//


// Links dos Ícones
const linkLinkedin = () => {
  window.open('https://www.linkedin.com/in/aguinaldo-freire-95bb5a181/', '_blank');
};

const linkGitHub = () => {
  window.open('https://github.com/AguinaldoDs', '_blank');
};

const linkMail = () => {
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=aguinaldofreire.ds@gmail.com', '_blank')
}

// Posição que o menu vai levar (Profile, About me, Jobs)
export default function Home() {

  // Valida About me
  const [validABM, setABM] = useState(true);
  const alterABM = () => {
    setABM(valueABM => !valueABM);
    if (!validABM) {
      handleScrollAboutme();
    }
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth'
    });
  };

  const handleScrollAboutme = () => {
    window.scrollTo({
      top: 1150,
      behavior: 'smooth'
    });
  };

  const handleScrollJobs = () => {
    window.scrollTo({
      top: 1800,
      behavior: 'smooth'
    });
  };

  const gambiarraScrollJob = () => {
    handleScrollJobs();
    setABM(true);
  };


  return (
    <main className=" bg-gray-950 h-[4000px] w-full">
      <title> Home </title>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex fixed bg-gray-900 font-light w-max h-auto p-5 rounded-3xl gap-3
                  ml-[60%] mt-2"
      >
        <p className="flex mt-6"> Contact me: </p>
        <div className="flex gap-20 mr-5 justify-center items-center">
          <div className="cursor-pointer" onClick={linkGitHub}>
            <FaGithub size={40} />
          </div>
          <div className="cursor-pointer" onClick={linkLinkedin}>
            <FaLinkedin size={40} />
          </div>
          <div className="cursor-pointer" onClick={linkMail}>
            <SiGmail size={40} />
          </div>
        </div>
      </motion.div>

      {/* Welcome */}
    
      <div className="flex p-10 w-max h-auto font-extralight bg-gray-900 mt-10">
        <motion.div
          initial={{ y: "20%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-10%" }}
          transition={{ duration: 0.7 }}
          className=" p-10"
        >
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
      <div className=" flex top-[80%] left-0 w-full text-3xl font-extralight justify-around">
        <span className="cursor-pointer hover:text-4xl duration-200"
          onClick={handleScroll}> Profile </span>

        <span className="cursor-pointer hover:text-4xl duration-200"
          onClick={handleScrollAboutme}> About me </span>

        <span className="cursor-pointer hover:text-4xl duration-200"
          onClick={gambiarraScrollJob}> Jobs & Feedback </span>
      </div>

      {/* Profile */}
      <div className="font-extralight flex mt-[37%] w-full h-auto justify-center items-center">
        <motion.div
          className="flex bg-red-400 w-80 h-80 justify-center items-center rounded-3xl"
        >
          <motion.img src="/34.jpeg" alt="tes"
            className="p-4 w-full h-full object-cover rounded-3xl cursor-pointer"

            whileHover={{ x: 30, y: 10, rotate: 10 }}
            exit={{ opacity: 0 }}

          />

        </motion.div>

        <div className="font-extralight flex relative flex-col ml-10 ">
          <p>Analista de Dados e MIS com dois anos de experiência em manipulação, análise e visualização de dados.</p>
          <p>Especialista em Python, MSSQL, Business Intelligence (BI) e R.</p>
          <p>Além de desenvolvedor Web, dominando React Next, Node.js e Tailwind.</p>
        </div>
      </div>

      {/* About me */}
      <div>
        <AboutMe />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.0
          }}
        >
          {validABM ? null : <AboutMePlus />}
        </motion.div>

        <motion.div
          onClick={alterABM}
          whileInView={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 1.5
          }}

          className="flex flex-col relative ml-[50%] -translate-x-[50%] text-sm font-extralight
                    cursor-pointer justify-center items-center"
        >
          About me+
          {validABM ? <FiChevronDown size={16} /> : <FiChevronUp size={16} />}
        </motion.div>
      </div>

      <HoverEffect />

    </main>
  );
}
