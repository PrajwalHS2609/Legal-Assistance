import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menuContainer">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/service"}>Service</Link>
      </li>
      <li>About Us</li>
      <li>Careers</li>
      <li>Contact Us</li>
    </div>
  );
};

export default Menu;
