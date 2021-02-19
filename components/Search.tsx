import { createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50%',
      },
     
    },
    position:{
      marginTop:'13%',
      ["@media (max-width:3760px)"]: {
        marginTop:'6%',
      },

    },
    bgSearch:{
      height: '523px',
      backgroundSize: 'cover',
      ["@media (max-width:1100px)"]: {
        height: 'auto',
        backgroundSize: 'cover',
      },
    }

    
  }),
);

function searchInput() {
  const classes = useStyles();
  return (
    <div className={classes.bgSearch} style={{ backgroundImage: "url(/images/general-large-6b86fad29f1e8919155e0a9e5bcd54b7.jpg)" }}>
      <form className={classes.root} noValidate autoComplete="off" style={{textAlign:'center'}}>
     
      <TextField className={classes.position} id="outlined-basic" label="คุณกำลังมองาอะไร?" variant="outlined" />
    </form>
    </div>
  )
}

export default searchInput
