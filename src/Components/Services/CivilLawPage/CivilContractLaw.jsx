import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CivilContractLaw = () => {
  return (
    <div className="notaryService">
      <h3>
        {" "}
        <img src={lawHammer} alt="lawHammer" />
        Contract Law
      </h3>{" "}
      <p>
        Contracts form the backbone of many legal relationships, from business
        agreements to personal arrangements. Our civil lawyers in Bangalore are
        adept at handling all aspects of contract law, including:
      </p>
      <li>
        {" "}
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span> Drafting contracts:</span>{" "}
        <p>
          Creating clear, comprehensive contracts that protect our clients'
          interests.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />{" "} */}
        <span> Reviewing contracts:</span>{" "}
        <p>
          Examining existing contracts to ensure they are legally sound and
          fair.{" "}
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />{" "} */}
        <span>Enforcing contracts: </span>{" "}
        <p>
          Taking legal action to enforce the terms of a contract when one party
          fails to meet their obligations.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />{" "} */}
        <span>Resolving contract disputes:</span>{" "}
        <p>
          Mediating and litigating disputes arising from breach of contract.
        </p>
      </li>
    </div>
  );
};

export default CivilContractLaw;
