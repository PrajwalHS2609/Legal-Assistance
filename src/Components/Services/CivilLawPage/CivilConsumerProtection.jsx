import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CivilConsumerProtection = () => {
  return (
    <div className="notaryService">
      <h3>
        {" "}
        <img src={lawHammer} alt="lawHammer" />
        Consumer Protection
      </h3>{" "}
      <p>
        Consumers have the right to receive fair treatment from businesses and
        service providers. Our civil lawyers in Bangalore are committed to
        protecting consumer rights and addressing issues such as:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span> Defective products: </span>{" "}
        <p>
          Representing clients who have suffered harm due to faulty or unsafe
          products.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span>Fraud:</span>{" "}
        <p>
          Taking legal action against businesses that engage in deceptive
          practices.{" "}
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span>Service disputes:</span>{" "}
        <p>
          Resolving conflicts between consumers and service providers over poor
          or incomplete services.
        </p>
      </li>
    </div>
  );
};

export default CivilConsumerProtection;
