import React from "react";

import monImage from "../../assets/images/logo.png";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CardItem = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: "5px" }}>
        <CardMedia
          component="img"
          height="140"
          image={monImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Chapeau
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Qté: 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Prix estimé* : 23,99 €
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            style={{ color: "rgb(183, 0, 0)", marginLeft: "40px" }}
          >
            Supprimer du panier
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardItem;
