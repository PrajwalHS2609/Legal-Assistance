import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeExpertise from "./HomeExpertise/HomeExpertise";
import HomeSupport from "./HomeSupport/HomeSupport";
import HomeSolution from "./HomeSolution/HomeSolution";

const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <HomeExpertise/>
      <HomeSupport/>
      <HomeSolution/>
    </div>
  );
};

export default HomePage;
