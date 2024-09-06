import React from "react";
import "./HomePage.css";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeExpertise from "./HomeExpertise/HomeExpertise";
import HomeSupport from "./HomeSupport/HomeSupport";
import HomeSolution from "./HomeSolution/HomeSolution";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeFaq from "./HomeFaq/HomeFaq";
import HomeTestimonial from "./HomeTestimonial/HomeTestimonial";
import HomeWhy from "./HomeWhy/HomeWhy";
import HomeHeadContent from "./HomeHeadContent/HomeHeadContent";
import { Helmet } from "react-helmet";
import HomePractice from "./HomeHeadContent/HomePractice";
import HomeContentRoles from "./HomeHeadContent/HomeContentRoles";
import WhatsApp from "./WhatsApp/WhatsApp";

const HomePage = () => {
  return (
    <div className="homePage">
      <Helmet>
        <title>Best Lawyers in Bangalore | Top Advocates in Bangalore</title>
        <meta
          name="description"
          content="Best Lawyers in Bangalore. MM Associates offers Civil, Criminal, Commercial, Litigation, Family, Employees, Real Estate, Consumer & Immigration Courts cases"
        />
        <link rel="canonical" href="https://lawyersinbangalore.com" />
      </Helmet>
      <HomeHeader />
      <HomeHeadContent />
      <HomeExpertise />
      <HomeWhy />
      <HomeSupport />
      <HomeSolution />
      <HomeAbout />
      <HomeTestimonial />
      <HomeContentRoles />
      <HomePractice />
      <WhatsApp />
      <HomeFaq />
    </div>
  );
};

export default HomePage;
