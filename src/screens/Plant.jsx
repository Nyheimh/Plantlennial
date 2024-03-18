import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Container,
  Grid,
  CardMedia,
  Typography,
} from "@material-ui/core";

function Plant({ plants }) {
  const classes = useStyles();

  const [searchPlant, setSearchPlant] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    if (!plants) return;
    setFilteredPlants(plants);
  }, [plants]);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchPlant(searchTerm);

    if (!plants) return;
    const filtered = plants.filter((plant) =>
      plant.common_name.toLowerCase().includes(searchTerm)
    );

    setFilteredPlants(filtered);
  };

  return (
    <Box>
      <Container maxWidth="lg">
        <Container className={classes.plantSearchBarContainer}>
          <input
            type="text"
            placeholder="Search Trees"
            value={searchPlant}
            onChange={handleSearchChange}
            className={classes.plantSearchBar}
          />
        </Container>
        <Typography variant="h4" className={classes.blogTitle}></Typography>
        <Grid container spacing={3}>
          {filteredPlants.map((plant) => (
            <Grid item xs={12} sm={6} md={4} key={plant.id}>
              <Card className={classes.plantCard}>
                <CardMedia
                  id="similar"
                  className={classes.plantMedia}
                  image={
                    plant.default_image ? plant.default_image.medium_url : ""
                  }
                  title={plant.common_name}
                  label={plant.common_name}
                  alt={plant.common_name}
                />
                <Typography gutterBottom variant="h5" component="h2">
                  <div className={classes.plantName}>{plant.common_name}</div>
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Plant;

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(5),
    fontWeight: 800,
    paddingBottom: theme.spacing(10),
  },
  plantCard: {
    maxWidth: "100%",
  },
  plantName: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
  },
  plantMedia: {
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
  plantCardTitle: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
  },
  plantSearchBar: {
    border: "1px solid green",
    borderRadius: 40,
    margin: 20,
    height: 40,
    width: 300,
    textAlign: "center",
    fontSize: 15,
  },
  plantSearchBarContainer: {
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));
