import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CommercialLawTypes = () => {
  return (
    <div className="notaryService">
      <h2>Types of Commercial Disputes</h2>{" "}
      <p>
        Commercial disputes can arise in various contexts, each requiring a
        tailored legal approach. Our Commercial Court Lawyers in Bangalore have
        extensive experience in dealing with:
      </p>
      <li>
        <img src={lawHammer} alt="" />
        <span> Theft and Burglary: </span>{" "}
        <p>
          Contract Disputes: Issues related to the interpretation, performance,
          and enforcement of contracts. This includes breach of contract claims,
          warranty disputes, and disagreements over contract terms.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" /> <span>Business Torts:</span>{" "}
        <p>
          Cases involving allegations of fraud, misrepresentation, interference
          with business relationships, and other wrongful acts that harm a
          business.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" />{" "}
        <span>Intellectual Property Disputes:</span>{" "}
        <p>
          Protecting and enforcing rights related to patents, trademarks,
          copyrights, and trade secrets.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" />{" "}
        <span>Shareholder and Partnership Disputes:</span>{" "}
        <p>
          Conflicts between business partners, shareholders, or members of
          limited liability companies.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" /> <span> Real Estate Litigation:</span>{" "}
        <p>
          Disputes involving commercial property, including lease agreements,
          property development, and zoning issues.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" /> <span>Employment Litigation:</span>{" "}
        <p>
          Legal issues related to employment contracts, workplace
          discrimination, wrongful termination, and other employment-related
          disputes.
        </p>
      </li>
    </div>
  );
};

export default CommercialLawTypes;
