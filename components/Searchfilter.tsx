import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image'
import { Keyword } from '../interfaces/product'
import { Grid, Paper} from '@material-ui/core';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    media: {
      height: 140,
    },
    root: {
      flexGrow: 1,
     
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor:'#fff',
      boxShadow:'none',
     
    },
    textLink:{
      color:'#111',
      fontSize:'14px'
    },
    gridCon:{
      display:'flex',
    },
    more:{
      color: '#00C900',
    },
    btnMore:{
      // margin: '-4px 4px !important', 
      margin: '-4px 4px !important',
      width: '17px',
      height: 'auto',
    }

    
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
      <Grid container spacing={1} className={classes.gridCon}>
        <Grid item xs={4} md={3} sm={3} lg={2}>
          <Paper className={classes.paper}>
          <Image
                src="/images/car.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>รถยนต์</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2}>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Motocycle2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>มอเตอร์ไซค์</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2}>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Real-estate2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>อสังหาริมทรัพย์</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2}>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Mobile-tablet2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>มือถือ แท็บเล็ต</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2}>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Computer2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>คอมพิวเตอร์</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2}>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Electrical2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>เครื่องใช้ไฟฟ้า</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2}>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Pet2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>สัตว์เลี้ยง</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2}>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Home-garden2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>บ้านและสวน</p>
          </Paper>
        </Grid>
      
     
      <Grid item xs={4} md={3} sm={3} lg={2}>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Amulets2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>พระเครื่อง</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2}>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Car-accessories2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>อะไหล่รถยนต์</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2}>
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Bicycle2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>จักรยาน</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Music2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>เครื่องดนตรี</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Wrist-watch2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>นาฬิกา</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Fasion2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>เสื้อผ้าและแฟชั่น</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Shoes2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>รองเท้า</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Sport2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>กีฬา</p>
          </Paper>
        </Grid>
      
      
      <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Camera2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>กล้อง</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Bag2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>กระเป๋า</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Game2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>เกมส์</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Bait2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>เบ็ดตกปลา</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Model2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>โมเดล</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Toy2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>แม่และเด็ก</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Plant2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>เกษตร</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Travel2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>ท่องเที่ยว</p>
          </Paper>
        </Grid>
     
      
      <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Beauty.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>สุขภาพและความงาม</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/Coffee2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>ชา กาแฟ</p>
          </Paper>
        </Grid>
        <Grid item xs={4} md={3} sm={3} lg={2} >
          <Paper className={classes.paper}>
             <Image
              className="img-category"
                src="/images/Education2.png"
                alt=""
                width={75}
                height={75}
              />
            <p className={classes.textLink}>การเรียน</p>
          </Paper>
        </Grid>
      </Grid>
      <p style={{ textAlign: 'center'}} className={classes.more}>ดูน้อยลง <img className={classes.btnMore} src="/images/dropdown.png" /></p>
    </div>
  );
}

export default FullWidthGrid
