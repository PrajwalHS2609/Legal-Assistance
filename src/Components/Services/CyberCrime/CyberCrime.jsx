import React from "react";
import { Helmet } from "react-helmet";
import ServiceLawImg from "./../CivilLawPage/ServiceLawImg";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import ServiceTestimonial from "../ServiceTestimonial/ServiceTestimonial";
import CyberCrimeHead from "./CyberCrimeHead";
import CyberCrimeHow from "./CyberCrimeHow";
import cyberCrimeImg from "./../../../Images/InnerServicesImgs/CyberCrime.png";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import CyberCrimeLegal from "./CyberCrimeLegal";
import CyberCrimeCommon from "./CyberCrimeCommon";
import CyberCrimeChoosing from "./CyberCrimeChoosing";
import CyberCrimeRole from "./CyberCrimeRole";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";

const CyberCrime = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          Cyber Crime Lawyers in Bangalore | Cyber Crime Advocates in Bangalore
        </title>
        <meta
          name="description"
          content="Cyber Crime Lawyers in Bangalore. These crimes, which occur in the digital space, range from hacking, identity theft, and cyberstalking to more complex offenses like phishing scams, online fraud, and cyber terrorism. "
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/cyber-crime-lawyers-in-bangalore"
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
      <CyberCrimeRole/>
      <CyberCrimeCommon />
      <CyberCrimeLegal />
      <CyberCrimeHow />
      <CyberCrimeChoosing />
      <HomeWhy />
      <WhatsApp/>
      <ServiceTestimonial />
    </div>
  );
};

export default CyberCrime;
