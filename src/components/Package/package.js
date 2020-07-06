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
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    minWidth: 512,
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
      <Grid classes={gridStyles} container spacing={4} wrap={"nowrap"}>
        <Grid item>
          <CustomCard
            classes={styles}
            title={"第三方金流"}
            subtitle={"Be a Legend!"}
            image={
              "https://www.icoappfactory.com/wp-content/uploads/2019/10/payment-forwardered.jpg"
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles}
            title={"募資平台"}
            subtitle={"What are you waiting?"}
            image={
              "https://assets.entrepreneur.com/content/3x2/2000/how-set-crowdfunding-goal.jpg?width=700&crop=4:3"
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles}
            title={"產銷履歷"}
            subtitle={"Are you ready?"}
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
