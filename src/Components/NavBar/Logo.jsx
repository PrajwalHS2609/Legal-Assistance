import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
const Logo = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faScaleBalanced}
        className="solCal"
      ></FontAwesomeIcon>
    </div>
  );
};

export default Logo;
