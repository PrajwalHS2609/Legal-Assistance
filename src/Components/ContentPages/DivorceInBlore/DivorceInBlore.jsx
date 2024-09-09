import React from "react";
import { Helmet } from "react-helmet";
import DivorceInBloreHead from "./DivorceInBloreHead/DivorceInBloreHead";
import DivorceInBloreUnderstand from "./DivorceInBloreUnderstand";
import DivorceInBloreTailored from "./DivorceInBloreTailored";
import DivorceInBloreProcess from "./DivorceInBloreProcess";
import DivorceInBloreWhy from "./DivorceInBloreWhy";
import DivorceInBloreCommon from "./DivorceInBloreCommon";
import DivorceInBloreChoose from "./DivorceInBloreChoose";
import divorceLawyersNearMe from "./../../../Images/LawyersNearMe/Divorce Lawyers in Bangalore.png";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServiceTestimonial from "../../Services/ServiceTestimonial/ServiceTestimonial";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import ServiceLawImg from "../../Services/CivilLawPage/ServiceLawImg";

const DivorceInBlore = () => {
  return (
    <div className="divorcePageContainer">
      <Helmet>
        <title>Divorce Lawyers in Bangalore | Divorce Lawyers near Me</title>
        <meta
          name="description"
          content="Divorce Lawyers in Bangalore. With a deep understanding of family law, we provide compassionate, comprehensive, and effective legal services tailored to your unique situation. "
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/divorce-lawyers-in-bangalore"
        />
      </Helmet>
      <ServiceLawImg
        img={divorceLawyersNearMe}
        alt="divorceLawyersNearMe"
        head="Divorce Lawyers in Bangalore"
      />
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Divorce Lawyers"
      />
      <DivorceInBloreHead />
      <DivorceInBloreUnderstand />
      <DivorceInBloreTailored />
      <DivorceInBloreProcess />
      <DivorceInBloreWhy />
      <DivorceInBloreCommon />
      <DivorceInBloreChoose />
      <WhatsApp />
      <ServiceTestimonial />
    </div>
  );
};

export default DivorceInBlore;
