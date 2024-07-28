import React from "react";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import { Helmet } from "react-helmet";
import MarriageLawImg from "./MarriageLawImg";
import MarriageLawHead from "./MarriageLawHead";
import MarriageLawWhy from "./MarriageLawWhy";
import MarriageLawService from "./MarriageLawService";

const MarriageLaw = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          Marriage Registration Lawyers in Bangalore | Court Marriage Lawyers
          Near Me{" "}
        </title>
        <meta
          name="description"
          content="Property Document Verification Lawyers in Bangalore. This detailed guide will help you understand the importance of property document verification and how our expert team can assist you."
        />import MarriageLawService from './MarriageLawService';

        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/marriage-registration-lawyers-in-bangalore"
        />
      </Helmet>
      <MarriageLawImg />
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Marriage Law"
      />
      <MarriageLawHead />
      <MarriageLawService/>
      <MarriageLawWhy />
    </div>
  );
};

export default MarriageLaw;
