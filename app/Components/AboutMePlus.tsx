'use client'
{/* About me */}

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";



const handleScroll = () => {
  window.scrollTo({
    top: 1750,
    behavior: 'smooth'
  });
};


// Valida aparição dos elementos 

export default function AboutMePlus(){
  useEffect(() => {
    handleScroll();
  }, []);

return(
<main className=" bg-gray-950 w-full">
  <div className="flex relative mt-[7%] h-1 items-center">

  
      <span className="flex relative font-extralight text-5xl border-solid ml-6">
          About me
      </span>   
        <motion.div className="flex relative bg-white w-[70%] h-[1px] rounded-3xl left-2 ml-10">
        </motion.div>
      
      </div> 
 
      <div className="flex w-max font-medium text-[12px] space-y-2 mt-6 justify-center
       ml-[50%] -translate-x-[50%]">
             <motion.div
        className="flex gap-16"
        initial={{opacity: 0, x: 50}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        
        >
        <Image src="/images/pp1.svg" alt="Exemplo" width={500} height={200} />
        </motion.div>

        <div className="w-max space-y-1 mt-20 justify-center items-center">
          <motion.div
            className="flex gap-7 mt-20"
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            
          >
            <Image src="/images/js.svg" alt="Exemplo" width={60} height={60} />
            <div>
            <p>No final de 2023, iniciei meus estudos no desenvolvimento web.</p>
            <p>Comecei aprendendo os fundamentos de HTML, CSS e JavaScript.</p>
            <p>Utilizando essas habilidades, consegui entregar meu primeiro site para a empresa.</p>
            <p>Essa solução ajudou a resolver um grande problema de processos manuais.</p>

            </div>
          </motion.div>
          <p>&nbsp;</p>

          <motion.div
            className="flex gap-7"
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
          >
            <Image src="/images/node.svg" alt="Exemplo" width={60} height={60} />
            <div>
              <p> No intuito da melhoria desse site, comecei estudos em Node.js </p>
              <p> para a criação de APIs, onde enriqueceu muito meus conhecimentos </p>
              <p> permitindo a integração com bancos de dados e melhorando ainda </p>
              <p> mais a experiência do usuario. </p>
            </div>
          </motion.div>
          <p>&nbsp;</p>

          <motion.div
            className="flex gap-7"
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
          >
            <Image src="/images/react.svg" alt="Exemplo" width={60} height={60} />
            <div>
              <p> Sempre no intuito de melhorar, comecei os aprendizados </p>
              <p> em React Next + Tailwind. </p>
              <p> Um biblioteca muito poderos, que permitiu refazer o site </p>
              <p> entregue em qualidade muito melhor. Além, de permitir a </p>
              <p> a modelagem desse Portfolio.</p>
            </div>
          </motion.div>
          <p>&nbsp;</p>

          {/* <motion.div
            className="flex gap-7"
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
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
          </motion.div> */}

          
        </div>
     
      </div>

</main>)
};