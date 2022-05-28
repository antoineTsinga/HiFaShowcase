import { Button, CardActions } from "@mui/material";
import { useEffect } from "react";
import { useAppContext } from "../../AppContext";
import ActionAreaCard from "../../common/Card";
import { useCart, useItems } from "../../common/collections";

export default function TableItems() {
  const { fetchItem: fetchCart, updateItem: updateCart } = useCart();
  const { cart } = useAppContext();
  const { items, fetchItems } = useItems();

  useEffect(() => {
    async function fetchData() {
      fetchItems();
    }

    fetchData();
  }, []);

  function addToCart(item) {
    console.log("ici");
    updateCart(cart.id, [...cart.items, item]);
  }

  function inCart(item2) {
    return cart.items?.filter((item1) => item1.id === item2.id)?.lenght > 0;
  }

  return (
    <div>
      {items.map((item) => (
        <ActionAreaCard
          key={item.id}
          title={item.name}
          content={`A partir de ${item.estimatedPrice}`}
          image={item.image}
          alt={item.name}
        >
          <CardActions>
            {!inCart(item) ? (
              <Button
                className="btn-primary"
                variant="contained"
                sx={{
                  marginBottom: 2,
                  bgcolor: "var(--color-secondary) !important",
                }}
                style={{ fontFamily: "$font" }}
                onClick={() => addToCart(item)}
              >
                Ajouter aux panier
              </Button>
            ) : (
              <Button
                className="btn-primary"
                variant="contained"
                sx={{
                  marginBottom: 2,
                  bgcolor: "var(--color-secondary) !important",
                }}
                style={{ fontFamily: "$font" }}
                disabled
              >
                Dans Votre panier
              </Button>
            )}
          </CardActions>
        </ActionAreaCard>
      ))}
    </div>
  );
}
