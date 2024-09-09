import React from "react";
import ServiceLawImg from "../../Services/CivilLawPage/ServiceLawImg";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import { Helmet } from "react-helmet";
import LawFirmsHead from "./LawFirmsHead";
import LawFirmsWhyChoose from "./LawFirmsWhyChoose";
import LawFirmsService from "./LawFirmsService";
import LawFirmsWhat from "./LawFirmsWhat";
import LawFirmsBenefits from "./LawFirmsBenefits";
import LawFirmsHow from "./LawFirmsHow";
import LawFirmsYour from "./LawFirmsYour";
import ServiceTestimonial from "../../Services/ServiceTestimonial/ServiceTestimonial";
import lawFirmLawyers from "./../../../Images/LawyersNearMe/Law Firms Near Me.png";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";

const LawFirms = () => {
  return (
    <div className="divorcePageContainer">
      <Helmet>
        <title>Law Firms near Me | Law Firm in Bangalore</title>
        <meta
          name="description"
          content="Law Firms near me. M M Associates provides comprehensive legal services tailored to your unique situation. Call Now! "
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/law-firms-near-me"
        />
      </Helmet>
      <ServiceLawImg
        img={lawFirmLawyers}
        alt="lawFirmLawyers"
        head="Law Firms Near Me"
      />
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Law Firms "
      />
      <LawFirmsHead />
      <LawFirmsWhyChoose />
      <LawFirmsService />
      <LawFirmsWhat />
      <LawFirmsHow />
      <LawFirmsBenefits />
      <LawFirmsYour />
      <WhatsApp />
      <ServiceTestimonial />
    </div>
  );
};

export default LawFirms;
