import React, { useState } from "react";
import SideBar from "../../common/SideBar";
import Achats from "./Achats";
import Deconnexion from "./Deconnexion";
import FAQ from "./FAQ";
import Messagerie from "./Messagerie";
import Profil from "./Profil";
import SupprimerCompte from "./SupprimerCompte";

const Account = () => {
  const [section, setSection] = useState("Profil");
  const menu = [
    "Profil",
    "Achats",
    "Messagerie",
    "FAQ",
    "Deconnexion",
    "Supprimer le compte",
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgb(240, 240, 240)",
      }}
    >
      <SideBar menu={menu} setSection={setSection} />
      {section === "Profil" ? (
        <Profil />
      ) : section === "Achats" ? (
        <Achats />
      ) : section === "Messagerie" ? (
        <Messagerie />
      ) : section === "FAQ" ? (
        <FAQ />
      ) : section === "Deconnexion" ? (
        <Deconnexion />
      ) : section === "Supprimer le compte" ? (
        <SupprimerCompte />
      ) : null}
    </div>
  );
};

export default Account;
