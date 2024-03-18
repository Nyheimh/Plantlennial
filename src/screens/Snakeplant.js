import React from "react";
// import CardItem from "../../components/CardItem/CardItem";
// import "./Snakeplant.css";

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
// import PothoCardItem from "./PothoCardItem"

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

function Snakeplant({ snakeplants }) {
  const classes = useStyles();

  return (
    <div className="snakeplant">
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}></Typography>
        <Grid container spacing={3}>
          {snakeplants.map((snakeplant) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    id="similar"
                    className={classes.media}
                    image={snakeplant.img_url}
                    label={snakeplant.name}
                    text={snakeplant.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <div className="snakeplant-title">{snakeplant.name}</div>
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

export default Snakeplant;
