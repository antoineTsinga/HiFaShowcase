import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import CardItem from "./CardItem";

const Items = () => {
  return (
    <div style={{ backgroundColor: "rgb(240, 240, 240)" }}>
      <h1
        style={{ textAlign: "center", fontWeight: "bold", paddingTop: "60px" }}
      >
        Vos articles
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "30px",
          paddingBottom: "40px",
          lineHeight: "75px",
          paddingTop: "20px",
        }}
      >
        <CardItem />
        <CardItem />
        <CardItem />
        <Card
          sx={{
            minWidth: 275,
            border: "1px solid #000",
            width: "100px",
            padding: "20px",
            height: "250px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="#000" gutterBottom>
              Sous total(3 articles sélectionnés) : 431,98 €
            </Typography>

            <Typography variant="body2">
              <Button
                variant="contained"
                style={{ width: "100%", backgroundColor: "#000" }}
              >
                Prendre rendez-vous
              </Button>
            </Typography>
            <Typography variant="body2" style={{ textAlign: "center" }}>
              OU
            </Typography>
            <Typography variant="body2">
              <Button
                variant="contained"
                style={{ width: "100%", backgroundColor: "#000" }}
              >
                Envoyer un message
              </Button>
            </Typography>
            <Typography variant="body2">
              *Certains actions engendrerons la validation de votre panier
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Items;
