import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "src/components/brakePoints"
import logo from "src/assets/svg/mybigaday_basic_white_logo.svg"
import logoBlack from "src/assets/svg/mybigaday_basic_black_logo.svg"

const NavigationWraper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Cirka-Regular";
  height: 120px;
  position: fixed;
  width: 1200px;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 100;
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

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`

const NavigationListItem = styled.li`
  margin-left: 150px;
  position: relative;

  a {
    text-decoration: none;
    color: #151515;
  }

  a.navActive {
    opacity: 0.3;
  }

  a::before {
    content: "";
    position: absolute;
    left: -8px;
    top: calc(50% + 2px);
    width: 50px;
    height: 1px;
    background-color: #606060;
    transform: translate(-100%, 0);
    transition: all 0.5s;
  }

  a.navActive::before {
    background-color: #c1c9bb;
  }

  a:hover::before {
    width: 0px;
    transition: all 0.5s;
  }

  a.navActive:hover::before {
    width: 50px;
  }

  @media ${device.laptop} {
    margin-left: 100px;
  }
`

const Navigation = props => (
  <NavigationWraper>
    <Link
      to="/"
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <img src={props.col ? logo : logoBlack} alt="Logo" />
    </Link>
    <NavigationList
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <NavigationListItem>
        <Link to="/portfolio" activeClassName="navActive">
          portfolio
        </Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/onas/" activeClassName="navActive">
          o nas
        </Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link>sklep</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/kontakt/" activeClassName="navActive">
          kontakt
        </Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWraper>
)

export default Navigation
