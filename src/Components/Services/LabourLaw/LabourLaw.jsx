import React from "react";
import LabourLawHead from "./LabourLawHead";
import LabourLawService from "./LabourLawService";
import LabourLawCommitment from "./LabourLawCommitment";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import { Helmet } from "react-helmet";
import labourLaw from "./../../../Images/InnerServicesImgs/Labour Law.png"
import ServiceLawImg from "../CivilLawPage/ServiceLawImg";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import HomeTestimonial from "../../HomePage/HomeTestimonial/HomeTestimonial";
import LabourLawMain from "./LabourLawMain";

const LabourLaw = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          Labour Court Lawyers in Bangalore | Labour Law Consultants in
          Karnataka
        </title>
        <meta
          name="description"
          content="Labour Court Lawyers in Bangalore is dedicated to providing comprehensive legal services to both employers and employees. Call Now!"
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/labour-court-lawyers-in-bangalore"
        />
      </Helmet>
      <ServiceLawImg img={labourLaw} alt="labourLaw" head="Labour Law"/>
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Labour Law"
      />
      <LabourLawMain/>
      <LabourLawHead />
      <LabourLawService />
      <LabourLawCommitment />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
};

export default LabourLaw;
