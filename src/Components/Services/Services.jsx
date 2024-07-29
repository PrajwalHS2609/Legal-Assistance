import React from "react";
import "./Service.css"
import ServiceHeader from "./ServiceHeader/ServiceHeader";
import MainService from "./MainServicePage/MainService";
import HomeFaq from './../HomePage/HomeFaq/HomeFaq';
import ServiceTestimonial from "./ServiceTestimonial/ServiceTestimonial";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";

const Services = () => {
  return (
    <div className="servicePage">
      <ServiceHeader />
      <BreadCrumbs service="Services"/>
      <MainService/>
      {/* <ServiceTestimonial/> */}
      <HomeWhy />
      <HomeTestimonial />
      {/* <HomeFaq/> */}
    </div>
  );
};

export default Services;
