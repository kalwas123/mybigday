import React from "react"
import styled from "styled-components"
import { device } from "src/components/brakePoints"

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  margin-bottom: 85px;
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.tabletS} {
    width: 100%;
  }
`
const ProfilePic = styled.img`
  width: 275px;
  height: 379px;
  object-fit: cover;
  margin-bottom: 30px;
`

const Name = styled.h3`
  font-size: 36px;
  color: #000;
  font-family: "Cirka-Regular";

  margin-bottom: 5px;
`

const Separator = styled.hr`
  border: 0;
  height: 1px;
  background: #656565;
  width: 275px;
  margin-bottom: 5px;
`
const Position = styled.p`
  font-size: 18px;
  line-height: 1.3;
  color: #000;
  font-family: "Fira Sans";
  position: relative;
  text-decoration: none;
  font-weight: 300;
  display: inline-block;
`

const Person = props => (
  <Wrap
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-easing="ease"
    data-sal-duration="1000"
  >
    {props.img ? <ProfilePic src={props.img} /> : null}
    <Name>{props.name}</Name>
    <Separator />
    <Position>{props.pos}</Position>
  </Wrap>
)

export default Person
