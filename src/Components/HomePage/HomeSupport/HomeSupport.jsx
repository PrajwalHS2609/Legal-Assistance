import React from "react";
import "./HomeSupport.css";
import HomeSupportHead from "./HomeSupportHead";
import HomeSupportMain from "./HomeSupportMain";
const HomeSupport = () => {
  return (
    <div className="homeSupportContainer">
      <img
        src="https://bylaw.wpengine.com/wp-content/uploads/2023/10/dy-slider-1.jpg"
        alt="law"
      />
      <HomeSupportHead />
      <HomeSupportMain />
    </div>
  );
};

export default HomeSupport;
