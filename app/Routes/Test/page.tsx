'use client'

// Bibliotecas React
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaCog } from 'react-icons/fa'; 
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState, useEffect } from "react";

// Biblioteca externa
import { motion, AnimatePresence } from "framer-motion";
import { Loop } from "framer/core/Loop.js";


const Home: React.FC = () => {
  return (
    <main className='flex flex-col bg-crowshead-950 w-full overflow-y-auto h-dvh'>
      <title>I'm seeing you! 👀</title>


      {/* CONTACT ME  & CONFIG */}
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex relative font-light w-max h-auto p-2 rounded-2xl gap-3
                   mt-2 ml-2">
          <p className="flex mt-6"> Contact me: </p>
          <div className="flex gap-20 mr-5 justify-center items-center">
            <div className="cursor-pointer" onClick={()=>{window.open('https://www.linkedin.com/in/aguinaldo-freire-95bb5a181/', '_blank') }}>
              <FaGithub size={40} />
            </div>
            <div className="cursor-pointer" onClick={()=>{window.open('https://github.com/AguinaldoDs', '_blank') }}>
              <FaLinkedin size={40} />
            </div>
            <div className="cursor-pointer" onClick={()=>{window.open('https://mail.google.com/mail/?view=cm&fs=1&to=aguinaldofreire.ds@gmail.com', '_blank') }}>
              <SiGmail size={40} />
            </div>
          </div>
            </motion.div>
            <FaCog size={40}>
          <motion.div>
        </motion.div>



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
      animate={{
        x: [0, 2, 0],
        y:[0,2,0]}}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop'}}
      viewport={{ once: false }}
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
