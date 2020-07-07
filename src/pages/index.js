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
import perk1Img from "../images/perk1Img.svg"
import perk2Img from "../images/perk2Img.svg"
import perk3Img from "../images/perk3Img.svg"
import { motion } from "framer-motion"
import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>
      <Banner />
      <TextBlockImg
        id="perks"
        title="獨家特色"
        subtitle="Wegames BlockChain 專注於區塊鏈金融科技之研究開發，透過加密貨幣第三方錢包、區塊鏈支付系統、金流模組等研發設計，架構完整的區塊鏈及金融生態系。區塊鏈技術與金融的融合，能有效提升金融業之服務效率，並節省成本；亦能提升科技產業的使用者體驗，並降低金融服務門檻。這種全新的金融模式，將會是未來最主流的趨勢。"
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="-支付-"
            content="客製化錢包、微閃電支付、多鏈種支付支援"
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="-數位身份-"
            content="模組化販售D-KYC、EID數位身分認證、區塊鏈分散式儲存技術"
          />
          <Perk
            img={perk3Img}
            alt="Super fast speed increases"
            title="-娛樂-"
            content="客製化遊戲模組、各式主鏈DAPP開發、區塊鏈金流框架"
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Solutions"
        para="近年來區塊鏈技術已成為繼網際網路之後，新一波即將改變世界脈動的浪潮，其應用除眾所周知的Fintech之外，亦廣泛被使用在物流、溯源、慈善、支付、娛樂等各大產業。Wegames BlockChain 自成立以來不斷接收來自四面八方的合作機會，在各大產業與區塊鏈技術的應用結合擁有十分豐富的資歷，未來將以區塊鏈技術之去中心化、匿名性、不可竄改性、可追蹤性、加密安全性五大特色為出發點，專注替企業打造合適的區塊鏈解決方案。"
      >
        <Package />
      </Packages>
    </Layout>
  </>
)
