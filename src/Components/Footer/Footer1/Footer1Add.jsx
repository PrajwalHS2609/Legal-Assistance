import React from "react";
import "../Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import mmLogo from "./../../../Images/MM Associates Logo.png"
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
            Bangalore
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              className="footerIcon"
            ></FontAwesomeIcon>
            <Link to="/"> info@mmassociates.com</Link>
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faPhone}
              className="footerIcon"
            ></FontAwesomeIcon>
            <Link to={"/"}>+91 1234567890</Link>
          </li>
      </div>
    </div>
  );
};

export default Footer1Add;
