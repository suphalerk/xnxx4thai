import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor:'#00CE00',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor:'#00CE00 !important',
    },
    p:{
        color:'#fff',

    },
    logo1:{

    }
  }),
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <hr/>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
        
      <p className={classes.p}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
    </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Image
                className={classes.logo1}
                src="/images/logo1.png"
                alt=""
                width={'300'}
                height={'70'}

              />
          </Paper>
        </Grid>
       
      </Grid>
     
    </div>
  );
}