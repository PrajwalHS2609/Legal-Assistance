import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const HighCourtCriminal = () => {
  return (
    <div className="notaryService">
      <h3>
        <img src={lawHammer} alt="lawHammer" />
        Criminal Defense{" "}
      </h3>{" "}
      <p>
        Facing criminal charges can be one of the most stressful experiences in
        a person's life. Our High Court Lawyers in Bangalore are committed to
        providing robust defense strategies to protect the rights and freedoms
        of our clients. We handle all types of criminal cases, from minor
        offenses to serious felonies, including:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span>White-Collar Crimes:</span>{" "}
        <p>
          Defending clients accused of financial crimes
          such as fraud, embezzlement, and money laundering.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span> Violent Crimes:</span>{" "}
        <p>
          Representing individuals charged with offenses like assault, robbery,
          and homicide.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span>Drug Offenses:</span>{" "}
        <p>
          Providing defense for cases involving the possession, distribution,
          or manufacturing of controlled substances.
        </p>
      </li>
    </div>
  );
};

export default HighCourtCriminal;
