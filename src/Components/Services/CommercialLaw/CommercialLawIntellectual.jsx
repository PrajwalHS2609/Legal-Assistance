import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CommercialLawIntellectual = () => {
  return (
    <div className="notaryService">
      <h3>
        {" "}
        <img src={lawHammer} alt="lawHammer" />
        Intellectual Property Disputes{" "}
      </h3>{" "}
      <p>
        In today's competitive business environment, protecting intellectual
        property (IP) is crucial. Our Commercial Court Lawyers in Bangalore
        assist clients in safeguarding their IP assets and resolving disputes,
        including:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span> Patent Infringement: </span>{" "}
        <p>
          Litigating claims of unauthorized use of
          patented inventions.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span>Trademark Disputes:</span>{" "}
        <p>Protecting brand identity and preventing trademark infringement.</p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span>Copyright Violations:</span>{" "}
        <p>
          {" "}
          Enforcing rights related to creative works, including literature,
          music, and software.
        </p>
      </li>
    </div>
  );
};

export default CommercialLawIntellectual;
