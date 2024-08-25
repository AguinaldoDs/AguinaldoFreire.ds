'use client';

//Importa biblioteca externa
import { motion } from 'framer-motion';
import { useState } from 'react';

// Lista de opções de seleção
const list = ['Personalizar sistema', 'Acessibilidade'];

const ConfigOptions: React.FC = () => {
  // States
  const [validPersonlizeOption, setValuePersonlizeOption] = useState(false);

  // Função que será chamada no clique
  const handleClick = (item: string) => {
    if (item === "Personalizar sistema") {
      setValuePersonlizeOption(true);
    }
  };

  return (
      <motion.div
        className="flex flex-col h-max bg-crowshead-900 p-4 rounded-md mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {list.map((item, index) => (
          <motion.div
            key={index}
            className="text-white mt-2 cursor-pointer"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            onClick={() => handleClick(item)}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
  );
};


// Return to PersonalizeOption


const returnPersonalizeWindow: React.FC = () => {
  return(
    <div>
        div para personalizar o contexto da janela!
    </div>
  );
};







export default ConfigOptions;
