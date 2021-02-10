

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';


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
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {/* <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="auto"
                  width="75"
                  image="/images/car.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography className="text-cat" gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> */}
            <img className="btn-filter" src="/images/car.png" />
            <img className="btn-filter" src="/images/Motocycle2.png" />
            <img className="btn-filter" src="/images/Real-estate2.png" />
            <img className="btn-filter" src="/images/Mobile-tablet2.png" />
            <img className="btn-filter" src="/images/Computer2.png" />
            <img className="btn-filter" src="/images/Electrical2.png" />
            <img className="btn-filter" src="/images/Pet2.png" />
            <img className="btn-filter" src="/images/Home-garden2.png" />
          </Paper>
          <Paper className={classes.paper}>
            <img className="btn-filter" src="/images/Amulets2.png" />
            <img className="btn-filter" src="/images/Car-accessories2.png" />
            <img className="btn-filter" src="/images/Bicycle2.png" />
            <img className="btn-filter" src="/images/Music2.png" />
            <img className="btn-filter" src="/images/Wrist-watch2.png" />
            <img className="btn-filter" src="/images/Fasion2.png" />
            <img className="btn-filter" src="/images/shoes2.png" />
            <img className="btn-filter" src="/images/Travel2.png" />
          </Paper>
          <Paper className={classes.paper}>
            <img className="btn-filter" src="/images/Camera2.png" />
            <img className="btn-filter" src="/images/Bag2.png" />
            <img className="btn-filter" src="/images/game2.png" />
            <img className="btn-filter" src="/images/bait2.png" />
            <img className="btn-filter" src="/images/Model2.png" />
            <img className="btn-filter" src="/images/Toy2.png" />
            <img className="btn-filter" src="/images/plant2.png" />
            <img className="btn-filter" src="/images/Travel2.png" />
          </Paper>
          <Paper className={classes.paper}>
            <img className="btn-filter" src="/images/car.png" />
            <img className="btn-filter" src="/images/Coffee2.png" />
            <img className="btn-filter" src="/images/Education2.png" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
