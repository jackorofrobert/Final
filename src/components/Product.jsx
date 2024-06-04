import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Product.css';

function Product({ image, title, id}) {
  return (
    <div className="col-3">
      <div className="bg-product">
        <Link to={`/detail/${id}`}>
          <img src={image} alt={title} className="fit" />
          <h3 className="title-3">{title}</h3>
        </Link>
      </div>
    </div>
  );
}

export default Product;