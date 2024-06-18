'use client'

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const linkLinkedin = () => {
  window.open('https://www.linkedin.com/in/aguinaldo-freire-95bb5a181/', '_blank');
};

export default function Home() {
  const arrayPontinhos = [".", ".", "."].map((_, indice) => {
    return (
      <motion.div> testando </motion.div>
    )})};

  return (
    <main className="bg-gray-950 h-[2000px] w-full">
      <div className="flex justify-center items-center mt-10">
        {arrayPontinhos}
      </div>
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
      <div className="flex mt-0 p-10 w-full h-auto font-bold text-9xl bg-red-500">
        {/* <div className="flex relative"> Welcome to my portfolio</div> */}
        <motion.div className="bg-slate-700"></motion.div>
      </div>
    </main>
  );
}
