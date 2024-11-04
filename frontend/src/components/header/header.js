import React, { useState } from "react";
import "./header.css";
import logo from "../../images/Photo from jees8269.jpg";
import loginicon from "../../images/usericon.png";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const servicesDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      <div className="header">
        <img src={logo} alt="Company Logo" className="logo" />

        <div className="header-main">
          <div className="header-item">Home</div>
          <div className="header-item">About Us</div>
          <div className="header-item" onClick={servicesDropdown}>
            Services
          </div>
        </div>
        <div className="header-login">
          Login
        </div>
      </div>

      <div className="header-dropdown">
        {showDropdown && (
          <div className="dropdown-menu">
            <div className="dropdown-item">Staffing</div>
            <div className="dropdown-item">Hospitality</div>
            <div className="dropdown-item">Technologies</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
