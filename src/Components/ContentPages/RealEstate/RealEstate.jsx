import React from "react";
import { Helmet } from "react-helmet";
import ServiceLawImg from "../../Services/CivilLawPage/ServiceLawImg";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServiceTestimonial from "../../Services/ServiceTestimonial/ServiceTestimonial";
import RealEstateHead from "./RealEstateHead";
import RealEstateImp from "./RealEstateImp";
import RealEstateService from "./RealEstateService";
import RealEstateWhen from "./RealEstateWhen";
import RealEstateBenefits from "./RealEstateBenefits";
import RealEstateHow from "./RealEstateHow";
import realEstateNearMe from "./../../../Images/LawyersNearMe/Real Estate Lawyer Near Me.png";
const RealEstate = () => {
  return (
    <div className="divorcePageContainer">
      <Helmet>
        <title>
          Real Estate Lawyer Near Me | Real Estate Lawyers in Bangalore
        </title>
        <meta
          name="description"
          content="Real Estate Lawyers near me, we provide you with the guidance, legal protection, and peace of mind needed to ensure a smooth and successful transaction. "
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/real-estate-lawyers-near-me"
        />
      </Helmet>
      <ServiceLawImg
        img={realEstateNearMe}
        alt="realEstateNearMe"
        head="Real Estate Lawyer Near Me"
      />
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Real Estate Lawyer"
      />
      <RealEstateHead />
      <RealEstateImp />
      <RealEstateService />
      <RealEstateWhen />
      <RealEstateBenefits />
      <RealEstateHow />
      <WhatsApp />
      <ServiceTestimonial />
    </div>
  );
};

export default RealEstate;
