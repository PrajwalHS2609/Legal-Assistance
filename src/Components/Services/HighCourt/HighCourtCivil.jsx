import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const HighCourtCivil = () => {
  return (
    <div className="notaryService">
      <h3>
        <img src={lawHammer} alt="lawHammer" />
        Civil Litigation{" "}
      </h3>{" "}
      <p>
        Civil litigation involves disputes between individuals or organizations
        that typically seek monetary compensation or specific performance rather
        than criminal sanctions. Our{" "}
        <a href="/high-court-lawyers-in-bangalore">High Court Lawyers in Bangalore</a> handle a wide array of
        civil cases, including:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span>Property Disputes:</span>{" "}
        <p>
          Resolving conflicts related to real estate transactions, ownership
          rights, and property boundaries.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span> Contract Disputes:</span>{" "}
        <p>
          Addressing issues arising from the breach or interpretation of
          contractual agreements.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span>Tort Claims:</span>{" "}
        <p>
          Representing clients in cases involving personal injury, defamation,
          and other wrongful acts that cause harm.
        </p>
      </li>
    </div>
  );
};

export default HighCourtCivil;
