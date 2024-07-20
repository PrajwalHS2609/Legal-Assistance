import React from "react";
import "./HomeAbout.css";
import HomeAboutHead from "./HomeAboutHead";
import HomeAboutMain from "./HomeAboutMain";
import HomeAboutFooter from "./HomeAboutFooter";
import aboutUsImg from "./../../../Images/AboutUsImg.png";

const HomeAbout = () => {
  return (
    <div className="homeAboutContainer">
      <img src={aboutUsImg} alt="aboutUsImg" />
      <div className="homeAboutCover">
        <HomeAboutHead />
        <HomeAboutMain />
        <HomeAboutFooter />
      </div>
    </div>
  );
};

export default HomeAbout;
