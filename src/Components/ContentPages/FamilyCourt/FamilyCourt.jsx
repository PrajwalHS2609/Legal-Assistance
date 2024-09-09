import React from "react";
import ServiceLawImg from "../../Services/CivilLawPage/ServiceLawImg";
import { Helmet } from "react-helmet";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import FamilyCourtLawyers from "./../../../Images/LawyersNearMe/Family Court Lawyers Near Me.png";
import FamilyCourtHead from "./FamilyCourtHead";
import FamilyCourtWhy from "./FamilyCourtWhy";
import FamilyCourtService from "./FamilyCourtService";
import FamilyCourtChoose from "./FamilyCourtChoose";
import FamilyCourtBenefits from "./FamilyCourtBenefits";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServiceTestimonial from "../../Services/ServiceTestimonial/ServiceTestimonial";

const FamilyCourt = () => {
  return (
    <div className="divorcePageContainer">
      <Helmet>
        <title>amily Court Lawyers near Me | Family Lawyers in Bangalore</title>
        <meta
          name="description"
          content="Family Court Lawyers near Me. Family law encompasses various sensitive matters, from divorce and child custody to alimony and property disputes."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/family-course-lawyers-near-me"
        />
      </Helmet>
      <ServiceLawImg
        img={FamilyCourtLawyers}
        alt="FamilyCourtLawyers"
        head="Family Court Lawyers Near Me"
      />
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Family Lawyers"
      />
      <FamilyCourtHead />
      <FamilyCourtWhy />
      <FamilyCourtService />
      <FamilyCourtChoose />
      <FamilyCourtBenefits />
      <WhatsApp />
      <ServiceTestimonial />
    </div>
  );
};

export default FamilyCourt;
