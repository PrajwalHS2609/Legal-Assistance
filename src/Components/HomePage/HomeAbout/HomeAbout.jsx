import React from "react";
import "./HomeAbout.css";
import HomeAboutHead from "./HomeAboutHead";
import HomeAboutMain from "./HomeAboutMain";
import HomeAboutFooter from "./HomeAboutFooter";

const HomeAbout = () => {
  return (
    <div className="homeAboutContainer">
      <div className="homeAboutCover">
        <HomeAboutHead />
        <HomeAboutMain />
        <HomeAboutFooter />
      </div>
    </div>
  );
};

export default HomeAbout;
