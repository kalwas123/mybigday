import React from "react"
import styled from "styled-components"

const SecTitle = styled.h3`
  font-size: 34px;
  line-height: 1.1;
  color: ${props => (props.col === "white" ? "#fff" : "#000")};
  font-family: "Cirka-Regular";
  position: relative;
  width: 100px;
`

export default SecTitle
