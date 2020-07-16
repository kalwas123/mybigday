import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import MainNav from "src/components/Navigation.js"
import { device } from "src/components/brakePoints"
import MainWrap from "src/components/MainWrap"
import BigTitle from "src/components/Texts/BigTitle"
import Paragraph from "src/components/Texts/Paragraph"
import SimpleSlider from "src/components/Slider/Slider"
import Person from "src/components/About/Person"
import { render } from "react-dom"

const HeaderWrap = styled.div`
  width: 100%;
  padding-top: 250px;
  margin: 0;
  height: calc(100vh - 250px);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const ParagraphHeader = styled(Paragraph)`
  margin-top: 25px;
  margin-bottom: 40px;
  width: 83.33%;
`

const TeamSection = styled.div`
  padding: 110px 0 25px 0;
  background-color: #cdd3c8;
`

const TeamPersons = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  flex-wrap: wrap;
`

const PracowniaSection = styled.div`
  padding: 110px 0;
`

const ParagraphPracownia = styled(Paragraph)`
  margin-top: 25px;
  margin-bottom: 40px;
  width: 455px;
  @media ${device.mobile} {
    width: 100%;
  }
`

const SliderPracownia = styled.div`
  display: flex;
  padding-bottom: 100px;
  overflow-x: scroll;
  width: calc(100% + (50vw - 600px));
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
    background-color: #f4f4f4;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #adb4a7;
  }
  @media ${device.laptop} {
    width: calc(100% + 50px);
  }
  @media ${device.mobile} {
    width: calc(100% + 20px);
  }
`

const SlidePracownia = styled.img`
  width: 860px;
  height: 570px;
  margin-right: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  object-fit: cover;
  @media ${device.laptop} {
    width: 50vw;
    height: 35vw;
  }
  @media ${device.mobile} {
    width: 80vw;
    height: 60vw;
  }
`

const SliderSeparator = styled.hr`
  border: 0;
  height: 1px;
  position: relative;
  top: -8px;
  background: #adb4a7;
  width: 100%;
`

const onas = ({ data }) => {
  return (
    <>
      <MainNav />
      <MainWrap>
        <HeaderWrap>
          <div>
            <BigTitle
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
              icon="black"
            >
              {data.strapiAbout.Header_Title}
            </BigTitle>
            <ParagraphHeader
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {data.strapiAbout.Header_Description}
            </ParagraphHeader>
          </div>
          <SimpleSlider
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
            Images={data.strapiAbout.Header_Slider}
          />
        </HeaderWrap>
      </MainWrap>
      <TeamSection>
        <MainWrap>
          <TeamPersons>
            {data.allStrapiOnasTeam.edges.map(document => (
              <Person
                key={document.node.id}
                name={document.node.Name}
                pos={document.node.Position}
                img={
                  document.node.Image
                    ? document.node.Image.childImageSharp.fluid.src
                    : null
                }
              />
            ))}
          </TeamPersons>
        </MainWrap>
      </TeamSection>
      <MainWrap>
        <PracowniaSection>
          <BigTitle
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            {data.strapiAbout.Bottom_Title}
          </BigTitle>
          <ParagraphPracownia
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            {data.strapiAbout.Bottom_Description}
          </ParagraphPracownia>
          <SliderPracownia
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            {data.strapiAbout.Bottom_Slider.map(document => (
              <SlidePracownia
                src={document.localFile.childImageSharp.fluid.src}
              />
            ))}
          </SliderPracownia>
          <SliderSeparator />
        </PracowniaSection>
      </MainWrap>
    </>
  )
}

export default onas

export const personQuery = graphql`
  query onas {
    strapiAbout {
      Header_Description
      Header_Title
      Header_Slider {
        localFile {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      Bottom_Title
      Bottom_Description
      Bottom_Slider {
        localFile {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
    allStrapiOnasTeam {
      edges {
        node {
          Name
          Position
          id
          Image {
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
`
