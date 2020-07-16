import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  font-weight: lighter ;
}
  body {
    font-family: Fira Sans;
    background-color: #F4F4F4;
    overflow-x: hidden;
  }




  `

export default GlobalStyle
