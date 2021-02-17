import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image'

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

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <p className="text-header">กิจกรรมที่หน้าสนใจ</p>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
                alt=""
                width={'400'}
                height={'250'}
              />
              <p className="activity-detail">IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย</p>
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
                alt=""
                width={'400'}
                height={'250'}
              />
              <p className="activity-detail">IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย</p>
          </Paper>
        </Grid>
        <Grid item xs={4}>
           <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
                alt=""
                width={'400'}
                height={'250'}
              />
              <p className="activity-detail">IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}