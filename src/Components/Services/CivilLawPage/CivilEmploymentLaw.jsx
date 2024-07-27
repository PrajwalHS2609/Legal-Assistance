import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CivilEmploymentLaw = () => {
  return (
    <div className="notaryService">
      <h3>
        {" "}
        <img src={lawHammer} alt="lawHammer" />
        Employment Law
      </h3>{" "}
      <p>
        Employment disputes can have a significant impact on both employees and
        employers. Our civil lawyers in Bangalore handle a variety of employment
        law issues, including:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span> Wrongful termination: </span>{" "}
        <p>
          Representing employees who have been unjustly fired from their jobs.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />{" "} */}
        <span> Workplace discrimination:</span>{" "}
        <p>
          Addressing cases of discrimination based on race, gender, age,
          disability, or other protected characteristics.{" "}
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />{" "} */}
        <span>Employee contracts::</span>{" "}
        <p>
          Drafting and reviewing employment agreements to ensure they are fair
          and legally compliant.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />{" "} */}
        <span> Workplace harassment: </span>{" "}
        <p>Taking action against harassment and hostile work environments.</p>
      </li>
    </div>
  );
};

export default CivilEmploymentLaw;
