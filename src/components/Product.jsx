import React, { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";

function Product({ productDetails }) {

  const { addToCart, emptyCart } = useContext(CartContext);
  let handleAddToCartBtnClick = (product) => {
    addToCart(product);
  };

  return (
    <div className="card productCard">
      <img
        src={productDetails.image}
        className="card-img-top productCardImg"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{productDetails.title}</h5>
        <p className="card-text">{productDetails.description}</p>
        <button type="button" className="btn btn-primary">
          Buy Now
        </button>
        <button
          type="button"
          className="btn btn-warning mx-2"
          onClick={() => {
            handleAddToCartBtnClick(productDetails);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
