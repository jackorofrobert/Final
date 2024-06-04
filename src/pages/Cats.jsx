import React, { useEffect, useState } from "react";
import background from "../img/background-slider.jpg";
import Services from "../components/Services";
import Product from "../components/Product";
import Offer from "../components/Offer";

const Cats = () => {
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
        {data.data && data.data.map((item, index) => {
          return (
            <Product key={index} image={item.img} title={item.title} id={item._id}/>
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
