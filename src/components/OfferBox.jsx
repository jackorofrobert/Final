import React from "react";
import "../css/ServiceBox.css";

function OfferBox({ icon, title, description }) {
  return (
    <div className="col-4">
      <div className="bg-service">
        <div className="col-3">
          <img src={icon} alt="Service Icon" width="77px" height="77px" />
        </div>
        <div className="col-9">
          <p className="title-2 text-151515">{title}</p>
          <p className="text-151515">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default OfferBox;
