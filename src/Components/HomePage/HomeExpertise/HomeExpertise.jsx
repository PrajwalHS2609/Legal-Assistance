import React, { useEffect } from "react";
import HomeExpertiseHead from "./HomeExpertiseHead";
import HomeExpertiseMain from "./HomeExpertiseMain";
import "aos/dist/aos.css";
import AOS from "aos";
import "./HomeExpertise.css";
const HomeExpertise = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="homeExpertiseContainer" data-aos="slide-up">
      <HomeExpertiseHead />
      <HomeExpertiseMain />
    </div>
  );
};

export default HomeExpertise;
