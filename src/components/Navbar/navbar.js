import React, { useState } from "react"
import styled from "styled-components"
import Logo from "../../images/logo.png"
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
      </div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
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
    width: 70%;
    justify-content: space-between;
    img {
      width: 38vw;
      height: 8vh;
      @media (min-width: 1200px) {
        width: 320px;
        height: auto;
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
