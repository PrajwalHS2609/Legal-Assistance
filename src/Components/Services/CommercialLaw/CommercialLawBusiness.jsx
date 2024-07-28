import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CommercialLawBusiness = () => {
  return (
    <div className="notaryService">
      <h3>
        {" "}
        <img src={lawHammer} alt="lawHammer" />
        Business Torts{" "}
      </h3>{" "}
      <p>
        Business torts involve wrongful acts that cause harm to a company's
        reputation, finances, or operations. Our{" "}
        <a href="/commercial-court-lawyers-in-bangalore">Commercial Court Lawyers in Bangalore  </a> have extensive
        experience in litigating business tort cases, including:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span> Fraud and Misrepresentation: </span>{" "}
        <p>
          Pursuing claims against parties that have engaged in deceptive
          practices.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span>Tortious Interference::</span>{" "}
        <p>
          Addressing situations where third parties unlawfully interfere with
          contractual or business relationships.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />{" "} */}
        <span> Unfair Competition: </span>{" "}
        <p>
          Protecting businesses from competitors that engage in unethical or
          illegal practices.
        </p>
      </li>
    </div>
  );
};

export default CommercialLawBusiness;
