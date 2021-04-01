import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: '0px',
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "#fff",
      boxShadow: "none",
    },
    textHeader: {
      color: "#213aa3",
      fontWeight: "bold",
      padding: " 0px",
      fontSize: " 1.5em",
      ["@media (max-width:500px)"]: {
        fontSize: " 16px",
        marginTop: "4em",
      },
    },
    activityDetail: {
      fontSize: "16px",
      textAlign: "left",
      color: "#7e7e7e",
      paddingLeft: "0px",
      marginTop: "0px",
      marginBottom: "0px",
    },
    more: {
      color: "#429EFE",
      width: "fit-content",
      fontSize: "13px",
      float: "right",
      display: "flex",
      ["@media (max-width:500px)"]: {
        marginRight: "0px",
        fontSize: "13px",
        marginTop: "0px",
      },
    },
    arrowPos: {
      width: "17px",
      Height: "17px",
      marginTop: "-2px",
    },
  })
);


export default function AutoGrid() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <p className={classes.textHeader}>
        กิจกรรมที่หน้าสนใจ
        <Link href="/productlist">
          <p className={classes.more}>
            ดูทั้งหมด
            <ArrowForwardIcon className={classes.arrowPos} />
          </p>
        </Link>
      </p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <Image
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"500"}
              height={"250"}
            />
            <p className={classes.activityDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <Image
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"500"}
              height={"250"}
            />
            <p className={classes.activityDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <Image
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"500"}
              height={"250"}
            />
            <p className={classes.activityDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
