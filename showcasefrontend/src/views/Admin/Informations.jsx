import { Box, Button } from "@mui/material";
import React from "react";

const Informations = () => {
  return (
    <div
      className="container"
      style={{
        marginBottom: "190px",
        marginTop: "77px",
        backgroundColor: "#E5E5E5",
        marginRight: "50px",
        padding: "100px",
        paddingTop: "89px",
      }}
    >
      <div className="row">
        <h2 style={{ fontWeight: "bold" }}>Informations personnelles</h2>
        <div
          className="col-md-8"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>Nom :</p>
            <p>Prenom : </p>
            <p>Télephone :</p>
            <p>Email :</p>
            <p>Mot de passe : </p>
            <p>Description :</p>
          </div>
          <div>
            <p>PAYONG EZOZOH</p>
            <p>Aubin</p>
            <p>0734568790</p>
            <p>aubin@gmail.com</p>
            <p>********</p>
          </div>
          <div>
            <p>
              <a href="#" style={{ color: "red", textDecoration: "none" }}>
                {" "}
                Modifier
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "red", textDecoration: "none" }}>
                {" "}
                Modifier
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "red", textDecoration: "none" }}>
                {" "}
                Modifier
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "red", textDecoration: "none" }}>
                {" "}
                Modifier
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "red", textDecoration: "none" }}>
                {" "}
                Modifier
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <p>
            Salut je m'appelle Chloe blanchon, je suis passionné par le desssin
          </p>
        </div>
        <div className="col-md-4">
          <Box
            component="img"
            sx={{
              height: "100px",
              width: "150px",
              marginBottom: 5,
              marginLeft: "25px",
            }}
            alt="Position Onix"
            src="./logo192.png"
          />
          <Button variant="outlined" style={{ width: "200px" }}>
            Changer d'avatar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Informations;
