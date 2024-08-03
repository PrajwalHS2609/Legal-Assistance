import React from "react";
import { Helmet } from "react-helmet";
import ConsumerLawHead from "./ConsumerLawHead";
import ConsumerLawRole from "./ConsumerLawRole";
import ConsumerLawWhy from "./ConsumerLawWhy";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import consumerLawImg from "./../../../Images/InnerServicesImgs/Consumer Law.png"
import ServiceLawImg from "../CivilLawPage/ServiceLawImg";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import ServiceTestimonial from "../ServiceTestimonial/ServiceTestimonial";
const ConsumerLaw = () => {
  return (
    <div className="civilLawPage">
      <Helmet>
        <title>
          Consumer Court Lawyers in Bangalore | Consumer Court Advocates in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Consumer Court Lawyers in Bangalore. Our expertise in consumer law ensures that your rights are protected and that you receive the compensation and resolution you deserve."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/consumer-court-lawyers-in-bangalore"
        />
      </Helmet>
      <ServiceLawImg img={consumerLawImg} alt={consumerLawImg} head="Consumer Law"/>
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Civil Law"
      />
      <ConsumerLawHead />
      <ConsumerLawRole />
      <ConsumerLawWhy />
      <HomeWhy />
      <ServiceTestimonial />
    </div>
  );
};

export default ConsumerLaw;
