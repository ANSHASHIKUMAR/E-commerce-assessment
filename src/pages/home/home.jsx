import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="shopTitle">
        <h1>Products List</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
          
        ))}
      </div>
    </div>
  );
};
