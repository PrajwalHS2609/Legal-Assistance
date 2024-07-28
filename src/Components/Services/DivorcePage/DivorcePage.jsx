import React from "react";
import "./DivorcePage.css";
import DivorceHead from "./DivorceHead";
import DivorceWhy from "./DivorceWhy";
import DivorceGuide from "./DivorceGuide";
import DivorceService from "./DivorceService";
import DivorceImp from "./DivorceImp";
import DivorceAssist from "./DivorceAssist";
import { Helmet } from "react-helmet";
import divorceLawImg from "./../../../Images/InnerServicesImgs/Divorce & Family Court.png"
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import DivorceMain from "./DivorceMain";
import ServiceLawImg from "../CivilLawPage/ServiceLawImg";
const DivorcePage = () => {
  return (
    <div className="divorcePageContainer">
      <Helmet>
        <title>
          Divorce & Family Court Lawyers in Bangalore – Book a Free Consultation{" "}
        </title>
        <meta
          name="description"
          content="Divorce & Family Court Lawyers in Bangalore. Dedicated to guiding you through these challenging times with expertise and sensitivity."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/divorce-and-family-court-lawyers-in-bangalore"
        />
      </Helmet>
      <ServiceLawImg img={divorceLawImg} alt={divorceLawImg} head="Divorce & Family Court"/>
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Divorce & Family Court"
      />
      <DivorceMain />
      <DivorceHead />
      <DivorceWhy />
      <DivorceGuide />
      <DivorceService />
      <DivorceImp />
      <DivorceAssist />
    </div>
  );
};

export default DivorcePage;
