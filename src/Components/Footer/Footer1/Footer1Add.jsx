import React from "react";
import "../Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer1Add = () => {
  return (
    <div className="footerAddContainer">
      <FontAwesomeIcon
        icon={faScaleBalanced}
        className="solCal"
      ></FontAwesomeIcon>
      <p>
        Trusted legal experts delivering exceptional results with personalized
        service.
      </p>

      <div className="footerAddContent">
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="footerIcon"
            ></FontAwesomeIcon>{" "}
            Bangalore
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              className="footerIcon"
            ></FontAwesomeIcon>
            <Link to="/"> info@m&massociates.com</Link>
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faPhone}
              className="footerIcon"
            ></FontAwesomeIcon>
            <Link to={"/"}>+91 1234567890</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer1Add;