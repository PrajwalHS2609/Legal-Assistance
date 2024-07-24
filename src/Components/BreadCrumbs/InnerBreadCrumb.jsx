import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "./BreadCrumbs.css";
import { Link } from "react-router-dom";

const InnerBreadCrumb = (props) => {
  return (
    <div className="breadCrumbsContainer">
      <Link to="/">Home</Link>
      <FontAwesomeIcon icon={faAnglesRight} className="arrow"></FontAwesomeIcon>
      <Link to={props.link}>{props.service}</Link>
      <FontAwesomeIcon icon={faAnglesRight} className="arrow"></FontAwesomeIcon>
      <span>{props.currService}</span>
    </div>
  );
};

export default InnerBreadCrumb;
