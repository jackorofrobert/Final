import React from "react";
import data from "../data.json";
import background from "../img/background-slider.jpg";
import Services from "../components/Services";
import Product from "../components/Product";
import Offer from "../components/Offer";

const Cats = () => {
  return (
    <div>
      <div className="container slider">
        <img src={background} alt="Background" />
      </div>
      <div className="clear"></div>
      <div className="container">
        <Services />
        <Services />
        <Services />
      </div>
      <div className="clear"></div>
      <div className="container">
        {data.catData.map((item, index) => {
          return (
            <Product key={index} image={item.img} title={item.title} />
          );
        })}
      </div>
      <div className="clear"></div>
      <div className="container">
        <Offer />
        <Offer />
        <Offer />
      </div>
    </div>
  );
};

export default Cats;
