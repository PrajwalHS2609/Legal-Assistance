import React from "react";
import "./CivilLawPage.css";
import CivilLawHead from "./CivilLawHead";
import CivilLawMain from "./CivilLawMain";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
const CivilLawPage = () => {
  return (
    <div className="civilLawPage">
      <CivilLawHead />
      <InnerBreadCrumb link="/service" service="Service"  currService="Civil Law" />
      <CivilLawMain />
    </div>
  );
};

export default CivilLawPage;
