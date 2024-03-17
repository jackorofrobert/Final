import React from "react";
import ServiceBox from "./OfferBox";

function Services() {
  const serviceData = [
    {
      icon: "../img/Medal.jpg",
      title: "Latest Interior Parts",
      description:
        "All best seller product are now availabe for you and your can buy this product from here any time any where so sop now",
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
