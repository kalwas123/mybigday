import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import MainWrap from "src/components/MainWrap"
import { device } from "src/components/brakePoints"
import Cta from "src/components/Cta/Cta"
import SmallText from "src/components/Texts/SmallText"

const Wrap = styled.footer`
  position: relative;
  background-color: #cdd3c8;
`

const RightCol = styled.div`
  margin-left: 33.33%;
  width: calc(100% - 33.33% - 50px);
  background-color: #fff;
  padding-right: calc(50vw - 600px);
  padding-top: 45px;
  padding-left: 50px;
  padding-bottom: 90px;
  display: flex;
  justify-content: space-between;

  div {
    line-height: 0;
  }
  @media ${device.laptop} {
    padding-right: 50px;
  }
  @media ${device.tabletS} {
    margin-left: 0%;
    position: relative;
    left: -50px;
    width: calc(100% - 00px);
  }

  @media ${device.mobile} {
    right: -20px;
    width: 100%;
    flex-direction: column;
  }
`

const CopyRights = styled(SmallText)`
  position: absolute;
  left: 0;
  top: 45px;
  @media ${device.laptop} {
    left: 50px;
  }
  @media ${device.tabletS} {
    top: -50px;
  }

  @media ${device.mobile} {
    left: 20px;
  }
`

const FooterLink = styled.a`
  font-size: 12px;
  line-height: 1.3;
  color: #000;
  font-family: "Fira Sans";
  position: relative;
  text-decoration: none;
  font-weight: ${props => (props.light ? "300" : "400")};
  margin-bottom: ${props => props.mb};
  display: inline-block;
`

const MainFooter = () => (
  <StaticQuery
    query={graphql`
      query Footer {
        strapiFooter {
          Locations
          Mail
          Tel
        }
      }
    `}
    render={data => (
      <Wrap>
        <Cta></Cta>
        <MainWrap>
          <CopyRights
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Mybigday creatives 2020®
          </CopyRights>
          <RightCol
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <div>
              <FooterLink href={`mailto:{data.strapiFooter.Mail}`}>
                {data.strapiFooter.Mail}
              </FooterLink>
            </div>
            <div>
              <FooterLink href={"tel:{data.strapiFooter.Tel}"} mb="20px">
                {data.strapiFooter.Tel}
              </FooterLink>
              <SmallText>{data.strapiFooter.Locations}</SmallText>
            </div>
            <div>
              <SmallText mb="20px">Copyright 2020</SmallText>
              <FooterLink href={"https://we3studio.pl/"} target={"blank"} light>
                Design: we3studio.pl
              </FooterLink>
            </div>
          </RightCol>
        </MainWrap>
      </Wrap>
    )}
  />
)

export default MainFooter
