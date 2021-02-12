import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, CssBaseline, Grid, Paper } from '@material-ui/core';
import theme from '../src/theme';

const useStyles = makeStyles({
  root3: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root4: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      
      <React.Fragment>
      <p style={{marginLeft:'9%'}}>ประกาศใหม่ ในหมวดหมู่มือถือ แท็บเล็ต <a>ดูทั้งหมด</a></p>
      <CssBaseline />
      <Container maxWidth="sm">
      <Card style={{marginLeft:'7%'}} className={classes.root3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src="/images/car.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="btn-chat" size="small" color="primary">
          แชท
        </Button>
        <Button className="btn-call" size="small" color="primary">
          โทร
        </Button>
      </CardActions>
    </Card>
      </Container>
      <Container maxWidth="sm" className="bg-gray"> 
      <p className="text-p">ตอบโจทย์การซื้อขายกับเรา <img className="logo2" src="/images/logo1.png"/></p>
      
      <div className={classes.root3}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
       
      </Container>
    </React.Fragment>
    
  );
}