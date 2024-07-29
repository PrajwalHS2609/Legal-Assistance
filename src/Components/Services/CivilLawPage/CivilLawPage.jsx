import React from "react";
import "./CivilLawPage.css";
import CivilLawHead from "./CivilLawHead";
import CivilLawMain from "./CivilLawMain";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import CivilLawConclusion from "./CivilLawConclusion";
import CivilLawExpertise from "./CivilLawExpertise";
import CivilLawPersonalized from "./CivilLawPersonalized";
import CivilPropertyDispute from "./CivilPropertyDispute";
import CivilContractLaw from "./CivilContractLaw";
import CivilFamilyLaw from "./CivilFamilyLaw";
import CivilConsumerProtection from "./CivilConsumerProtection";
import CivilEmploymentLaw from "./CivilEmploymentLaw";
import CivilTortLaw from "./CivilTortLaw";
import { Helmet } from "react-helmet";
import civilLawImg from "./../../../Images/InnerServicesImgs/Civil Law.png"
import ServiceLawImg from "./ServiceLawImg";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import HomeTestimonial from "../../HomePage/HomeTestimonial/HomeTestimonial";
const CivilLawPage = () => {
  return (
    <div className="civilLawPage">
      <Helmet>
        <title>
          Civil Lawyers in Bangalore | Best Civil Lawyers in Karnataka{" "}
        </title>
        <meta
          name="description"
          content="Civil Lawyers in Bangalore. Whether you're dealing with property disputes, contractual issues, or family law matters, our team is here to offer comprehensive support and expert guidance."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/civil-lawyers-in-bangalore"
        />
      </Helmet>
      <ServiceLawImg img={civilLawImg} alt="civilLawImg" head="Civil Law"/>
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Civil Law"
      />
      <CivilLawHead />
      <CivilLawMain />
      <CivilLawExpertise />
      <CivilLawPersonalized />
      <CivilPropertyDispute />
      <CivilContractLaw />
      <CivilFamilyLaw />
      <CivilConsumerProtection />
      <CivilEmploymentLaw />
      <CivilTortLaw />
      <CivilLawConclusion />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
};

export default CivilLawPage;
