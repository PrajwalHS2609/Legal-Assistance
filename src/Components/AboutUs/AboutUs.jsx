import React from "react";
import ServiceLawImg from "../Services/CivilLawPage/ServiceLawImg";
import aboutUsImg from "./../../Images/InnerServicesImgs/Property Document Verification.png"
import "./AboutUs.css"
import AboutUsMain from "./AboutUsMain";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <ServiceLawImg
        img={aboutUsImg}
        alt="aboutUsImg"
        head="About Us"
      />
      <BreadCrumbs service="About Us"/>
      <AboutUsMain/>
      <HomeWhy />
      <HomeTestimonial/>
    </div>
  );
};

export default AboutUs;
