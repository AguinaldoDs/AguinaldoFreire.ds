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

  #fistInterface {
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  transition: background-color 0.2s ease;
  animation: ${fadeIn} 0.1s ease-out;}

  #PrincipalColorFI {
    color: ${(props) => props.$h1Color || 'white'};
  }

  #scrollPage {
      background-color: ${(props) => props.$h1Color};
  }

  #icon {
    border-color: ${(props) => props.$h1Color};
    color: ${(props) => props.$h1Color};
  }
 

`;


export default DynamicBackground;
