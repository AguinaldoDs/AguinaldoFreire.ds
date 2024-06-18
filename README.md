'use client'

import { motion } from "framer-motion";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const linkLinkedin = () => {
    window.open('https://www.linkedin.com/in/aguinaldo-freire-95bb5a181/', '_blank');
  };

export default function Home(){
    return (
        <main className="bg-gray-950 h-[2000px] w-full flex">
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex bg-red-600 w-full h-24 mt-10 justify-end">

            <div className="flex gap-28 mr-5 justify-center items-center">
                   <div className="cursor-pointer"> 
                    
                    <FaGithub size={40}/>
                   </div>

                   <div className="cursor-pointer" onClick={linkLinkedin}>
                     <FaLinkedin size={40}/> 
                   </div>
                   
                   <div className="cursor-pointer"> <SiGmail size={40}/> </div>
            </div>
            </motion.div>
            
         </main>
    );
};
