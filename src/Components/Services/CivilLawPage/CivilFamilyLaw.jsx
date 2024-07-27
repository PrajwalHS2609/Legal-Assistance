import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const CivilFamilyLaw = () => {
  return (
    <div className="notaryService">
      <h3>
        {" "}
        <img src={lawHammer} alt="lawHammer" />
        Family Law
      </h3>{" "}
      <p>
        Family law matters can be emotionally charged and complex, requiring
        sensitive and compassionate legal representation. Our civil lawyers in
        Bangalore are experienced in handling a wide range of family law issues,
        including:
      </p>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" /> */}
        <span> Divorce: </span>{" "}
        <p>
          Assisting clients through the legal process of divorce, including
          division of property and spousal support.
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span> Child custody:</span>{" "}
        <p>
          Advocating for the best interests of the child in custody and
          visitation disputes.{" "}
        </p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />  */}
        <span>Alimony:</span>{" "}
        <p> Negotiating and enforcing spousal support agreements.</p>
      </li>
      <li>
        {/* <img src={lawHammer} alt="lawHammer" />{" "} */}
        <span> Property settlements: </span>{" "}
        <p>Ensuring fair distribution of marital assets and liabilities.</p>
      </li>
    </div>
  );
};

export default CivilFamilyLaw;
