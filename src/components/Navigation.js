import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "src/components/brakePoints"
import logo from "src/assets/svg/mybigaday_basic_white_logo.svg"
import logoBlack from "src/assets/svg/mybigaday_basic_black_logo.svg"
import insta from "src/assets/svg/insta.svg"
import facebook from "src/assets/svg/facebook.svg"
import pinterest from "src/assets/svg/pinterest.svg"
import navClose from "src/assets/svg/nav-mobile-icon.svg"
import hamburger from "src/assets/svg/hamburger.svg"
import hamburgerBlack from "src/assets/svg/hamburger-black.svg"

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
  z-index: 999;
  @media ${device.laptop} {
    width: calc(100% - 100px);
    padding-left: 50px;
    padding-right: 50px;
  }
  @media ${device.tablet} {
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
  @media ${device.tablet} {
    flex-direction: column;
    position: absolute;
    top: 0;
    height: 100vh;
    justify-content: center;
    width: 100vw;
    left: 0px;
    background-color: #cdd3c8;
    transform: translate(0, 0%);
    transition: all 0.5s;
    &.closed {
      transform: translate(0, 100%);
      transition: all 0.5s;
    }
  }
`
const NavigationSocial = styled.div`
  bottom: 5vh;
  position: absolute;
  display: none;
  @media ${device.tablet} {
    display: inline-block;
  }
`

const SocialIconLink = styled.a`
  height: 20px;
  width: 20px;
  display: inline-block;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  padding: 30px;
`
const CloseBtn = styled.button`
  background-image: url(${navClose});
  position: absolute;
  top: 50px;
  right: 50px;
  height: 30px;
  width: 30px;
  background-size: cover;
  background-position: center;
  background-color: transparent;
  border: none;
  display: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  @media ${device.tablet} {
    display: inline-block;
  }
  @media ${device.mobile} {
    right: 20px;
  }
`

const Hamburger = styled.button`
  background-image: url(${props => (props.col ? hamburger : hamburgerBlack)});
  position: absolute;
  top: 50px;
  right: 50px;
  height: 10px;
  width: 22px;
  background-size: cover;
  background-position: center;
  background-color: transparent;
  border: none;
  display: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  @media ${device.tablet} {
    display: inline-block;
  }
  @media ${device.mobile} {
    right: 20px;
  }
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
  @media ${device.tablet} {
    font-size: 25px;
    margin: 25px 0;
    a::before {
      content: "";
      width: 0;
      height: 0;
    }
  }
`

class Navigation extends React.Component {
  state = {
    isClosed: true,
  }
  closeFn = () => {
    this.setState({
      isClosed: true,
    })
  }
  openFn = () => {
    this.setState({
      isClosed: false,
    })
    console.log(this.state.isClosed)
  }
  render() {
    return (
      <NavigationWraper>
        <Link
          to="/"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <img src={this.props.col ? logo : logoBlack} alt="Logo" />
        </Link>
        <Hamburger onClick={this.openFn} />
        <NavigationList className={this.state.isClosed ? "closed" : ""}>
          <CloseBtn onClick={this.closeFn} />
          <NavigationListItem
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <Link to="/portfolio" activeClassName="navActive">
              portfolio
            </Link>
          </NavigationListItem>
          <NavigationListItem
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <Link to="/onas/" activeClassName="navActive">
              o nas
            </Link>
          </NavigationListItem>
          <NavigationListItem
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <a href="https://shopmybigday.pl/">sklep</a>
          </NavigationListItem>
          <NavigationListItem
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <Link to="/kontakt/" activeClassName="navActive">
              kontakt
            </Link>
          </NavigationListItem>
          <NavigationSocial>
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
          </NavigationSocial>
        </NavigationList>
      </NavigationWraper>
    )
  }
}

export default Navigation
