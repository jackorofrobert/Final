import React from "react";
import background from "../img/background-slider.jpg";
import Services from "../components/Services";
import PopularSection from "../components/PopularSection";
import Product from "../components/Product";
import Offer from "../components/Offer";

const Dogs = () => {
  return (
    <div>
      <div className="container-fluid slider">
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
        <PopularSection />
        {/* <Product image={dogProduct.image} title={dogProduct.title} /> */}
        {/* <Product image={dogProduct.image} title={dogProduct.title} /> */}
        {/* <Product image={dogProduct.image} title={dogProduct.title} /> */}
        {/* <Product image={dogProduct.image} title={dogProduct.title} /> */}
        {/* <Product image={dogProduct.image} title={dogProduct.title} /> */}
        {/* <Product image={dogProduct.image} title={dogProduct.title} /> */}
        {/* <Product image={dogProduct.image} title={dogProduct.title} /> */}
        {/* <Product image={dogProduct.image} title={dogProduct.title} /> */}
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

export default Dogs;
