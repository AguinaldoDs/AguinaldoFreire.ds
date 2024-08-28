import styled from "styled-components";

// Define o componente DynamicBackground
const DynamicBackground = styled.main`
  background-color: ${(props) => props.bgColor || 'black'};
`;

export default DynamicBackground;
