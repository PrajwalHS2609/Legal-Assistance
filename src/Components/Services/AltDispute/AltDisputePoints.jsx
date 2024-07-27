import React from "react";
import hammerLaw from "./../../../Images/Law Service Icons/Commercial_law.png";

const AltDisputePoints = () => {
  return (
    <div className="civilLawLitigation">
      <h2>Key Services</h2>
      <ul>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Mediation{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Arbitration{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Negotiation{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Conciliation{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Collaborative Law{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Dispute Resolution Planning{" "}
        </li>
      </ul>
    </div>
  );
};

export default AltDisputePoints;
