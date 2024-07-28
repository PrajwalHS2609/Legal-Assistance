import React from "react";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import CriminalLawMain from "./CriminalLawMain";
import CriminalLawContent from "./CriminalLawContent";
import { Helmet } from "react-helmet";
import CriminalLawImg from "./CriminalLawImg";

const CriminalLaw = () => {
  return (
    <div className="civilLawPage">
      <Helmet>
        <title>
          Criminal Lawyers in Bangalore | Best Criminal Lawyers in Karnataka
        </title>
        <meta
          name="description"
          content="Criminal Lawyers in Bangalore. MM Associates dedicated to providing robust defense strategies and comprehensive legal support to individuals facing criminal charges."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/criminal-lawyers-in-bangalore"
        />
      </Helmet>
      <CriminalLawImg/>
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Criminal Law"
      />
      <CriminalLawMain />
      <CriminalLawContent />
    </div>
  );
};

export default CriminalLaw;
