import { Container, Navbar, Offcanvas, Stack } from "react-bootstrap";
import CheckboxesGroup from "../../common/CheckboxesGroup";
import { Checkbox } from "@mui/material/Checkbox";
import { useFashionCollectionss } from "../../common/collections";
import { useEffect } from "react";

export default function FilterMenu() {
  const { items: collections, fetchItems: fetchCollections } =
    useFashionCollectionss();

  useEffect(() => {
    async function fetchData() {
      await fetchCollections();
    }
    fetchData();
  }, []);

  return (
    <div
      className="d-flex flex-column justify-content-start align-items-start"
      style={{ width: "100%" }}
    >
      <h1>Filtre par :</h1>
      <CheckboxesGroup
        title="Genre"
        items={[
          { label: "homme", value: true },
          { label: "femme", value: true },
          { label: "enfant", value: true },
        ]}
      />
      <CheckboxesGroup
        title="Categorie"
        items={[
          { label: "Chemise", value: true },
          { label: "Jeans", value: true },
          { label: "Ensembles", value: true },
          { label: "Vests", value: true },
          { label: "Bas", value: true },
          { label: "Accessoires", value: true },
        ]}
      />
      {collections.length >= 5 ? (
        <CheckboxesGroup
          title="Collection"
          items={collections.slice(0, 5).map((collection) => {
            return { label: collection.name, value: true };
          })}
        />
      ) : (
        []
      )}
    </div>
  );
}
