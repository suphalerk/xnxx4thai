import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/car.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">รถยนต์</a>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/Motocycle2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">มอเตอร์ไซต์</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/Real-estate2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">อสังหาริมทรัพย์</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/Mobile-tablet2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">มือถือ แท็บเล็ต</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/Computer2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">คอมพิวเตอร์</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}><Image
            src="/images/Electrical2.png"
            alt=""
            width={500}
            height={500}
          />
            <a className="text-link">เครื่องใช่ไฟฟ้า</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/Pet2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">สัตว์เลี้ยง</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/Home-garden2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">บ้านและสวน</a></Paper>
        </Grid>

      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/Amulets2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">พระเครื่อง</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/Car-accessories2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">อะไหล่รถยนต์</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/Bicycle2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">จักรยานต์</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/Music2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">เครื่องดนตรี</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/Wrist-watch2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">นาฬิกา</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/Fasion2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">เสื้อผ้าและแฟชั่น</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/shoes2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">รองเท้า</a></Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
              src="/images/sport2.png"
              alt=""
              width={500}
              height={500}
            />
            <a className="text-link">กีฬา</a></Paper>
        </Grid>

      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Image
            src="/images/Camera2.png"
            alt=""
            width={500}
            height={500}
          />
            <a className="text-link">กล้อง</a></Paper>
        </Grid>
        <Grid item xs={1}>
        <Paper className={classes.paper}>
            <Image
            src="/images/Bag2.png"
            alt=""
            width={500}
            height={500}
          />
          <a className="text-link">กระเป๋า</a></Paper>
        </Grid>
        <Grid item xs={1}>
        <Paper className={classes.paper}>
            <Image
            src="/images/game2.png"
            alt=""
            width={500}
            height={500}
          />
          <a className="text-link">เกมส์</a></Paper>
        </Grid>
        <Grid item xs={1}>
        <Paper className={classes.paper}>
            <Image
            src="/images/bait2.png"
            alt=""
            width={500}
            height={500}
          />
         <a className="text-link">เป็ดตกปลา เหยื่อ</a></Paper>
        </Grid>
        <Grid item xs={1}>
        <Paper className={classes.paper}>
            <Image
            src="/images/Model2.png"
            alt=""
            width={500}
            height={500}
          />
          <a className="text-link">โมเดล</a></Paper>
        </Grid>
        <Grid item xs={1}>
        <Paper className={classes.paper}>
            <Image
            src="/images/Toy2.png"
            alt=""
            width={500}
            height={500}
          />
         <a className="text-link">แม้และเด็ก</a></Paper>
        </Grid>
        <Grid item xs={1}>
        <Paper className={classes.paper}>
            <Image
            src="/images/plant2.png"
            alt=""
            width={500}
            height={500}
          />
          <a className="text-link">เกษตร</a></Paper>
        </Grid>
        <Grid item xs={1}>
        <Paper className={classes.paper}>
            <Image
            src="/images/Travel2.png"
            alt=""
            width={500}
            height={500}
          />
          <a className="text-link">ท่องเที่ยว</a></Paper>
        </Grid>

      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={1}>
        <Paper className={classes.paper}>
            <Image
            src="/images/car2.png"
            alt=""
            width={500}
            height={500}
          />
          <a className="text-link">สุขภาพและความงาน</a></Paper>
        </Grid>
        <Grid item xs={1}>
        <Paper className={classes.paper}>
            <Image
            src="/images/Coffee2.png"
            alt=""
            width={500}
            height={500}
          />
          <a className="text-link">ชา กาแฟ</a></Paper>
        </Grid>
        <Grid item xs={1}>
        <Paper className={classes.paper}>
            <Image
            src="/images/Education2.png"
            alt=""
            width={500}
            height={500}
          /><a className="text-link">การเรียน</a></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
