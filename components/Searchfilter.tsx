import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image'
import { Keyword } from '../interfaces/product'
import { Grid, Paper} from '@material-ui/core';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root3: {
      maxWidth: '10%',
      display: 'inline-grid',
      textAlign: 'center',
    },
    media: {
      height: 140,
    },
    root: {
      flexGrow: 1,
    },
    root2: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(0),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor:'#fff',
      boxShadow:'none',
    },
  }),
);

const keywordTypes = [
  { key: "อสังหาริมทรัพย์", data: ["บ้าน", "ที่ดิน"] },
  { key: "รถยนต์", data: ["รถยนต์", "รถบรรทุก"] },
  { key: "มอเตอร์ไซค์", data: ["มอเตอร์ไซค์"] },
  { key: "มือถือ แท๊บเล็ต", data: ["มือถือ แท๊บเล็ต", "samsung", "xiaomi", "oppo", "Huawei", "OnePlus", "Vivo"] },
  { key: "คอมพิวเตอร์", data: ["คอมพิวเตอร์"] },
  { key: "เครื่องใช้ไฟฟ้า", data: ["เครื่องใช้ไฟฟ้า"] },
  { key: "สัตว์เลี้ยง", data: ["สัตว์เลี้ยง"] },
  { key: "บ้านและสวน", data: ["บ้านและสวน"] },
  { key: "พระเครื่อง", data: ["พระเครื่อง"] },
  { key: "อะไหล่ยนต์", data: ["อะไหล่ยนต์"] },
  { key: "จักรยาน", data: ["จักรยาน"] },
  { key: "เครื่องดนตรี", data: ["เครื่องดนตรี", "กีตาร์"] },
  { key: "นาฬิกา", data: ["นาฬิกา"] },
  { key: "เสื้อผ้าและแฟชั่น", data: ["เสื้อผ้าและแฟชั่น"] },
  { key: "รองเท้า", data: ["รองเท้า"] },
  { key: "กีฬา", data: ["กีฬา", "อุปกรณ์กีฬา"] },
  { key: "กล้อง", data: ["กล้อง"] },
  { key: "กระเป๋า", data: ["กระเป๋า"] },
  { key: "เกมส์", data: ["เกมส์"] },
  { key: "เบ็ดตกปลา เหยื่อ", data: ["เบ็ดตกปลา", "เหยื่อปลอม"] },
  { key: "โมเดล", data: ["โมเดล"] },
  { key: "แม่และเด็ก", data: ["แม่และเด็ก"] },
  { key: "เกษตร", data: ["เกษตร"] },
  { key: "ท่องเที่ยว", data: ["ท่องเที่ยว"] },
  { key: "สุขภาพและความงาม", data: ["สุขภาพและความงาม"] },
  { key: "ชา กาแฟ", data: ["กาแฟ"] },
  { key: "การเรียน", data: ["การเรียน"] },
]

const FullWidthGrid = (props: { keywords: Keyword[] }) => {

  const keywords = props.keywords

  // Uniqe keywords
  const keywordFilter = keywordTypes.map((type) => {
    if (keywords.find((k) => type.data.includes(k.keyword))) { return type }
    return undefined
  }).filter(x => x !== undefined)

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/car.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">รถยนต์</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Motocycle2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">มอเตอร์ไซค์</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Real-estate2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">อสังหาริมทรัพย์</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Mobile-tablet2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">มือถือ แท็บเล็ต</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Computer2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">คอมพิวเตอร์</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Electrical2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">เครื่องใช้ไฟฟ้า</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Pet2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">สัตว์เลี้ยง</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Home-garden2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">บ้านและสวน</p>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Amulets2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">พระเครื่อง</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Car-accessories2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">อะไหล่รถยนต์</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Bicycle2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">จักรยาน</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Music2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">เครื่องดนตรี</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Wrist-watch2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">นาฬิกา</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Fasion2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">เสื้อผ้าและแฟชั่น</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Shoes2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">รองเท้า</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Sport2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">กีฬา</p>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Camera2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">กล้อง</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Bag2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">กระเป๋า</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Game2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">เกมส์</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Bait2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">เบ็ดตกปลา</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Model2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">โมเดล</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Toy2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">แม่และเด็ก</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Plant2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">เกษตร</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Travel2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">ท่องเที่ยว</p>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Beauty.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">สุขภาพและความงาม</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Coffee2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">ชา กาแฟ</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Education2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className="text-link">การเรียน</p>
          </Paper>
        </Grid>
      </Grid>







      {/* <Typography className="text-green"> */}
      <p style={{ textAlign: 'center'}} className="text-readmore">ดูน้อยลง <img className="btn-readmore" src="/images/dropdown.png" /></p>
      {/* </Typography> */}

    </div>
  );
}

export default FullWidthGrid
