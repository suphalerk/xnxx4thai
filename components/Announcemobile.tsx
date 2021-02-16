
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { createStyles, Grid, Paper, Theme } from '@material-ui/core';
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

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
                alt=""
                width={'auto'}
                height={'auto'}
              />
              <p className="mobile-detail">IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย</p>
              <p className="mobile-location">ลาดกระบัง</p>
              <Image       
                src="/images/Chat.png"
                alt=""
                width={'50'}
                height={'25'}
              />
              <Image
                src="/images/Call.png"
                alt=""
                width={'50'}
                height={'25'}
              />
          </Paper>
        </Grid>
        <Grid item xs>
        <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
                alt=""
                width={'auto'}
                height={'auto'}
              />
              <p className="mobile-detail">IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย</p>
              <p className="mobile-location">ลาดกระบัง</p>
              <Image       
                src="/images/Chat.png"
                alt=""
                width={'50'}
                height={'25'}
              />
              <Image
                src="/images/Call.png"
                alt=""
                width={'50'}
                height={'25'}
              />
          </Paper>
        </Grid>
        <Grid item xs>
        <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
                alt=""
                width={'auto'}
                height={'auto'}
              />
              <p className="mobile-detail">IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย</p>
              <p className="mobile-location">ลาดกระบัง</p>
              <Image       
                src="/images/Chat.png"
                alt=""
                width={'50'}
                height={'25'}
              />
              <Image
                src="/images/Call.png"
                alt=""
                width={'50'}
                height={'25'}
              />
          </Paper>
        </Grid>
        <Grid item xs>
        <Paper className={classes.paper}>
          <Image
              className="img-category"
                src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
                alt=""
                width={'auto'}
                height={'auto'}
              />
              <p className="mobile-detail">IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย</p>
              <p className="mobile-location">ลาดกระบัง</p>
              <Image       
                src="/images/Chat.png"
                alt=""
                width={'50'}
                height={'25'}
              />
              <Image
                src="/images/Call.png"
                alt=""
                width={'50'}
                height={'25'}
              />
          </Paper>
        </Grid>
      </Grid>
     
    </div>

  );
}
