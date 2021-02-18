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
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "#f2f2f2",
      boxShadow: "none",
      ["@media (width:375px)"]: {
        width: "374px",
      },
     
    },
    spacingxmobile: {
      
      ["@media (width:375px)"]: {
        display: "contents",
      },
    },
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
            <p className="text-green2">
              ตอบโจทย์ทุกการซื้อขายกับเรา{" "}
              <img className="small-logo" src="/images/logo1.png" />
            </p>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.spacingxmobile}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <p className="text-header2">
              ผู้ขาย<Button className="btn-sell2">ลงขาย</Button>
            </p>
            <Typography color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
              ขั้นตอนง่ายๆ ใครก็ลงขายได้
            </Typography>
            <Typography color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
              โปรโมทขายเพื่อเพิ่มโอกาศในการขายมากขึ้น
            </Typography>
            <Typography color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
              แชทกับลูกค้าโดยตรงเพื่อเพิ่มโอกาสในการปิดการขาย
            </Typography>
            <Typography color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
              มีระบบหลังบ้านในการจัดการรายการเพื่อโปรโมทสิ้นค้าได้ง่าย
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <p className="text-header2">
              ผู้ซื้อ<Button className="btn-sell3">ลงขาย</Button>
            </p>
            <Typography color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
              สะดวกมั่นใจในการเลือกซื้อสินค้าที่หลากหลาย
            </Typography>
            <Typography color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
              พูดคุย สอบถามกับคนขายได้โดยตรงเพื่อความปรอดภัยในการซื้อ
            </Typography>
            <Typography color={"primary"}>
              <Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
              มีาทงเลือกมากมาย กับ ร้านค้าและสินค้ามากมายอัพเดทตลอดเวลา
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
