import React from "react";
import "../App.css";
import Store from "./Store";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

function Home() {
  return (
    <ShoppingCartContext>
      <Store />
    </ShoppingCartContext>
  );
}

export default Home;
