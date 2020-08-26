import React from "react"
import styled from "styled-components"
import { device } from "src/components/brakePoints"
import ButtonRightIcon from "src/components/Buttons/ButtonRightIcon"
import SecTitle from "src/components/Texts/SecTitle"
import Paragraph from "src/components/Texts/Paragraph"

const Wrap = styled.div`
  width: 280px;
  flex-shrink: 0;
  margin-right: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s;
  &.active {
    transform: scale(0.9);
    transition: all 0.5s;
    margin-right: 90px;
  }
  &:last-of-type {
    padding-right: 130px;
  }
  @media ${device.mobile} {
    width: 80vw;
    margin-right: 10vw;
    &:last-of-type {
      padding-right: 10vw;
    }
  }
`

const Title = styled(SecTitle)`
  margin-bottom: 15px;
`

const Separator = styled.hr`
  border: 0;
  height: 1px;
  background: #656565;
  width: 100px;
  margin-bottom: 27px;
`

const CompParagraph = styled(Paragraph)`
  margin-bottom: 30px;
`

const OfferCard = props => (
  <Wrap className={props.Draggable ? "active" : ""}>
    <div>
      <Title col="white">{props.Title}</Title>
      <Separator />
      <CompParagraph>{props.Paragraph}</CompParagraph>
    </div>
    <ButtonRightIcon offer={props.Offer}>Obejrzyj projekty</ButtonRightIcon>
  </Wrap>
)

export default OfferCard
