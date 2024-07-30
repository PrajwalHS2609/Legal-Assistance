import React from "react";
import "./HomeAbout.css";
import HomeAboutHead from "./HomeAboutHead";
import HomeAboutMain from "./HomeAboutMain";
import HomeAboutFooter from "./HomeAboutFooter";
import aboutUsImg from "./../../../Images/AboutUs.png";
import ServiceLawImg from "../../Services/CivilLawPage/ServiceLawImg";

const HomeAbout = () => {
  return (
    <div className="homeAboutContainer">
      <ServiceLawImg img={aboutUsImg} alt="aboutUsImg" head=""/>
      <div className="homeAboutCover">
        <HomeAboutHead />
        <HomeAboutMain />
        <HomeAboutFooter />
      </div>
    </div>
  );
};

export default HomeAbout;
