import React from "react";
import "./HomeSolution.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

const HomeSolutionHeader = () => {
  return (
    <div className="homeSolutionHeaderContainer">
      <h5>
        <FontAwesomeIcon
          icon={faHeadphones}
          className="headphoneIcon"
        ></FontAwesomeIcon>
        CALL US 24/7
      </h5>
      <h2>For Legal Solution</h2>
      <h2>
        <a href="tel:7019925059">
          {" "}
          <span>+91 7019925059</span>
        </a>
      </h2>
      <h3>Or</h3>
      <h2>
        Schedule A <span>Free Consultation</span>
      </h2>
    </div>
  );
};

export default HomeSolutionHeader;
