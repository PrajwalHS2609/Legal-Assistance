import React from "react";
import "./HomePage.css"
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeExpertise from "./HomeExpertise/HomeExpertise";
import HomeSupport from "./HomeSupport/HomeSupport";
import HomeSolution from "./HomeSolution/HomeSolution";


const HomePage = () => {
  return (
    <div className="homePage">
      <HomeHeader />
      <HomeExpertise/>
      <HomeSupport/>
      <HomeSolution/>
    </div>
  );
};

export default HomePage;
