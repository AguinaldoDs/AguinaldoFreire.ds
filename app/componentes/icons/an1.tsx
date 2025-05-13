'use client'

import { 
  FaNodeJs, FaReact, FaGitAlt, 
  FaAws, FaDocker, FaServer, 
  FaDatabase, FaCodeBranch, FaTasks,
  FaTrello, FaUsers, FaTools
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss } from 'react-icons/si';

type Language = "en" | "es" | "pt";

interface Labels {
  NodeJS: string;
  React: string;
  NextJS: string;
  TypeScript: string;
  JavaScript: string;
  TailwindCSS: string;
  Git: string;
  Scrum: string;
  DevOps: string;
  Backend: string;
  Frontend: string;
  FullStack: string;
  Database: string;
  Agile: string;
  Teamwork: string;
  APIRest: string;
  Microservices: string;
  Cloud: string;
  Testing: string;
  CI_CD: string;
}

interface WebDevStacksProps {
  language: Language;
}

export default function WebDevStacks({ language }: WebDevStacksProps) {
  const labels: Record<Language, Labels> = {
    pt: {
      NodeJS: "Node.js",
      React: "React",
      NextJS: "Next.js",
      TypeScript: "TypeScript",
      JavaScript: "JavaScript",
      TailwindCSS: "Tailwind CSS",
      Git: "Git",
      Scrum: "Scrum",
      DevOps: "DevOps",
      Backend: "Backend",
      Frontend: "Frontend",
      FullStack: "Full Stack",
      Database: "Banco de Dados",
      Agile: "Metodologias Ágeis",
      Teamwork: "Trabalho em Equipe",
      APIRest: "API REST",
      Microservices: "Microsserviços",
      Cloud: "Cloud Computing",
      Testing: "Testes",
      CI_CD: "CI/CD"
    },
    en: {
      NodeJS: "Node.js",
      React: "React",
      NextJS: "Next.js",
      TypeScript: "TypeScript",
      JavaScript: "JavaScript",
      TailwindCSS: "Tailwind CSS",
      Git: "Git",
      Scrum: "Scrum",
      DevOps: "DevOps",
      Backend: "Backend",
      Frontend: "Frontend",
      FullStack: "Full Stack",
      Database: "Database",
      Agile: "Agile Methodologies",
      Teamwork: "Teamwork",
      APIRest: "REST API",
      Microservices: "Microservices",
      Cloud: "Cloud Computing",
      Testing: "Testing",
      CI_CD: "CI/CD"
    },
    es: {
      NodeJS: "Node.js",
      React: "React",
      NextJS: "Next.js",
      TypeScript: "TypeScript",
      JavaScript: "JavaScript",
      TailwindCSS: "Tailwind CSS",
      Git: "Git",
      Scrum: "Scrum",
      DevOps: "DevOps",
      Backend: "Backend",
      Frontend: "Frontend",
      FullStack: "Full Stack",
      Database: "Base de Datos",
      Agile: "Metodologías Ágiles",
      Teamwork: "Trabajo en Equipo",
      APIRest: "API REST",
      Microservices: "Microservicios",
      Cloud: "Computación en la Nube",
      Testing: "Pruebas",
      CI_CD: "CI/CD"
    }
  };

  const stacksData = [
    { icon: <FaNodeJs size={25} />, label: labels[language].NodeJS },
    { icon: <FaReact size={25} />, label: labels[language].React },
    { icon: <SiNextdotjs size={25} />, label: labels[language].NextJS },
    { icon: <SiTypescript size={25} />, label: labels[language].TypeScript },
    { icon: <SiJavascript size={25} />, label: labels[language].JavaScript },
    { icon: <SiTailwindcss size={25} />, label: labels[language].TailwindCSS },
    { icon: <FaGitAlt size={25} />, label: labels[language].Git },
    { icon: <FaTasks size={25} />, label: labels[language].Scrum },
    { icon: <FaTools size={25} />, label: labels[language].DevOps },
    { icon: <FaServer size={25} />, label: labels[language].Backend },
    { icon: <FaReact size={25} />, label: labels[language].Frontend },
    { icon: <FaCodeBranch size={25} />, label: labels[language].FullStack },
    { icon: <FaDatabase size={25} />, label: labels[language].Database },
    { icon: <FaTrello size={25} />, label: labels[language].Agile },
    { icon: <FaUsers size={25} />, label: labels[language].Teamwork },
    { icon: <FaNodeJs size={25} />, label: labels[language].APIRest },
    { icon: <FaDocker size={25} />, label: labels[language].Microservices },
    { icon: <FaAws size={25} />, label: labels[language].Cloud },
    { icon: <FaTools size={25} />, label: labels[language].Testing },
    { icon: <FaCodeBranch size={25} />, label: labels[language].CI_CD }
  ];

  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-2 text-xs mt-2 font-extralight">
      {stacksData.map((item, index) => (
        <div 
          key={index} 
          className="flex items-center border-0.1 rounded-2xl px-2 py-1 border-gray-900
          cursor-pointer hover:bg-slate-900 transition-all font-extralight"
        >
          {item.icon}
          <div className='ml-2'>{item.label}</div>
        </div>
      ))}
    </div>
  );
}