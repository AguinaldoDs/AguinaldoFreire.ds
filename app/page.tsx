'use client'

// Extern framer
import { motion } from 'framer-motion'

// Native framer
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";



//Components
import An1 from './componentes/icons/an1';

// Icons
import { GoHome } from "react-icons/go";
import { PiProjectorScreenLight } from "react-icons/pi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaRegCalendarMinus } from "react-icons/fa6";
import { GoGitMerge } from "react-icons/go";

//Components
import PercentageChart from './componentes/graphic/line';
import BarChart from './componentes/graphic/other';
import LineChart from './componentes/graphic/line3';
import LineChart_4 from './componentes/graphic/line4';
import LineChart_5 from './componentes/graphic/line5';

export default function Home() {
  // States
  const [language, setLanguage] = useState('en');
  const [menu, setMenu] = useState(false);
  const handleSetMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  const [graphicView, setGraphicView] = useState(0)
  const handleSetGraphichView = (id: number) => {
    
      setGraphicView(0);
      setGraphicView(id);
      console.log(id);
  }
  

  const router = useRouter();

  const handleScroll = (param: string) => {
    router.push(`#${param}`);
  };
  

  return (
    <main className="flex w-full h-full justify-center
                    bg-slate-950 text-slate-100 font-extralight">
      <title>Welcome!</title>
      <div className=" mt-5 fixed flex w-[90%] max-w-[1280px] h-max rounded-md p-3 border border-gray-900 
                        justify-between backdrop-blur-md bg-opacity-70 z-50">

        <a
          href="https://www.instagram.com/jnr.1914/"
          target="_blank"
          rel="noopener noreferrer" >
          <div className="flex justify-center items-center space-x-1 px-6 py-1 rounded-md
                          text-2xl bg-slate-800 font-semibold cursor-pointer ">
            @jnr.1914
          </div>
        </a>


        <div className="flex space-x-3 font-semibold text-1xl select-none">
          <div className="flex justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 rounded-md
                            cursor-pointer hover:bg-slate-900 transition"
              onClick={()=>{handleScroll('home')}}>
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


      {/* bem bolado aqui */}
      <div className="flex justify-center max-w-[1280px] py-5 select-none text-slate-200">
        <div className="flex justify-center flex-col w-[400px] h-max rounded-xl px-7 py-3 sticky top-32 mt-32 border-0.1 border-gray-900 text-slate-300">
          <h1 className="font-medium text-xl">Aguinaldo Freire</h1>
          <div className="mt-5 space-y-3">


            {language === 'pt' && (
              <>
                <p>👋🏻 Olá, sou o Aguinaldo, Analista de Dados.</p>
                <p>
                  Trabalho com análise de dados usando <strong>Python</strong>, <strong>SQL</strong>, e
                  ferramentas de BI como <strong>Power BI</strong> e <strong>Tableau</strong>.
                </p>
                <p>
                  Tenho experiência em <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong> e em Cloud com <strong>AWS</strong> e <strong>GCP</strong>.
                </p>
              </>
            )}

            {language === 'en' && (
              <>
                <p>👋🏻 Hello, I'm Aguinaldo, a Data Analyst.</p>
                <p> I work with data analysis using <strong>Python</strong>, <strong>SQL</strong>, and BI tools like <strong>Power BI</strong> and <strong>Tableau</strong>.</p>
                <p> I have experience with <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, and Cloud with <strong>AWS</strong> and <strong>GCP</strong>.</p>
              </>
            )}

            {language === 'es' && (
              <><p>👋🏻 Hola, soy Aguinaldo, Analista de Datos.</p>
                <p>Trabajo con análisis de datos usando <strong>Python</strong>, <strong>SQL</strong>, y herramientas de BI como <strong>Power BI</strong> y <strong>Tableau</strong>.</p>
                <p>Tengo experiencia con <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong> y en la nube con <strong>AWS</strong> y <strong>GCP</strong>.
                </p>
              </>
            )}
          </div>

          <div className='flex w-full space-x-2 mt-8'>
            <div className="flex w-full justify-center items-center space-x-1 border-0.1 border-gray-900 px-4
              cursor-pointer p-2 rounded-full hover:bg-slate-900 transition text-sm"
            >
              <FaGithub className='w-6 h-6' />
              <a
                href="https://github.com/AguinaldoDs"
                target="_blank"
                rel="noopener noreferrer" >
                <p>GitHub</p>
              </a>
            </div>


            <div className="flex w-full justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 
              cursor-pointer p-2 rounded-full hover:bg-slate-900 transition">
              <HiOutlineNewspaper className='w-6 h-6' />
              <p className='text-sm'>Resumo</p>
            </div>

            <div className="flex w-full justify-center items-center space-x-1 border-0.1 border-gray-900 px-4 
              cursor-pointer p-2 rounded-full hover:bg-slate-900 transition">
              <FaRegCalendarMinus className='w-6 h-6' />
              <p className='text-sm'>Agenda</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col px-3 mt-32 text-4xl font-thin '>
          <div className='flex text-4xl'
          >
            Inovando com soluções digitais para Dados.
          </div>
          <div className='text-lg font-normal py-1 pb-4 opacity-30 border-b-0.1'>
            Analista & Arquiteto de Dados
          </div>

          <div className='flex w-full text-lg justify-evenly font-normal text-slate-200 mt-4' >
            <div className=''>
              <div>São Paulo, Brasil</div>
              <p className='text-sm text-slate-500'>localização</p>
            </div>

            <div className=''>
              <div>+3 anos</div>
              <p className='text-sm text-slate-500'>Experiência</p>
            </div>

            <div className=''>
              <div>+15 Projetos</div>
              <p className='text-sm text-slate-500'>Projetos & serviços</p>
            </div>
          </div>

          <div className='mt-10 text-2xl font-normal'>
            <div className='px-2'>
              Experiencias
            </div>
            <div>
              <An1 />
            </div>
            <div className='mt-10 px-2'>
              Ultimos Trabalhos
            </div>

            <div className='font-extralight space-y-4 mt-2 w-full'
            onMouseLeave={() => { handleSetGraphichView(0) }}>
              <motion.div
                className='border-0.1 rounded-2xl p-6 pb-20 border-gray-900 cursor-pointer hover:bg-slate-900 transition-all'
                onMouseEnter={() => { handleSetGraphichView(1) }}
                initial={{ opacity: 0, scale: 0.1 }}  // Inicializa com um pequeno scale
                animate={{ opacity: 1, scale: graphicView === 1 ? 1.05 : 1 }}  // Aumenta ou diminui o scale conforme a condição
                transition={{ duration: 0.4, ease: "easeInOut" }}  // Transição suave
              >
                <h1 className='flex text-xl font-normal gap-1'>Previsão de Vendas <GoGitMerge /></h1>
                <p className='text-sm'>Ferramentas: Python, ARIMA, XGBoost</p>
                <p className='text-sm'>Resultado: Aumento de 15% na precisão das previsões, otimizando estoque e custos.</p>

                {graphicView === 1 ? (
                  <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 1, ease: "easeIn" }}
                  >
                    <PercentageChart />
                  </motion.div>) : null}
              </motion.div>

              <motion.div
                className='border-0.1 rounded-2xl p-6 pb-20 border-gray-900 cursor-pointer hover:bg-slate-900 transition-all'
                onMouseEnter={() => { handleSetGraphichView(2) }}
                initial={{ opacity: 0, scale: 1 }}  // Inicializa com um pequeno scale
                animate={{ opacity: 1, scale: graphicView === 2 ? 1.05 : 1 }}   // Aumenta ou diminui o scale conforme a condição
                transition={{ duration: 0.4, ease: "easeInOut" }}  // Transição suave
              >
                <h1 className='flex text-xl font-normal gap-1'>Segmentação de Mercado <GoGitMerge /></h1>
                <p className='text-sm'>Ferramentas: SQL, R, K-Means</p>
                <p className='text-sm'>Resultado: Identificação de 4 novos segmentos, aumento de 20% na taxa de conversão.</p>

                {graphicView === 2 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  >
                    <BarChart />
                  </motion.div>) : null}
              </motion.div>

              {/* Análise de Sentimento em Redes Sociais */}
              <motion.div
                className='border-0.1 rounded-2xl p-6 pb-20 border-gray-900 cursor-pointer hover:bg-slate-900 transition-all'
                onMouseEnter={() => { handleSetGraphichView(3) }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: graphicView === 3 ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h1 className='flex text-xl font-normal gap-1'>Análise de Sentimento em Redes Sociais <GoGitMerge /></h1>
                <p className='text-sm'>Ferramentas: Python, NLP, TensorFlow</p>
                <p className='text-sm'>Resultado: Resposta rápida a crises de imagem, mitigando impactos negativos.</p>
                {graphicView === 3 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  >
                    <LineChart />
                  </motion.div>) : null}
              </motion.div>

              {/* Otimização Logística com Big Data */}
              <motion.div
                className='border-0.1 rounded-2xl p-6 pb-20 border-gray-900 cursor-pointer hover:bg-slate-900 transition-all'
                onMouseEnter={() => { handleSetGraphichView(4) }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: graphicView === 4 ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >

                <h1 className='flex text-xl font-normal gap-1'>Otimização Logística com Big Data<GoGitMerge /></h1>
                <p className='text-sm'>Ferramentas: Hadoop, Spark, SQL</p>
                <p className='text-sm'>Resultado: Redução de 25% nos custos logísticos, melhoria na entrega e eficiência.</p>
                {graphicView === 4 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  >
                    <LineChart_4 />
                  </motion.div>) : null}
              </motion.div>

              {/* Análise de Risco de Crédito */}
              <motion.div
                className='border-0.1 rounded-2xl p-6 pb-20 border-gray-900 cursor-pointer hover:bg-slate-900 transition-all'
                onMouseEnter={() => { handleSetGraphichView(5) }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: graphicView === 5 ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >

                <h1 className='flex text-xl font-normal gap-1'>Análise de Risco de Crédito<GoGitMerge /></h1>
                <p className='text-sm'>Ferramentas: SAS, Machine Learning</p>
                <p className='text-sm'>Resultado: Redução de 12% na inadimplência com modelo preditivo assertivo.</p>
                {graphicView === 5 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  >
                    <LineChart_5 />
                  </motion.div>) : null}
              </motion.div>

            </div>

            <div className='mt-10 px-2'>
              Contato
            </div>
            <div
              className='border-0.1 rounded-2xl p-6 border-gray-900  hover:bg-slate-900
                text-sm flex '
            >
              A melhor maneira de entrar em contato comigo é através:

              <a
                href="mailto:Aguinaldofreire.ds@gmail.com?subject=Oportunidade%20de%20trabalho&body=Olá%2C%0A%0AGostaria%20de%20entrar%20em%20contato%20com%20você%20para%20discutir%20uma%20possível%20oportunidade%20de%20trabalho.%0A%0AGostaria%20de%20agendar%20uma%20conversa%20para%20falar%20mais%20sobre%20isso.%0A%0AAguardo%20seu%20retorno.%0A%0AAtenciosamente%2C%0A"
              >
                <div className='ml-1 text-green-200 underline cursor-pointer'>Aguinaldofreire.ds@gmail.com
                </div>
              </a>
            </div>

          </div>
          <div className='text-sm mt-10'>
            Contruido por Aguinaldo Freire • Feito com Next.js, TypeScript, Shadcn UI(Tailwind CSS) • Deployed em Vercel.
          </div>
        </div>

      </div>

    </main>
  );
}
