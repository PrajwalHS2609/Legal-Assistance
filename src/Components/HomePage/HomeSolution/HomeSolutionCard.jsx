import React from "react";
import "./HomeSolution.css";

const HomeSolutionCard = (props) => {
  return (
    <div className="homeSolutionCardContainer">
      <div className="homeSolutionCard">
        <div className="solutionCard">{props.icon}</div>
      </div>
      <div className="homeSolutionCardHead"><h3>{props.head}</h3></div>
      <div className="homeSolutionCardPara">
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default HomeSolutionCard;
