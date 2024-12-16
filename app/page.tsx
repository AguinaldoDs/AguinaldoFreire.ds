'use client'

// Extern framer
import { motion } from 'framer-motion'

// Native framer
import { useState } from 'react';

// Icons
import { GoHome } from "react-icons/go";
import { PiProjectorScreenLight } from "react-icons/pi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaRegCalendarMinus } from "react-icons/fa6";

export default function Home() {
  // States
  const [language, setLanguage] = useState('en');
  const [menu, setMenu] = useState(false);

  const handleSetMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <main className="flex w-dvw h-[6000px] justify-center
                    bg-slate-950 text-slate-100 font-extralight">
      <title>Welcome!</title>
      <div className="flex justify-center w-full max-w-[800px] py-5 px-5 select-none"> 
        {/* Primeiro componente superior com contact me */}
        <div className="mt-5 fixed flex w-[90%] max-w-[900px] h-max rounded-md p-3 border border-gray-900 
                        justify-between bg-red-950">
          <div className="flex justify-center items-center space-x-1 px-6 py-1 rounded-md
                          text-2xl bg-slate-800 font-semibold cursor-pointer ">
            @jnr.1914
          </div>

          <div className="flex space-x-3 font-semibold text-1xl select-none">
            <div className="flex justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 rounded-md
                            cursor-pointer hover:bg-slate-900 transition">
              <GoHome className="h-6 w-6" />
              <p>Home</p>
            </div>

            <div className="flex justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 rounded-md
                            cursor-pointer hover:bg-slate-900 transition">
              <PiProjectorScreenLight className="h-6 w-6" />
              <p>Projects</p>
            </div>

            <div className="flex justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 rounded-md
                            cursor-pointer hover:bg-slate-900 transition">
              <MdOutlineMarkEmailUnread className="h-6 w-6" />
              <p>Contact</p>
            </div>

            <div className="flex justify-center items-center space-x-1 px-4 rounded-md
                            cursor-pointer" onClick={handleSetMenu}>
              <motion.div
                animate={{ rotate: menu ? 90 : 0 }}
                transition={{ duration: 0.5 }}>
                <GoGear className="h-6 w-6" />
              </motion.div>
            </div>

            {menu && (
              <div className='absolute right-0 bottom-0'>
                Configurações
              </div>
            )}
          </div>
        </div>

        <div className='flex'>
          <div className="flex flex-col w-96 sm:w-11/12 h-max rounded-xl px-7 py-3 relative mt-32 border-0.1 border-gray-900 text-slate-300">
            <h1 className="font-medium text-xl">Aguinaldo Freire</h1>
            <div className="mt-5 space-y-3">
              <p>👋🏻 Olá, sou o Aguinaldo, desenvolvedor FullStack.</p>
              <p>Domino o desenvolvimento de interfaces responsivas com <strong>React</strong> e <strong>Next.js</strong>,</p>
              <p>além de APIs usando <strong>Node.js</strong>, <strong>Python</strong> e <strong>PHP</strong>.</p>
              <p>Tenho conhecimentos em banco de dados (<strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong>) e infraestrutura em Cloud (<strong>AWS</strong>, <strong>GCP</strong>).</p>
            </div>

            <div className='flex w-full space-x-2 mt-2'>
              <div className="flex w-full justify-center items-center space-x-1 border-0.1 border-gray-900 px-4
              cursor-pointer p-2 rounded-full hover:bg-slate-900 transition">
                <FaGithub className='w-6 h-6' />
              </div>

              <div className="flex w-full justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 
              cursor-pointer p-2 rounded-full hover:bg-slate-900 transition">
                <HiOutlineNewspaper className='w-6 h-6' />
              </div>

              <div className="flex w-full justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 
              cursor-pointer p-2 rounded-full hover:bg-slate-900 transition">
                <FaRegCalendarMinus className='w-6 h-6' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
