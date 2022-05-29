import React, { useState } from "react";
import SideBar from "../../common/SideBar";
import Articles from "./Articles";
import Deconnexion from "./Deconnexion";
import FAQ from "./FAQ";
import Informations from "./Informations";
import Messagerie from "./Messagerie";

const Admin = () => {
  const [section, setSection] = useState("Informations personnelles");
  const menu = [
    "Informations personnelles",
    "Gérer les articles",
    "Messagerie",
    "Gérer la FAQ",
    "Deconnexion",
  ];
  const titre = "Interface administrateur";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#E5E5E5",
      }}
    >
      <SideBar
        menu={menu}
        setSection={setSection}
        style={{
          color: "var(--color-white)",
          backgroundColor: "var(--color-primary)",
        }}
        titre={titre}
      />
      {section === "Informations personnelles" ? (
        <Informations />
      ) : section === "Gérer les articles" ? (
        <Articles />
      ) : section === "Messagerie" ? (
        <Messagerie />
      ) : section === "Gérer la FAQ" ? (
        <FAQ />
      ) : section === "Deconnexion" ? (
        <Deconnexion />
      ) : null}
    </div>
  );
};

export default Admin;
