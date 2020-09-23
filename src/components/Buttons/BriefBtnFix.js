import React from "react"
import styled from "styled-components"
import ButtonBox from "src/components/Buttons/ButtonBox"

const Btn = styled(ButtonBox)`
  position: fixed;
  top: 200px;
  right: 0;
  z-index: 900;
  color: #fff;
  transition: all 0.5s;

  &::before {
    background-color: #fff;
  }

  &.hide {
    transform: translate(90%, 0);
    transition: all 0.5s;
  }
`

class BriefBtnFix extends React.Component {
  state = { showMenu: true, scrolled: false }

  showButton = () => {
    console.log("Show")
    this.setState({
      showMenu: true,
    })
  }

  hideButton = () => {
    if (this.state.scrolled) {
      this.setState({
        showMenu: false,
      })
    }
  }

  handleScroll = () => {
    let scrollTop = window.pageYOffset
    if (scrollTop > 200) {
      this.setState({
        showMenu: false,
        scrolled: true,
      })
    } else {
      this.setState({
        showMenu: true,
        scrolled: false,
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  render() {
    const { children } = this.props
    const { showMenu } = this.state
    const btnClass = showMenu ? "" : "hide"
    return (
      <Btn
        href={this.props.Link}
        target="blank"
        className={btnClass}
        onMouseEnter={this.showButton}
        onMouseLeave={this.hideButton}
      >
        {children}
      </Btn>
    )
  }
}

export default BriefBtnFix
