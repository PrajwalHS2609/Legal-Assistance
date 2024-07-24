import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faX } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenuContainer");
    sideBar.style.display = "block";
    sideBar.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenuContainer");
    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(100%)";
  };
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
      <li>Contact Us</li>{" "}
      <FontAwesomeIcon
        icon={faBarsStaggered}
        className="menuBar"
        onClick={showSideBar}
      ></FontAwesomeIcon>
      
      <div className="respMenuContainer">
        <li>
          <Link onClick={hideSideBar} to={"/"}>Home</Link> <FontAwesomeIcon icon={faX} className="menuX" onClick={hideSideBar}></FontAwesomeIcon>
        </li>
        <li><Link onClick={hideSideBar} to={"/service"}>Service</Link></li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Contact Us</li>
      </div>
    </div>
  );
};

export default Menu;
