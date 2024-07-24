import React from "react";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";
import "./IntellectualProperty.css";
const IntellectualPropertyServices = () => {
  return (
    <div className="IntelPropertyContainer">
      <h2>Comprehensive IP Protection and Registration Services</h2>{" "}
      <p>
        As a leading Intellectual Property Rights Services Lawyer in Bangalore,
        we offer a full range of services to protect and manage your IP. Our
        services include:
      </p>
      <ul>
        <li>
          <img src={lawHammer} alt="" /> <span>Trademark Registration:</span>{" "}
          <p>
            We assist in registering trademarks to protect your brand identity
            and ensure that your logos, names, and symbols are legally
            safeguarded against infringement.
          </p>
        </li>
        <li>
          <img src={lawHammer} alt="" /> <span>Patent Filing:</span>{" "}
          <p>
            Our team helps with the filing and prosecution of patents, ensuring
            that your inventions are protected and your rights are upheld.
          </p>
        </li>
        <li>
          <img src={lawHammer} alt="" /> <span>Copyright Protection:</span>{" "}
          <p>
            We provide guidance on registering copyrights for your original
            works, including literature, music, art, and software, to prevent
            unauthorized use.
          </p>
        </li>
        <li>
          <img src={lawHammer} alt="" /> <span> Design Registration:</span>{" "}
          <p>
            We assist in registering industrial designs to protect the visual
            appearance of your products and prevent copying.
          </p>
        </li>
      </ul>
      <p>
        By working with us as your Intellectual Property Rights Services Lawyer
        in Bangalore, you can ensure that all aspects of your intellectual
        property are covered comprehensively.
      </p>
    </div>
  );
};

export default IntellectualPropertyServices;
