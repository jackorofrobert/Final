import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
import VNClock from "./VNClock";
import "../css/Header.css";

function Header() {
  return (
    <div className="flex">
      <div className="col-3 logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="col-6 nav mt-15">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link to="/#" className="dropbtn">
              ABOUT
            </Link>
            <div className="dropdown-content">
              <Link to="/about/dogs">DOGS</Link>
              <Link to="/about/cats">CATS</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/#" className="dropbtn">
              SHOP
            </Link>
            <div className="dropdown-content">
              <Link to="/shop/dogs">FOR DOGS</Link>
              <Link to="/shop/cats">FOR CATS</Link>
            </div>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
      <div>
        <VNClock />
      </div>
    </div>
  );
}

export default Header;
