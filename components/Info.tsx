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
      padding: "0px 16px 0px 16px",
      textAlign: "left",
      color: theme.palette.text.secondary,
      backgroundColor: "#f2f2f2",
      boxShadow: "none",
      ["@media (width:375px)"]: {
        width: "330px",
      },
    },
    spacingxmobile: {
      marginBottom: "3em",
      ["@media (width:375px)"]: {
        display: "contents",
      },
    },
    smallLogo: {
      width: "115px",
      margin: "0px 0px -6px 0px",
      paddingLeft: " 5px",
    },
    textGreen: {
      color: "#00C900",
      fontSize: "1.5rem",
      padding: "0",
      textAlign: "center",
    },
    textHeader: {
      fontSize: "18px",
      textAlign: "left",
      backgroundColor: "#00C660",
      padding: "1px 8px 1px 15px",
      color: " #fff",
      margin: "-15px",
    },
    textHeader2: {
      color: " #000",
      marginTop: "0px",
      marginLeft: "-15px",
      marginRight: "-15px",
      padding: "1px 8px 1px 15px",
      fontSize: "18px",
      textAlign: "left",
      backgroundColor: "#d7dde1",
      boxShadow: "none",
      borderRadius:'0px'
      // backgroundColor: "#E8EEF2",
    },
    btnDis: {
      color: "#00C660",
    },
    TextInfo: {
      color: "#111",
      marginTop: "1.5em",
    },
    btnSell: {
      backgroundColor: "#fff",
      color: "#000",
      float: "right",
      padding: "3px 21px",
    },
    btnSell2: {
      backgroundColor: "#00C660",
      color: "#000",
      float: "right",
      padding: "3px 21px",
    },
    textSpan: {
      paddingLeft: "10px",
    },
    gridCenter: {
      alignSelf: "center",
    },
    grid: {
      padding: "30px",
    },
    ptext: {
      color: "#d7dde1",
    },
    gridMobile:{
      display: 'flex',
      ["@media (max-width:800px)"]: {
        display: 'block !important',
      },
    }
    // imgCorrect: {
    //   marginTop: "5px !important",
    // },
  })
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ backgroundColor: "#f2f2f2", marginTop: "1em" }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <p className={classes.textGreen}>
              ตอบโจทย์ทุกการซื้อขายกับเรา
              <img className={classes.smallLogo} src="/images/logo1.png" />
            </p>
          </Paper>
        </Grid>
        <Grid item lg={12} className={classes.gridMobile}>
          <Grid item xs={12} lg={6} className={classes.grid}>
            <Paper className={classes.textHeader}>
              <p>
                ผู้ขาย<Button className={classes.btnSell}>ลงขาย</Button>
              </p>
            </Paper>
            <Paper
              style={{ marginTop: "15px" }}
              className={classes.textHeader2}
            >
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  ขั้นตอนง่าย ใครก็ลงขายได้
                </span>
              </p>
            </Paper>
            <Paper className={classes.textHeader2}>
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  โปรโมทขายเพื่อเพิ่มโอกาศในการขายมากขึ้น
                </span>
              </p>
            </Paper>
            <Paper className={classes.textHeader2}>
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  แชทกับลูกค้าโดยตรงเพื่อเพิ่มโอกาสในการปิดการขาย
                </span>
              </p>
            </Paper>
            <Paper className={classes.textHeader2}>
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  มีระบบหลังบ้านในการจัดการรายการเพื่อโปรโมทสิ้นค้าได้ง่าย
                </span>
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6} className={classes.grid}>
            <Paper className={classes.textHeader}>
              <p>
                ผู้ซื้อ<Button className={classes.btnSell2}></Button>
              </p>
            </Paper>
            <Paper
              style={{ marginTop: "15px" }}
              className={classes.textHeader2}
            >
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  สะดวกมั่นใจในการเลือกซื้อสินค้าที่หลากหลาย
                </span>
              </p>
            </Paper>
            <Paper className={classes.textHeader2}>
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  พูดคุย สอบถามกับคนขายได้โดยตรงเพื่อความปรอดภัยในการซื้อ
                </span>
              </p>
            </Paper>
            <Paper className={classes.textHeader2}>
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  มีาทงเลือกมากมาย กับ ร้านค้าและสินค้ามากมายอัพเดทตลอดเวลา
                </span>
              </p>
            </Paper>
            <Paper className={classes.textHeader2}>
              <p className={classes.ptext}>xxxxxx</p>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
