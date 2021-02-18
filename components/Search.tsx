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
  }),
);

function searchInput() {
  const classes = useStyles();
  return (
    <div className="bg-search">
      <form className={classes.root} noValidate autoComplete="off" style={{textAlign:'center'}}>
     
      <TextField id="outlined-basic" label="คุณกำลังมองาอะไร?" variant="outlined" />
    </form>
    </div>
  )
}

export default searchInput
