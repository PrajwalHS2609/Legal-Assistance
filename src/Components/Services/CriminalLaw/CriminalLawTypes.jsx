import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CriminalLawTypes = () => {
  return (
    <div className="notaryService">
      <h2>Types of Criminal Cases Handled</h2>{" "}
      <p>
        At MM Associates, our <a href="https://lawyersinbangalore.com/criminal-lawyers-in-bangalore">Criminal Lawyers in Bangalore</a> handle a wide range
        of criminal cases. These include:
      </p>
      <li>
        <img src={lawHammer} alt="" />
        <span> Theft and Burglary: </span>{" "}
        <p>
          Defending individuals accused of theft, burglary, and related
          offenses.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" /> <span>Assault and Battery:</span>{" "}
        <p>
          Representing clients in cases involving physical altercations and
          violence.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" /> <span>Drug Offenses:</span>{" "}
        <p>
          Defending against charges related to the possession, distribution, and
          manufacture of illegal substances.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" />{" "}
        <span>Fraud and White-Collar Crimes:</span>{" "}
        <p>
          Representing individuals accused of financial crimes such as fraud,
          embezzlement, and insider trading.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" /> <span> Sexual Offenses:</span>{" "}
        <p>
          Providing defense for clients accused of sexual crimes, including rape
          and molestation.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="" /> <span>Homicide:</span>{" "}
        <p>
          Representing individuals facing charges of murder, manslaughter, and
          other serious offenses.
        </p>
      </li>
    </div>
  );
};

export default CriminalLawTypes;
