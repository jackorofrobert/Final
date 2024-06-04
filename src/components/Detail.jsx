import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
// import Alaska2 form "../img/Alaska2.jpg";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/animal/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          alert(result.error);
        } else {
          setProduct(result.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!product) return <div>Đang tải...</div>;

  return (
    <div>
      <div className="col-12 mt-15px" style={{ textAlign: "center" }}>
        <b style={{ fontSize: "30px" }}>{product?.title}</b>
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
            <img src={product?.img} alt={product?.title} />
            <p>{product?.intro}</p>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <div className="col-12 mt-15px blue" style={{ float: "left" }}>
        <b style={{ fontSize: "30px" }}>
          <u>Khẩu phần ăn</u>
          {/* <img src={Alaska2} alt={product?.title} /> */}
        </b>
      </div>
      <div className="clear"></div>
      <div className="container mt-30">
        <div className="col-12 slider">
          <div className="bg-product2">
            <p>{product?.meal}</p>
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
            <p>{product?.meal_2_3}</p>
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
            <p>{product?.meal_3_6}</p>
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
            <p>{product?.meal_6}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
