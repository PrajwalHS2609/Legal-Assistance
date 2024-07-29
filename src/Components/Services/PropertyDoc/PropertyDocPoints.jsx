import React from "react";
import hammerLaw from "./../../../Images/Law Service Icons/Commercial_law.png";

const PropertyDocPoints = () => {
  return (
    <div className="civilLawLitigation">
      <h2>Key Services</h2>
      <ul>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Title Verification{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Document Examination{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Legal Compliance Check{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Survey and Boundary Verification{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Document Validation{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Legal Advice and Consultation{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Fraud Prevention{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Comprehensive Report{" "}
        </li>
      </ul>
    </div>
  );
};

export default PropertyDocPoints;
