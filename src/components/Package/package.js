import React from "react"
import Color from "color"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CardActionArea from "@material-ui/core/CardActionArea"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}))

const useSlopeCardMediaStyles = makeStyles(() => ({
  root: ({ bgColor = "#fff" }) => ({
    width: "100%",
    paddingBottom: "56.25%",
    clipPath: "polygon(0 0, 100% 0%, 100% 84%, 0% 100%)",
    backgroundColor: bgColor,
  }),
}))

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    width: "25vw",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "500px",
    "@media (max-width: 414px)": {
      minWidth: "80vw",
    },

    "@media (min-width: 1200px)": {
      maxWidth: "70vw",
    },
  },
  card: ({ color }) => ({
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    }
  },
  title: {
    fontFamily: "Noto Sans TC",
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Noto Sans TC",
    color: "#000",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}))

const CustomCard = ({ classes, image, title, subtitle }) => {
  const mediaStyles = useSlopeCardMediaStyles()
  return (
    <CardActionArea className={classes.actionArea} href="https://google.com">
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}

export const Package = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles()
  const styles = useStyles({ color: "#FFF" })
  return (
    <>
      <Grid
        classes={gridStyles}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={10}
      >
        <Grid item>
          <CustomCard
            classes={styles}
            title={"第三方金流"}
            subtitle={
              "Wegames BlockChain 為客戶建置專業之去中心化交易平台，其具有去中心化、匿名性、不可竄改性、可追蹤性、加密安全性五大特色。聯盟中各大交易所將可在後端 API 共用訂單池，大幅提高交易量與成交速率。同時，也具備可追蹤且不易竄改之特性，在沒有第三方的情況下，仍能安全交易。"
            }
            image={
              "https://www.icoappfactory.com/wp-content/uploads/2019/10/payment-forwardered.jpg"
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles}
            title={"募資平台"}
            subtitle={
              "電子證照，文檔存證區塊鏈解決方案是 Wegames BlockChain 與合作夥伴共同實現的一套基礎區塊鏈技術的文檔管理方案。將包括證件，證書，合同等重要文檔數字化，通過認證機構審核後存檔， 利用區塊鏈技術不可糾正的改特性，解決證書，票據，合同等易被篡改等問題。"
            }
            image={
              "https://assets.entrepreneur.com/content/3x2/2000/how-set-crowdfunding-goal.jpg?width=700&crop=4:3"
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles}
            title={"產銷履歷"}
            subtitle={
              "Wegames BlockChain提供的農業解決方案是一個基於區塊鏈技術的農業大數據平台，該平台整合了與農業相關的種植/養殖，生產加工，包裝，物流，銷售過程中的各類關鍵數據， 並且通過授權，區塊鏈上的信息可以與參與方及終端用戶共享，為企業大數據分析提供可靠憑證，實現智慧農業。"
            }
            image={
              "https://www.vechain.com/_nuxt/img/solution_pic9.8463dc3.png"
            }
          />
        </Grid>
      </Grid>
    </>
  )
})

export default Package
