import React from "react";
import "./Contact.css";
import contactUs from "./../../Images/contactUs.png"

const ContactImg = () => {
  return (
    <div className="civilLawHeadContainer">
      <img className="imgComp" src={contactUs} alt="contactUs" />
      <div className="civilLawHeadCover"></div>
      <h2>Contact Us </h2>
    </div>
  );
};

export default ContactImg;
