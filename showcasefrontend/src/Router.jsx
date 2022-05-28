import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppContext } from "./AppContext";
import Footer from "./common/Footer";
import NavbarOnix from "./common/NavbarOnix";
import Login from "./views/Auth/Login";
import Registration from "./views/Auth/Registration";
import Home from "./views/Home/Home";
import TestLogin from "./views/TestLogin";
import Account from "./views/Account/Account";

export default function Router() {
  const { onConnect } = useAppContext();

  return (
    <BrowserRouter>
      <NavbarOnix />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Registration />} path="/Registration" exact />

        <Route
          element={onConnect ? <Navigate to="/" /> : <Login />}
          path="/login"
          exact
        />

        <Route element={<TestLogin />} path="/test" exact />
        <Route element={<Account />} path="/Account" exact />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
