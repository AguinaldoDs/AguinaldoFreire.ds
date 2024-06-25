'use client'
// bibliotecas react
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";

// biblioteca externa
import { motion } from "framer-motion";

//componentes
import AboutMe from "@/app/Components/AboutMe"
import AboutMePlus from "@/app/Components/AboutMePlus";


//--------------------------------------------------------------------------------//

// Links dos Icones
const linkLinkedin = () => {
  window.open('https://www.linkedin.com/in/aguinaldo-freire-95bb5a181/', '_blank');
};

const linkGitHub = () => {
  window.open('https://github.com/AguinaldoDs', '_blank');
};
//


const arrayPontinhos = [".", ".", "."].map((value, indice) => {
  return (
    <motion.div
      key={indice}
      className="text-8xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 0.2,
      }}
    >
      {value}
    </motion.div>
  );
});



// Posição que o menu vai levar (Profile, About me, Jobs)
export default function Home() {

// TROCAR PRA TRUE DEPOIS

// TROCAR PRA TRUE DEPOIS

// TROCAR PRA TRUE DEPOIS

  // Valida About me
  const [validABM, setABM] = useState(false)
  const alterABM = () => {
    setABM(valueABM => !valueABM);
    if(!validABM){
      handleScrollAboutme()
    }
  };

// TROCAR PRA TRUE DEPOIS

// TROCAR PRA TRUE DEPOIS

// TROCAR PRA TRUE DEPOIS

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
    handleScrollJobs()
    setABM(true)
  }


  return (
    <main className=" bg-gray-950 h-[4000px] w-full">
      <title> Home </title>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex border-gray-100 border-b-[1px] w-full h-24 justify-end"
      >
        <div className="flex gap-28 mr-5 justify-center items-center">
          <div className="cursor-pointer" onClick={linkGitHub}>
            <FaGithub size={40} />
          </div>
          <div className="cursor-pointer" onClick={linkLinkedin}>
            <FaLinkedin size={40} />
          </div>
          <div className="cursor-pointer">
            <SiGmail size={40} />
          </div>
        </div>
      </motion.div>

      {/* welcome */}
      <div className="flex mt-0 p-10 w-full h-auto font-bold text-9xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0, 1] }}
          exit={{ opacity: 0 }}
          transition={{
            repeat: 1,
            duration: 1.5,
            repeatDelay: 1,
            ease: "linear"
          }}
          className="flex relative"
        >
          Welcome to Aguinaldo Home...
        </motion.div>
      </div>

      {/* Menu */}
      <div className="mt-20 flex justify-around text-3xl font-extralight">
        <span className="cursor-pointer hover:text-4xl duration-200"
          onClick={handleScroll}> Profile </span>

        <span className="cursor-pointer hover:text-4xl duration-200"
          onClick={handleScrollAboutme}> About me </span>

        <span className="cursor-pointer hover:text-4xl duration-200"
          onClick={gambiarraScrollJob}> Jobs </span>
      </div>

      {/* Profile */}
      <div className="font-extralight flex mt-[18%] w-full h-auto justify-center items-center">
        <motion.div
          className="flex bg-red-400 w-80 h-80 justify-center items-center rounded-3xl"
        >
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

    </main>
  );
}
