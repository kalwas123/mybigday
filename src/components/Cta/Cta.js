import React from "react"
import styled from "styled-components"
import MainWrap from "src/components/MainWrap"
import { device } from "src/components/brakePoints"
import { StaticQuery, graphql } from "gatsby"
import ButtonBox from "src/components/Buttons/ButtonBox"
import BigTitle from "src/components/Texts/BigTitle"
import Paragraph from "src/components/Texts/Paragraph"

const Wrap = styled.div`
  position: relative;
  width: 50%;
  margin-left: 33.33%;
  padding: 140px 0 180px 0;
  @media ${device.tabletS} {
    width: 100%;
    margin-left: 0;
  }
  @media ${device.mobile} {
    width: calc(100% - 40px);
    margin-left: 40px;
  }
`

const Text = styled(Paragraph)`
  width: 83.33%;
  margin-top: 25px;
  margin-bottom: 60px;
`

const Cta = () => (
  <StaticQuery
    query={graphql`
      query Cta {
        strapiFooter {
          Paragraph
          Title
        }
        strapiLinkBrief {
          Link
        }
      }
    `}
    render={data => (
      <MainWrap>
        <Wrap>
          <BigTitle
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
            col="white"
            icon="white"
          >
            {data.strapiFooter.Title}
          </BigTitle>
          <Text
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            {data.strapiFooter.Paragraph}
          </Text>
          <ButtonBox
            href={data.strapiLinkBrief.Link}
            target="blank"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            wypełnij brief
          </ButtonBox>
        </Wrap>
      </MainWrap>
    )}
  />
)

export default Cta
