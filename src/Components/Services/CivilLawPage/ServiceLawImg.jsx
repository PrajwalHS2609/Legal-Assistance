import React from "react";
import "./CivilLawPage.css";

const ServiceLawImg = (props) => {
  return (
    <div className="civilLawHeadContainer">
      <img className="imgComp" src={props.img} alt={props.alt} />
      <div className="civilLawHeadCover"></div>
      <h2>{props.head}</h2>
    </div>
  );
};

export default ServiceLawImg;
