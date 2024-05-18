import React from "react";
import "./MainService.css";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  return (
    <div className="serviceCardContainer">
      <div className="serviceCardIcon">{props.icon}</div>
      <div className="serviceCardHead">
        <h3>{props.head}</h3>
      </div>
      <div className="serviceCardpara">
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
