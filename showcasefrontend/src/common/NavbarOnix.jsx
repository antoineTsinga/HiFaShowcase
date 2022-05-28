import axios from "axios";
import React from "react";
import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BsCart2 } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { backend, BACKEND_URL } from "../adapters/apiCalls";
import { useAppContext } from "../AppContext";
import logo2 from "../assets/images/logo2.png";

export default function NavbarOnix() {
  const { user, onConnect } = useAppContext();
  const style = {
    white: { style: { backgroundColor: "var(--color-white)" } },
  };

  function logout() {
    backend.get(`${BACKEND_URL}/logout`);
  }

  return (
    <>
      <Navbar
        key="md"
        className=""
        style={{
          backgroundColor: "var(--color-primary)",
          color: "#F1F1F1",
          height: "60px",
        }}
        variant="dark"
        expand="md"
        // bsPrefix="navbar-toggler"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={user.avatar ? user.avatar : logo2}
              width="35"
              height="24"
              className="ms-2 d-inline-block align-center"
              alt="Logo onix"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
            {...style.title}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="align-items-center justify-content-end flex-grow-1 pe-2">
                {["Nouveautes", "Femme", "Homme", "Enfant", "Accessoires"].map(
                  (title) => (
                    <Nav.Link
                      key={title}
                      href={`/Catalogue?${title}=true`}
                      {...style.title}
                      className="p-4"
                    >
                      {title === "Nouveautes" ? "Nouvautés" : title}
                    </Nav.Link>
                  )
                )}
                <Nav.Link {...style.title} className="p-4">
                  <BsCart2 />
                </Nav.Link>
                <Nav.Link
                  {...style.title}
                  href={onConnect ? "/logout" : "/login"}
                  className="p-4"
                >
                  {onConnect ? <FiLogOut onClick={logout} /> : "Connexion"}
                </Nav.Link>
                <Nav.Link>
                  <Image
                    src={logo2}
                    fluid
                    roundedCircle
                    bsPrefix
                    style={{ width: 50, height: 50, backgroundColor: "white" }}
                  />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
