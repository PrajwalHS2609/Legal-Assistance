import React from "react";
import "./Service.css"
import ServiceHeader from "./ServiceHeader/ServiceHeader";
import MainService from "./MainServicePage/MainService";
import HomeFaq from './../HomePage/HomeFaq/HomeFaq';
import ServiceTestimonial from "./ServiceTestimonial/ServiceTestimonial";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Services = () => {
  return (
    <div className="servicePage">
      <ServiceHeader />
      <BreadCrumbs service="Services"/>
      <MainService/>
      <ServiceTestimonial/>
      <HomeFaq/>
    </div>
  );
};

export default Services;
