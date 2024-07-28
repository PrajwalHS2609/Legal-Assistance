import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CommercialLawRealEstate = () => {
  return (
    <div className="notaryService">
      <h3>
        {" "}
        <img src={lawHammer} alt="lawHammer" />
        Real Estate Litigation{" "}
      </h3>{" "}
      <p>
        Commercial real estate transactions and developments can give rise to
        various legal issues. Our Commercial Court Lawyers in Bangalore handle
        real estate litigation matters, such as:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span> Lease Disputes: </span>{" "}
        <p>
          Resolving conflicts between landlords and tenants over lease terms
          and conditions.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span>Property Development:</span>{" "}
        <p>
          Addressing legal challenges related to zoning, permits, and
          construction.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span>Eminent Domain:</span>{" "}
        <p>
          {" "}
          Representing property owners in cases where the government seeks to
          acquire private property for public use.
        </p>
      </li>
    </div>
  );
};

export default CommercialLawRealEstate;
