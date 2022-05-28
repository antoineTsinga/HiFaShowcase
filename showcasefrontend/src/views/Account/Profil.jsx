import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profil = () => {
  return (
    <div
      className="container"
      style={{
        marginBottom: "190px",
        marginTop: "77px",
        backgroundColor: "rgb(255, 255, 255)",
        marginRight: "50px",
        padding: "100px",
      }}
    >
      <div className="row">
        <h2 style={{ fontWeight: "bold" }}>Profil</h2>
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
            <p>Email :</p>
            <p>Mot de passe : </p>
          </div>
          <div>
            <p>PAYONG EZOZOH</p>
            <p>Aubin</p>
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
          </div>
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

export default Profil;
