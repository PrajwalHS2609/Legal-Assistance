import React from "react";
import "./HomeHeader.css";
const HomeHeaderTxt = (props) => {
  return (
    <div className="homeHeaderTxtContainer">
      <div className="homeHeaderTxtContent">
        <div className="homeHeaderQuote">
          <p>{props.quote}</p>
        </div>
        <div className="homeHeaderHead">
          <h1>{props.head}</h1>
        </div>
        <div className="homeHeaderPara">
          <p>
           {props.para}
          </p>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default HomeHeaderTxt;
