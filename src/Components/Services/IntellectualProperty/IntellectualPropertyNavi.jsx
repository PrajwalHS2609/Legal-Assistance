import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";
import "./IntellectualProperty.css";

const IntellectualPropertyNavi = () => {
  return (
    <div className="IntelPropertyContainer">
      <h2>Navigating Complex IP Regulations and Compliance</h2>{" "}
      <p>
        Intellectual property law is governed by a complex framework of
        regulations and international treaties. As an experienced Intellectual
        Property Rights Services Lawyer in Bangalore, we guide you through the
        intricate regulatory landscape to ensure compliance and mitigate risks.
        Our services include:
      </p>
      <ul>
        <li>
          <img src={lawHammer} alt="" /> <span>Regulatory Compliance:</span>{" "}
          <p>
            We ensure that your IP registrations and operations comply with
            relevant laws and regulations, both domestically and
            internationally.
          </p>
        </li>
        <li>
          <img src={lawHammer} alt="" />{" "}
          <span>International IP Protection:</span>{" "}
          <p>
            We provide guidance on protecting your IP rights across different
            jurisdictions, including handling international registrations and
            cross-border disputes.
          </p>
        </li>
        <li>
          <img src={lawHammer} alt="" />{" "}
          <span>Policy and Procedure Development:</span>{" "}
          <p>
            We assist in developing internal policies and procedures for
            managing and enforcing your IP rights effectively.
          </p>
        </li>
      </ul>
      <p>
        By navigating the regulatory complexities with us, you can ensure that
        your intellectual property is fully compliant and protected on a global
        scale.
      </p>
    </div>
  );
};

export default IntellectualPropertyNavi;
