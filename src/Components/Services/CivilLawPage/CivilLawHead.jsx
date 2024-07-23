import React from "react";
import "./CivilLawPage.css";
import civilLawImg from "./../../../Images/ServicesImg/civilLaw.png";

const CivilLawHead = () => {
  return (
    <div className="civilLawHeadContainer">
      <img className="imgComp" src={civilLawImg} alt="civilLawImg" />

      <div className="civilLawHeadCover"></div>
      <h2>Civil Law</h2>
    </div>
  );
};

export default CivilLawHead;
