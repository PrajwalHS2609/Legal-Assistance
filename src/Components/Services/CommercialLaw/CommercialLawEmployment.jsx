import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CommercialLawEmployment = () => {
  return (
    <div className="notaryService">
      <h3>
        {" "}
        <img src={lawHammer} alt="lawHammer" />
        Employment Litigation{" "}
      </h3>{" "}
      <p>
        Employment disputes can disrupt the workplace and harm a company's
        reputation. Our Commercial Court Lawyers in Bangalore are skilled in
        managing employment litigation, including:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span>Discrimination and Harassment Claims: </span>{" "}
        <p>
          Defending employers against allegations of workplace discrimination
          and harassment.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span> Wrongful Termination:</span>{" "}
        <p>
          Wrongful Termination: Litigating claims of unlawful employee
          termination.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span> Employment Contracts:</span>{" "}
        <p> Enforcing and challenging the terms of employment agreements.</p>
      </li>
    </div>
  );
};

export default CommercialLawEmployment;
