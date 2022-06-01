import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useAppContext } from "../../AppContext";
import { backend } from "../../adapters/apiCalls";

export default function RegistrationView({ handleRegister }) {
  const { user } = useAppContext();
  const style = { width: "50%" };
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    tel: "",
    avatar: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!user) return;
    setUserData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      tel: user.tel,
      avatar: user.avatar,
    });
  }, [user]);

  function handleChange(e) {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function setInfoUser() {
    backend.put(`clients/${user.id}`, { ...userData }).then((res) => {});
  }

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1485px",
        textAlign: "center",
        margin: "50px",
        padding: "64px",
        fontFamily: "$font",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#fff",
      }}
    >
      <form>
        <Box>
          <Box
            component="img"
            sx={{
              height: "105px",
              width: "194px",
              marginBottom: 5,
            }}
            alt="Logo Onix"
            src={logo}
          />
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FormLabel HtmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
              Nom :{" "}
            </FormLabel>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              value={userData.firstName}
              onChange={handleChange}
              name="firstName"
              style={style}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FormLabel HtmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
              Prenom :{" "}
            </FormLabel>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              value={userData.lastName}
              onChange={handleChange}
              name="lastName"
              style={style}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FormLabel HtmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
              Email :{" "}
            </FormLabel>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              value={userData.email}
              onChange={handleChange}
              name="email"
              style={style}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FormLabel HtmlFor="outlined-basic" style={{ fontWeight: "bold" }}>
              Mot de passe :{" "}
            </FormLabel>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              type="password"
              value={userData.password}
              onChange={handleChange}
              name="password"
              style={style}
            />
          </Box>
          <Button
            variant="outlined"
            style={{ marginLeft: "480px", marginTop: "50px" }}
            onClick={() => setInfoUser()}
          >
            Mettre à jour
          </Button>
        </Box>
      </form>
    </div>
  );
}
