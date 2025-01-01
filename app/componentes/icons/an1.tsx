import { 
  FaPython, FaDatabase, FaChartBar, FaCloud, FaGithub, FaRobot, FaBrain, FaCog, 
  FaCloudUploadAlt, FaUsers, FaSearch, FaFilter, FaTasks, FaTable, FaTrello, 
  FaFileAlt, FaInfoCircle, FaCodeBranch, FaArrowCircleRight,
  FaDocker, FaServer, FaAws, FaCloudSun, FaTools
} from 'react-icons/fa';

export default function An1({ language }) {
  // Mapeamento de labels por idioma
  const labels = {
    pt: {
      Python: "Python",
      BancoDeDados: "Banco de Dados",
      GraficoDeBarras: "Gráfico de Barras",
      Nuvem: "Nuvem",
      GitHub: "GitHub",
      Robo: "Robô",
      Cerebro: "Cérebro",
      Ferramentas: "Ferramentas",
      UploadParaNuvem: "Upload para Nuvem",
      Equipe: "Equipe",
      Pesquisa: "Pesquisa",
      Filtro: "Filtro",
      Tarefas: "Tarefas",
      Tabela: "Tabela",
      Trello: "Trello",
      Relatorio: "Relatório",
      Informacao: "Informação",
      BranchDeCodigo: "Branch de Código",
      MovimentoDeDados: "Movimento de Dados",
      Docker: "Docker",
      Servidor: "Servidor",
      AWS: "AWS (Amazon Web Services)",
      InfraestruturaNaNuvem: "Infraestrutura na Nuvem",
      FerramentasDeInfraestrutura: "Ferramentas de Infraestrutura",
    },
    en: {
      Python: "Python",
      BancoDeDados: "Database",
      GraficoDeBarras: "Bar Chart",
      Nuvem: "Cloud",
      GitHub: "GitHub",
      Robo: "Robot",
      Cerebro: "Brain",
      Ferramentas: "Tools",
      UploadParaNuvem: "Upload to Cloud",
      Equipe: "Team",
      Pesquisa: "Search",
      Filtro: "Filter",
      Tarefas: "Tasks",
      Tabela: "Table",
      Trello: "Trello",
      Relatorio: "Report",
      Informacao: "Information",
      BranchDeCodigo: "Code Branch",
      MovimentoDeDados: "Data Movement",
      Docker: "Docker",
      Servidor: "Server",
      AWS: "AWS (Amazon Web Services)",
      InfraestruturaNaNuvem: "Cloud Infrastructure",
      FerramentasDeInfraestrutura: "Infrastructure Tools",
    },
    es: {
      Python: "Python",
      BancoDeDados: "Base de Datos",
      GraficoDeBarras: "Gráfico de Barras",
      Nuvem: "Nube",
      GitHub: "GitHub",
      Robo: "Robot",
      Cerebro: "Cerebro",
      Ferramentas: "Herramientas",
      UploadParaNuvem: "Subir a la Nube",
      Equipe: "Equipo",
      Pesquisa: "Investigación",
      Filtro: "Filtro",
      Tarefas: "Tareas",
      Tabela: "Tabla",
      Trello: "Trello",
      Relatorio: "Informe",
      Informacao: "Información",
      BranchDeCodigo: "Rama de Código",
      MovimentoDeDados: "Movimiento de Datos",
      Docker: "Docker",
      Servidor: "Servidor",
      AWS: "AWS (Amazon Web Services)",
      InfraestruturaNaNuvem: "Infraestructura en la Nube",
      FerramentasDeInfraestrutura: "Herramientas de Infraestructura",
    }
  };

  // Array de objetos com os ícones e os textos, agora usando o idioma selecionado
  const iconsData = [
    { icon: <FaPython size={25} />, label: labels[language].Python },
    { icon: <FaDatabase size={25} />, label: labels[language].BancoDeDados },
    { icon: <FaChartBar size={25} />, label: labels[language].GraficoDeBarras },
    { icon: <FaCloud size={25} />, label: labels[language].Nuvem },
    { icon: <FaGithub size={25} />, label: labels[language].GitHub },
    { icon: <FaRobot size={25} />, label: labels[language].Robo },
    { icon: <FaBrain size={25} />, label: labels[language].Cerebro },
    { icon: <FaCog size={25} />, label: labels[language].Ferramentas },
    { icon: <FaCloudUploadAlt size={25} />, label: labels[language].UploadParaNuvem },
    { icon: <FaUsers size={25} />, label: labels[language].Equipe },
    { icon: <FaSearch size={25} />, label: labels[language].Pesquisa },
    { icon: <FaFilter size={25} />, label: labels[language].Filtro },
    { icon: <FaTasks size={25} />, label: labels[language].Tarefas },
    { icon: <FaTable size={25} />, label: labels[language].Tabela },
    { icon: <FaTrello size={25} />, label: labels[language].Trello },
    { icon: <FaFileAlt size={25} />, label: labels[language].Relatorio },
    { icon: <FaInfoCircle size={25} />, label: labels[language].Informacao },
    { icon: <FaCodeBranch size={25} />, label: labels[language].BranchDeCodigo },
    { icon: <FaArrowCircleRight size={25} />, label: labels[language].MovimentoDeDados },

    // Ícones de infraestrutura
    { icon: <FaDocker size={25} />, label: labels[language].Docker },
    { icon: <FaServer size={25} />, label: labels[language].Servidor },
    { icon: <FaAws size={25} />, label: labels[language].AWS },
    { icon: <FaCloudSun size={25} />, label: labels[language].InfraestruturaNaNuvem },
    { icon: <FaTools size={25} />, label: labels[language].FerramentasDeInfraestrutura },
  ];

  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-2 text-xs mt-2 font-extralight">
      {/* Mapeia o array e gera os itens dinamicamente */}
      {iconsData.map((item, index) => (
        <div key={index} className="flex items-center border-0.1 rounded-2xl px-2 py-1 border-gray-900
          cursor-pointer hover:bg-slate-900 transition-all font-extralight">
          {item.icon}
          <div className='ml-2'>{item.label}</div>
        </div>
      ))}
    </div>
  );
}
