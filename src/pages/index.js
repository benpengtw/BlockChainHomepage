import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"
import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"
import { motion } from "framer-motion"
import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>
      <Banner />
      <TextBlockImg
        id="perks"
        title="We have the tools to help you suceed"
        subtitle="Startup is perfect for helping to to start and grow your business. As
          you begin to gain new clients and expand you will see the benefits of
          a super-fast Gatsby website"
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="Speedy"
            content="Super-fast response times ensure your business is not affected"
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Affordable"
            content="A choice of packages to suit every business type and size"
          />
          <Perk
            img={perk3Img}
            alt="Super fast speed increases"
            title="Friendly"
            content="Advisors who are available 24/7, all with exprt knowledge"
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Our Packages"
        para="Choose the perfect solution for you. With benefits to suit all budgets Startup can offer amazing value and expert advice"
      >
        <Package />
      </Packages>
    </Layout>
  </>
)
