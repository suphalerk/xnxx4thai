import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
        textHeader: {
            fontSize: '1.5em',
            color: 'rgb(0 0 0 / 70%)',
            marginLeft:'10%'

        },
        Typography: {
            color: '#000',
            width:'fit-content',
            fontSize:'13px',
             ['@media (min-width:780px)']: {
      color: '#fff'
    }
        },
        more:{
            color: '#429EFE',
            width:'fit-content',
            fontSize:'13px',
            float:'right',
            marginRight:'10%'
        },
    }),
);

export default function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p className={classes.textHeader}>ทำไมต้องซื้อของกับ Kaideewa<p className={classes.more}>ดูทั้งหมด<ArrowForwardIcon/></p></p>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.Typography} gutterBottom variant="subtitle1">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                         </Typography>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}