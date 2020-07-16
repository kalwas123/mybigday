import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ButtonBox = styled.a`
  position: relative;
  font-family: "Cirka-Regular";
  color: #000;
  align-items: center;
  font-size: 18px;
  height: 60px;
  width: 185px;
  background-color: #cdd3c8;
  box-shadow: -6px 5px 25px #c1c9bbcc;
  display: inline-block;
  text-align: center;
  line-height: 55px;
  cursor: pointer;
  transition: all 0.5s;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    left: -15px;
    top: calc(50%);
    width: 55px;
    height: 1px;
    background-color: #606060;
    transition: all 0.5s;
  }

  &:hover::before {
    width: 0px;
    transition: all 0.5s;
  }

  &:hover {
    transition: all 0.5s;
    box-shadow: 0px 0px 6px #c1c9bbcc;
  }
`

export default ButtonBox
