import React from "react";
import CommercialLawHead from "./CommercialLawHead";
import CommercialLawTypes from "./CommercialLawTypes";
import CommercialLawPersonalized from "./CommercialLawPersonalized";
import CommercialLawContract from "./CommercialLawContract";
import CommercialLawBusiness from "./CommercialLawBusiness";
import CommercialLawIntellectual from "./CommercialLawIntellectual";
import CommercialLawSharehold from "./CommercialLawSharehold";
import CommercialLawRealEstate from "./CommercialLawRealEstate";
import CommercialLawEmployment from "./CommercialLawEmployment";
import CommercialLawCommitment from "./CommercialLawCommitment";
import { Helmet } from "react-helmet";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import commercialLawImg from "./../../../Images/InnerServicesImgs/Commercial Law.png"
import ServiceLawImg from "../CivilLawPage/ServiceLawImg";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import CommercialLawMain from "./CommercialLawMain";
import ServiceTestimonial from "../ServiceTestimonial/ServiceTestimonial";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";

const CommercialLaw = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          Commercial Court Lawyers in Bangalore | Best Commercial Lawyers in
          Karnataka{" "}
        </title>
        <meta
          name="description"
          content="Commercial Court Lawyers in Bangalore. Whether you are dealing with contract disputes, business torts, or other commercial matters, our attorneys offer the experience and knowledge necessary to achieve favorable outcomes."
        />
        <link
          rel="canonical"
          href=" https://lawyersinbangalore.com/commercial-court-lawyers-in-bangalore"
        />
      </Helmet>
      <ServiceLawImg img={commercialLawImg} alt="commercialLawImg" head="Commercial Law"/>
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Commercial Law"
      />
      <CommercialLawMain/>
      <CommercialLawHead />
      <CommercialLawTypes />
      <CommercialLawPersonalized />
      <CommercialLawContract />
      <CommercialLawBusiness />
      <CommercialLawIntellectual />
      <CommercialLawSharehold />
      <CommercialLawRealEstate />
      <CommercialLawEmployment />
      <CommercialLawCommitment />
      <HomeWhy />
      <WhatsApp/>
      <ServiceTestimonial />
    </div>
  );
};

export default CommercialLaw;
