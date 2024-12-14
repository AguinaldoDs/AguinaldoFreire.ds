'use client'

//extern framer
import { motion } from 'framer-motion'

//native framer
import { useState } from 'react';



// icons
import { GoHome } from "react-icons/go";
import { PiProjectorScreenLight } from "react-icons/pi";
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import { GoGear } from "react-icons/go";


export default function Home() {

  // states
  const [language, setLanguage] = useState('en')

    //menu
    const [menu,setMenu] = useState(false)
    const handleSetMenu = () =>{
          setMenu(!menu)
          console.log(menu)
    }
  




  return (
   <main className="flex w-dvw h-dvh justify-center
                  bg-slate-950 text-slate-100 font-extralight">
    <title>Welcome!</title>
    <div className="flex justify-center w-full max-w-[800px] bg-transparent py-5 px-5 select-none"> 

      {/* primeiro componente superior com contact me */}
     <div className="mt-5 fixed flex w-[90%] max-w-[900px]  h-max rounded-md p-3 border-0.1 border-gray-900 antialiased justify-between">
      <div className="flex justify-center items-center space-x-1 px-6 py-1 rounded-md
                      text-2xl bg-slate-800 font-semibold cursor-pointer ">
        @jnr.1914
      </div>

      <div className="flex space-x-3 font-semibold text-1xl select-none">
        <div className="flex justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 rounded-md
                        cursor-pointer">
          <GoHome className="h-6 w-6" />
          <p>home</p>
        </div>

        <div className="flex justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 rounded-md
        cursor-pointer">
          <PiProjectorScreenLight className="h-6 w-6"/>
          <p>Projects</p>
        </div>

        <div className="flex justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 rounded-md
        cursor-pointer">
          <MdOutlineMarkEmailUnread className="h-6 w-6" />
          <p>Contact</p>
        </div>

        <div className="flex justify-center items-center space-x-1  px-4 rounded-md
                        cursor-pointer"
             onClick={handleSetMenu}>
        <motion.div
        whileTap={{ rotate: 90 }}>
        <GoGear className="h-6 w-6" />
        </motion.div>
        </div>

      {menu ?
      <div className='absolute right-0 bottom-0'>
        configurações
      </div> : null
      }

      </div>
     </div>
     

     <div className="flex flex-col w-full min-w-[200px] rounded-xl px-7 py-3 relative mt-32 border-0.1 border-gray-900
                    text-slate-300">
      <h1 className="font-medium text-xl">Aguinaldo Freire</h1>
      <p>Olá, sou o Aguinaldo, desenvolvedor FullStack a 3 anos.</p>
      <p></p>
      </div>
    </div>
   </main>
  );
}
