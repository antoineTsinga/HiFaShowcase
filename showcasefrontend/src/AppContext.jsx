import React, { createContext, useContext, useState, useEffect } from "react";

import { backend } from "./adapters/apiCalls";

import checkUser from "./adapters/checkUser";

export const AppContext = createContext({
  onConnect: null, // true, false, or null if not set
  setOnConnect: Function,
  name: null,
  email: null,
  id: null,
  user: {},
  cart: [],
  updateUser: Function,
  updateCart: Function,
});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [onConnect, setOnConnect] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (onConnect === false) return;
      const response = await checkUser();
      if (response.data) {
        setUsername(response.data.username);
        setUserData(response.data);
        setOnConnect(true);
        const { data: user1 } = await backend.get(
          `clients/${response.data.id}`
        );

        const { data: cart } = await backend.get(`cart/${user1.cart}`);

        setCart(cart);
        setUser(user1);
      } else {
        setOnConnect(false);
      }
    }
    fetchData();
  }, [onConnect]); // Or [] if effect doesn't need props or state

  return (
    <AppContext.Provider
      value={{
        username,
        onConnect,

        setOnConnect,
        userData,
        user,
        cart,
        updateCart: setCart,
        updateUser: setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
