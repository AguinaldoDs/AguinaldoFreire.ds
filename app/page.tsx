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
    <main className="flex w-dvw h-dvh justify-center
                    bg-slate-950 text-slate-100 font-extralight">
      <title>Welcome!</title>
      <div className="flex justify-center w-full max-w-[1280px] py-5 px-5 select-none text-slate-200">
        {/* Primeiro componente superior com contact me */}
        <div className=" mt-5 fixed flex w-[90%] max-w-[1280px] h-max rounded-md p-3 border border-gray-900 
                        justify-between backdrop-blur-md bg-opacity-70 z-50">
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

        <div className='w-full h-max flex'>
          <div className='flex w-96 w-min-96'>
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

          <div className='flex flex-col w-max mt-32 p-5 text-4xl font-thin'>
            <div className='flex text-4xl'>
            Inovando com soluções digitais full-stack.
              <motion.div
                animate={{ y: [0,10,-10,0,0,0] }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop" // Garante que a animação se repita em loop
                }}
                className="flex w-max h-max "
              >
                🤙🏻
              </motion.div>
            </div>
            <div className='text-lg font-normal py-1 pb-4 opacity-30 border-b-0.1'>
              Web3 & Full-Stack Developer
            </div>

              <div className='flex w-full text-lg justify-evenly font-normal text-slate-200 mt-4' >
              <div className=''> 
                  <div>São Paulo, Brasil</div>
                  <p className='text-sm text-slate-500'>localização</p>
              </div>

              <div className=''> 
                  <div>+3 anos na ativa</div>
                  <p className='text-sm text-slate-500'>Experiência</p>
              </div>

              <div className=''> 
                  <div>+15 Projetos</div>
                  <p className='text-sm text-slate-500'>Projetos & serviços</p>
              </div>

              </div>


          </div>


        </div>
      </div>
    </main>
  );
}
