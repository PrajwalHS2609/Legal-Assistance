import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CommercialLawSharehold = () => {
  return (
    <div className="notaryService">
      <h3>
        {" "}
        <img src={lawHammer} alt="lawHammer" />
        Shareholder and Partnership Disputes{" "}
      </h3>{" "}
      <p>
        Conflicts among business partners or shareholders can threaten the
        stability of a company. Our Commercial Court Lawyers in Bangalore
        provide legal counsel and representation in:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span> Shareholder Derivative Actions: </span>{" "}
        <p>
          Addressing claims brought by
          shareholders on behalf of the company.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span> Shareholder Derivative Actions:</span>{" "}
        <p>
          Assisting with the legal aspects of ending
          business partnerships.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span>Fiduciary Duty Claims:</span>{" "}
        <p>
          Litigating cases involving breaches of
          fiduciary duty by corporate officers or directors.
        </p>
      </li>
    </div>
  );
};

export default CommercialLawSharehold;
