import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.jpg";
import VNClock from "./VNClock";
import "../css/Header.css";

function Header({ accessToken, ...prop }) {
  const handleLogout = () => {
    prop.logout();
  }

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
            {!accessToken ? (<Link to="/login">Login</Link>) : (<div> <span onClick={handleLogout}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></span></div>)}

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