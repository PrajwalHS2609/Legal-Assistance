import React from "react";
import { Helmet } from "react-helmet";
import ServiceLawImg from "../../Services/CivilLawPage/ServiceLawImg";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import PropertyAttorneyHead from "./PropertyAttorneyHead";
import PropertyAttorneyWhyNeed from "./PropertyAttorneyWhyNeed";
import PropertyAttorneyService from "./PropertyAttorneyService";
import PropertyAttorneyWhy from "./PropertyAttorneyWhy"
import PropertyAttorneyHow from "./PropertyAttorneyHow";
import PropertyAttorneyWhat from "./PropertyAttorneyWhat";
import PropertyAttorneyYour from "./PropertyAttorneyYour";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import ServiceTestimonial from "../../Services/ServiceTestimonial/ServiceTestimonial";
import propertyAttorney from "./../../../Images/LawyersNearMe/Property Attorney Near Me.png";

const PropertyAttorney = () => {
  return (
    <div className="divorcePageContainer">
      <Helmet>
        <title>Property Attorney near Me | Civil Lawyers in Bangalore</title>
        <meta
          name="description"
          content="Property Attorney near me. Whether you’re buying, selling, leasing, or dealing with property disputes, the right legal guidance can make all the difference. "
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/property-attorney-near-me"
        />
      </Helmet>
      <ServiceLawImg
        img={propertyAttorney}
        alt="propertyAttorney"
        head="Property Attorney Near Me"
      />
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Property Attorney"
      />
      <PropertyAttorneyHead />
      <PropertyAttorneyWhyNeed />
      <PropertyAttorneyService />
      <PropertyAttorneyWhy />
      <PropertyAttorneyHow />
      <PropertyAttorneyWhat />
      <PropertyAttorneyYour />
      <WhatsApp />
      <ServiceTestimonial />
    </div>
  );
};

export default PropertyAttorney;
