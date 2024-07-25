import React from "react";
import "./Navbar.css";
import logo from  "./../../Images/MM Associates Logo.png"
const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
