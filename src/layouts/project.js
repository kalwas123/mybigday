import React from "react"
import styled from "styled-components"
import { device } from "src/components/brakePoints"
import { graphql, useStaticQuery, StaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import MainNav from "src/components/Navigation.js"
import MainWrap from "src/components/MainWrap"
import Paragraph from "src/components/Texts/Paragraph"
import ProjectGallery from "src/components/Portfolio/ProjectGallery1.js"

const HeaderImg = styled.img`
  margin-top: 250px;
  margin: 250px 50px 100px 50px;
  width: calc(100% - 100px);
  height: 60vw;
  object-fit: cover;
  @media ${device.mobile} {
    margin: 250px 20px 50px 20px;
    width: calc(100% - 40px);
  }
`
const Header = styled.div`
  display: flex;
  padding-bottom: 310px;
  flex-wrap: wrap;
  @media ${device.mobile} {
    padding-bottom: 200px;
  }
`

const MainInfo = styled.div`
  width: 50%;
  @media ${device.mobile} {
    width: 100%;
  }
`

const Description = styled(Paragraph)`
  width: 50%;
  @media ${device.mobile} {
    width: 100%;
    margin-top: 25px;
  }
`

const ProjectTitle = styled.h3`
  font-family: "Cirka-Regular";
  position: relative;
  top: 0;
  transition: all 0.5s;
  font-size: 25px;
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
const GalleryWrap = styled.div`
  position: relative;
  background-color: #fff;
  padding-bottom: 170px;
`

const MainGallery = styled.div`
  position: relative;
  top: -70px;
`

const ProjectTemplate = ({ data }) => {
  const photos = []

  data.strapiWedding.Gallery.map(document => {
    const newImg = {
      src: document.localFile.childImageSharp.fluid.src,
      width: document.width,
      height: document.height,
    }
    photos.push(newImg)
  })

  console.log(photos)

  return (
    <>
      <MainNav />
      <HeaderImg src={data.strapiWedding.Thumbnail.childImageSharp.fluid.src} />
      <MainWrap>
        <Header>
          <MainInfo>
            <ProjectTitle>{data.strapiWedding.Name}</ProjectTitle>
            <ProjectLocation>{data.strapiWedding.Location}</ProjectLocation>
          </MainInfo>
          <Description>
            <ReactMarkdown source={data.strapiWedding.Description} />
          </Description>
        </Header>
      </MainWrap>
      <GalleryWrap>
        <MainWrap>
          <MainGallery>
            <ProjectGallery photos={photos} />
          </MainGallery>
        </MainWrap>
      </GalleryWrap>
    </>
  )
}
export default ProjectTemplate

export const query = graphql`
  query ProjectQuery($id: String!) {
    strapiWedding(id: { eq: $id }) {
      Name
      Location
      Thumbnail {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      Gallery {
        height
        width
        localFile {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      Description
    }
  }
`
