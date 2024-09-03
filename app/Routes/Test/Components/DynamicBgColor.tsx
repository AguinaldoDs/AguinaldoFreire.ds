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
  background-color: ${(props) => props.$bgColor || 'black'};
  color: ${(props) => props.$textColor || '#529552'};
  transition: background-color 0.2s ease; /* Transição suave para a cor de fundo */
  animation: ${fadeIn} 0.1s ease-out; /* Animação de fade-in */
  /* Outras propriedades de estilo podem ser adicionadas aqui */

   #PrincipalColor {
    color: ${(props) => props.$h1Color || 'white'};
  }

`;

export default DynamicBackground;
