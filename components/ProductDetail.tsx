import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Image from "next/image";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
     
    },
    textColor:{
      color:'#222',
      border: '1px solid rgba(81, 81, 81, 1)'
    },
    textColor2:{
      color:'#96A5BA',
      border: '1px solid rgba(81, 81, 81, 1)'
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      boxShadow: "none",
      backgroundColor: "#fff",
    
     
    },
    paper2: {
      padding: '6px',
      textAlign: "center",
      color: '#222',
      boxShadow: "none",
      backgroundColor: "#fff",
    },
    paper4: {
      padding: '6px',
      textAlign: "left",
      color: '#222',
      boxShadow: "none",
      backgroundColor: "#fff",
    },
    paper3: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: '#222',
      boxShadow: "none",
      backgroundColor: "#fff",
      border: 'solid 1px #515151',
      display:'flex',
    },
    productTitle: {
      textAlign: "start",
      color:'#383277',
      fontSize: "22px",
      fontWeight:'bold'
    },
    spanText: {
      textAlign: "start",
      fontSize: "16px",
      color:"#383277",
    },
    table: {
      minWidth: 300,
    },
    textPrice: {
      textAlign: "right",
      fontSize: "2em",
      color: "#00C900",
      fontWeight: "bold",
    },
    textPrice2: {
      textAlign: "right",
      fontSize: "1em",
      color:'#96A5BA',
    },
    textTag: {
      textAlign: "right",
      fontSize: "1.5em",
      color:'#96A5BA',
    },
    gridPos:{
      padding:'1em',
      display:'inline-flex'
    },
    productDetail:{
      color:'#96A5BA',
      textAlign:'left'
    },
    share:{
      textAlign: "right",
      fontSize: "15px",
      color:'#96A5BA',
    },
    productImg:{
      padding:'20px !important'
    },
    btnActivat:{
      backgroundColor:'#222',

    },
    textActivat:{
      color:'#00C900',
      fontSize:'10px',
      margin: '2px',
    },
    textOwner:{
      color:'#00C900',
      fontWeight: 'bold'

    },
    more: {
      color: "#429EFE",
      width: "fit-content",
      fontSize: "9px",
      float: "right",
      display: "flex",
      ["@media (max-width:500px)"]: {
        marginRight: "0px",
        fontSize: "9px",
        marginTop: "0px",
      },
    },
    Iconsize:{
      width: '17px',
      height: '12px',
    },
  })
);



function createData(name: string, calories: string) {
  return { name, calories };
}

const rows = [
  createData("ยี่ห้อ", "Honda"),
  createData("รุ่น", "Freed"),
  createData("ปีรถ", "2013"),
  createData("เชื่อเพลิง", "เบนซิน"),
  createData("เกียร์", "เกียร์อัตโนมัติ"),
  createData("สี", "บรอนซ์เงิน"),
  createData("ประเภทรถ", "รถ MPV/SUV"),
];

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>
            <Image
            className={classes.productImg}
              src='/images/car-gallery.jpg'
              alt=""
              width={"500"}
              height={"500"}
            />
            <Image
            className={classes.productImg}
              src='/images/car-gallery.jpg'
              alt=""
              width={"500"}
              height={"500"}
            />
            <Image
            className={classes.productImg}
              src='/images/car-gallery.jpg'
              alt=""
              width={"500"}
              height={"500"}
            />
          </Paper> */}
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Typography
              className={classes.productTitle}
              variant="h6"
              gutterBottom
            >
              Honda Freed
            </Typography>
            <Typography className={classes.spanText}>
              กิจกรรมที่หน้าสนใจ
            </Typography>
            <p className={classes.productDetail}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={5}>
          <Paper className={classes.paper}>
            <p className={classes.textTag}>ขาย | มือสอง </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>
            <p className={classes.textPrice}>฿ 9200</p>
            <p className={classes.textPrice2}>
              ราคารวมมูลค่าของแถมแล้ว (ถ้ามี)
            </p>
            <Grid lg={6} className={classes.gridPos}>
              <Paper className={classes.paper}>
                <Image
                  src="/images/Addfavorite.png"
                  alt=""
                  width={"150"}
                  height={"30"}
                />
              </Paper>
            </Grid>

            <Grid lg={4} className={classes.gridPos}>
              <Paper className={classes.paper}>
                <Image
                  src="/images/share.png"
                  alt=""
                  width={"20"}
                  height={"20"}
                />
               <span className={classes.share}> แชร์ </span>
              </Paper>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow></TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name} className={classes.paper}>
                      <TableCell className={classes.textColor2} component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell className={classes.textColor} align="right">{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Paper className={classes.paper3}>
          <Grid item xs={3} lg={3}>
          <Paper className={classes.paper2}>
          <AccountCircleRoundedIcon />
          </Paper>
        </Grid>
        <Grid item xs={3}  lg={6}>
          <Paper className={classes.paper4}>
          
            <Typography variant="subtitle2" gutterBottom>
            <span className={classes.textOwner}>  นาย xxxxxx xxxxx </span>
            </Typography>
            <Button className={classes.btnActivat} variant="contained" disabled><Image
                className="img-correct"
                src="/images/CORRECT.png"
                alt=""
                width={20}
                height={20}
              />
              <span className={classes.textActivat} >ยืนยันด้วยบัตร ปชช. แล้ว</span>
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}  lg={3}>
          <Paper className={classes.paper2}>
          <p className={classes.more}>
          ดูทั้งหมด
          <ArrowForwardIcon className={classes.Iconsize} />
        </p>
          </Paper>
        </Grid>
            
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
