import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import { GridList, GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import image from "next/image";

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
    root2: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: "#fff",
      padding: '1em',
    },
    gridList: {
      width: 800,
      height: 450,
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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
    <div className={classes.root2}>
      {/* <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            
          {props.data.datas.images.map((row) => (
             
             <img
              src={row.raw_url}
              alt=""
              width={300}
              height={300}
            />
                  ))}

          </Paper>
        </Grid>
      </Grid> */}

      {/* <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {props.data.datas.images.map((tile) => (
          <GridListTile key={tile.raw_url} cols={tile.cols || 1}>
            <img src={tile.raw_url} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList> */}

      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {props.data.datas.images.map((tile) => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.raw_url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
