import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const TextBlock = ({ children, id }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <TextBlockWrapper id={id}>
      <div className="content-container">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
          transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
        >
          <h1>
            Developing a new business is never easy, but <span>WeChain</span> is
            here to help
          </h1>
          <h1>
            區塊鏈將成為科技、經濟發展之趨勢<span>WeChain</span>
            除了打造全亞洲第一間去中心化交易所外，亦積極投入區塊鏈技術研究，開創異業結合之可能性，為各大產業提升效率、減低成本，並增加附加價值。
          </h1>

          {children}
        </motion.div>
      </div>
    </TextBlockWrapper>
  )
}

const TextBlockWrapper = styled.section`
  background: linear-gradient(45deg, #060c21, #0d0139);
  color: #fff;
  text-align: left;
  padding: 60px 20px;
  .content-container {
    max-width: 960px;
    min-height: 90vh;
    text-align: center;
    height: 90%;
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px) {
      max-width: 650px;
    }

    @media (min-width: 1200px) {
      max-width: 1200px;
    }

    @media (min-width: 768px) {
      padding: 80px 30px;
      text-align: center;
    }

    h2 {
      color: #ee00b3;
      background: -webkit-linear-gradient(45deg, #f4ec41, #03aaf4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0.99;
    }

    h1 {
      color: #bfe8ff;
      font-size: 2rem;
      line-height: 1.2;
      opacity: 0.85;
      span {
        background: -webkit-linear-gradient(
          45deg,
          rgba(0, 210, 103, 1) 0%,
          rgba(130, 216, 255, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      @media (max-width: 414px) {
        font-size: 1.2rem;
      }
    }

    p {
      margin-bottom: 40px;
      text-shadow: 0px 0px 5px rgba(8, 0, 8, 1);
      opacity: 0.85;
    }
  }
`

export default TextBlock
