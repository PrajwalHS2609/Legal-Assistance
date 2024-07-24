import React from "react";
import { Helmet } from "react-helmet";
import AltDisputeHead from "./AltDisputeHead";
import AltDisputeWhy from "./AltDisputeWhy";
import AltDisputeMeditation from "./AltDisputeMeditation";
import AltDisputeArbitration from "./AltDisputeArbitration ";
import AltDisputeNego from "./AltDisputeNego";
import AltDisputeBenefits from './AltDisputeBenefits';
import AltDisputeHow from './AltDisputeHow';
import AltDisputeImg from "./AltDisputeImg";

const AltDispute = () => {
  return (
    <div>
      <Helmet>
        <title>
          Alternative Dispute Resolution in Bangalore – Book a Free Consultation
        </title>
        <meta
          name="description"
          content="Alternative Dispute Resolution in Bangalore. Our goal is to facilitate resolutions that are both effective and amicable, leveraging our extensive experience in ADR practices."
        />
        <link
          rel="canonical"
          href="https://mandmassociates.com/alternative-dispute-resolution-in-bangalore  "
        />
      </Helmet>
      <AltDisputeImg/>
      <AltDisputeHead />
      <AltDisputeWhy />
      <AltDisputeMeditation />
      <AltDisputeArbitration />
      <AltDisputeNego />
      <AltDisputeBenefits/>
      <AltDisputeHow/>
    </div>
  );
};

export default AltDispute;
