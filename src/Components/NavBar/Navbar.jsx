import React, { useState } from "react";
import "./Navbar.css";
import Menu from "./Menu";
import Logo from "./Logo";
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

  return (
    <div className={scroll ? "navContainer" : "navContainer1"}>
      <Logo />
      <Menu />
    </div>
  );
};

export default Navbar;
