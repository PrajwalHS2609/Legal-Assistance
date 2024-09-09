import React from "react";
import { Helmet } from "react-helmet";
import ServiceLawImg from "../../Services/CivilLawPage/ServiceLawImg";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import LabourLawyerHead from "./LabourLawyerHead";
import LabourLawyerWhy from "./LabourLawyerWhy";
import LabourLawyerBenefits from "./LabourLawyerBenefits";
import LabourLawyerHow from "./LabourLawyerHow";
import LabourLawyerTypes from "./LabourLawyerTypes";
import labourLawyer from "./../../../Images/LawyersNearMe/Labour Lawyer Near Me.png";
import LabourLawyerWhat from "./LabourLawyerWhat";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServiceTestimonial from "../../Services/ServiceTestimonial/ServiceTestimonial";

const LabourLawyer = () => {
  return (
    <div className="divorcePageContainer">
      <Helmet>
        <title>Property Attorney near Me | Civil Lawyers in Bangalore</title>
        <meta
          name="description"
          content="Property Attorney near me. Whether you’re buying, selling, leasing, or dealing with property disputes, the right legal guidance can make all the difference. "
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/labour-lawyers-near-me"
        />
      </Helmet>
      <ServiceLawImg
        img={labourLawyer}
        alt="labourLawyer"
        head="Labour Lawyer Near Me"
      />

      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Labour Lawyer"
      />
      <LabourLawyerHead />
      <LabourLawyerWhy />
      <LabourLawyerWhat />
      <LabourLawyerBenefits />
      <LabourLawyerHow />
      <LabourLawyerTypes />
      <WhatsApp />
      <ServiceTestimonial />
    </div>
  );
};

export default LabourLawyer;
