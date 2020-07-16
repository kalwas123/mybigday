import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "src/components/brakePoints"
import slugify from "slugify"

const ProjectImg = styled.img`
  position: relative;
  top: 0;
  transition: all 0.5s;
  width: 100%;
  height: 450px;
  object-fit: cover;
  @media ${device.laptop} {
    width: 100%;
    height: 30vw;
  }
  @media ${device.mobile} {
    width: 100%;
    height: 100vw;
  }
`

const ProjectTitle = styled.h3`
  font-family: "Cirka-Regular";
  position: relative;
  top: 0;
  transition: all 0.5s;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #000;
`
const ProjectLocation = styled.h4`
  position: relative;
  top: 0;
  transition: all 0.5s;
  color: #b1b1b1;
  font-size: 16px;
  font-weight: 300;
  font-family: "Fira Sans", sans-serif;
`

const Wrap = styled(Link)`
  display: inline-block;
  width: calc(33.33% - 50px);
  position: relative;
  margin-bottom: 40px;
  text-decoration: none;
  top: 0;
  transition: all 0.5s;

  &:nth-child(3n + 2) {
    margin-top: 100px;
  }

  &:hover ${ProjectImg} {
    top: -20px;
    transition: all 0.5s 0s;
  }
  &:hover ${ProjectTitle} {
    top: -20px;
    transition: all 0.5s 0.1s;
  }
  &:hover ${ProjectLocation} {
    top: -20px;
    transition: all 0.5s 0.2s;
  }
  @media ${device.laptop} {
    width: calc(33.33% - 25px);
  }
  @media ${device.tabletS} {
    width: calc(50% - 25px);
    &:nth-child(2n) {
      margin-top: 100px;
    }
  }
  @media ${device.mobile} {
    width: 100%;
    margin-top: 0px;
    &:nth-child(2n) {
      margin-top: 0px;
    }
  }
`

const ProjectCard = props => (
  <Wrap to={`portfolio/${slugify(props.Name)}`}>
    <ProjectImg src={props.Img} />
    <ProjectTitle>{props.Name}</ProjectTitle>
    <ProjectLocation>{props.Location}</ProjectLocation>
  </Wrap>
)

export default ProjectCard
