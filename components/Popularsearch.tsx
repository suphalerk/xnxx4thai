import React from 'react';

import { createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';

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

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <p className="text-linkgreen">รถยนต์ (19,000)</p>
          <p className="text-link2">รถมือสอง</p>
          <p className="text-link2">รถเก๋งมือสอง</p>
          <p className="text-link2">รถบ้านมือสอง</p>
          <p className="text-link2">รถกระบะมือสอง</p>
          <p className="text-link2">รถขนของ</p>
          <p className="text-link3">ดูรถยนต์ทั้งหมด</p>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
        <p className="text-linkgreen">รถยนต์ (19,000)</p>
          <p className="text-link2">รถมือสอง</p>
          <p className="text-link2">รถเก๋งมือสอง</p>
          <p className="text-link2">รถบ้านมือสอง</p>
          <p className="text-link2">รถกระบะมือสอง</p>
          <p className="text-link2">รถขนของ</p>
          <p className="text-link3">ดูรถยนต์ทั้งหมด</p>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}> 
        <p className="text-linkgreen">รถยนต์ (19,000)</p>
          <p className="text-link2">รถมือสอง</p>
          <p className="text-link2">รถเก๋งมือสอง</p>
          <p className="text-link2">รถบ้านมือสอง</p>
          <p className="text-link2">รถกระบะมือสอง</p>
          <p className="text-link2">รถขนของ</p>
          <p className="text-link3">ดูรถยนต์ทั้งหมด</p>
          </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
        <p className="text-linkgreen">รถยนต์ (19,000)</p>
          <p className="text-link2">รถมือสอง</p>
          <p className="text-link2">รถเก๋งมือสอง</p>
          <p className="text-link2">รถบ้านมือสอง</p>
          <p className="text-link2">รถกระบะมือสอง</p>
          <p className="text-link2">รถขนของ</p>
          <p className="text-link3">ดูรถยนต์ทั้งหมด</p>
        </Paper>
      </Grid>
    </Grid>
  </div>
  );
}
