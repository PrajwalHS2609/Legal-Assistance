import React from "react";
import "../Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faLinkedin,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer1Social = () => {
  return (
    <div className="footerSocialContainer">
      <ul>
        <h3>Social Media</h3>
        <li>
          <a href="*">
            {" "}
            <FontAwesomeIcon
              icon={faInstagram}
              className="socialIcon"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="*">
            {" "}
            <FontAwesomeIcon
              icon={faXTwitter}
              className="socialIcon"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="*">
            {" "}
            <FontAwesomeIcon
              icon={faLinkedin}
              className="socialIcon"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="*">
            {" "}
            <FontAwesomeIcon
              icon={faFacebook}
              className="socialIcon"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="*">
            {" "}
            <FontAwesomeIcon
              icon={faYoutube}
              className="socialIcon"
            ></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer1Social;
