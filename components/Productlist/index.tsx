import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core";
import Layout from "../Layout";
import Footer from "../Footer";
import React from "react";
import Search2 from "../Search2";
import Description from "../Description";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Productlists from "../Productlists";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      backgroundColor: "#fff",
      boxShadow: "none",
    },
    paper2: {
      backgroundColor: "#fff",
      boxShadow: "none",
      padding: theme.spacing(2),
      textAlignLast: "center",
    },
    paper3: {
      backgroundColor: "#fff",
      boxShadow: "none",
      padding: theme.spacing(2),
      textAlignLast: "right",
    },
    paper4: {
      backgroundColor: "#fff",
      boxShadow: "none",
      padding: theme.spacing(2),
      textAlignLast: "left",
    },
    paper5: {
      ["@media (max-width:751px)"]: {
        display: "none",
      },
    },
    logo: {
      // float:'left',
      textAlignLast: "center",
    },
    love: {
      float: "right",
      textAlign: "right",
    },
    chat: {
      float: "right",
      textAlign: "right",
    },
    btnSell: {
      //   float: "right",
      marginLeft: "1em",
      color: "#fff",
      backgroundColor: "#00C900",
      ["@media (max-width:751px)"]: {
        marginLeft: "0em",
        fontSize: "11px",
      },
      ["@media (max-width:354px)"]: {
        marginLeft: "0em",
        fontSize: "9px",
      },
    },
    btnRegister: {
      //   float: "right",
      marginLeft: "1em",
      color: "#00C900",
      ["@media (max-width:1300px)"]: {
        display: "none",
      },
    },
    gridDis: {
      ["@media (max-width:751px)"]: {
        display: "none",
      },
    },
    textresult:{
      fontSize:'1.5em',
      fontWeight:'bold',
      color:'#213aa3',
    },
    arrow:{
      float:'right',
    },

  })
);

const Product = () => {
  // A Content
  // const content = props.data.data.content;

  const classes = useStyles();

  return (
    <Layout title="Productlist | KaideeWa.com">
      <Search2 />
      <Container maxWidth="lg" className="container">
        <div className={classes.root}>
          {/* <Gallery2 data={content} /> */}
          {/* <Productlists data={content} /> */}
          <Productlists/>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <p className={classes.textresult}>ผลการค้นหายอดนิยม</p>
            <p>Iphone 12 <ArrowForwardIcon className={classes.arrow}/></p>
            <p>Iphone xr <ArrowForwardIcon className={classes.arrow}/></p>
            <p>Ipad <ArrowForwardIcon className={classes.arrow}/></p>
            <p>Iphone11 pro max <ArrowForwardIcon className={classes.arrow}/></p>
            <p>Iphone x <ArrowForwardIcon className={classes.arrow}/></p>
          </Grid>
          <Description />
        </div>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Product;
