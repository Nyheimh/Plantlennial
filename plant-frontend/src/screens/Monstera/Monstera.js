import React from "react";
// import CardItem from "../../components/CardItem/CardItem";
import "./Monstera.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Monstera.css";
// import MonsteraCardItem from "./MonsteraCardItem"

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(5),
    fontWeight: 800,
    paddingBottom: theme.spacing(10),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  h5: {
    color: "#252e48",
    fontSize: "18px",
    lineHeight: " 24px",
  },
}));

function Monstera(props) {
  const { monsteras } = props;
  const classes = useStyles();

  return (
    <div className="monsteras">
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}></Typography>
        <Grid container spacing={3}>
          {monsteras.map((monstera) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    id="similar"
                    className={classes.media}
                    image={monstera.img_url}
                    label={monstera.name}
                    text={monstera.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <div className="monstera-title">{monstera.name}</div>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export default Monstera;

// later use
// function Monstera(props) {
//   const { monsteras } = props;

//   return (
//     <div className='monsteras'>
//       <div className="monsteras__container">
//         <div className="monsteras__wrapper">
//           <ul className="monsteras__items">
//             <div className="monstera-line">
//               {monsteras.map((monstera) => (
//                 <div className="monstera-order">
//                   <CardItem

//                     src={monstera.img_url}
//                     label={monstera.name}
//                     text={monstera.name}
//                   />
//                 </div>
//               ))}
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
