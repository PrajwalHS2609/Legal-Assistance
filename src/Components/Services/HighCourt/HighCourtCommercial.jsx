import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const HighCourtCommercial = () => {
  return (
    <div className="notaryService">
      <h3>
        <img src={lawHammer} alt="lawHammer" />
        Commercial Litigation{" "}
      </h3>{" "}
      <p>
        Commercial litigation involves legal disputes related to business
        activities. Our High Court Lawyers in Bangalore are adept at handling
        complex commercial cases, including:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span>Business Torts:</span>{" "}
        <p>
          Addressing issues like fraud, misrepresentation, and
          unfair competition.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span> Shareholder Disputes:</span>{" "}
        <p>
           Resolving conflicts between shareholders,
          directors, and company management.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span>Intellectual Property:</span>{" "}
        <p>
          Protecting and enforcing rights related to
          patents, trademarks, copyrights, and trade secrets.
        </p>
      </li>
    </div>
  );
};

export default HighCourtCommercial;
