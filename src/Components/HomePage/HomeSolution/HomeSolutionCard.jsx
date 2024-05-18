import React from "react";
import "./HomeSolution.css";

const HomeSolutionCard = (props) => {
  return (
    <div className="homeSolutionCardContainer">
      <div className="homeSolutionCard">
        <div className="solutionCard">{props.icon}</div>
      </div>
      <div className="homeSolutionCardHead">{props.head}</div>
      <div className="homeSolutionCardPara">
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default HomeSolutionCard;
