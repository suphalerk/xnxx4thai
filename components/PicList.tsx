import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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
  })
);

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="/images/car-gallery.jpg"
    width={"500"}
    height={"500"}
    onDragStart={handleDragStart}
  />,
  <img
    src="/images/car-gallery.jpg"
    width={"500"}
    height={"500"}
    onDragStart={handleDragStart}
  />,
  <img
    src="/images/car-gallery.jpg"
    width={"500"}
    height={"500"}
    onDragStart={handleDragStart}
  />,
];



export default function FullWidthGrid(props: { data: any }) {
  const classes = useStyles();
  // console.log('image_url ===> '+props.data.datas.images[0].raw_url);
  // console.log(row.raw_url);
  // data.map((item, i) => { });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            
          {props.data.datas.images.map((row) => (
             
             <img
              src={row.raw_url}
              alt=""
              width={200}
              height={200}
            />
                  ))}
                  {/* {console.log('img_url => '+row.images[0])} */}
                  

                  

            {/* <Image
              src={props.data.datas.images[0].raw_url}

              alt=""
              width={75}
              height={75}
            /> */}
            {/* <AliceCarousel mouseTracking   /> */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
  
}
