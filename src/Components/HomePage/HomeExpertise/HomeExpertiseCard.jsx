import React from "react";
import "./HomeExpertise.css";
const HomeExpertiseCard = (props) => {
  return (
    <div className="homeExpertiseCardContainer">
      <div className="homeExpertiseCardCover"> </div>
      <img
        src={props.img}
        alt=""
      />
      <div className="homeExpertiseCardTxtContainer">
        <div className="homeExpertiseCardIcon">{props.icon}</div>
        <div className="homeExpertiseCardTxt">
          <h2>{props.txt}</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeExpertiseCard;
