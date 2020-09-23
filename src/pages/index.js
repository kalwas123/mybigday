import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { device } from "src/components/brakePoints"
import MainNav from "src/components/Navigation.js"
import ScrollContainer from "react-indiana-drag-scroll"
import Helmet from "react-helmet"

import MainWrap from "src/components/MainWrap"
import BigTitle from "src/components/Texts/BigTitle"
import Paragraph from "src/components/Texts/Paragraph"
import SmallText from "src/components/Texts/SmallText"
import MidText from "src/components/Texts/MidText"
import ButtonRightIcon from "src/components/Buttons/ButtonRightIcon"
import BriefBtnFix from "src/components/Buttons/BriefBtnFix"
import SimpleSlider from "src/components/Slider/Slider"
import OfferCard from "src/components/OfferCard/OfferCard"
import starStroke from "src/assets/svg/star_stroke.svg"
import insta from "src/assets/svg/insta.svg"
import facebook from "src/assets/svg/facebook.svg"
import pinterest from "src/assets/svg/pinterest.svg"

const Header = styled.header`
  width: 100%;
  padding-top: 250px;
  margin: 0;
  background-color: #cdd3c8;
  height: calc(100vh - 250px);
  position: relative;
  @media ${device.tabletS} {
    padding-top: 140px;
    height: auto;
  }
`

const SliderSection = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`

const MainTitle = styled(BigTitle)`
  position: absolute;
  left: 58.33%;
  top: 130px;
  @media ${device.tabletS} {
    position: relative;
    margin-top: 25px;
    top: 0;
    left: 25vw;
    max-width: 310px;
  }
`

const WrapHeaderLink = styled.div`
  position: absolute;
  left: 75%;
  bottom: 30px;
  @media ${device.tabletS} {
    position: relative;
    margin-top: 35px;
    top: 0;
    left: 25vw;
  }
`

const OfferWrap = styled.div`
  width: 100%;
  padding-top: 180px;
  padding-bottom: 130px;
  margin: 0;
  background-color: #cdd3c8;
  position: relative;

  @media ${device.tabletS} {
    padding-top: 100px;
  }

  .scroll-container {
    display: flex;
    padding-bottom: 100px;
    transition: all 0.5s;
    /* overflow-x: scroll; */
    width: 100%;
    padding-right: calc(50vw - 600px);

    &::-webkit-scrollbar {
      height: 1px;
      background-color: rgba(255, 255, 255, 0);
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

    @media ${device.laptop} {
      padding-right: 50px;

      &::-webkit-scrollbar-thumb {
        border-right: 50px solid rgba(255, 255, 255, 0);
      }
    }
  }
`

// const OfferList = styled.div`
//   display: flex;
//   padding-bottom: 100px;
//   overflow-x: scroll;
//   width: 100%;
//   padding-right: calc(50vw - 600px);

//   &::-webkit-scrollbar {
//     height: 1px;
//     background-color: rgba(255, 255, 255, 0);
//   }

//   &::-webkit-scrollbar-thumb {
//     border-right: calc(50vw - 600px) solid rgba(255, 255, 255, 0);
//     background-clip: padding-box;
//   }
//   &::-webkit-scrollbar-track {
//     background-color: #cdd3c8;
//   }
//   &::-webkit-scrollbar-thumb {
//     background-color: #adb4a7;
//   }

//   @media ${device.laptop} {
//     padding-right: 50px;

//     &::-webkit-scrollbar-thumb {
//       border-right: 50px solid rgba(255, 255, 255, 0);
//     }
//   }
// `

const OfferSeparator = styled.hr`
  border: 0;
  height: 1px;
  position: relative;
  top: -8px;
  background: #adb4a7;
  width: 100%;
`

const ClientWrap = styled.div`
  background-color: #f4f4f4;
`
const ClientSection = styled.div`
  padding: 125px 0;

  position: relative;
  div {
    margin-left: 33.33%;
    width: calc(100% - 33.33%);
  }
  @media ${device.laptop} {
    div {
      margin-left: 33.33%;
      width: calc(100% - 33.33%);
    }
    @media ${device.tablet} {
      div {
        margin-left: 0;
        width: 100%;
      }
    }
  }
`

const ClientSmallParagraph = styled(SmallText)`
  position: absolute;
  left: 0;
  top: 160px;
  @media ${device.tablet} {
    top: 100px;
  }
`

const ClientList = styled(Paragraph)`
  column-count: 3;
  margin-top: 60px;
  width: 100%;

  p {
    margin-bottom: 30px;
  }
  @media ${device.tabletS} {
    column-count: 2;
  }
`

const ClientParagraph = styled(Paragraph)`
  width: 62.5%;
  margin-top: 90px;
  @media ${device.mobile} {
    width: 100%;
  }
`

const ClientSeparator = styled.hr`
  border: 0;
  height: 1px;
  position: relative;
  background: #adb4a7;
  width: 100%;
  margin-top: 75px;
`

const SocialWrap = styled.div`
  background-color: #cdd3c8;
  padding: 210px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SocialTextStar = styled(MidText)`
  position: relative;
  z-index: 2;
  width: 66.66%;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-image: url(${starStroke});
    background-size: contain;
    width: 180px;
    height: 180px;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media ${device.mobile} {
    width: calc(100% - 40px);
  }
`

const SocialIconsWrap = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`

const SocialIconLink = styled.a`
  height: 20px;
  width: 20px;
  background-image: url(${props => props.icon});
`

const TeamWrap = styled.div`
  background-color: #cdd3c8;
`

const ImgRight = styled.img`
  width: 66.66%;
  margin-left: 33.33%;
`

const ImgLeft = styled.img`
  width: 50%;
  position: relative;
  margin-top: -350px;
`
class IndexPage extends React.Component {
  state = {
    isDraggable: false,
  }
  draggableOn = () => {
    this.setState({
      isDraggable: true,
    })
    console.log("isDraggable__ON")
  }

  draggableOff = () => {
    this.setState({
      isDraggable: false,
    })
    console.log("isDraggable__Off")
  }
  // const IndexPage = ({ data }) => {
  render() {
    const dataS = this.props.data.allStrapiHome.edges[0].node
    const str = dataS.Companies
    const str_array = str.split(",")
    return (
      <>
        <MainNav col />
        <BriefBtnFix Link={this.props.data.strapiLinkBrief.Link} target="blank">
          wypełnij brief
        </BriefBtnFix>
        <Header>
          <MainWrap>
            <SliderSection>
              <SimpleSlider Images={dataS.Header_Slider} />
              <MainTitle
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
                data-sal-duration="1000"
                col="white"
                width="320px"
                icon="white"
              >
                {dataS.Header_Title}
              </MainTitle>
              <WrapHeaderLink>
                <ButtonRightIcon>Obejrzyj projekty</ButtonRightIcon>
              </WrapHeaderLink>
            </SliderSection>
          </MainWrap>
        </Header>
        <OfferWrap>
          <MainWrap>
            <ScrollContainer
              hideScrollbars="false"
              className="scroll-container"
              onStartScroll={this.draggableOn}
              onEndScroll={this.draggableOff}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {this.props.data.allStrapiOffer.edges.map(document => (
                <OfferCard
                  Draggable={this.state.isDraggable ? true : false}
                  Title={document.node.Title}
                  Paragraph={document.node.Short_Description}
                  Offer={document.node.strapiId}
                />
              ))}
            </ScrollContainer>
            <OfferSeparator />
          </MainWrap>
        </OfferWrap>
        <ClientWrap>
          <MainWrap>
            <ClientSection>
              <ClientSmallParagraph
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
                data-sal-duration="1000"
              >
                {dataS.Companies_SmallText}
              </ClientSmallParagraph>
              <div>
                <BigTitle
                  width="500px"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  {dataS.Companies_Title}
                </BigTitle>
                <ClientList>
                  {str_array.map((item, index) => (
                    <>
                      <p
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        data-sal-duration="1000"
                      >
                        {item}
                      </p>
                    </>
                  ))}
                </ClientList>
                <ClientParagraph
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  {dataS.Companies_Description}
                </ClientParagraph>
                <ClientSeparator />
              </div>
            </ClientSection>
          </MainWrap>
        </ClientWrap>
        <SocialWrap>
          <SocialTextStar
            col="white"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            {dataS.Social_Text_1} <br /> <br /> {dataS.Social_Text_2}
          </SocialTextStar>
          <SocialIconsWrap
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <SocialIconLink
              href={"https://www.facebook.com/mybigdaypl/"}
              target={"blank"}
              icon={facebook}
            />
            <SocialIconLink
              href={"https://www.instagram.com/mybigday_pl/?hl=pl"}
              target={"blank"}
              icon={insta}
            />
            <SocialIconLink
              href={"https://pl.pinterest.com/mybigdaypl/pins/"}
              target={"blank"}
              icon={pinterest}
            />
          </SocialIconsWrap>
        </SocialWrap>
        <TeamWrap>
          <MainWrap>
            <ImgRight
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
              src={dataS.Team_Img_1.childImageSharp.fluid.src}
              // srcSet={data.teamv1.childImageSharp.fluid.srcSet}
              // sizes={data.teamv1.childImageSharp.fluid.sizes}
            ></ImgRight>
            <ImgLeft
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
              src={dataS.Team_Img_2.childImageSharp.fluid.src}
              // srcSet={data.teamv2.childImageSharp.fluid.srcSet}
              // sizes={data.teamv2.childImageSharp.fluid.sizes}
            ></ImgLeft>
          </MainWrap>
        </TeamWrap>
      </>
    )
  }
}

export const query = graphql`
  query Home {
    allStrapiHome {
      edges {
        node {
          Companies_Description
          Companies_SmallText
          Companies_Title
          Header_Title
          Social_Text_1
          Social_Text_2
          Header_Slider {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          Team_Img_1 {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          Team_Img_2 {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          Companies
        }
      }
    }
    allStrapiOffer {
      edges {
        node {
          Short_Description
          Title
          strapiId
        }
      }
    }
    strapiLinkBrief {
      Link
    }
  }
`

export default IndexPage
