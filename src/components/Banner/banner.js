import React from "react"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import styled from "styled-components"
import TextBlock from "../TextBlock/textBlock"
import Button from "../Button/button"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
const Banner = () => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <BannerWrapper>
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: -100,
          right: 0,
          width: "100vw",
          height: "100vh",
          zIndex: "0",
          objectFit: "fill",
          objectPosition: "center",
          opacity: "0.5",
        }}
      >
        <source src={withPrefix("/blockchainW.webm")} type="video/webm" />
      </video>
      <TextBlock id="about">
        <Link to="perks" smooth={true} duration={500}>
          <Button cta="Tell Me More!" />
        </Link>
      </TextBlock>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.section``

export default Banner
