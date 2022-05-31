import { Container, Navbar, Offcanvas, Stack } from "react-bootstrap";
import CheckboxesGroup from "../../common/CheckboxesGroup";
import { Checkbox } from "@mui/material/Checkbox";
import { useFashionCollections } from "../../common/collections";
import { useEffect, useState } from "react";
import { useCatalogueContext } from "./CatalogueContext";
import { useSearchParams } from "react-router-dom";

export default function FilterMenu() {
  const { collections, fetchCatalogueItems, setParamsFilter } =
    useCatalogueContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const genre = searchParams.get("genre");

  useEffect(() => {
    console.log(genre);
    if (!["homme", "femme", "enfant"].includes(genre)) return;

    async function addFilter() {
      let newItemsFilter = {};

      newItemsFilter = {
        ...itemsFilter,
        genre: itemsFilter.genre.map((g) => {
          if (g.label === genre) {
            return { ...g, value: true };
          }
          return g;
        }),
      };
      console.log(newItemsFilter);
      const genderIn = newItemsFilter.genre
        .filter((genre) => genre.value)
        .map((genre) => genre.label.toUpperCase())
        .join(",");

      const categoryIn = newItemsFilter.category
        .filter((genre) => genre.value)
        .map((genre) => genre.label.toUpperCase())
        .join(",");

      const params = {
        genderIn,
        categoryIn,
      };
      setParamsFilter({ ...params });
    }
    addFilter();
  }, [genre]);

  const [itemsFilter, setItemFilter] = useState({
    genre: [
      { label: "homme", value: false },
      { label: "femme", value: false },
      { label: "enfant", value: false },
    ],
    category: [
      { label: "Chemises", value: false },
      { label: "Jeans", value: false },
      { label: "Ensembles", value: false },
      { label: "Vestes", value: false },
      { label: "Bas", value: false },
      { label: "Tops", value: false },
      { label: "Accessoires", value: false },
    ],
    collections: null,
  });

  useEffect(() => {
    async function addFilter() {
      const genderIn = itemsFilter.genre
        .filter((genre) => genre.value)
        .map((genre) => genre.label.toUpperCase())
        .join(",");

      const categoryIn = itemsFilter.category
        .filter((genre) => genre.value)
        .map((genre) => genre.label.toUpperCase())
        .join(",");

      const params = {
        genderIn,
        categoryIn,
      };
      setParamsFilter({ ...params });
    }
    addFilter();
  }, [itemsFilter]);

  return (
    <div
      className="d-flex flex-column justify-content-start align-items-start"
      style={{ width: "100%" }}
    >
      <h1>Filtre par :</h1>
      <CheckboxesGroup
        title="Genre"
        items={itemsFilter.genre}
        setItems={(value) => setItemFilter({ ...itemsFilter, genre: value })}
      />
      <CheckboxesGroup
        title="Categorie"
        items={itemsFilter.category}
        setItems={(value) => setItemFilter({ ...itemsFilter, category: value })}
      />
      {collections.length >= 5 ? (
        <CheckboxesGroup
          title="Collection"
          items={itemsFilter.collections}
          setItems={(value) =>
            setItemFilter({ ...itemsFilter, collections: value })
          }
        />
      ) : (
        []
      )}
    </div>
  );
}
