import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./BreadCrumbs.css"
const BreadCrumbs = (props) => {
  return (
    <div className="breadCrumbsContainer">
      <Link to="/">Home</Link>
      <FontAwesomeIcon
        icon={faAnglesRight}
        className="arrow"
      ></FontAwesomeIcon>
    <span>{props.service}</span>
    </div>
  );
};

export default BreadCrumbs;
