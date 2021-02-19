import { createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "50%",
      },
    },
    position: {
     
    },
    bgSearch: {
      backgroundColor: "#00C900",
      height: 'auto',

      ["@media (max-width:1100px)"]: {
        height: "auto",
        backgroundSize: "cover",
      },
    },
  })
);

function searchInput() {
  const classes = useStyles();
  return (
    <div className={classes.bgSearch}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ textAlign: "center" }}
      >
        <TextField
          className={classes.position}
          id="outlined-basic"
          label="คุณกำลังมองาอะไร?"
          variant="outlined"
        />
      </form>
    </div>
  );
}

export default searchInput;
