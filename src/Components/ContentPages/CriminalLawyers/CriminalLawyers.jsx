import React from "react";
import ServiceLawImg from "../../Services/CivilLawPage/ServiceLawImg";
import { Helmet } from "react-helmet";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServiceTestimonial from "../../Services/ServiceTestimonial/ServiceTestimonial";
import CriminalLawyersHead from "./CriminalLawyersHead";
import CriminalLawyersWhy from "./CriminalLawyersWhy";
import CriminalLawyersUnderstand from "./CriminalLawyersUnderstand";
import CriminalLawyersBenefits from "./CriminalLawyersBenefits";
import CriminalLawyersHow from "./CriminalLawyersHow";
import CriminalLawyersCommon from "./CriminalLawyersCommon";
import criminalLawyersNearMe from "./../../../Images/LawyersNearMe/Criminal Lawyers Near Me.png";

const CriminalLawyers = () => {
  return (
    <div className="divorcePageContainer">
      <Helmet>
        <title>
          Criminal Lawyers Near Me | Best Criminal Lawyers in Bangalore
        </title>
        <meta
          name="description"
          content="Criminal Lawyers Near Me. We professionals provide a solid defense, protect your rights, and offer the best chance of securing a favorable outcome."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/criminal-lawyers-near-me"
        />
      </Helmet>
      <ServiceLawImg
        img={criminalLawyersNearMe}
        alt={criminalLawyersNearMe}
        head="Criminal Lawyers Near Me"
      />

      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Criminal Lawyers"
      />
      <CriminalLawyersHead />
      <CriminalLawyersWhy />
      <CriminalLawyersUnderstand />
      <CriminalLawyersBenefits />
      <CriminalLawyersHow />
      <CriminalLawyersCommon />
      <WhatsApp />
      <ServiceTestimonial />
    </div>
  );
};

export default CriminalLawyers;
