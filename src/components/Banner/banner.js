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
          minWidth: "100%",
          minHeight: "100%",
          zIndex: "0",
          objectFit: "fill",
          objectPosition: "center",
        }}
      >
        <source src={withPrefix("/blockchainW.webm")} type="video/webm" />
      </video>
      <TextBlock
        id="about"
        title="Developing a new business is never easy, but Startup is here to help"
        paragraph="區塊鏈將成為科技、經濟發展之趨勢，STAR BIT除了打造全亞洲第一間去中心化交易所外，亦積極投入區塊鏈技術研究，開創異業結合之可能性，為各大產業提升效率、減低成本，並增加附加價值。

        打造一個台灣發跡、全球發光的區塊鏈技術聯盟，見證區塊鏈改變世界的未來，是WeGames不變的初心"
        bigText="區塊鏈技術締造出萬物代幣化的未來，資訊與資產的流通與交換將超乎你對現有世界的想像，我們期待用思考與智慧，帶領台灣在橫空出世的區塊鏈視界佔有一席之地 思考，達成未來的美好。區塊鏈技術締造出萬物代幣化的未來，資訊與資產的流通與交換將超乎你對現有世界的"
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button cta="Tell Me More!" />
        </Link>
      </TextBlock>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.section`
  .hero-content {
      text-align: center;
      height: 100%;
      width: 100%;
      max-width: 400px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      
      @media (min-width: 768px) {
        max-width: 650px;
      }

      h1 {
        font-size: 1.75rem;
        line-height: 1.2;

        span {
          background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      p {
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1.2;
        font-size: 1.15rem;

        @media (min-width: 768px) {
          font-size: 1.35rem;
        }

        @media (min-width: 1200px) {
          font-size: 1.5rem;
        }
      }

      button,
      .anchor {
        margin: 0 auto;
      }

      @media (min-width: 768px) {
        max-width: 800px;

        h1 {
          font-size: 3rem;
        }
      }

      @media (min-width: 1200px) {
        h1 {
          font-size: 4rem;
        }
      }
    }
  }
`

export default Banner
