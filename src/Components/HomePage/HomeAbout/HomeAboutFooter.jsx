import React from "react";
import "./HomeAbout.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const HomeAboutFooter = () => {
  return (
    <div className="homeAboutFooter">
      <div className="homeAboutFooterContent">
        <h4>
          <Link to="/">
            View All{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="headphoneIcon"
            ></FontAwesomeIcon>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default HomeAboutFooter;
