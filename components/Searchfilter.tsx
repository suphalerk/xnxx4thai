import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image'
import { Keyword } from '../interfaces/product'
import { Accordion, AccordionDetails, AccordionSummary, CardContent, Collapse, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 140,
    },
    root: {
      flexGrow: 1,
     

    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#fff',
      boxShadow: 'none',

    },
    textLink: {
      color: '#111',
      fontSize: '14px'
    },
    gridCon: {
      display: 'flex',
    },
    more: {
      color: '#00C900',
    },
    btnMore: {
      margin: '-4px 4px !important',
      width: '17px',
      height: 'auto',
    },
     heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    AccordionSum:{
      placeContent:'center',
    },
    expand: {
      color:'#00C900',
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }),
);

interface KeywordData {
  name: string,
  data: string[]
  image: string
}

const keywordTypes: KeywordData[] = [
  { name: "อสังหาริมทรัพย์", data: ["บ้าน", "ที่ดิน"], image: "/images/Real-estate2.png" },
  { name: "รถยนต์", data: ["รถยนต์", "รถบรรทุก"], image: "/images/car.png" },
  { name: "มอเตอร์ไซค์", data: ["มอเตอร์ไซค์"], image: "/images/Motocycle2.png" },
  { name: "มือถือ แท๊บเล็ต", data: ["มือถือ แท๊บเล็ต", "samsung", "xiaomi", "oppo", "Huawei", "OnePlus", "Vivo"], image: "/images/Mobile-tablet2.png" },
  { name: "คอมพิวเตอร์", data: ["คอมพิวเตอร์"], image: "/images/Computer2.png" },
  { name: "เครื่องใช้ไฟฟ้า", data: ["เครื่องใช้ไฟฟ้า"], image: "/images/Electrical2.png" },
  { name: "สัตว์เลี้ยง", data: ["สัตว์เลี้ยง"], image: "/images/Pet2.png" },
  { name: "พระเครื่อง", data: ["พระเครื่อง"], image: "/images/Amulets2.png" },
  { name: "บ้านและสวน", data: ["บ้านและสวน"], image: "/images/Home-garden2.png" },
  { name: "อะไหล่ยนต์", data: ["อะไหล่ยนต์"], image: "/images/Car-accessories2.png" },
  { name: "จักรยาน", data: ["จักรยาน"], image: "/images/Bicycle2.png" },
  { name: "เครื่องดนตรี", data: ["เครื่องดนตรี", "กีตาร์"], image: "/images/Music2.png" },
  { name: "นาฬิกา", data: ["นาฬิกา"], image: "/images/Wrist-watch2.png" },
  { name: "เสื้อผ้าและแฟชั่น", data: ["เสื้อผ้าและแฟชั่น"], image: "/images/Fasion2.png" },
  { name: "รองเท้า", data: ["รองเท้า"], image: "/images/Shoes2.png" },
  { name: "กีฬา", data: ["กีฬา", "อุปกรณ์กีฬา"], image: "/images/Sport2.png" },
  { name: "กล้อง", data: ["กล้อง"], image: "/images/Camera2.png" },
  { name: "กระเป๋า", data: ["กระเป๋า"], image: "/images/Bag2.png" },
  { name: "เกมส์", data: ["เกมส์"], image: "/images/Game2.png" },
  { name: "เบ็ดตกปลา เหยื่อ", data: ["เบ็ดตกปลา", "เหยื่อปลอม"], image: "/images/Bait2.png" },
  { name: "โมเดล", data: ["โมเดล"], image: "/images/Model2.png" },
  { name: "แม่และเด็ก", data: ["แม่และเด็ก"], image: "/images/Toy2.png" },
  { name: "เกษตร", data: ["เกษตร"], image: "/images/Plant2.png" },
  { name: "ท่องเที่ยว", data: ["ท่องเที่ยว"], image: "/images/Travel2.png" },
  { name: "สุขภาพและความงาม", data: ["สุขภาพและความงาม"], image: "/images/Beauty.png" },
  { name: "ชา กาแฟ", data: ["กาแฟ"], image: "/images/Coffee2.png" },
  { name: "การเรียน", data: ["การเรียน"], image: "/images/Education2.png" },
]

const FullWidthGrid = (props: { keywords: Keyword[] }) => {
  const keywords = props.keywords
  const classes = useStyles();

  const keywordFilter = keywordTypes.map((type) => {
    if (keywords.find((k) => type.data.includes(k.keyword))) { return type }
  }).filter(x => x !== undefined)

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root} >
      <Grid container spacing={1} className={classes.gridCon}>
        {keywordFilter.map((k, index) => {
          if (k == undefined) return <></>

          return <Grid item xs={4} md={3} sm={3} lg={2} key={index}>
            <Paper className={classes.paper}>
              <Image
                className="img-category"
                src={k.image}
                alt=""
                width={75}
                height={75}
              />
              <p className={classes.textLink}>{k.name}</p>
            </Paper>
          </Grid >
        })}
      </Grid>
      <p style={{ textAlign: 'center' }} className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })} onClick={handleExpandClick}  aria-expanded={expanded} aria-label="show more">ดูมากขึ้น <img style={{ margin: '-4px 4px',width: '17px',height: 'auto',}} src="/images/dropdown.png" /></p>
      {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    
      {/* <p style={{ textAlign: 'center' }} className={classes.more}>ดูมากขึ้น <img className={classes.btnMore} src="/images/dropdown.png" /></p> */}
    </div>
  );
}

export default FullWidthGrid
