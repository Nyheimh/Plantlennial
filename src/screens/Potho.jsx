import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Container,
  Grid,
  CardMedia,
  Typography,
} from "@material-ui/core";

function Potho({ pothos }) {
  const classes = useStyles();
  const [searchPotho, setSearchPotho] = useState("");
  const [filteredPothos, setFilteredPothos] = useState([]);

  useEffect(() => {
    if (Array.isArray(pothos)) {
      setFilteredPothos(pothos);
    }
  }, [pothos]);

  useEffect(() => {
    setFilteredPothos(pothos);
  }, [pothos]);
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchPotho(searchTerm);

    const filteredPothos = pothos.filter((potho) =>
      potho.name.toLowerCase().includes(searchTerm)
    );
    setFilteredPothos(filteredPothos);
  };

  return (
    <Box>
      <Container className={classes.pothoSearchBarContainer}>
        <input
          type="text"
          placeholder="Search Pothos"
          value={searchPotho}
          onChange={handleSearchChange}
          className={classes.pothoSearchBar}
        />
      </Container>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          {filteredPothos.map((potho) => (
            <Grid item xs={12} sm={6} md={4} key={potho.name}>
              <Card className={classes.pothoCard}>
                <CardMedia
                  id="similar"
                  className={classes.pothoCardMedia}
                  image={potho.img_url}
                  label={potho.name}
                  text={potho.name}
                />
                <Typography gutterBottom variant="h5" component="h2">
                  <div className={classes.pothoCardTitle}>{potho.name}</div>
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default Potho;

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(5),
    fontWeight: 800,
    paddingBottom: theme.spacing(10),
  },
  pothoCard: {
    maxWidth: "100%",
  },
  pothoCardMedia: {
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
  pothoCardModal: {
    display: "flex",
    alignItems: "center",
    marginLeft: 500,
    width: 500,
  },
  pothoModalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    justifyContent: "center",
    alignContent: "center",
  },
  pothoCardTitle: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
  },
  pothoSearchBar: {
    border: "1px solid green",
    borderRadius: 40,
    margin: 20,
    height: 40,
    width: 300,
    textAlign: "center",
    fontSize: 15,
  },
  pothoSearchBarContainer: {
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));
