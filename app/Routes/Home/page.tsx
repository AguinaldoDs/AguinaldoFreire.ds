"use client";

// Bibliotecas React
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsGear } from "react-icons/bs";
import { useState, useEffect, useRef, RefObject } from "react";

// Biblioteca externa
import { motion, AnimatePresence } from "framer-motion";
import DynamicBackground from "./Components/DynamicBgColor";

const Home: React.FC = () => {
  // Lista de opções de seleção
  const list = ["Personalizar sistema", "Acessibilidade", "Idioma"];

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
    if (key == null || key < 1 || key > 5) {
      console.log("Key inválida");
    } else {
      const targetRef = targetRefs[key - 1].current;
      targetRef?.scrollIntoView({ behavior: "smooth" });
      console.log("está é a key:", key);
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
          <div className="fixed flex gap-20 w-max ml-9 mt-10 p-2 justify-between items-center rounded-t-lg rounded-r-lg">
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
              {/* <FaLinkedin size={40} /> */}
            </div>
            <div
              id="icon"
              className="cursor-pointer border-solid border-b-[1px] p-1"
              onClick={() => {
                window.open("https://github.com/AguinaldoDs", "_blank");
              }}
            >
              <FaGithub size={40} />
            </div>
            <div
              id="icon"
              className="cursor-pointer border-solid border-b-[1px] p-1"
              onClick={() => {
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=aguinaldofreire.ds@gmail.com",
                  "_blank"
                );
              }}
            >
              {/* <SiGmail size={40} /> */}
            </div>
          </div>

          <motion.div
            id="PrincipalColorFI"
            className="fixed cursor-pointer right-0 mr-9 mt-10 p-3 text-center"
            animate={{ rotate: validConfig ? 180 : 0 }}
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
          <motion.div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1000]">
            <motion.div className="p-5 border-solid border-[1px] bg-woodsmoke-950 w-[500px] h-[300px] rounded-md font-light text-sm pointer-events-auto">
              <h3>Selecione o conjunto de cores do novo tema:</h3>
              <div>
                <span>Azul/Rosa:</span>
                <div
                  className="flex cursor-pointer"
                  onClick={() => {
                    handleColorTheme("#f6a168");
                    handleColorTextTheme("#d2d2d2");
                    handleColorTextH1Theme("#ef8e7d");
                  }}
                >
                  <motion.div className="bg-Personalize1_blue w-5 h-5">
                    {" "}
                    ‎{" "}
                  </motion.div>
                  <motion.div className="bg-Personalize1_pink w-5 h-5">
                    {" "}
                    ‎{" "}
                  </motion.div>
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
            <h1 className="text-8xl" id="PrincipalColor">
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
          id="PrincipalColor"
        >
          <motion.span className="cursor-pointer">Profile</motion.span>
          <span className="cursor-pointer">About me</span>
          <span className="cursor-pointer">Jobs & Feedback</span>
        </motion.div>
      </motion.div>

      {/* Profile */}
      <div>
        <motion.div
          ref={targetRefs[1]}
          className="flex justify-evenly h-dvh items-center bg-red-500"
          whileInView={() => {
            handleValidKeyInView(2);
          }}
          viewport={{ once: false, amount: 0.7 }}
        >
          {/* <div
          className="bg-blue-700"
          
          >
          testando
          </div> */}
        </motion.div>
      </div>
    </DynamicBackground>
  );
};

export default Home;

// a
