import { Button, CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import { backend } from "../../adapters/apiCalls";
import { useAppContext } from "../../AppContext";
import ActionAreaCard from "../../common/Card";
import { useCart, useItems } from "../../common/collections";

export default function TableItems() {
  const { items, fetchItems } = useItems();
  const { user } = useAppContext();
  const [cart, setCart] = useState({});

  useEffect(() => {
    if (!user.id) return;
    async function fetchData() {
      await fetchItems();
      let cart1 = {};
      await backend.get(`carts/${user?.cart?.id}`).then(({ status, data }) => {
        if (status !== 200) return;
        cart1 = data;
      });

      setCart(cart1);
    }
    fetchData();
  }, [user]);

  async function addToCart(item) {
    backend
      .put(`carts/${cart.id}`, {
        ...cart,
        items: [...cart.items.map((item) => item.id), item.id],
      })
      .then((res) => {
        console.log(res);
      });

    setCart({
      ...cart,
      items: [...cart.items, item],
    });
  }

  function inCart(item2) {
    return cart.items?.filter((item1) => item1.id === item2.id)?.length > 0;
  }

  return (
    <div>
      {items.map((item) => (
        <ActionAreaCard
          key={item.id}
          title={item.name}
          content={`A partir de ${item.estimatedPrice}€`}
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
