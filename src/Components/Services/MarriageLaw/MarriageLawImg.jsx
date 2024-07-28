import React from "react";
import civilLawImg from "./../../../Images/ServicesImg/civilLaw.png";

const MarriageLawImg = () => {
  return (
    <div className="civilLawHeadContainer">
      <img className="imgComp" src={civilLawImg} alt="civilLawImg" />
      <div className="civilLawHeadCover"></div>
      <h2>Marriage Law</h2>
    </div>
  );
};

export default MarriageLawImg;
