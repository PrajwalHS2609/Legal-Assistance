import React from "react";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import { Helmet } from "react-helmet";
import MarriageLawHead from "./MarriageLawHead";
import MarriageLawWhy from "./MarriageLawWhy";
import MarriageLawService from "./MarriageLawService";
import marriageLawImg from "./../../../Images/InnerServicesImgs/Court Marriage.png";
import ServiceLawImg from "../CivilLawPage/ServiceLawImg";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import HomeTestimonial from "../../HomePage/HomeTestimonial/HomeTestimonial";
import MarriageLawMain from "./MarriageLawMain";

const MarriageLaw = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          Marriage Registration Lawyers in Bangalore | Court Marriage Lawyers
          Near Me{" "}
        </title>
        <meta
          name="description"
          content="Property Document Verification Lawyers in Bangalore. This detailed guide will help you understand the importance of property document verification and how our expert team can assist you."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/marriage-registration-lawyers-in-bangalore"
        />
      </Helmet>
      <ServiceLawImg
        img={marriageLawImg}
        alt="marriageLawImg"
        head="Court Marriage"
      />
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Court Marriage"
      />
      <MarriageLawMain />
      <MarriageLawHead />
      <MarriageLawService />
      <MarriageLawWhy />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
};

export default MarriageLaw;
