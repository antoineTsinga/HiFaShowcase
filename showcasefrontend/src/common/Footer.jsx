import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import GridAutoFlow from "./GridAutoFlow";
import logo from "../assets/images/logo.png";
import map from "../assets/images/map.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export default function Footer() {
  const style = {
    footer: {
      style: {
        backgroundColor: "var(--color-primary)",
        color: "var(--color-white)",
        height: "325px",
        overflow: "hidden",
      },
    },
    footerSection: {
      style: {
        fontFamily: "$font",
        fontSize: "12px",
        marginTop: "50px",
      },
    },
  };
  return (
    <>
      <div className="footer" {...style.footer}>
        <GridAutoFlow
          className="mt-5"
          gridTemplateColumns="repeat(5, 1fr)"
          gridTemplateRows="repeat(2, 60px)"
        >
          <Box
            className="ms-5 d-flex flex-column align-items-center"
            sx={{
              gridColumn: "1",
              height: "105px",
              width: "194px",
              textAlign: "center",
            }}
            {...style.footerSection}
          >
            <Box
              component="img"
              sx={{
                height: "105px",
                width: "194px",
                marginBottom: 5,
              }}
              alt="Logo Studeat"
              src={logo}
            />
            <div className="d-flex flex-column align-items-center">
              <p>28 Rue Notre Dames des Champs, 75006 Paris</p>

              <p>07 50 88 66 15</p>
              <Link to="/appointment">Prendre rendez-vous</Link>
            </div>
          </Box>
          <Box sx={{ gridColumn: "2" }}>
            <div {...style.footerSection}>
              <p>BESOINS D'AIDES ?</p>
              <p>Livraison</p>
              <p>Affiliez-vous</p>
              <p>Blog</p>
              <p>inscription à la Newsletter</p>
            </div>
          </Box>
          <Box sx={{ gridColumn: "3" }}>
            <div {...style.footerSection}>
              <p>BESOINS D’AIDE ?</p>
              <p>FAQ</p>
              <p>Plan du site</p>
              <p>Contacter l’atelier</p>
              <p>Désinscription à la Newsletter</p>
            </div>
          </Box>
          <Box sx={{ gridColumn: "4" }}>
            <div {...style.footerSection}>
              <p>INFORMATION SUR LA SOCIETE</p>
              <p>A propos de nous</p>
              <p>Code éthique</p>
              <p>Politique de confidentialité & cookies</p>
              <p>Carrière</p>
            </div>
          </Box>
          <Box sx={{ gridColumn: "5" }}>
            <Box
              {...style.footerSection}
              component="img"
              sx={{
                height: "241px",
                width: "241px",
                marginBottom: 5,
              }}
              alt="Position Onix"
              src={map}
            />
          </Box>
        </GridAutoFlow>
        <div
          style={{
            color: "var(--color-primary)",
            textAlign: "center",
            border: "1px solid black",
          }}
        >
          <p>
            © Tous droits réserves | Mentions Légales - Politique de
            confidentialité
          </p>
        </div>
      </div>
      <div></div>

      <div class="container">
        <div class="row">
          <div class="col-lg">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="col-sm">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div class="col-lg">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="col-sm">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div class="col-lg">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="col-sm">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div class="col-lg">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="col-sm">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div class="col-lg">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="col-sm">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}
