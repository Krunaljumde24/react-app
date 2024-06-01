import React, { useContext, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { useState } from "react";
import Cart from "./Cart";

function Store() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        console.log(resp.data);
        setProductList(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-around">
        {productList.map((product) => {
          return <Product productDetails={product} className="col" />;
        })}
      </div>
    </div>
  );
}

export default Store;
