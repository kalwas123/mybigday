import React from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import star from "src/assets/svg/star.svg"

const Icon = styled.div`
  height: 43px;
  width: 43px;
  border: solid #fff 1px;
  border-radius: 100%;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Arrow = styled.div`
  border: solid #fff;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(-45deg);
  position: relative;
  left: -2px;
`
const MainWrap = styled(Link)`
  font-family: Fira Sans;
  font-weight: 300;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;

  & ${Icon} {
    position: relative;
    transform: translate(0, 0);
    transition: all 0.5s;
  }

  &:hover ${Icon} {
    transform: translate(20px, 0);
    transition: all 0.5s;
  }

  & ${Arrow} {
    position: relative;
    transform: translate(0, 0) rotate(-45deg);
    transition: all 0.5s 0.2s;
  }

  &:hover ${Arrow} {
    transform: translate(5px, 0) rotate(-45deg);
    transition: all 0.5s 0.2s;
  }
`

const ButtonRightIcon = props => (
  <MainWrap
    to={`/portfolio`}
    state={{ offer: props.offer }}
    // onClick={() =>
    //   navigate(
    //     `/portfolio`,

    //     {
    //       state: {
    //         offer: props.offer,
    //       },
    //     }
    //   )
    // }
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-easing="ease"
    data-sal-duration="1000"
  >
    {props.children}
    <Icon>
      <Arrow />
    </Icon>
  </MainWrap>
)

export default ButtonRightIcon
