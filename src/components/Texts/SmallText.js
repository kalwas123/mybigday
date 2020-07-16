import React from "react"
import styled from "styled-components"

const SmallText = styled.h3`
  font-size: 12px;
  line-height: 1.3;
  color: ${props => (props.col === "white" ? "#fff" : "#000")};
  font-family: "Fira Sans";
  position: relative;
  margin-bottom: ${props => props.mb};
`

export default SmallText
