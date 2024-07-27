import React from "react";
import icon from "./../../../Images/Law Service Icons/Civil_law.png";

const NotaryServiceBenefits = () => {
  return (
    <div className="altDisputeWhy">
      <h2>
        Benefits of Choosing MM Associates for Notary Services in Bangalore
      </h2>{" "}
      <p>
        Opting for Notary Services in Bangalore at MM Associates offers several
        advantages:
      </p>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Expertise and Experience:</span>{" "}
          <p>
             Our team comprises highly experienced
            and knowledgeable notaries who understand the intricacies of the
            notarization process.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Efficiency and Convenience:</span>{" "}
          <p>
             We prioritize efficiency, ensuring
            that your documents are notarized promptly without compromising on
            accuracy.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Confidentiality and Security:</span>{" "}
          <p>
             We maintain the highest standards
            of confidentiality and security to protect your sensitive
            information.
          </p>
        </div>
      </li>
    </div>
  );
};

export default NotaryServiceBenefits;
