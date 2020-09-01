import React from "react"
import styled from "styled-components"
import { device } from "src/components/brakePoints"
import { Link } from "gatsby"

const Separator = styled.hr`
  border: 0;
  height: 1px;
  background: #656565;
  width: 275px;
  margin-bottom: 27px;
  transition: all 0.5s;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.tabletS} {
    width: 100%;
  }

  &:hover {
    ${Separator} {
      width: 200px;
      transition: all 0.5s;
    }
  }
`

const NameLink = styled.a`
  font-size: 36px;
  color: #000;
  font-family: "Cirka-Regular";
  margin-top: 75px;
  margin-bottom: 5px;
  text-decoration: none;
  cursor: pointer;
`

const Person = props => (
  <Wrap
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-easing="ease"
    data-sal-duration="1000"
  >
    <NameLink href={`${props.linkTo}`}>{props.name}</NameLink>
    <Separator />
  </Wrap>
)

export default Person
