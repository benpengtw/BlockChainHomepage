import React from "react"
import styled from "styled-components"

const Packages = ({ title, para, children }) => {
  return (
    <PackagesWrapper id="packages">
      <div className="text-area">
        <h2>{title}</h2>
        <p>{para}</p>
      </div>
      <div className="flex-container">{children}</div>
    </PackagesWrapper>
  )
}

const PackagesWrapper = styled.section`
  padding: 100px 30px;
  text-align: center;

  .text-area {
    max-width: 500px;
    margin: 0 auto;
    @media (min-width: 768px) {
      max-width: 650px;
    }

    @media (min-width: 1200px) {
      max-width: 900px;
    }
  }

  h2 {
    background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .flex-container {
    flex-direction: row;
    margin: 6rem;
    padding-top: 20px;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }
`

export default Packages
