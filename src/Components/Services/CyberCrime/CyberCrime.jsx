import React from "react";
import { Helmet } from "react-helmet";
import ServiceLawImg from "./../CivilLawPage/ServiceLawImg";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import ServiceTestimonial from "../ServiceTestimonial/ServiceTestimonial";
import CyberCrimeHead from "./CyberCrimeHead";
import CyberCrimeWhy from "./CyberCrimeWhy";
import CyberCrimeHow from "./CyberCrimeHow";
import CyberCrimeOnline from "./CyberCrimeOnline";
import CyberCrimeStarted from "./CyberCrimeStarted";
import cyberCrimeImg from "./../../../Images/InnerServicesImgs/CyberCrime.png";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";

const CyberCrime = () => {
  return (
    <div className="">
      <Helmet>
        <title>Online Legal Consultation | Online Legal Services</title>
        <meta
          name="description"
          content="Online Legal Consultation. At MM Associates, we understand that legal challenges can arise unexpectedly, requiring prompt and expert advice."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/online-legal-consultation"
        />
      </Helmet>
      <ServiceLawImg
        img={cyberCrimeImg}
        alt="cyberCrimeImg"
        head="Cyber Crimes"
      />
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Cyber Crimes"
      />
      <CyberCrimeHead />
      <CyberCrimeWhy />
      <CyberCrimeHow />
      <CyberCrimeOnline />
      <CyberCrimeStarted />
      <HomeWhy />
      <ServiceTestimonial />
    </div>
  );
};

export default CyberCrime;
