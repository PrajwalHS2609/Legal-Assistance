import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const HighCourtConstitutionLaw = () => {
  return (
    <div className="notaryService">
      <h3>
        <img src={lawHammer} alt="lawHammer" />
        Constitutional Law{" "}
      </h3>{" "}
      <p>
        Constitutional law cases often involve fundamental rights and liberties.
        Our High Court Lawyers in Bangalore have the expertise to handle
        sensitive and impactful constitutional matters, such as:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span> Civil Rights Violations:</span>{" "}
        <p>
          Defending individuals against violations of their constitutional
          rights.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span> Public Interest Litigation:</span>{" "}
        <p>
          Representing clients in cases that have a broader societal impact,
          often involving government actions or policies.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span>Election Law:</span>{" "}
        <p>
          Addressing legal issues related to the conduct of elections and the
          protection of voting rights.
        </p>
      </li>
    </div>
  );
};

export default HighCourtConstitutionLaw;
