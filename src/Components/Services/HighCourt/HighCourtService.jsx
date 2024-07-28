import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const HighCourtService = () => {
  return (
    <div className="notaryService">
      <h3>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        Comprehensive Legal Services{" "}
      </h3>{" "}
      <p>
        At MM Associates, our High Court Lawyers in Bangalore offer a full range
        of legal services to meet the diverse needs of our clients. From initial
        consultations to courtroom representation, we are committed to providing
        thorough and effective legal support. Our services include:
      </p>
      <li>
        <img src={lawHammer} alt="lawHammer" />
        <span>Legal Consultation:</span>{" "}
        <p>
          Providing expert advice on legal matters, helping clients understand
          their rights and options.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="lawHammer" />
        <span> Case Preparation:</span>{" "}
        <p>
          Thoroughly investigating and preparing cases to ensure the strongest
          possible representation.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="lawHammer" />
        <span>Court Representation:</span>{" "}
        <p>
          Advocating for clients in high court proceedings, presenting
          compelling arguments, and pursuing favorable outcomes.
        </p>
      </li>
      <li>
        <img src={lawHammer} alt="lawHammer" />
        <span> Appeals:</span>{" "}
        <p>
          Handling appeals to challenge unfavorable decisions and seek justice
          for our clients.
        </p>
      </li>
    </div>
  );
};

export default HighCourtService;
