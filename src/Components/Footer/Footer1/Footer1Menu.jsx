import React from "react";
import "../Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer1Menu = () => {
  return (
    <div className="footerMenuContainer">
      <ul>
        <h3>Quick Links</h3>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link to={"/service"}>Service</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link>About Us</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link>Careers</Link>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link> Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer1Menu;