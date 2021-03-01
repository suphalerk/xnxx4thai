import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

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
  }),
);

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/images/car-gallery.jpg"  
  width={"500"}
  height={"500"} 
  onDragStart={handleDragStart} />,
  <img src="/images/car-gallery.jpg"
  width={"500"}
  height={"500"}
   onDragStart={handleDragStart} />,
  <img src="/images/car-gallery.jpg" 
  width={"500"}
  height={"500"}
   onDragStart={handleDragStart} />,
];

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <AliceCarousel mouseTracking items={items} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}