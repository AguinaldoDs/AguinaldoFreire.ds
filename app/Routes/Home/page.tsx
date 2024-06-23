'use client'

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import AboutMe from "@/app/Components/AboutMePlus";

const linkLinkedin = () => {
  window.open('https://www.linkedin.com/in/aguinaldo-freire-95bb5a181/', '_blank');
};

// Parametros About me

//

const arrayPontinhos = [".", ".", "."].map((value, indice) => {
  return (
    <motion.div
      key={indice}
      className="text-8xl"
      initial={{opacity: 0}}
      animate={{opacity: [0, 1, 0]}}
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

export default function Home() {
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
      top: 1600,
      behavior: 'smooth'
    });
  };

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });

  return (
    <main className=" bg-gray-950 h-[2000px] w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex border-gray-100 border-b-[1px] w-full h-24 justify-end"
      >
        <div className="flex gap-28 mr-5 justify-center items-center">
          <div className="cursor-pointer">
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
          initial={{opacity: 0}}
          animate={{opacity: [1, 0, 1]}}
          exit={{opacity: 0}}
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
              onClick={handleScrollJobs}> Jobs </span>
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
      <div className="flex relative mt-[10%] h-1 items-center">
        <motion.div className="flex absolute bg-white w-[70%] h-[1px] rounded-3xl left-2">
        </motion.div>
        <span className="flex relative ml-[75%] font-extralight text-5xl border-solid">
          About me
        </span> 
      </div> 
      <div className="flex w-max font-medium text-[12px] space-y-2 mt-10 justify-center ml-[50%] -translate-x-[50%]">
        <div className="w-max space-y-1">
          <motion.div
            ref={ref1}
            className="flex gap-7"
            initial={{opacity: 0, x: -50}}
            animate={inView1 ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
            transition={{duration: 1}}
          >
            <Image src="/images/sql.svg" alt="Exemplo" width={60} height={60} />
            <div>
              <p>Em meados 2022 inicie minha carreira como Analista de dados em</p>
              <p>uma empresa no ramo de telecobrança, onde desenvolvi grandes</p>
              <p>habilidades com MSSQL, nela a crianção de procedures, Triggers,</p>
              <p>Views e trabalhados agendados.</p>
            </div>
          </motion.div>
          <p>&nbsp;</p>

          <motion.div
            ref={ref2}
            className="flex gap-7"
            initial={{opacity: 0, x: -50}}
            animate={inView2 ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
            transition={{duration: 1}}
          >
            <Image src="/images/bi.svg" alt="Exemplo" width={60} height={60} />
            <div>
              <p>Além de Power BI para motagem de DashBoards e transformar de fatos</p>
              <p> informações cruas dos bancos de dados em informações visuais que </p>
              <p>auxiliam na tomada de dicisões.</p>
            </div>
          </motion.div>
          <p>&nbsp;</p>

          <motion.div
            ref={ref3}
            className="flex gap-7"
            initial={{opacity: 0, x: 50}}
            animate={inView3 ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
            transition={{duration: 1}}
          >
            <Image src="/images/py2.svg" alt="Exemplo" width={60} height={60} />
            <div>
              <p>Outra grande ferramenta que criei dominio foi a linguagem Python,</p>
              <p>permitindo agilizar importações de informações, também me auxiliou</p>
              <p>na automação de um processo manual que era feito na empresa que</p>
              <p>custava minutos importantes do meu dia. </p>
            </div>
          </motion.div>
          <p>&nbsp;</p>

          <motion.div
            ref={ref4}
            className="flex gap-7"
            initial={{opacity: 0, x: 50}}
            animate={inView4 ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
            transition={{duration: 1}}
          >
            <Image src="/images/trf.svg" alt="Exemplo" width={60} height={60} />
            <div>
              <p>Meu maior desafio nessa empresa, foi a implantação de um novo cliente</p>
              <p>do completo zero, fiz a modelagem das ETLs, criação das rotinas e as</p>
              <p>visões para acompanhamento dos times operacionais. Recebi grandes</p>
              <p>responsabilidades e consegui fazer todas as entregas usando o método</p>
              <p>Ágil de prioridades.</p>
            </div>
          </motion.div>

          <div className="cursor-pointer w-[50%] ml-[50%] -translate-x-[50%] bg-red-400 rounded-md 
            p-2 justify-center text-center hover:bg-red-500 duration-300">
            About me+
          </div>
          <AboutMe/>
        </div>

      </div>
    </main>
  );
}
