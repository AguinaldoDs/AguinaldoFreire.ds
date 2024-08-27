'use client'

// Bibliotecas
import styled from "styled-components"



const DynamicBackground = styled.main`
  background-color: ${(props) => props.bgColor || 'white'};
`

export default DynamicBackground;