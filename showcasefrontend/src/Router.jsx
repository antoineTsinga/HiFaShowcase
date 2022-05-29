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
import PrivateRoute from "./PrivateRoute";
import Catalogue from "./views/Catalogue/Catalogue";
import Items from "./views/Items/Items";
import Admin from "./views/Admin/Admin";

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
        <Route
          element={
            <PrivateRoute>
              <Catalogue />
            </PrivateRoute>
          }
          path="/Catalogue"
          exact
        />

        {/* <Route element={<TestLogin />} path="/test" exact /> */}
        <Route element={<Account />} path="/Account?{idClient}" exact />
        <Route element={<TestLogin />} path="/test" exact />
        <Route element={<Items />} path="/Items" exact />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
