import { useEffect } from "react";
import { useItems } from "./../../common/collections";
import CatalogueBanner from "../../assets/images/CatalogueBanner.png";
import SideMenu from "./SideMenu";
import TableItems from "./TableItems";

export default function Catalogue() {
  return (
    <div>
      <div
        className="mb-5 d-flex flex-row justify-content-center align-items-center"
        style={{ background: `url(${CatalogueBanner})`, height: "175px" }}
      >
        <h1
          style={{
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: "57px",
            textAlign: "center",
            letterSpacing: " 0.02em",
            color: "#F1F1F1",
            textShadow: "2px 2px 0 var(--color-primary)",
          }}
        >
          Découvrez tout nos créations disponible pour la vente
        </h1>
      </div>
      <div className="mb-5 d-flex flex-row justify-content-center align-items-center">
        <h2>
          Faites votre choix et discuter avec le couturier pour des ajoustements
        </h2>
      </div>
      <div>
        <SideMenu />
        <div>
          <TableItems />
        </div>
      </div>
    </div>
  );
}
