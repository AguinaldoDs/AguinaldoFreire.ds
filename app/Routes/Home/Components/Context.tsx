import React, { createContext, useContext, useState, ReactNode } from 'react';

// Crie o contexto
const ConfigOptionsContext = createContext<any>(null);

// Provedor do contexto
export const ConfigOptionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [validPersonlizeOption, setValuePersonlizeOption] = useState(false);

  return (
    <ConfigOptionsContext.Provider value={{ validPersonlizeOption, setValuePersonlizeOption }}>
      {children}
    </ConfigOptionsContext.Provider>
  );
};

// Hook para usar o contexto
export const useConfigOptions = () => {
  return useContext(ConfigOptionsContext);
};
