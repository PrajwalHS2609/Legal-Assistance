import React from "react";
import { Helmet } from "react-helmet";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import draftingImg from "./../../../Images/InnerServicesImgs/Property Registeration.png"
import DraftingAgreementHead from "./DraftingAgreementHead";
import DraftingAgreementService from "./DraftingAgreementService";
import DraftingAgreementWhy from "./DraftingAgreementWhy";
import ServiceLawImg from "../CivilLawPage/ServiceLawImg";

const DraftingAgreement = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          Lawyers for Property Registration in Bangalore - Property Deed &
          Agreements{" "}
        </title>
        <meta
          name="description"
          content="Lawyers for Property Registration in Bangalore. Whether you are buying, selling, or transferring property, our experienced lawyers offer comprehensive support to ensure your transactions are secure and legally sound."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/lawyers-for-property-registration-in-bangalore"
        />
      </Helmet>
      <ServiceLawImg img={draftingImg} alt={draftingImg} head="Property Registration"/>
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Property Registration"
      />
      <DraftingAgreementHead />
      <DraftingAgreementService />
      <DraftingAgreementWhy />
    </div>
  );
};

export default DraftingAgreement;
