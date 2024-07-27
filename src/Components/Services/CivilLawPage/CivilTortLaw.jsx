import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CivilTortLaw = () => {
  return (
    <div className="notaryService">
      <h3>
        <img src={lawHammer} alt="lawHammer" />
        Tort Law
      </h3>{" "}
      <p>
        Tort law covers civil wrongs that result in harm or loss to individuals.
        Our civil lawyers in Bangalore are skilled in handling tort cases,
        including:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span>Personal injury:</span>{" "}
        <p>
          Representing clients who have been injured due to the negligence or
          intentional actions of others.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span> Defamation:</span>{" "}
        <p>
          Taking legal action against individuals or organizations that have
          harmed our clients' reputations through false statements.{" "}
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
         <span>Negligence:</span>{" "}
        <p>
          Holding parties accountable for harm caused by their failure to
          exercise reasonable care.
        </p>
      </li>
    </div>
  );
};

export default CivilTortLaw;
