import React from "react";
import ServiceLawImg from "../Services/CivilLawPage/ServiceLawImg";
import aboutUsImg from "./../../Images/AboutUs.png"
import "./AboutUs.css"
import AboutUsMain from "./AboutUsMain";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ServiceTestimonial from './../Services/ServiceTestimonial/ServiceTestimonial';
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";

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
      <WhatsApp/>
      <ServiceTestimonial />
    </div>
  );
};

export default AboutUs;
