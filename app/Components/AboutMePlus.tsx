'use client'
{/* About me */}

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Valida aparição dos elementos 

export default function AboutMe(){
return(
<main className=" bg-gray-950 h-[4000px] w-full">
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
            className="flex gap-7"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
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
            className="flex gap-7"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
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
            className="flex gap-7"
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
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
            className="flex gap-7"
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
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
          
        </div>
        <motion.div
        className="flex gap-7"
        initial={{opacity: 0, x: 50}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        >
        <Image src="/images/AboutMe1.svg" alt="Exemplo" width={700} height={200} />
        </motion.div>
      </div>

</main>)
};