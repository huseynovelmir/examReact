import React from "react";
import "./index.scss";
import ProductCards from "../productcards/ProductCards";
const NewArrivals = () => {
  return (
    <div className="newarrivals">
      <div className="cards">
        <div className="card card1">
          <a href="">WOMEN'S</a>
        </div>
        <div className="card card2">
          <a href="">ACCESSORIES'S</a>
        </div>
        <div className="card card3">
          <a href="">MEN'S</a>
        </div>
      </div>
      <h1>New Arrivals</h1>
      <div className="buttons">
        <button>ALL</button>
        <button>WOMEN'S</button>
        <button>ACCESSORIES</button>
        <button>MEN'S</button>
      </div>
      <ProductCards />
    </div>
  );
};

export default NewArrivals;
