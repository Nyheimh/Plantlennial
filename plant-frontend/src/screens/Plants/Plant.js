import React, { useState } from "react";
import "./Plant.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Container,
  Grid,
  CardMedia,
  Typography,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import useModal from "../../hooks/useModal";

function Plant({ plants }) {
  const classes = useStyles();
  const { open, handleOpenModal, handleCloseModal } = useModal();
  const [searchPlant, setSearchPlant] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(plants);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchPlant(searchTerm);

    const filteredPlants = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm)
    );
    setFilteredPlants(filteredPlants);
  };

  return (
    <Box>
      <Container maxWidth="lg">
        <Container className={classes.plantSearchBarContainer}>
          <input
            type="text"
            placeholder="Search Plants"
            value={searchPlant}
            onChange={handleSearchChange}
            className={classes.plantSearchBar}
          />
        </Container>
        <Typography variant="h4" className={classes.blogTitle}></Typography>
        <Grid container spacing={3}>
          {filteredPlants.map((plant) => (
            <Grid item xs={12} sm={6} md={4} key={plant.name}>
              <Card className={classes.plantCard}>
                <CardMedia
                  id="similar"
                  className={classes.plantMedia}
                  image={plant.img_url}
                  title={plant.name}
                  label={plant.name}
                  onClick={handleOpenModal}
                />
                <Typography gutterBottom variant="h5" component="h2">
                  <div className={classes.plantName}>{plant.name}</div>
                </Typography>
                <Modal
                  className={classes.plantCardModal}
                  open={open}
                  onClose={handleCloseModal}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className={classes.plantModalPaper}>
                      <h2>{plant.name}</h2>
                      <p>{plant.details}</p>
                    </div>
                  </Fade>
                </Modal>
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
  plantName: {},
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
  plantCardModal: {
    display: "flex",
    alignItems: "center",
    marginLeft: 500,
    width: 500,
  },
  plantModalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    justifyContent: "center",
    alignContent: "center",
  },
}));
