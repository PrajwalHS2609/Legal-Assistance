import React from "react";
import ContactImg from "./ContactImg";
import ContactForm from "./ContactForm";
import ContactAdd from "./ContactAdd";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";

const Contacts = () => {
  return (
    <div className="contactContainer">
      <ContactImg />
      <BreadCrumbs service="Contact Us" />

      <div className="contactWrapper">
        <div className="contactContent1">
          <ContactForm />
        </div>
        <div className="contactContent2">
          <ContactAdd />
        </div>
      </div>
      <WhatsApp/>
    </div>
  );
};

export default Contacts;
