import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const ContactAdd = () => {
  return (
    <div className="contactAddContainer">
      <h3>
        Say <span>Hello</span>
      </h3>
      <div className="address">
        <h4>Enquires</h4>
        <li>
          {" "}
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
          ></FontAwesomeIcon>{" "}
          <a href="mailto:info@lawyersatbangalore.com">
            info@lawyersatbangalore.com
          </a>{" "}
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faPhone}
            className="footerIcon"
          ></FontAwesomeIcon>{" "}
          <a href="tel:7019925059"> +91 7019925059</a>
        </li>
        <div className="socialMedia">
          <FontAwesomeIcon
            icon={faInstagram}
            className="socialContact"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faFacebook}
            className="socialContact"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faXTwitter}
            className="socialContact"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faLinkedin}
            className="socialContact"
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default ContactAdd;
