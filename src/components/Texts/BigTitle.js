import React from "react"
import styled, { css } from "styled-components"
import { device } from "src/components/brakePoints"
import star from "src/assets/svg/star.svg"
import starBlack from "src/assets/svg/star_black.svg"
import starBig from "src/assets/svg/star_big.svg"

const BigTitle = styled.h1`
  font-size: 54px;
  line-height: 1;
  color: ${props => (props.col === "white" ? "#fff" : "#000")};
  font-family: "Cirka-Regular";
  position: relative;
  max-width: ${props => props.width};

  ${props =>
    props.icon &&
    css`
      &:before {
        content: "";
        position: absolute;
        transform: translate(-100%, 0);
        top: 42px;
        left: -15px;
        height: 23px;
        width: 23px;

        line-height: 0.1;
        @media ${device.mobile} {
          top: 26px;
        }
      }
    `}

    ${props =>
      props.icon == "white" &&
      css`
        &:before {
          background-image: url(${star});
        }
      `}

    ${props =>
      props.icon == "black" &&
      css`
        &:before {
          background-image: url(${starBlack});
        }
      `}

      ${props =>
        props.icon == "big" &&
        css`
          &:before {
            top: -62px;
            height: 124px;
            width: 124px;
            background-image: url(${starBig});
          }
        `}
    

    
  
    @media ${device.mobile} {
      font-size: 30px;
  }
`

export default BigTitle
