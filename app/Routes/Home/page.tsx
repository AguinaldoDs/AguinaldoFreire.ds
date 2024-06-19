'use client'

import { motion } from "framer-motion";
import { DiVim } from "react-icons/di";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const linkLinkedin = () => {
  window.open('https://www.linkedin.com/in/aguinaldo-freire-95bb5a181/', '_blank');
};
const arrayPontinhos = [".", ".", "."].map((value, indice) => {
  return (
    <motion.div
    className="text-8xl"
    initial={{opacity: 0}}
    animate={{opacity: [0,1,0]}}
    transition={{
                  repeat: Infinity,
                  repeatType: 'loop', 
                  duration: 0.2,
    }}  
    > {value} </motion.div>
  )});

export default function Home() {
  return (
    <main className="bg-gray-950 h-[2000px] w-full">
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
          animate={{opacity: [1,0,1]}}
          exit={{opacity:0}}
          
          transition={{
            repeat: 1,
            duration: 1.5,
            repeatDelay: 1,
            ease: "linear"
          }}
          className="flex relative"> Welcome to Aguinaldo Home...
      </motion.div>
     </div>
    </main>
  );
}
