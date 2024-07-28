import React from "react";
import civilLawImg from "./../../../Images/ServicesImg/civilLaw.png";

const HighCourtImg = () => {
  return (
    <div className="civilLawHeadContainer">
      <img className="imgComp" src={civilLawImg} alt="civilLawImg" />
      <div className="civilLawHeadCover"></div>
      <h2>Labour Law</h2>
    </div>
  );
};

export default HighCourtImg;
