"use client";

// Bibliotecas React
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsGear } from "react-icons/bs";
import { useState, useEffect, useRef, RefObject } from "react";
import Image from 'next/image';

// Biblioteca externa
import { motion, AnimatePresence } from "framer-motion";
import DynamicBackground from "./Components/DynamicBgColor";

const Home: React.FC = () => {
  // Lista de opções de seleção
  const list = ["Personalizar sistema", "Acessibilidade", "Idioma"];
  const p_Profile = [
    "Analista de Dados e MIS com mais de dois anos de experiência em manipulação e análise de dados.",
    "Especialista em Python, MSSQL, Business Intelligence (BI) e R.",
    "Além de desenvolvedor Web, dominando React Next, Node.js e Tailwind."
  ];


  // States
  const [validConfig, setValidConfig] = useState(false);
  const [validPersonlizeOption, setValuePersonlizeOption] = useState(false);

  // Cores e temas
  const [colorTheme, setColorTheme] = useState("black");
  const [colorTextTheme, setColorTextTheme] = useState("white");
  const [colorH1Theme, setH1ColorTheme] = useState("#529552");
  const [validKeyinView, setValidKeyinView] = useState(0);

  // Manipuladores
  const targetRefs: RefObject<HTMLDivElement>[] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // Função para rolar até o elemento
  const scrollToDiv = (key: number) => {
    if (key == null || key < 0 || key > 5) {
      console.log("Key inválida");
    } else {
      const targetRef = targetRefs[key - 1].current;
      targetRef?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleValidKeyInView = (key: number) => {
    setValidKeyinView(key);
  };

  const handleValidConfig = () => {
    setValidConfig((value) => !value);
  };

  const handleClick = (item: string) => {
    if (item === "Personalizar sistema") {
      setValuePersonlizeOption((value) => !value);
    }
  };

  const handleColorTheme = (value: string) => {
    setColorTheme(value === colorTheme ? "black" : value);
  };

  const handleColorTextTheme = (value: string) => {
    setColorTextTheme(value === colorTextTheme ? "white" : value);
  };

  const handleColorTextH1Theme = (value: string) => {
    setH1ColorTheme(value === colorH1Theme ? "#529552" : value);
  };

  return (
    <DynamicBackground
      className="flex flex-col w-full h-[6000px] overflow-y-auto"
      $bgColor={colorTheme}
      $textColor={colorTextTheme}
      $h1Color={colorH1Theme}
    >
      <title>I'm seeing you! 👀</title>

      {/* CONTACT ME & CONFIG */}
      <div className="flex items-center select-none ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex relative font-light h-auto rounded-lg gap-3 border-solid bottom-1
                     justify-start w-full"
        >
          <div className="fixed flex gap-20 w-max ml-9 mt-10 p-2 justify-between items-center rounded-t-lg 
                          rounded-r-lg">
            <div
              id="icon"
              className="cursor-pointer border-solid border-b-[1px] p-1"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/aguinaldo-freire-95bb5a181/",
                  "_blank"
                );
              }}
            >
              <FaLinkedin size={40} />
            </div>
            <div
              id="icon"
              className="cursor-pointer border-solid border-b-[1px] p-1"
              onClick={() => {
                window.open("https://github.com/AguinaldoDs",
                  "_blank");
              }}
            >
              <FaGithub size={40} />
            </div>
            <div
              id="icon"
              className="cursor-pointer border-solid border-b-[1px] p-1"
              onClick={() => {
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=aguinaldofreire.ds@gmail.com",
                  "_blank"
                );
              }}
            >
              <SiGmail size={40} />
            </div>
          </div>

          <motion.div
            id="PrincipalColorFI"
            className="fixed cursor-pointer right-0 mr-9 mt-10 p-3 text-center"
            animate={{ rotate: validConfig ? 90 : 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleValidConfig}
          >
            <BsGear size={40} />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {validConfig && (
            <motion.div
              id="UpOptionConfigs"
              className="fixed flex-col text-center right-0 mr-24 mt-[10%] p-2 w-[20%] bg-woodsmoke-950 rounded-lg font-extralight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {list.map((item, index) => (
                <motion.div
                  key={index}
                  id="icon"
                  className="mt-2 cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {validPersonlizeOption && (
          <motion.div className="fixed inset-0 flex items-center justify-center
                                 pointer-events-none z-[1000]">
            <motion.div className="w-[500px] h-auto bg-opacity-5 text-slate-50
                                   pointer-events-auto rounded-xl font-light text-sm
                                 bg-white/10 backdrop-blur"
              id="">
              <motion.div

                className=" w-full rounded-t-xl"
                id="scrollPage"
              >
                <button
                  className="flex p-3 text-white rounded-full h-full text-4xl
                       items-center justify-center ml-[85%]"

                  aria-label="Fechar"
                  onClick={() => { setValuePersonlizeOption(false) }}
                >
                  &#10005; {/* Código HTML para o símbolo "X" */}
                </button>
              </motion.div>

              {/* primeira cor */}
              <div
                className="h-full p-14">
                <h3
                  className="text-2xl"
                >Selecione o conjunto de cores para o novo tema:</h3>
                <div
                  className=" mt-3"
                >
                  <span>Verde/Preto (Padrão):</span>
                  <div
                    className="flex cursor-pointer w-max justify-center items-center"
                    onClick={() => {
                      handleColorTheme("Black");
                      handleColorTextTheme("White");
                      handleColorTextH1Theme("#529552");
                    }}
                  >
                    <motion.div className="bg-black w-5 h-5 rounded-full">
                      {" "}{" "}
                    </motion.div>
                    <motion.div className="bg-[#529552] w-5 h-5 rounded-full">
                      {" "}{" "}
                    </motion.div>
                  </div>
                </div>

                {/* segunda cor */}
                <div
                  className=" mt-3"
                >
                  <span>Cinza/Gelo:</span>
                  <div
                    className="flex cursor-pointer w-max justify-center items-center"
                    onClick={() => {
                      handleColorTheme("#1B1B1E");
                      handleColorTextH1Theme("#6C757D");
                      handleColorTextTheme("#CED4DA");
                    }}
                  >
                    <motion.div className="bg-[#1B1B1E] w-5 h-5 rounded-full">
                      {" "}{" "}
                    </motion.div>
                    <motion.div className="bg-[#CED4DA] w-5 h-5 rounded-full">
                      {" "}{" "}
                    </motion.div>
                  </div>
                </div>
                {/* Terceira cor */}
                <div
                  className=" mt-3"
                >
                  <span>Areia/Bege:</span>
                  <div
                    className="flex cursor-pointer w-max justify-center items-center"
                    onClick={() => {
                      handleColorTheme("#8D6748");
                      handleColorTextH1Theme("#D9C3A1");
                      handleColorTextTheme("#C4A69F");
                    }}
                  >
                    <motion.div className="bg-[#8D6748] w-5 h-5 rounded-full">
                      {" "}{" "}
                    </motion.div>
                    <motion.div className="bg-[#C4A69F] w-5 h-5 rounded-full">
                      {" "}{" "}
                    </motion.div>
                  </div>
                </div>

              </div>


            </motion.div>
          </motion.div>
        )}
      </div>

      {/* ref - header: map position */}
      <div className="fixed flex-col right-0 bottom-0 mb-9 mr-14">
        {[1, 2, 3, 4, 5].map((number, index) => (
          <p
            key={index}
            id="scrollPage"
            className="w-3 h-3 rounded-full mt-2 cursor-pointer"
            onClick={() => scrollToDiv(number)}
            style={{
              backgroundColor:
                validKeyinView === number ? "white" : colorH1Theme,
            }}
          ></p>
        ))}
      </div>

      {/* ref.1 (aclopa welcome e opções ) */}
      <motion.div
        className="flex justify-evenly h-dvh items-center "
        id="fistInterface"
        ref={targetRefs[0]}
      >
        {/* Welcome */}
        <motion.div className="flex p-10 w-max h-[50%] font-extralight rounded-lg bg-woodsmoke-950">
          <motion.div
            initial={{ y: "20%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-10%" }}
            transition={{ duration: 0.7 }}
            className="p-10"
            whileInView={() => handleValidKeyInView(1)}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h1 className="text-8xl" id="PrincipalColorFI">
              Welcome!
            </h1>
            <p className="mt-5">I'm Aguinaldo,</p>
            <span className="mt-5">
              A 23yo Data Analyst and Scientist in Brazil🇧🇷
            </span>
          </motion.div>
        </motion.div>

        {/* Menu */}
        <motion.div
          className="flex flex-col h-[50%] w-[600px] gap-10 font-light justify-center items-center bg-woodsmoke-950 rounded-lg underline underline-offset-8 decoration-white decoration-double"

        >
          <motion.span className="cursor-pointer"
            onClick={() => scrollToDiv(2)}
          >Profile</motion.span>
          <span className="cursor-pointer">About me</span>
          <span className="cursor-pointer">Jobs & Feedback</span>
        </motion.div>
      </motion.div>

      {/* Profile */}
      <motion.div
        id="fistInterface"
        ref={targetRefs[1]}
        className="flex justify-evenly h-dvh items-center"
        whileInView={() => {
          handleValidKeyInView(2);
        }}
        viewport={{ once: false, amount: 0.7 }}
      >
      <div className="flex  w-full justify-evenly">
        <motion.div
          className="p-5 bg-slate-50 w-60 h-60 relative overflow-hidden cursor-pointer rounded-lg"
          whileHover={{ rotate: -20 }}
        >
          <Image
            src="/3x4.png"
            alt="Descrição da imagem"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 z-50"
          />
        </motion.div>

        

        <motion.div className=" flex flex-col justify-center items-start">
          {p_Profile.map((p,i)=>(
              <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {p}
            </motion.p>
          ))}
        </motion.div>
      </div>
      </motion.div>
  {/* ABOUT ME */}
      <motion.div
        ref={targetRefs[2]}
        className="flex justify-evenly h-dvh items-center bg-red-400"
        whileInView={() => {handleValidKeyInView(3)}}
        viewport={{ once: false, amount: 0.7 }}
       >
        <div className="flex w-full ">
          <div className="flex flex-col justify-center items-start font-light gap-10">
            <div className="flex gap-10">
              <div className="flex justify-center items-center">
                <Image
                  src="/Images/sql.svg"
                  alt="Descrição da imagem"
                  width={60}
                  height={60}/>
              </div>
              <div className="">
                <p>Em meados 2022 iniciei minha carreira como Analista de Dados</p>
                <p>em uma empresa no ramo de telecobrança, onde desenvolvi grandes </p>
                <p>habilidades com MSSQL,na criação de procedures, triggers,</p>
                <p>views e trabalhos agendados.</p>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex gap-10">
                <div className="flex justify-center items-center">
                    <Image
                      src="/Images/bi.svg"
                      alt="Descrição da imagem"
                      width={60}
                      height={60}/>
                  </div>
                <div>
                  <p>Além de Power BI e Tableu para montagem de dashboards e apresentar</p> 
                  <p>informações visuais que auxiliam na tomada de decisões.</p>
                  <p>Em ambas as ferramentas, trabalhei com a automação de relatórios,</p>
                  <p>agendamento de atualizações e aplicação de filtros interativos para</p>
                  <p>fornecer uma visão clara e personalizada dos dados. Esses processos não</p>
                  <p>apenas melhoraram a eficiência das análises, mas também ajudaram a empresa</p>
                  <p>a responder rapidamente a mudanças e a tomar decisões baseadas em dados.</p>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex gap-10">
                  <div className="flex justify-center items-center">
                      <Image
                        src="/Images/py2.svg"
                        alt="Descrição da imagem"
                        width={60}
                        height={60}/>
                    </div>
                  <div>
                    <p>Outra grande ferramenta com a qual criei domínio foi a linguagem Python,</p>
                    <p>permitindo agilizar importações de informações e automatizar um processo manual</p>
                    <p>que era feito na empresa, economizando minutos importantes do meu dia.</p>
                  </div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex gap-10">
                    <div className="flex justify-center items-center">
                        <Image
                          src="/Images/trf.svg"
                          alt="Descrição da imagem"
                          width={60}
                          height={60}/>
                      </div>
                    <div>
                      <p>Meu maior desafio nessa empresa foi a implantação de um novo cliente do zero.</p>
                      <p>Fiz a modelagem das ETLs, criação das rotinas e as visões para acompanhamento dos </p>
                      <p>times operacionais.</p>
                      <p>Recebi grandes responsabilidades e consegui fazer todas as entregas usando o método ágil</p>
                      <p>para tratar os graus de prioridades.</p>
                    </div>
              </div>
            </div>
          {/* End here */}
          </div>
{/* IMAGENS AQUI PART 2 TELA  */}
      

          <div> testando </div>

        </div>
      </motion.div>
    </DynamicBackground>
  );
};

export default Home;

