import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import { Button } from "@material-ui/core";

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
    },
    btnSell2: {
      //   float: "right",
      marginLeft: "1em",
      color: "#00C900",
    },
  })
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs lg={3}>
          <Paper className={classes.paper2}>
            <Image
              className={classes.logo}
              src="/images/logo1.png"
              alt=""
              width={"170"}
              height={"45"}
            />
          </Paper>
        </Grid>
        <Grid item xs lg={3}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs lg={1}>
          <Paper className={classes.paper3}>
            <Image
              className={classes.love}
              src="/images/love.png"
              alt=""
              width={"35"}
              height={"35"}
            />
          </Paper>
        </Grid>
        <Grid item xs lg={1}>
          <Paper className={classes.paper4}>
            <Image
              className={classes.love}
              src="/images/chat2.png"
              alt=""
              width={"35"}
              height={"35"}
            />
          </Paper>
        </Grid>
        <Grid item xs lg={3}>
          <Paper className={classes.paper}>
            <Button className={classes.btnSell2} color="primary">
              เข้าสู่ระบบ / สมัครสมาชิก
            </Button>
            <Button className={classes.btnSell} variant="contained">
              ลองขาย
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
