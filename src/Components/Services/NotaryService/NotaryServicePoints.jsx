import React from "react";
import hammerLaw from "./../../../Images/Law Service Icons/Commercial_law.png";

const NotaryServicePoints = () => {
  return (
    <div className="civilLawLitigation">
      <h2>Key Services</h2>
      <ul>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Document Notarization{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Acknowledgements{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Jurats{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Certified Copies{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Apostille Services{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Witnessing Documents{" "}
        </li>
        <li>
          <img src={hammerLaw} alt="hammerLaw" />
          Notary for Real Estate Transactions{" "}
        </li>
      </ul>
    </div>
  );
};

export default NotaryServicePoints;
