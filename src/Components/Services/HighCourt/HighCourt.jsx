import React from "react";
import HighCourtHead from "./HighCourtHead";
import HighCourtCivil from "./HighCourtCivil";
import HighCourtCriminal from "./HighCourtCriminal";
import HighCourtCommercial from "./HighCourtCommercial";
import HighCourtConstitutionLaw from "./HighCourtConstitutionLaw";
import HighCourtService from "./HighCourtService";
import HighCourtCommitment from "./HighCourtCommitment";
import HighCourtImg from "./HighCourtImg";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import { Helmet } from "react-helmet";

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
      <HighCourtImg />
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
    </div>
  );
};

export default HighCourt;
