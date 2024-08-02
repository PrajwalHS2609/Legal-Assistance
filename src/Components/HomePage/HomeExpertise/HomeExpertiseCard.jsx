import React from "react";
import "./HomeExpertise.css";
import { Link } from "react-router-dom";
const HomeExpertiseCard = (props) => {
  return (
    <div className="homeExpertiseCardContainer">
      <div className="homeExpertiseCardCover"> </div>
      <img src={props.img} alt="" />
      <div className="homeExpertiseCardTxtContainer">
        <div className="homeExpertiseCardIcon">
          <img src={props.imgIconBlack} className="blackImg" alt="" />
          <img src={props.imgIconWhite} className="whiteImg" alt="" />
        </div>
        <div className="homeExpertiseCardTxt">
          <h2><Link to={props.link}>{props.txt}</Link></h2>
        </div>
      </div>
    </div>
  );
};

export default HomeExpertiseCard;
