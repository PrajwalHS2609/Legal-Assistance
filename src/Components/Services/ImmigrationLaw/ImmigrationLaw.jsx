import React from "react";
import ImmigrationLawHead from "./ImmigrationLawHead";
import ImmigrationLawService from "./ImmigrationLawService";
import ImmigrationLawWhy from "./ImmigrationLawWhy";
import InnerBreadCrumb from "./../../BreadCrumbs/InnerBreadCrumb";
import { Helmet } from "react-helmet";
import immigrationLawImg from "./../../../Images/InnerServicesImgs/ImmigrationLaw.png"
import ServiceLawImg from './../CivilLawPage/ServiceLawImg';
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import HomeTestimonial from "../../HomePage/HomeTestimonial/HomeTestimonial";

const ImmigrationLaw = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          Immigration Lawyers in Bangalore | Immigration Attorneys in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Immigration Lawyers in Bangalore. MM Associates dedicated to providing comprehensive legal support and guidance to clients throughout their immigration journey."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/immigration-lawyers-in-bangalore"
        />
      </Helmet>
      <ServiceLawImg img={immigrationLawImg} alt="immigrationLawImg" head="Immigration Law"/>
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Immigration Law"
      />
      <ImmigrationLawHead />
      <ImmigrationLawService />
      <ImmigrationLawWhy />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
};

export default ImmigrationLaw;
