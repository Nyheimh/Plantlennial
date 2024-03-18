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

function Monstera({ monsteras }) {
  const classes = useStyles();
  const [searchMonstera, setSearchMonstera] = useState("");
  const [filteredMonsteras, setFilteredMonsteras] = useState([]);

  useEffect(() => {
    if (Array.isArray(monsteras)) {
      setFilteredMonsteras(monsteras);
    }
  }, [monsteras]);

  useEffect(() => {
    setFilteredMonsteras(monsteras);
  }, [monsteras]);
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchMonstera(searchTerm);

    const filteredMonsteras = monsteras.filter((monstera) =>
      monstera.name.toLowerCase().includes(searchTerm)
    );
    setFilteredMonsteras(filteredMonsteras);
  };

  return (
    <Box>
      <Container className={classes.monsteraSearchBarContainer}>
        <input
          type="text"
          placeholder="Search Monsteras"
          value={searchMonstera}
          onChange={handleSearchChange}
          className={classes.monsteraSearchBar}
        />
      </Container>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          {filteredMonsteras.map((monstera) => (
            <Grid item xs={12} sm={6} md={4} key={monstera.name}>
              <Card className={classes.monsteraCard}>
                <CardMedia
                  id="similar"
                  className={classes.monsteraCardMedia}
                  image={monstera.img_url}
                  label={monstera.name}
                  text={monstera.name}
                />
                <Typography gutterBottom variant="h5" component="h2">
                  <div className={classes.monsteraCardTitle}>
                    {monstera.name}
                  </div>
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default Monstera;

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(5),
    fontWeight: 800,
    paddingBottom: theme.spacing(10),
  },
  monsteraCard: {
    maxWidth: "100%",
  },
  monsteraCardMedia: {
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
  monsteraCardModal: {
    display: "flex",
    alignItems: "center",
    marginLeft: 500,
    width: 500,
  },
  monsteraModalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    justifyContent: "center",
    alignContent: "center",
  },
  monsteraCardTitle: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
  },
  monsteraSearchBar: {
    border: "1px solid green",
    borderRadius: 40,
    margin: 20,
    height: 40,
    width: 300,
    textAlign: "center",
    fontSize: 15,
    // backgroundColor: "gray",
  },
  monsteraSearchBarContainer: {
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));
