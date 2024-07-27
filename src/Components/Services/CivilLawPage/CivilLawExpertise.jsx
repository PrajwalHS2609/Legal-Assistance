import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CivilLawExpertise = () => {
  return (
    <div className="notaryService">
      <h2>Expertise of Civil Lawyers in Bangalore</h2>{" "}
      <p>
        At MM Associates, our civil lawyers in Bangalore possess extensive
        knowledge and experience in handling a wide array of civil cases. Our
        expertise includes:
      </p>
      <li>
        <img src={lawHammer} alt="" />
        <span> Property Disputes: </span>{" "}
        <p>
          Handling cases related to property ownership,
          boundary disputes, landlord-tenant issues, and real estate
          transactions.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" /> <span>Contract Law:</span>{" "}
        <p>
          Drafting, reviewing, and enforcing contracts, as well
          as resolving disputes arising from breach of contract.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" /> <span>Family Law:</span>{" "}
        <p>
            Addressing matters such as divorce, child custody,
          alimony, and property settlements.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" /> <span>Consumer Protection: </span>{" "}
        <p>
          Representing clients in disputes with
          businesses and service providers, ensuring their consumer rights are
          protected.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" /> <span>Employment Law:</span>{" "}
        <p>
           Handling issues related to wrongful termination,
          workplace discrimination, and employee contracts.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" /> <span>Tort Law:</span>{" "}
        <p>
           Dealing with civil wrongs that cause harm or loss,
          including personal injury and defamation cases.
        </p>
      </li>
    </div>
  );
};

export default CivilLawExpertise;
