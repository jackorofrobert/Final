import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
// import Alaska2 form "../img/Alaska2.jpg";

function Detail() {
  const { title } = useParams();
  console.log(data, title);

  const product = data.dogData.find((item) => item.title === title);

  if (!product) return <div>Đang tải...</div>;

  return (
    <div>
      <div className="col-12 mt-15px" style={{ textAlign: "center" }}>
        <b style={{ fontSize: "30px" }}>{title}</b>
      </div>
      <div className="clear"></div>
      <div className="col-12 mt-15px blue" style={{ float: "left" }}>
        <b style={{ fontSize: "30px" }}>
          <u>Tổng Quát</u>
        </b>
      </div>
      <div className="clear"></div>
      <div className="container mt-30">
        <div className="col-12 slider">
          <div className="bg-product2">
            <img src={product.img} alt={product.title} />
            <p>{product.intro}</p>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <div className="col-12 mt-15px blue" style={{ float: "left" }}>
        <b style={{ fontSize: "30px" }}>
          <u>Khẩu phần ăn</u>
          {/* <img src={Alaska2} alt={product.title} /> */}
        </b>
      </div>
      <div className="clear"></div>
      <div className="container mt-30">
        <div className="col-12 slider">
          <div className="bg-product2">
            <p>{product.meal}</p>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <div className="col-12 mt-15px blue" style={{ float: "left" }}>
        <b style={{ fontSize: "30px" }}>
          <u>Alaska 2 - 3 tháng tuổi</u>
        </b>
      </div>
      <div className="clear"></div>
      <div className="container mt-30">
        <div className="col-12 slider">
          <div className="bg-product2">
            <p>{product.meal_2_3}</p>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <div className="col-12 mt-15px blue" style={{ float: "left" }}>
        <b style={{ fontSize: "30px" }}>
          <u>Alaska 3 - 6 tháng tuổi</u>
        </b>
      </div>
      <div className="clear"></div>
      <div className="container mt-30">
        <div className="col-12 slider">
          <div className="bg-product2">
            <p>{product.meal_3_6}</p>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <div className="col-12 mt-15px blue" style={{ float: "left" }}>
        <b style={{ fontSize: "30px" }}>
          <u>Alaska trên 6 tháng tuổi</u>
        </b>
      </div>
      <div className="clear"></div>
      <div className="container mt-30">
        <div className="col-12 slider">
          <div className="bg-product2">
            <p>{product.meal_6}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
