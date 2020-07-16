import React from "react"
import styled from "styled-components"
// import MainNav from "src/components/Navigation.js"
import MainFooter from "src/components/MainFooter/MainFooter.js"
import GlobalStyle from "src/assets/styles/globalStyles"

const MainWrap = styled.div`
  position: relative;
`

const MainLayout = ({ children }) => (
  <MainWrap>
    <GlobalStyle />

    {children}
    <MainFooter />
  </MainWrap>
)

export default MainLayout
