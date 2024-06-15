import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Detail.css";

const Section = ({ title, content }) => (
  <>
    <div className="col-12 mt-15px blue" style={{ float: "left" }}>
      <b style={{ fontSize: "30px" }}>
        <u>{title}</u>
      </b>
    </div>
    <div className="clear"></div>
    <div className="container mt-30">
      <div className="col-12 slider">
        <div className="bg-product2">
          <p>{content}</p>
        </div>
      </div>
    </div>
    <div className="clear"></div>
  </>
);

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/v1/animal/${id}`);
        const result = await res.json();
        if (result.error) {
          alert(result.error);
        } else {
          setProduct(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Đang tải...</div>;

  return (
    <div>
      <div className="col-12 mt-15px" style={{ textAlign: "center" }}>
        <b style={{ fontSize: "30px" }}>{product?.title}</b>
      </div>
      <div className="clear"></div>
      <Section title="Tổng Quát" content={<img src={product?.img} alt={product?.title} />} />
      <Section title="Khẩu phần ăn" content={product?.meal} />
      <Section title="Alaska 2 - 3 tháng tuổi" content={product?.meal_2_3} />
      <Section title="Alaska 3 - 6 tháng tuổi" content={product?.meal_3_6} />
      <Section title="Alaska trên 6 tháng tuổi" content={product?.meal_6} />
    </div>
  );
}

export default Detail;
