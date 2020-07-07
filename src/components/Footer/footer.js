import React from "react"
import styled from "styled-components"
//import socialIcons from "../../constants/social-icons"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="credit">
        Designed & developed by{" "}
        <a
          href="http://blockchain.wegames.com.tw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wegames BlockChain
        </a>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #000;
  padding: 20px 30px;
  text-align: center;

  .credit {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;

    a {
      padding: 0;
      font-size: 0.85rem;
      text-decoration: none;
      background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  a {
    color: #fff;
    font-size: 1.75rem;
    padding: 0 0.5rem;

    svg {
      vertical-align: middle;
    }
  }
`

export default Footer
