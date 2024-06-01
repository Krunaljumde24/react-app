import React, { createContext, useState } from "react";

const CartContext = createContext();

function ShoppingCartContext({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ addToCart, emptyCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export { ShoppingCartContext, CartContext };
