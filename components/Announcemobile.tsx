
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import theme from '../src/theme';

const useStyles = makeStyles({
  root7: {
    maxWidth: '100%',
  },
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.root7}>
      <Grid item xs={12}>
          <Paper className={classes.paper}>
            <p className="text-header">ประกาศใหม่ ในหมวดหมู่มือถือ แท็บเล็ต</p>
          </Paper>
        </Grid>
      <Grid container spacing={3} style={{marginLeft:'-10% !important'}}>
        <Grid item xs={3} style={{marginLeft:'-10%'}}>
          <Paper className={classes.paper}>
            <Card className={classes.root7}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography className="order-title" gutterBottom variant="h5" component="h2">
                    Lizard
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
        </Button>
                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Card className={classes.root7}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography className="order-title" gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Card className={classes.root7}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography className="order-title" gutterBottom variant="h5" component="h2">
                    Lizard
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
        </Button>
                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Card className={classes.root7}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography className="order-title" gutterBottom variant="h5" component="h2">
                    Lizard
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
        </Button>
                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>


  );
}
