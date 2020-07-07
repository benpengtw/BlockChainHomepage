import React, { useState } from "react"
import styled from "styled-components"
import Logo from "../../images/startup-logo.svg"
import { Link, animateScroll as scroll } from "react-scroll"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  link: {
    color: "#fff",
    transition: "0.3s",
    "&:hover": {
      color: "#e609b5",
    },
  },
  linkOpen: {
    color: "#e609b5",
    transition: "0.3s",
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavWrapper>
      <div className="masthead flex-container">
        <img src={Logo} alt="Startup Logo" />
        <button
          className={
            isOpen
              ? `${"toggle-btn"} ${"toggle-btn-active"}`
              : `${"toggle-btn"}`
          }
          type="button"
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        {console.log(isOpen)}
        <Grid item>
          <Link
            className={classes.link}
            activeClass={classes.linkOpen}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            關於我們
          </Link>
        </Grid>
        <Grid item>
          <Link
            className={classes.link}
            activeClass={classes.linkOpen}
            to="perks"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            特色
          </Link>
        </Grid>
        <Grid item>
          <Link
            className={classes.link}
            activeClass={classes.linkOpen}
            to="packages"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            解決方案
          </Link>
        </Grid>
      </Grid>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  .masthead {
    z-index: 3;
    width: 100%;
    justify-content: space-between;
    img {
      width: 90px;
      @media (min-width: 768px) {
        width: 100px;
      }
      @media (min-width: 1200px) {
        width: 120px;
      }
    }
  }
  .toggle-btn {
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: transparent;
    border: none;
    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      transition: 0.2s ease-in;
      &:nth-child(1) {
        transform: translateY(-5px);
      }
      &:nth-child(3) {
        transform: translateY(5px);
      }
    }
    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }
        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }
  @media (min-width: 992px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
    }
    .toggle-btn {
      display: none;
    }
  }
`

export default Navbar
