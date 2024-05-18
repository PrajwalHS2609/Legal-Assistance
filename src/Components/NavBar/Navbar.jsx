import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  let [scroll, setScroll] = useState(false);

  let changeColor = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return <div className={scroll ? "navContainer" : "navContainer1"}>
    <h1>logo</h1>
  </div>;
};

export default Navbar;
