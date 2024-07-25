import React from "react";
import "./DivorcePage.css";
import civilLawImg from "./../../../Images/ServicesImg/civilLaw.png";
const DivorceImg = () => {
  return (
    <div className="civilLawHeadContainer">
      <img className="imgComp" src={civilLawImg} alt="civilLawImg" />
      <div className="civilLawHeadCover"></div>
      <h2>Divorce & Family Court </h2>
    </div>
  );
};

export default DivorceImg;
