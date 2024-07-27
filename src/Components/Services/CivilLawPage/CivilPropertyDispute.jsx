import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CivilPropertyDispute = () => {
  return (
    <div className="notaryService">
      <h3>
        <img src={lawHammer} alt="lawHammer" />
        Property Disputes
      </h3>{" "}
      <p>
        Property disputes can be highly contentious and complex, often involving
        multiple parties and intricate legal issues. Our civil lawyers in
        Bangalore have extensive experience in handling property disputes,
        including:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span> Ownership disputes: </span>{" "}
        <p>Resolving conflicts over rightful ownership of property.</p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
         <span> Boundary disputes:</span>{" "}
        <p>
          Addressing issues related to property boundaries and encroachments.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />{" "} */}
        <span>Landlord-tenant disputes:</span>{" "}
        <p>
          Representing landlords and tenants in matters such as lease
          agreements, rent disputes, and eviction proceedings.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />{" "} */}
        <span> Real estate transactions: </span>{" "}
        <p>
          Assisting with the legal aspects of buying, selling, and transferring
          property.
        </p>
      </li>
    </div>
  );
};

export default CivilPropertyDispute;
