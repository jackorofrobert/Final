import React from "react";
import "../css/Product.css";

function Product({ image, type, price }) {
  return (
    <div className="col-3">
      <div className="bg-product">
        <img src={image} alt={type} className="fit" />
        <h3 className="title-3">{price}</h3>
      </div>
    </div>
  );
}

export default Product;
