import React from "react";
import civilLawImg from "./../../../Images/ServicesImg/civilLaw.png";

const AltDisputeImg = () => {
  return (
    <div className="civilLawHeadContainer">
      <img className="imgComp" src={civilLawImg} alt="civilLawImg" />

      <div className="civilLawHeadCover"></div>
      <h2>Alternative Dispute Resolution </h2>
    </div>
  );
};

export default AltDisputeImg;
