import React from "react";
import "./HomeHeader.css";
import { Link } from "react-router-dom";
const HomeHeaderTxt = (props) => {
  return (
    <div className="homeHeaderTxtContainer">
      <div className="homeHeaderTxtContent">
        <div className="homeHeaderQuote">
          <p>{props.quote}</p>
        </div>
        <div className="homeHeaderHead">
          <h2>{props.head}</h2>
        </div>
        <div className="homeHeaderPara">
          <p>
           {props.para}
          </p>
        </div>
        <button><Link to={props.link}>Get Started</Link></button>
      </div>
    </div>
  );
};

export default HomeHeaderTxt;
