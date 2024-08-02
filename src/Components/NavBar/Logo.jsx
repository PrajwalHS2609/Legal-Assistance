import React from "react";
import "./Navbar.css";
import logo from "./../../Images/MM Associates Logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>{" "}
    </div>
  );
};

export default Logo;
