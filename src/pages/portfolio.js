import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { device } from "src/components/brakePoints"
import MainNav from "src/components/Navigation.js"
import MainWrap from "src/components/MainWrap"
import ProjectCard from "src/components/Portfolio/ProjectCard"
import BigTitle from "src/components/Texts/BigTitle"
import Paragraph from "src/components/Texts/Paragraph"

const HeaderWrap = styled.div`
  background-color: #cdd3c8;
  padding-top: 250px;
`

const Title = styled(BigTitle)`
  margin-left: 8.33%;
  width: 50%;
  @media ${device.laptop} {
    width: 66.66%;
  }
  @media ${device.tabletS} {
    margin-left: 0%;
    width: 100%;
  }
`

const HeaderParagraph = styled(Paragraph)`
  margin-left: 8.33%;
  width: 66.66%;
  margin-top: 25px;
  @media ${device.laptop} {
    width: 75%;
  }
  @media ${device.tabletS} {
    margin-left: 0%;
    width: 100%;
  }
`
const PortfolioSection = styled.div`
  width: 100%;
  padding-top: 100px;
  margin-bottom: 110px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0px;
    height: 580px;
    width: 100%;
    background-color: #cdd3c8;
  }
`

const PortfolioNav = styled.ul`
  list-style: none;
  display: flex;
  height: 45px;
  overflow-x: scroll;
  padding-left: 5px;
  width: calc(100% - 5px);
  &::-webkit-scrollbar {
    height: 1px;
    background-color: rgba(255, 255, 255, 0);
    cursor: hand;
  }

  &::-webkit-scrollbar-thumb {
    border-right: calc(50vw - 600px) solid rgba(255, 255, 255, 0);
    background-clip: padding-box;
  }
  &::-webkit-scrollbar-track {
    background-color: #cdd3c8;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #adb4a7;
  }
`

const NavElement = styled.li`
  margin-right: 100px;
  color: #fff;
  cursor: pointer;
  font-family: "Cirka-Regular";
  position: relative;
  color: #fff;
  transition: all 0.5s;
  flex-shrink: 0;
  height: 20px;
  &:before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: -5px;
    width: 0;
    height: 1px;
    background-color: #000000;
    transition: all 0.5s;
  }

  &.offerActive {
    color: #000000;
    transition: all 0.5s;
  }
  &.offerActive::before {
    content: "";
    width: calc(100% + 10px);
    transition: all 0.5s;
  }
  &:hover {
    color: #000000;
    transition: all 0.5s;
  }
  &:hover::before {
    content: "";
    width: 20px;
    transition: all 0.5s;
  }
  &.offerActive:hover::before {
    content: "";
    width: calc(100% + 10px);
    transition: all 0.5s;
  }
  @media ${device.tabletS} {
    margin-right: 40px;
  }
`

const OfferDescription = styled(Paragraph)`
  margin-top: 50px;
  width: 66.66%;
  margin-bottom: 150px;
  @media ${device.tabletS} {
    width: 100%;
  }
`

const ProjectsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

class contactPage extends React.Component {
  state = {
    // offer: this.props.location.state.offer - 1 || 0,
    // offer: this.props.location.search.replace("?", "") - 1 || 0,
    offer: 0,
  }

  changeOffer = n => {
    this.setState({
      offer: n - 1,
    })
  }

  render() {
    {
      console.log(this.state)
      console.log(this.props)
      console.log(this.props.location)
    }
    return (
      <>
        <MainNav col />
        <HeaderWrap>
          <MainWrap>
            <Title
              icon="big"
              col="white"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {this.props.data.strapiPagePortfolio.Title}
            </Title>
            <HeaderParagraph
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {this.props.data.strapiPagePortfolio.Description}
            </HeaderParagraph>
          </MainWrap>
        </HeaderWrap>
        <PortfolioSection>
          <MainWrap>
            <PortfolioNav
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {this.props.data.allStrapiOffer.edges.map(document => (
                <NavElement
                  className={
                    document.node.strapiId - 1 == this.state.offer
                      ? "offerActive"
                      : null
                  }
                  onClick={() => this.changeOffer(document.node.strapiId)}
                >
                  {document.node.Title}
                </NavElement>
              ))}
            </PortfolioNav>
            <OfferDescription
              data-sal="slide-up"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {
                this.props.data.allStrapiOffer.edges[this.state.offer].node
                  .Description
              }
            </OfferDescription>
            <ProjectsWrap
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {this.props.data.allStrapiOffer.edges[
                this.state.offer
              ].node.projects.map(document => (
                <ProjectCard
                  Img={document.Thumbnail.childImageSharp.fluid.src}
                  Name={document.Name}
                  Location={document.Location}
                />
              ))}
            </ProjectsWrap>
          </MainWrap>
        </PortfolioSection>
      </>
    )
  }
}

export default contactPage

export const portfolioQuery = graphql`
  query Offer {
    allStrapiOffer {
      edges {
        node {
          Title
          Description
          strapiId
          projects {
            Name
            Location
            offer
            id
            Thumbnail {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    strapiPagePortfolio {
      Title
      Description
    }
  }
`
