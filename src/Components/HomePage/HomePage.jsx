import React from "react";
import "./HomePage.css";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeExpertise from "./HomeExpertise/HomeExpertise";
import HomeSupport from "./HomeSupport/HomeSupport";
import HomeSolution from "./HomeSolution/HomeSolution";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeFaq from "./HomeFaq/HomeFaq";

const HomePage = () => {
  return (
    <div className="homePage">
      <HomeHeader />
      <HomeExpertise />
      <HomeSupport />
      <HomeSolution />
      <HomeAbout />
      <HomeFaq />
    </div>
  );
};

export default HomePage;
