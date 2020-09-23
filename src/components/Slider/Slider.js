import React, { useState } from "react"
import { graphql, useStaticQuery, StaticQuery } from "gatsby"
import styled from "styled-components"
import { device } from "src/components/brakePoints"

const CarouselWrap = styled.div`
  width: 66%;
  height: 100%;
  display: flex;
  position: relative;

  @media ${device.tabletS} {
    width: calc(100vw - 50px);
    height: 60vw;
  }
  @media ${device.mobile} {
    width: calc(100vw - 20px);
  }
`

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
`

const Slide = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  object-fit: cover;
  transition: all 0.5s;
`

const Pagination = styled.div`
  position: absolute;
  top: 0;
  left: -3px;
  display: flex;
  transform-origin: left top;
  transform: rotate(90deg);
`

const PaginationNum = styled.p`
  margin-right: 15px;
  position: relative;
  font-size: 12px;
  color: #8d8d8d;
  transition: all 0.5s;
  cursor: pointer;
  &::before {
    content: "—";
    position: absolute;
    right: -3px;
    transform: translate(100%);
    color: #8d8d8d;
  }
  &:last-child::before {
    content: "";
  }
  &.PageNum-active {
    color: #151515;
    transition: all 0.5s;
  }
`

class Slider extends React.Component {
  state = {
    x: 0,
  }

  paginationClick = () => console.log("test")

  changeSlide = () => {
    // Change x for slide transition
    this.state.x === -100 * (this.props.Images.length - 1)
      ? this.setState({
          x: 0,
        })
      : this.setState({
          x: this.state.x - 100,
        })
  }

  componentDidMount() {
    setInterval(this.changeSlide.bind(this), 2000)
  }

  render() {
    return (
      <CarouselWrap>
        <Carousel>
          {this.props.Images.map((item, index) => (
            <Slide
              key={index}
              src={item.localFile.childImageSharp.fluid.src}
              style={{ transform: `translateX(${this.state.x}%)` }}
            />
          ))}
        </Carousel>
        <Pagination>
          {this.props.Images.map((item, index) => (
            <PaginationNum
              key={index}
              id={"PaginationNum_" + index}
              className={
                this.state.x / -100 === index
                  ? "pageNum, PageNum-active"
                  : "pageNum"
              }
              data-pagnum={index + 1}
              onClick={this.paginationClick}
            >
              0{index + 1}
            </PaginationNum>
          ))}
        </Pagination>
      </CarouselWrap>
    )
  }
}

export default Slider
