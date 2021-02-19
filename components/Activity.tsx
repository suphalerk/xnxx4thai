import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "#fff",
      boxShadow:'none',
    },
    textHeader: {
      color: "rgb(0 0 0 / 70%)",
      padding: " 0px",
      fontSize: " 1.5em",
      ["@media (max-width:500px)"]: {
        fontSize: " 16px",
        marginTop:'4em'
      },
      
    },
    activityDetail: {
      fontSize: "11px",
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
        marginTop:'0px'
      },
    },
  })
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.textHeader}>
        กิจกรรมที่หน้าสนใจ
        <p className={classes.more}>
          ดูทั้งหมด
          <ArrowForwardIcon />
        </p>
      </p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4} >
          <Paper className={classes.paper}>
            <Image
              className="img-category"
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
        <Grid item xs={12} sm={4} md={4} lg={4} >
          <Paper className={classes.paper}>
            <Image
              className="img-category"
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
        <Grid item xs={12} sm={4} md={4} lg={4} >
          <Paper className={classes.paper}>
            <Image
              className="img-category"
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
