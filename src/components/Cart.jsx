import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { useState } from "react";

function Cart() {
  let { cart, emptyCart } = useContext(CartContext);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    setCartItem(cart);
  }, [cart]);

  return (
    <div>
      {console.log("Cart items =>", cart)}
      {cart.map((item) => {
        <div className="cart-item">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <b>{item.price}</b>
        </div>;
      })}

      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          emptyCart();
        }}
      >
        Empty Cart
      </button>
    </div>
  );
}

export default Cart;
