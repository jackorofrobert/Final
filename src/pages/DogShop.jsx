import React, { useEffect, useState } from 'react'
import Product from '../components/shopProduct';
import { useNavigate } from 'react-router-dom';

const DogShop = () => {
  const accessToken = JSON.parse(localStorage.getItem('access_token')) || undefined;
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate('/login', { replace: true });
  //   }
  // }, [accessToken, navigate]);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/shop")
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          alert(result.error);
        } else {
          console.log(result);
          setData(result);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="col-12 mt-15px" style={{ textAlign: 'center' }}>
        <b style={{ fontSize: '30px' }}>Thức ăn</b>
        <div className="container">
          {data.data && data.data.map((item, index) => {
            if (item.type === "food" && item.target === "dog") {
              return (
                <Product key={index} image={item.img} price={item.price} type={item.type}/>
              );
            }
          })}
        </div> 
      </div>
      <div className="clear"></div>
      <div className="col-12 mt-15px" style={{ textAlign: 'center' }}>
        <b style={{ fontSize: '30px' }}>Nhà</b>
        <div className="container">
          {data.data && data.data.map((item, index) => {
            if (item.type === "house" && item.target === "dog") {
              return (
                <Product key={index} image={item.img} price={item.price} type={item.type}/>
              );
            }
          })}
        </div> 
      </div>
      <div className="clear"></div>
      <div className="col-12 mt-15px" style={{ textAlign: 'center' }}>
        <b style={{ fontSize: '30px' }}>Đồ chơi</b>
        <div className="container">
          {data.data && data.data.map((item, index) => {
            if (item.type === "toy" && item.target === "dog") {
              return (
                <Product key={index} image={item.img} price={item.price} type={item.type}/>
              );
            }
          })}
        </div> 
      </div>
    </div>
  )
}

export default DogShop;
