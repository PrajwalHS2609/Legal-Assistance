import React from "react";
import LabourLawImg from "./LabourLawImg";
import LabourLawHead from "./LabourLawHead";
import LabourLawService from "./LabourLawService";
import LabourLawCommitment from "./LabourLawCommitment";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import { Helmet } from "react-helmet";

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
      <LabourLawImg />
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Labour Law"
      />
      <LabourLawHead />
      <LabourLawService />
      <LabourLawCommitment />
    </div>
  );
};

export default LabourLaw;
