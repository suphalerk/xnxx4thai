import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: '0px 16px 0px 16px',
      textAlign: "left",
      color: theme.palette.text.secondary,
      backgroundColor: "#f2f2f2",
      boxShadow: "none",
      ["@media (width:375px)"]: {
        width: "330px",
      },
    },
    spacingxmobile: {
      marginBottom: '3em',
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
      textAlign: 'center',
    },
    textHeader: {
      fontSize: "18px",
      textAlign: "left",
      backgroundColor: "#00C660",
      padding: " 5px 10px 16px 10px",
      color: " #fff",
      margin:'-15px'
    },
    btnDis:{
      color:'#00C660'
    },
    TextInfo:{
      color:'#111',
      marginTop:'1.5em'
    },
    btnSell:{
      backgroundColor: '#fff',
      color: '#000',
      float:'right'
    },
    textSpan:{
      paddingLeft:'10px'
    }

}
  )
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
      </Grid>
      <Grid container spacing={3} className={classes.spacingxmobile}>
        <Grid item xs={12} lg={6} md={6}>
          <Paper className={classes.paper}>
            <p className={classes.textHeader}>
              ผู้ขาย<Button className={classes.btnSell}>ลงขาย</Button>
            </p>
            <Typography className={classes.TextInfo} color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
             <span className={classes.textSpan}>ขั้นตอนง่ายๆ ใครก็ลงขายได้</span>
            </Typography>
            <Typography className={classes.TextInfo} color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
             <span className={classes.textSpan}> โปรโมทขายเพื่อเพิ่มโอกาศในการขายมากขึ้น</span>
            </Typography>
            <Typography className={classes.TextInfo} color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
               <span className={classes.textSpan}>แชทกับลูกค้าโดยตรงเพื่อเพิ่มโอกาสในการปิดการขาย</span>
            </Typography>
            <Typography className={classes.TextInfo} color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
               <span className={classes.textSpan}>มีระบบหลังบ้านในการจัดการรายการเพื่อโปรโมทสิ้นค้าได้ง่าย</span>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <Paper className={classes.paper}>
          <p className={classes.textHeader}>
              ผู้ซื้อ
            </p>
            <Typography className={classes.TextInfo} color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
               <span className={classes.textSpan}>สะดวกมั่นใจในการเลือกซื้อสินค้าที่หลากหลาย</span>
            </Typography>
            <Typography className={classes.TextInfo} color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
               <span className={classes.textSpan}>พูดคุย สอบถามกับคนขายได้โดยตรงเพื่อความปรอดภัยในการซื้อ</span>
            </Typography>
            <Typography className={classes.TextInfo} color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
               <span className={classes.textSpan}>มีาทงเลือกมากมาย กับ ร้านค้าและสินค้ามากมายอัพเดทตลอดเวลา</span>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
