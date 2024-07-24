import React from "react";
import { Helmet } from "react-helmet";
import IntellectualPropertyHead from "./IntellectualPropertyHead";
import IntellectualPropertyWhy from "./IntellectualPropertyWhy";
import IntellectualPropertyServices from "./IntellectualPropertyServices";
import IntellectualPropertyEnforce from "./IntellectualPropertyEnforce";
import IntellectualPropertyTailor from "./IntellectualPropertyTailor";
import IntellectualPropertyNavi from "./IntellectualPropertyNavi";
import IntellectualPropertyImg from "./IntellectualPropertyImg";

const IntellectualProperty = () => {
  return (
    <div className="IntelContainerProperty">
      <Helmet>
        <title>
          Intellectual Property Rights Services Lawyer in Bangalore – Book a
          Free Consultation{" "}
        </title>
        <meta
          name="description"
          content="Intellectual Property Rights Services Lawyer in Bangalore. Dedicated to protecting your innovations and creative works with precision and care."
        />
        <link
          rel="canonical"
          href="https://mandmassociates.com/intellectual-property-rights-services-lawyer-in-bangalore"
        />
      </Helmet>
      <IntellectualPropertyImg />
      <IntellectualPropertyHead />
      <IntellectualPropertyWhy />
      <IntellectualPropertyServices />
      <IntellectualPropertyEnforce />
      <IntellectualPropertyTailor />
      <IntellectualPropertyNavi />
    </div>
  );
};

export default IntellectualProperty;
