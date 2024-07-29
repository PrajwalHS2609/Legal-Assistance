import React from "react";
import hammerLaw from "./../../../Images/Law Service Icons/Commercial_law.png";

const DraftingAgreementPoints = () => {
  return (
    <div className="civilLawLitigation">
      <h2>Key Services</h2>
      <ul>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Drafting Agreements{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Deed Documentation{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Property Registration{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Legal Consultation and Support{" "}
        </li>
      </ul>
    </div>
  );
};

export default DraftingAgreementPoints;
