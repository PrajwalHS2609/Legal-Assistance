import React from "react";
import { Helmet } from "react-helmet";
import ServiceLawImg from "../CivilLawPage/ServiceLawImg";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import LokayuktaHead from "./LokayuktaHead";
import LokayuktaHow from "./LokayuktaHow";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import ServiceTestimonial from "../ServiceTestimonial/ServiceTestimonial";
import LokayuktaWhy from "./LokayuktaWhy";
import LokayuktaService from "./LokayuktaService";
import LokayuktaContact from "./LokayuktaContact";
import lokayuktaImg from "./../../../Images/InnerServicesImgs/lokayukta court.png";

const LokayuktaPage = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          Lokayukta Court Lawyers in Bangalore | Anti-Corruption Matters in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Lokayukta Court Lawyers in Bangalore. The Lokayukta is a crucial institution in India, tasked with addressing complaints against public officials and government employees involved in corruption."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/lokayukta-court-lawyers-in-bangalore"
        />
      </Helmet>
      <ServiceLawImg
        img={lokayuktaImg}
        alt="lokayuktaImg"
        head="Lokayukta Matters"
      />
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Lokayukta Matters"
      />
      <LokayuktaHead />
      <LokayuktaWhy />
      <LokayuktaService />
      <LokayuktaContact />
      <LokayuktaHow />
      <HomeWhy />
      <ServiceTestimonial />
    </div>
  );
};

export default LokayuktaPage;
