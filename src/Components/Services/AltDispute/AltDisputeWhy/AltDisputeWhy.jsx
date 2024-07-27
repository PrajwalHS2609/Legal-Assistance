import React from "react";
import "./AltDisputeWhy.css";
import icon from "./../../../../Images/Law Service Icons/Civil_law.png";
const AltDisputeWhy = () => {
  return (
    <div className="altDisputeWhy">
      <h2>Why Choose ADR Services in Bangalore?</h2>{" "}
      <p>
        Opting for Alternative Dispute Resolution (ADR) in Bangalore offers
        several advantages over conventional litigation:
      </p>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="" />
        </div>
        <div className="altDisputeList">
          <span> Cost-Effectiveness :</span>{" "}
          <p>
            ADR methods are generally less expensive than traditional court
            proceedings. By avoiding the lengthy and costly process of
            litigation, parties can save on legal fees and other expenses.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Time Efficiency :</span>{" "}
          <p>
            ADR processes are typically faster than going through the court
            system. Mediation and arbitration can often be scheduled and
            completed within a shorter time frame, allowing parties to resolve
            their disputes quickly.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Confidentiality :</span>{" "}
          <p>
            ADR proceedings are usually private, unlike court cases which are
            often public. This confidentiality helps protect sensitive
            information and maintains the privacy of the parties involved.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="" />
        </div>
        <div className="altDisputeList">
          <span> Flexibility :</span>{" "}
          <p>
            ADR methods offer greater flexibility in terms of scheduling and
            procedure. Parties can tailor the process to suit their needs and
            preferences, leading to more customized and satisfactory outcomes.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="" />
        </div>
        <div className="altDisputeList">
          <span> Preservation of Relationships :</span>{" "}
          <p>
            ADR techniques, especially mediation, focus on finding mutually
            agreeable solutions and can help preserve professional and personal
            relationships that might otherwise be damaged through adversarial
            litigation.
          </p>
        </div>
      </li>
    </div>
  );
};

export default AltDisputeWhy;
