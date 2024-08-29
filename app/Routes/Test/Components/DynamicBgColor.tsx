import styled, { keyframes } from "styled-components";

// Animação de fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define o componente DynamicBackground com animação e transição
const DynamicBackground = styled.main`
  background-color: ${(props) => props.$bgColor || '#534130'};
  color: ${(props) => props.$textColor || '#f8fafc'};
  transition: background-color 0.2s ease; /* Transição suave para a cor de fundo */
  animation: ${fadeIn} 0.1s ease-out; /* Animação de fade-in */
  /* Outras propriedades de estilo podem ser adicionadas aqui */
`;

export default DynamicBackground;
