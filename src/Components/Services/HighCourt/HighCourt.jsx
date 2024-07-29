import React from "react";
import HighCourtHead from "./HighCourtHead";
import HighCourtCivil from "./HighCourtCivil";
import HighCourtCriminal from "./HighCourtCriminal";
import HighCourtCommercial from "./HighCourtCommercial";
import HighCourtConstitutionLaw from "./HighCourtConstitutionLaw";
import HighCourtService from "./HighCourtService";
import HighCourtCommitment from "./HighCourtCommitment";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import { Helmet } from "react-helmet";
import ServiceLawImg from "../CivilLawPage/ServiceLawImg";
import highCourtImg from "./../../../Images/InnerServicesImgs/High Court Matters.png"
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import HomeTestimonial from "../../HomePage/HomeTestimonial/HomeTestimonial";

const HighCourt = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          High Court Lawyers in Bangalore | Best High Court Advocates in
          Karnataka
        </title>
        <meta
          name="description"
          content="High Court Lawyers in Bangalore. Whether you are dealing with contract disputes, business torts, or other commercial matters, our attorneys offer the experience and knowledge necessary to achieve favorable outcomes."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/high-court-lawyers-in-bangalore"
        />
      </Helmet>
      <ServiceLawImg img={highCourtImg} alt="highCourtImg" head="High Court Matters"/>
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="High Court Matters"
      />
      <HighCourtHead />
      <HighCourtCivil />
      <HighCourtCriminal />
      <HighCourtCommercial />
      <HighCourtConstitutionLaw />
      <HighCourtService />
      <HighCourtCommitment />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
};

export default HighCourt;
