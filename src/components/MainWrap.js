import React from "react"
import styled from "styled-components"
import { device } from "src/components/brakePoints"

const MainWrap = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  position: relative;

  @media ${device.laptop} {
    width: calc(100% - 100px);
    padding-left: 50px;
    padding-right: 50px;
  }
  @media ${device.mobile} {
    width: calc(100% - 40px);
    padding-left: 20px;
    padding-right: 20px;
  }
`
export default MainWrap
