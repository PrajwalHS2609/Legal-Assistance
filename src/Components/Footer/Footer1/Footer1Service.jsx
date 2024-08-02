import React from "react";
import "../Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer1Service = () => {
  return (
    <div className="footerMenuContainer">
      <ul>
        <h3>Our Legal Services</h3>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link to={"/divorce-and-family-court-lawyers-in-bangalore"}>
            Family Law
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link to={"/criminal-lawyers-in-bangalore"}>Criminal Law</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link to={"/civil-lawyers-in-bangalore"}>Civil Law</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link to={"/labour-court-lawyers-in-bangalore"}>Employment Law</Link>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link to={"/lawyers-for-property-registration-in-bangalore"}>
            Estate law
          </Link>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link to={"/consumer-court-lawyers-in-bangalore"}>Consumer law</Link>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link to={"/immigration-lawyers-in-bangalore"}>Immigration law</Link>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="footerIcon"
          ></FontAwesomeIcon>
          <Link to={"/commercial-court-lawyers-in-bangalore"}>
            Commercial law
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer1Service;
