import React from 'react';
import Product from '../components/shopProduct';
import data from "../data.json";

const CatShop = () => {
    return (
        <div>
          <div className="col-12 mt-15px" style={{ textAlign: 'center' }}>
            <b style={{ fontSize: '30px' }}>Thức ăn</b>
            <div className="container">
              {data.catShopData.map((item, index) => {
                if (item.type == "food") {
                  return (
                    <Product key={index} image={item.image} price={item.price} type={item.type}/>
                  );
                  }
              })}
            </div> 
          </div>
          <div className="clear"></div>
          <div className="col-12 mt-15px" style={{ textAlign: 'center' }}>
            <b style={{ fontSize: '30px' }}>Nhà</b>
            <div className="container">
              {data.catShopData.map((item, index) => {
                if (item.type == "house") {
                  return (
                    <Product key={index} image={item.image} price={item.price} type={item.type}/>
                  );
                  }
              })}
            </div> 
          </div>
          <div className="clear"></div>
          <div className="col-12 mt-15px" style={{ textAlign: 'center' }}>
            <b style={{ fontSize: '30px' }}>Đồ chơi</b>
            <div className="container">
              {data.catShopData.map((item, index) => {
                if (item.type == "toy") {
                  return (
                    <Product key={index} image={item.image} price={item.price} type={item.type}/>
                  );
                  }
              })}
            </div> 
          </div>
        </div>
      )
}

export default CatShop
