import React from "react"
import styled from "styled-components"

const Paragraph = styled.h3`
  font-size: 18px;
  line-height: 1.3;
  color: ${props => (props.col === "white" ? "#fff" : "#000")};
  font-family: "Fira Sans";
  position: relative;
`

export default Paragraph
