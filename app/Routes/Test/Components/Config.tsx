'use client';

import { motion } from 'framer-motion';

const list = ['Personalizar sistema', 'Acessibilidade'];

const ConfigOptions: React.FC = () => {
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
          className="text-white mb-2"
          initial={{ opacity: 0, y: 50 }} // Início da animação fora da tela
          animate={{ opacity: 1, y: 0 }} // Animação para a posição final
          transition={{
            duration: 0.7,
            delay: index * 0.2,
          }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ConfigOptions;
