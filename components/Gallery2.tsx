import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "react-alice-carousel/lib/alice-carousel.css";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

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


export default function FullWidthGrid(props: { data: any }) {
  const classes = useStyles();


  return (
    <div className={classes.root2}>


      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {props.data.datas.images.map((tile: { img: React.Key | null | undefined; featured: any; raw_url: string | undefined; title: {} | null | undefined; }) => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.raw_url} />
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
