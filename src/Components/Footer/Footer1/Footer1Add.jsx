import React from "react";
import "../Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import mmLogo from "./../../../Images/MM Associates Logo.png";
const Footer1Add = () => {
  return (
    <div className="footerAddContainer">
      <img src={mmLogo} alt="" />
      <p>
        Trusted legal experts delivering exceptional results with personalized
        service.
      </p>

      <div className="footerAddContent">
        <li>
          <FontAwesomeIcon
            icon={faLocationDot}
            className="footerIcon"
          ></FontAwesomeIcon>{" "}
          #119, 2nd Floor, 4th Cross, Behind Mavalli Biryani, Lalbagh Road,
          Bangalore - 560027
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faEnvelope}
            className="footerIcon"
          ></FontAwesomeIcon>
          <a href="mailto:info@lawyersatbangalore.com">
            info@lawyersatbangalore.com
          </a>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faPhone}
            className="footerIcon"
          ></FontAwesomeIcon>
          <a href="tel:7019925059">+91 7019925059</a>
        </li>
      </div>
    </div>
  );
};

export default Footer1Add;
