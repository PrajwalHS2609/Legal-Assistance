import React from "react";
import "./MainService.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ServiceCard = (props) => {
  return (
    <div className="serviceCardContainer">
      <img className="serviceCardImg" src={props.icon} alt="" />
      <h3 className="serviceCardHead">{props.head}</h3>
      <p className="serviceCardPara">{props.para}</p>
      <p>
        <Link to={props.link}>
          ReadMore{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="leftArrow"
          ></FontAwesomeIcon>
        </Link>
      </p>
      <div className="serviceCardCover"></div>
    </div>
  );
};

export default ServiceCard;
