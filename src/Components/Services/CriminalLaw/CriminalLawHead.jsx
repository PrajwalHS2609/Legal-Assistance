import React from "react";
import civilLawImg from "./../../../Images/ServicesImg/civilLaw.png";

const CriminalLawHead = () => {
  return (
    <div className="civilLawHeadContainer">
      <img className="imgComp" src={civilLawImg} alt="civilLawImg" />

      <div className="civilLawHeadCover"></div>
      <h2>Criminal Law</h2>
    </div>
  );
};

export default CriminalLawHead;
