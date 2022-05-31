import { MenuItem, MenuList, Paper, Stack } from "@mui/material";
import React from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";

const SideBar = ({ menu, setSection, style, titre }) => {
  return (
    <div>
      <Navbar key="xxl" bg="none" expand="xxl" className="pt-0">
        <Container fluid className="p-0">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Stack direction="row" spacing={0} style={{ height: "100%" }}>
                <Paper
                  className=""
                  style={{
                    width: "348px",
                    height: "768px",
                    padding: "50px",
                    ...style,
                  }}
                >
                  <h5 style={{ fontWeight: "bold", marginBottom: "40px" }}>
                    {titre}
                  </h5>
                  <MenuList
                    spacing={6}
                    style={{
                      height: "50%",
                      justifyContent: "space-between",
                      //   alignItems: "space-around",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {menu.map((section) => (
                      <MenuItem
                        key={section}
                        onClick={() => setSection(section)}
                      >
                        {section}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Paper>
              </Stack>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default SideBar;
