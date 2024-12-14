import Image from "next/image";



// icons
import { GoHome } from "react-icons/go";
import { PiProjectorScreenLight } from "react-icons/pi";
import { MdOutlineMarkEmailUnread } from "react-icons/md"


export default function Home() {
  return (
   <main className="flex w-dvw h-dvh justify-center
                  bg-slate-950 text-slate-100 font-extralight">
    <title>Welcome!</title>
    <div className="flex w-full bg-transparent py-5 px-5"> 

      {/* primeiro componente superior com contact me */}
      <div className="mt-5 flex w-full h-max rounded-md p-3 border-0.1 border-zinc-900 antialiased justify-between">
      <div className="flex justify-center items-center space-x-1 border-0.1 border-slate-950 px-6 py-1 rounded-md
                      text-2xl bg-slate-800 font-semibold cursor-pointer ">
        @jnr.1914
      </div>

      <div className="flex space-x-3 font-semibold text-1xl">
        <div className="flex justify-center items-center space-x-1 border-0.1 border-zinc-900 px-4 rounded-md">
          <GoHome className="h-6 w-6" />
          <p>home</p>
        </div>

        <div className="flex justify-center items-center space-x-1 border-0.1 border-cyan-950 px-4 rounded-md">
          <PiProjectorScreenLight className="h-6 w-6"/>
          <p>Projects</p>
        </div>

        <div className="flex justify-center items-center space-x-1 border-0.1 border-cyan-950 px-4 rounded-md">
          <MdOutlineMarkEmailUnread className="h-6 w-6" />
          <p>Contact</p>
        </div>

      </div>
        </div>
    
    </div>
   </main>
  );
}
