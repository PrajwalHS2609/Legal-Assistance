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
import CommercialLawImg from "./CommercialLawImg";

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
      <CommercialLawImg />
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Commercial Law"
      />
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
    </div>
  );
};

export default CommercialLaw;
