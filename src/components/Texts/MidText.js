import React from "react"
import styled from "styled-components"
import { device } from "src/components/brakePoints"

import star from "src/assets/svg/star.svg"

const MidText = styled.h1`
  font-size: 40px;
  line-height: 1.2;
  color: ${props => (props.col === "white" ? "#fff" : "#000")};
  font-family: "Cirka-Regular";
  position: relative;
  width: ${props => props.width};
  text-align: center;
  @media ${device.mobile} {
    font-size: 28px;
  }
`

export default MidText
