import React from 'react'
import civilLawImg from "./../../../Images/ServicesImg/civilLaw.png";

const CommercialLawImg = () => {
  return (
    <div className="civilLawHeadContainer">
      <img className="imgComp" src={civilLawImg} alt="civilLawImg" />
      <div className="civilLawHeadCover"></div>
      <h2>Commercial Law</h2>
    </div>
  )
}

export default CommercialLawImg
