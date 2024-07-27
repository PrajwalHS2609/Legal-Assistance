import React from "react";
import civilLawImg from "./../../../Images/ServicesImg/civilLaw.png";

const NotaryServiceImg = () => {
  return (
    <div className="civilLawHeadContainer">
      <img className="imgComp" src={civilLawImg} alt="civilLawImg" />
      <div className="civilLawHeadCover"></div>
      <h2>Notary Services</h2>
    </div>
  );
};

export default NotaryServiceImg;
