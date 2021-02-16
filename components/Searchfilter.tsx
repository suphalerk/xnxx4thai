import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image'
import { Keyword } from '../interfaces/product'
import { Card, CardActionArea, CardActions, CardContent, Container, CssBaseline, Typography } from '@material-ui/core';

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
      padding: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
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

  const classes = useStyles();

  return (
    <div className={classes.root} >
      {/* <Grid container spacing={3}>
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
      </Grid> */}

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
              className="img-category"
                src="/images/car.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  รถยนต์
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Motocycle2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  รถมอเตอร์ไซต์
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Real-estate2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  อสังหาริมทรัพย์
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Mobile-tablet2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  มือถือ แท็บเล็ต
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Computer2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  คอมพิวเตอร์
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Electrical2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  เครื่องใช้ไฟฟ้า
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Pet2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  สัตว์เลี้ยง
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Home-garden2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  บ้านและสวน
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
        </Container>
        <Container maxWidth="sm">
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Amulets2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  พระเครื่อง
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Car-accessories2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  อะไหล่รถยนต์
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Bicycle2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  จักรยานต์
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Music2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  เครื่องดนตรี
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Wrist-watch2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  นาฬิกา
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Fasion2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  เสื้อผ้าและแฟชั่น
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Shoes2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  รองเท้า
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Sport2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  กีฬา
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          
        </Container>
     
        <Container maxWidth="sm">
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Camera2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  กล้อง
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Bag2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  กระเป๋า
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Game2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  เกมส์
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Bait2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  เบ็ดตกปลา
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Model2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  โมเดล
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Toy2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  แม่และเด็ก
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Plant2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  เกษตร
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Travel2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  ท่องเที่ยว
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
        </Container>
        <Container maxWidth="sm">
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Beauty.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  สุขภาพ ความงาน
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Coffee2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  ชา กาแฟ
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
          <Card className={classes.root3}>
            <CardActionArea>
              <Image
                src="/images/Education2.png"
                alt=""
                width={75}
                height={75}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  การเรียน
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
      

        </Container>
       
     
      </React.Fragment>

      {/* <Typography className="text-green"> */}
      <p style={{ textAlign: 'center' }} className="text-readmore">ดูน้อยลง <img className="btn-readmore" src="/images/dropdown.png" /></p>
      {/* </Typography> */}

    </div>
  );
}

export default FullWidthGrid
