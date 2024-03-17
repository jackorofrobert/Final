import React from "react";
import ServiceBox from "./ServiceBox";

function Services() {
  const serviceData = [
    {
      icon: "../img/Medal.jpg",
      title: "Free home delivery",
      description: "Provide free home delivery for the all product over $100",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {serviceData.map((service, index) => (
          <ServiceBox key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
