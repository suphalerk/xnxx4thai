import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import {
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
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      boxShadow: "none",
      backgroundColor: "#fff",
     
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
    }
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
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Paper className={classes.paper}>
            <AccountCircleRoundedIcon />
            <Typography variant="subtitle2" gutterBottom>
              นาย xxxxxx xxxxx
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
