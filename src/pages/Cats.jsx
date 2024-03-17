import React from "react";
import background from "../img/background-slider.jpg";
import Services from "../components/Services";
import PopularSection from "../components/PopularSection";
import Product from "../components/Product";
import Offer from "../components/Offer";

const Cats = () => {
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
        {/* <Product image={catProduct.image} title={catProduct.title} /> */}
        {/* <Product image={catProduct.image} title={catProduct.title} /> */}
        {/* <Product image={catProduct.image} title={catProduct.title} /> */}
        {/* <Product image={catProduct.image} title={catProduct.title} /> */}
        {/* <Product image={catProduct.image} title={catProduct.title} /> */}
        {/* <Product image={catProduct.image} title={catProduct.title} /> */}
        {/* <Product image={catProduct.image} title={catProduct.title} /> */}
        {/* <Product image={catProduct.image} title={catProduct.title} /> */}
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
