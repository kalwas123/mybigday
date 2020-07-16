import React from "react"
import styled from "styled-components"
import { device } from "src/components/brakePoints"
import Paragraph from "src/components/Texts/Paragraph"
import { Link } from "gatsby"

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
`

const Name = styled.h3`
  font-size: 36px;
  color: #000;
  font-family: "Cirka-Regular";
  margin-top: 75px;
  margin-bottom: 5px;
`

const Separator = styled.hr`
  border: 0;
  height: 1px;
  background: #656565;
  width: 275px;
  margin-bottom: 27px;
`
const ContctLink = styled.a`
  font-size: 18px;
  line-height: 1.3;
  color: #000;
  font-family: "Fira Sans";
  position: relative;
  text-decoration: none;
  font-weight: 300;
  display: inline-block;
  cursor: pointer;
`

const Person = props => (
  <Wrap
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-easing="ease"
    data-sal-duration="1000"
  >
    <Paragraph>{props.localisation}</Paragraph>
    <Name>{props.name}</Name>
    <Separator />
    <ContctLink href={`tel:${props.tel}`}>{props.tel}</ContctLink>
    <ContctLink href={`mailto:${props.mail}`}>{props.mail}</ContctLink>
  </Wrap>
)

export default Person
