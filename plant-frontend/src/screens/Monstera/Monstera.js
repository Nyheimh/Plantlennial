import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Container,
  Grid,
  CardMedia,
  Typography,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";

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
  modal: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    width: 500,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  monsteraCardTitle: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
  },
}));

function Monstera(props) {
  const { monsteras } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="monsteras">
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}></Typography>
        <Grid container spacing={3}>
          {monsteras.map((monstera) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  id="similar"
                  className={classes.media}
                  image={monstera.img_url}
                  label={monstera.name}
                  text={monstera.name}
                  onClick={handleOpenModal}
                />
                <Typography gutterBottom variant="h5" component="h2">
                  <div className={classes.monsteraCardTitle}>
                    {monstera.name}
                  </div>
                </Typography>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleCloseModal}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                >
                  <Fade in={open}>
                    <div className={classes.paper}>
                      <h2 id="transition-modal-title">{monstera.name}</h2>
                      <p id="transition-modal-description">
                        {monstera.details}
                      </p>
                    </div>
                  </Fade>
                </Modal>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export default Monstera;
