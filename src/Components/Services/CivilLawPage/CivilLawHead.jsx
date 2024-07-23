import React from "react";
import "./CivilLawPage.css";
import civilLawImg from "./../../../Images/ServicesImg/civilLaw.png";
import civilLawImgMob from "./../../../Images/ServicesImg/civilLawMob.png";

const CivilLawHead = () => {
  return (
    <div className="civilLawHeadContainer">
      <img className="imgComp" src={civilLawImg} alt="civilLawImg" />
      {/* <img className="imgMob" src={civilLawImgMob} alt="civilLawImgMob" /> */}

      <div className="civilLawHeadCover"></div>
      <h2>Civil Law</h2>
    </div>
  );
};

export default CivilLawHead;
