import React from "react";
import "../Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer1Service = () => {
  return (
    <div className="footerMenuContainer">
      <ul>
        <h3>Our Services</h3>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link>Family Law</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link>Criminal Law</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link>Civil Law</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link>Employment Law</Link>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link>Estate law</Link>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link>Consumer law</Link>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link>Immigration law</Link>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link>Commercial law</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer1Service;
