import React, { useState, useEffect } from "react";
import background from "../img/background-slider.jpg";
import Services from "../components/Services";
import PopularSection from "../components/PopularSection";
import Product from "../components/Product";
import Offer from "../components/Offer";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/animal")
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          alert(result.error);
        } else {
          setData(result);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
        <PopularSection />
        {data.data &&
          data.data.map((item, index) => {
            if (item.popular && item.target === "dog")
              return (
                <Product key={index} image={item.img} title={item.title} />
              );
          })}
      </div>
      <div className="clear"></div>
      <div className="container">
        <PopularSection />
        {data.data &&
          data.data.map((item, index) => {
            if (item.popular && item.target === "cat")
              return (
                <Product key={index} image={item.img} title={item.title} />
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
