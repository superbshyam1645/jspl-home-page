import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../images/Photo from jees8269.jpg";
function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo"></img>
      <div className="header-main">
        <div className="header-item">Home</div>
        <div className="header-item">About Us</div>
        <div className="header-item">Services</div>
      </div>
      <div className="header-login">Login</div>
    </div>
  );
}

export default Header;
