import React from "react";
import "./Service.css"
import ServiceHeader from "./ServiceHeader/ServiceHeader";
import MainService from "./MainServicePage/MainService";
import HomeFaq from './../HomePage/HomeFaq/HomeFaq';
import ServiceTestimonial from "./ServiceTestimonial/ServiceTestimonial";

const Services = () => {
  return (
    <div className="servicePage">
      <ServiceHeader />
      <MainService/>
      {/* <ServiceTestimonial/> */}
      <HomeFaq/>
    </div>
  );
};

export default Services;
