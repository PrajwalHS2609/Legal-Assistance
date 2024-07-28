import React from "react";
import "./AltDispute.css";
import icon from "./../../../Images/Law Service Icons/Civil_law.png";

const AltDisputeBenefits = () => {
  return (
    <div className="altDisputeWhy">
      <h2>
        Benefits of Using MM Associates for ADRBenefits of Using MM Associates
        for ADR
      </h2>{" "}
      <p>
        Choosing MM Associates for your Alternative Dispute Resolution (ADR) in
        Bangalore provides several key benefits:
      </p>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="icon" />
        </div>
        <div className="altDisputeList">
          <span> Experienced Professionals :</span>{" "}
          <p>
            Our team consists of experienced ADR practitioners who bring a
            wealth of knowledge and expertise to every case. We are skilled in
            handling a diverse range of disputes and can provide tailored
            solutions to meet your specific needs.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="icon" />
        </div>
        <div className="altDisputeList">
          <span> Client-Centered Approach:</span>{" "}
          <p>
            We prioritize our clients' needs and work closely with them to
            understand their goals and concerns. Our client-centered approach
            ensures that we provide personalized support and effective
            solutions.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="icon" />
        </div>
        <div className="altDisputeList">
          <span>Comprehensive Services:</span>{" "}
          <p>
            We offer a full suite of ADR services, including mediation,
            arbitration, and negotiation. This comprehensive approach allows us
            to address disputes from multiple angles and find the most suitable
            resolution.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="icon" />
        </div>
        <div className="altDisputeList">
          <span>Commitment to Fairness: </span>{" "}
          <p>
            Our commitment to fairness and impartiality ensures that all parties
            involved receive equitable treatment and that disputes are resolved
            in a just manner.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="icon" />
        </div>
        <div className="altDisputeList">
          <span> Efficient Resolution:</span>{" "}
          <p>
            We are dedicated to resolving disputes efficiently and effectively,
            minimizing the time and cost associated with legal conflicts.
          </p>
        </div>
      </li>
    </div>
  );
};

export default AltDisputeBenefits;
