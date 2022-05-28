import React from "react";

import { Box, Button, Typography } from "@mui/material";
import BannerFemme from "../../assets/images/BannerFemme.png";
import BannerHomme from "../../assets/images/bannerHomme.png";
import SpacingGrid from "./SpacingGrig";
import RecipeReviewCard from "../../common/RecipeReviewCard";
import modelCardFemme from "../../assets/images/modelCardfemme.png";
import modelCardHomme from "../../assets/images/modelCardhomme.png";
import modelCardEnfant from "../../assets/images/modelCardenfant.png";
import ActionAreaCard from "./../../common/Card";
import creationImg from "./../../assets/images/creations.png";
import hautDeGamme from "./../../assets/images/hautDeGamme.png";
import accessoires from "./../../assets/images/accessoires.png";
import Galerie from "./Galerie";
import { Link } from "react-router-dom";
import InfoAdmin from "./InfoAdmin";

export default function Home() {
  const primary = "var(--color-primary)";
  console.log(modelCardFemme);
  const style = {
    btn: {
      border: "4px solid var(--color-white)",
      color: "var(--color-white)",
      fontWeight: "bold",
      fontSize: "1.3em",
      top: "700px",
      right: "25%",
      width: "50%",
      height: "50px",
      textShadow: "2px 2px 0 var(--color-primary)",
      "&:hover": {
        backgroundColor: primary,
      },
    },
  };
  return (
    <div>
      <div
        class=" flex-column"
        style={{
          width: "100% !important",
          backgroundColor: "var(--color-grey)",
        }}
      >
        <SpacingGrid
          spacing={0}
          nbrchild={[
            <div className="position-relative">
              <Box component="img" src={BannerFemme} />
              <Button
                className="position-absolute"
                variant="outlined"
                sx={{ ...style.btn }}
              >
                Toute la Collection
              </Button>
            </div>,
            <div className="position-relative">
              <Box component="img" src={BannerHomme}></Box>
              <Button
                className="position-absolute"
                variant="outlined"
                sx={{ ...style.btn }}
              >
                Toute la Collection
              </Button>
            </div>,
          ]}
        />
        <h1
          style={{
            margin: "40px",
            textAlign: "center",
            color: "var(--color-white)",
          }}
        >
          Dernières réalisations
        </h1>

        <div className="pt-5" style={{ paddingLeft: "80px" }}>
          <SpacingGrid
            position="relative"
            style={{
              width: "300",
              height: "700px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
            }}
            spacing={10}
            nbrchild={[
              <RecipeReviewCard
                title={"Chemise pagne"}
                subheader={"collection pringtemps 2022"}
                alt="chemise femme pagne"
                image={modelCardFemme}
              />,
              <RecipeReviewCard
                title={"Gillet Bermimgam"}
                subheader={"collection pringtemps 2022"}
                alt="Gillet Bermimgam"
                image={modelCardHomme}
              />,
              <RecipeReviewCard
                title={"Veste Dammy"}
                subheader={"collection pringtemps 2022"}
                alt="chemise femme pagne"
                image={modelCardEnfant}
              />,
            ]}
          />
        </div>
      </div>
      <div className="mt-5 d-flex flex-column align-items-center">
        <div>
          <SpacingGrid
            spacing={10}
            nbrchild={[
              <ActionAreaCard
                title={"Vos Créations"}
                content={
                  "Vous avez une idée de modèle en tête, un croquis, un schema... On vous aide à realiser votre projet"
                }
                alt="Vos Créations"
                image={creationImg}
              />,
              <ActionAreaCard
                title={"Couture Haute Gamme"}
                content={
                  "Vous souhaitez avoir une tenue sur mesure et bénéficier de notre expertise et de nos conseils."
                }
                alt="Couture Haute Gamme"
                image={hautDeGamme}
              />,
              <ActionAreaCard
                title={"Accessoires"}
                content={
                  "Mariez vos tenues avec des accessoires assortis ou faites vous tout simplement plaisir"
                }
                alt="Accessoires"
                image={accessoires}
              />,
            ]}
          />
        </div>

        <Button
          className="mt-5 mb-5"
          variant="outlined"
          sx={{
            width: "350px",
            color: "var(--color-tertiary)",
            border: "3px solid var(--color-tertiary)",
            height: "50px",
            fontSize: "1.3em",
            "&:hover": {
              backgroundColor: "var(--color-tertiary)",
              color: "var(--color-white)",
            },
          }}
        >
          Toute la Collection
        </Button>

        <Galerie />

        <div>
          <Button
            className="mt-5 mb-5"
            variant="outlined"
            sx={{
              width: "350px",
              color: "var(--color-tertiary)",
              border: "3px solid var(--color-tertiary)",
              height: "50px",
              fontSize: "1.3em",
              "&:hover": {
                backgroundColor: "var(--color-tertiary)",
                color: "var(--color-white)",
              },
            }}
          >
            Toute la Collection
          </Button>
        </div>

        <div style={{ backgroundColor: "#E7E7E7", width: "98%" }}>
          <div class="row">
            <div class="col">
              <InfoAdmin />
            </div>
            <div
              class="col mt-5 d-flex flex-row justify-content-center align-items-center"
              style={{
                width: "400px",
                textAlign: "center",
              }}
            >
              <p>
                <Typography style={{ fontFamily: "$font", fontSize: "26px" }}>
                  Contacter le couturier via la{" "}
                  <Link to="/registration">messagerie interne</Link> du site{" "}
                  <br />
                  ou prenez un <Link to="/registration">rendez-vous</Link>
                </Typography>
              </p>
            </div>
            <div class="w-100"></div>
            <div class="col m-5">
              <h1>Les avis Clients</h1>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
