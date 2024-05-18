import React, { useRef, useState } from "react";
import "./HomeSupport.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
const HomeSupportDrop = (props) => {
  let [toggle, setToggle] = useState(false);
  let switchRef = useRef();
  let handleDrop = () => {
    if (!toggle) {
      setToggle(true);
      switchRef.current.style.display = "flex";
    } else {
      setToggle(false);
      switchRef.current.style.display = "none";
    }
  };
  return (
    <div className="homeSupportDropContainer">
      <div className="homeSupportDropContent" onClick={handleDrop}>
        <div className="homeSupportDropHeadTxt">
          <div className="homeSupportDropHead">
            <h1>{props.no}</h1>
          </div>
          <div className="homeSupportDropHead">
            <h1>{props.head}</h1>
          </div>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faSortDown}
            className="dropIcon"
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="homeSupportUnderline"></div>
      <div className="homeSupportDropDownContainer" ref={switchRef}>
        <img
          src={props.img}
          alt=""
        />
        <div className="SupportDropDownSentence">
          <h1>{props.dropHead}</h1>
          <p>
           {props.dropPara}
          </p>
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSupportDrop;
