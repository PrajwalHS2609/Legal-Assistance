import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CommercialLawContract = () => {
  return (
    <div className="notaryService">
      <h3>
        {" "}
        <img src={lawHammer} alt="lawHammer" />
        Family Law
      </h3>{" "}
      <p>
        Contracts are the foundation of commercial relationships. When disputes
        arise, they can disrupt operations and lead to significant financial
        losses. Our Commercial Court Lawyers in Bangalore are adept at handling
        all aspects of contract disputes, including:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span> Drafting and Reviewing Contracts: </span>{" "}
        <p>
          Ensuring that contracts are clear, enforceable, and protect our
          clients' interests.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span> Litigating Breach of Contract Claims:</span>{" "}
        <p>
          Representing clients in court when a contract is breached, seeking
          remedies such as damages or specific performance.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span>Negotiating Settlements:</span>{" "}
        <p>
          Working towards amicable resolutions that avoid the costs and
          uncertainties of litigation.
        </p>
      </li>
    </div>
  );
};

export default CommercialLawContract;
