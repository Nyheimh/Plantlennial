import React from "react";
// import CardItem from "../../components/CardItem/CardItem";
import "./Plant.css";
import { makeStyles } from "@material-ui/core/styles";
// materialUI
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import plant from "../../assets/planting"

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
}));

// root: {
//   maxWidth: 345,
// },
// media: {
//   height: 140,
// },
// }));

function Plant({ plants }) {
  const classes = useStyles();

  return (
    <div className="plants">
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}></Typography>
        {/* <div className="plant-hero-container">
        <h1> Monstera </h1>
      </div> */}
        <Grid container spacing={3}>
          {plants.map((plant) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia id="similar"
                    className={classes.media}
                    image={plant.img_url}
                    title={plant.name}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {plant.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {plant.details}
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Plant;

{
  /* 41 - 60 <div className="plants__container">
  <div className="plants__wrapper">
    <ul className="plants__items">
      <div>
        {plants.map((plant) => (
          <div className='rows'>
            <CardItem 
              // src={monstera.name}
              src={plant.img_url}
              label={plant.name}
              text={plant.name}
              />
          </div>
        ))}
      </div>
    </ul>
  </div>
</div> */
}
