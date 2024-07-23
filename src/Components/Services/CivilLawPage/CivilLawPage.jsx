import React from "react";
import "./CivilLawPage.css";
import CivilLawHead from "./CivilLawHead";
import CivilLawMain from "./CivilLawMain";
const CivilLawPage = () => {
  return (
    <div className="civilLawPage">
      <CivilLawHead />
      <CivilLawMain />
    </div>
  );
};

export default CivilLawPage;
