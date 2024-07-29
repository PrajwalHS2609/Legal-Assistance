import React from "react";
import "./Service.css";
import MainService from "./MainServicePage/MainService";
import serviceImg from "./../../Images/ServicesImg/services.png";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import ServiceLawImg from "./CivilLawPage/ServiceLawImg";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div className="servicePage">
      <Helmet>
        <title>
          Lawyers Services in Bangalore | Best Advocates in Bangalore
        </title>
        <meta
          name="description"
          content="Lawyers Services in Bangalore. We offer comprehensive legal services, including consultation, representation, and guidance. Call Now!"/>
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/services"
        />
      </Helmet>
      <ServiceLawImg img={serviceImg} alt="serviceImg" head="Our Services" />
      <BreadCrumbs service="Services" />
      <MainService />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
};

export default Services;
