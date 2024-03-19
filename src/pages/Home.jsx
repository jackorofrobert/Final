import React from "react";
import background from "../img/background-slider.jpg";
import Services from "../components/Services";
import PopularSection from "../components/PopularSection";
import Product from "../components/Product";
import Offer from "../components/Offer";
import data from "../data.json";

const Home = () => {
  console.log(data);

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
        {data.dogData.map((item, index) => {
          if (item.popular)
            return (
              <Product key={index} image={item.image} title={item.title} />
            );
        })}
      </div>
      <div className="clear"></div>
      <div className="container">
        <PopularSection />
        {data.catData.map((item, index) => {
          if (item.popular)
            return (
              <Product key={index} image={item.image} title={item.title} />
            );
        })}
      </div>
      <div className="clear"></div>
      <div className="container-fluid bg-banner">
        <h2 className="title-2">
          SPECIAL <span>OFFER</span> FOR SUBSCRIPTION
        </h2>
        <h1 className="title-1">GET INSTANT DISCOUNT FOR MEMBERSHIP</h1>
        <p style={{ color: "black" }}>
          Subscribe our newsletter and all latest news of our latest product,
          promotion and offers
        </p>
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

export default Home;
