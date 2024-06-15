import React from "react";
import logo from "../img/logo.jpg";
import "../css/Footer.css";
import "../css/font-awesome.css";

function Footer() {
  return (
    <div>
      <div className="row container">
        <div className="col-6 info">
          <img src={logo} alt="Logo" />
        </div>
        <div className="col-6 contact">
          <h4 className="footer-title">Contact Us</h4>
          <div className="form-contact">
            <div className="col-9">
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="col-3">
              <button>Submit</button>
            </div>
          </div>
          <div className="clear"></div>
          <div className="col-6">
            <p>
              <i className="fa fa-phone"></i>
              123-456-789
            </p>
          </div>
          <div className="col-6 text-right">
            <p>
              <i className="fa fa-envelope"></i>
              info@organic.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
