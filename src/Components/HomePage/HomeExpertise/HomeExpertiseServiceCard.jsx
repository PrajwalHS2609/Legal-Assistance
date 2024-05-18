import React from "react";
import { Link } from "react-router-dom";

const HomeExpertiseService = (props) => {
  return (
    <div className="ExpertiseServiceCardContainer">
      <div className="ExpertiseServiceCardCover"> </div>
      <img src={props.img} alt="" />
      <div className="ExpertiseServiceCardTxtContainer">
        <div className="ExpertiseServiceCardIcon">{props.icon}</div>
        <div className="ExpertiseServiceCardTxt">
          <h2>
            <Link to={props.link}>{props.txt}</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeExpertiseService;
