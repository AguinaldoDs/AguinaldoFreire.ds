
import { 
  FaPython, FaDatabase, FaChartBar, FaCloud, FaGithub, FaRobot, FaBrain, FaCog, 
  FaCloudUploadAlt, FaUsers, FaSearch, FaFilter, FaTasks, FaTable, FaTrello, 
  FaFileAlt, FaInfoCircle, FaCodeBranch, FaArrowCircleRight,
  FaDocker, FaServer, FaAws, FaCloudSun, FaTools
} from 'react-icons/fa';

  export default function An1() {
    // Array de objetos com os ícones e os textos
    const iconsData = [
      { icon: <FaPython size={25} />, label: "Python" },
      { icon: <FaDatabase size={25} />, label: "Banco de Dados" },
      { icon: <FaChartBar size={25} />, label: "Gráfico de Barras" },
      { icon: <FaCloud size={25} />, label: "Nuvem" },
      { icon: <FaGithub size={25} />, label: "GitHub" },
      { icon: <FaRobot size={25} />, label: "Robô" },
      { icon: <FaBrain size={25} />, label: "Cérebro" },
      { icon: <FaCog size={25} />, label: "Ferramentas" },
      { icon: <FaCloudUploadAlt size={25} />, label: "Upload para Nuvem" },
      { icon: <FaUsers size={25} />, label: "Equipe" },
      { icon: <FaSearch size={25} />, label: "Pesquisa" },
      { icon: <FaFilter size={25} />, label: "Filtro" },
      { icon: <FaTasks size={25} />, label: "Tarefas" },
      { icon: <FaTable size={25} />, label: "Tabela" },
      { icon: <FaTrello size={25} />, label: "Trello" },
      { icon: <FaFileAlt size={25} />, label: "Relatório" },
      { icon: <FaInfoCircle size={25} />, label: "Informação" },
      { icon: <FaCodeBranch size={25} />, label: "Branch de Código" },
      { icon: <FaArrowCircleRight size={25} />, label: "Movimento de Dados" },
  
      // Ícones de infraestrutura
      { icon: <FaDocker size={25} />, label: "Docker" },
      { icon: <FaServer size={25} />, label: "Servidor" },
      { icon: <FaAws size={25} />, label: "AWS (Amazon Web Services)" },
      { icon: <FaCloudSun size={25} />, label: "Infraestrutura na Nuvem" },
      { icon: <FaTools size={25} />, label: "Ferramentas de Infraestrutura" },
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
  