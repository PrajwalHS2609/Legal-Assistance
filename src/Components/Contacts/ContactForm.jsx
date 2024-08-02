import React, { useState } from "react";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  let [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  let { firstName, lastName, email, phone, message } = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();

    let payLoad = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };
    toast.success("Successfully");
    console.log(payLoad);
    setTimeout(() => {
      window.location.assign("/contact-us");
    }, 5000);
  };

  return (
    <div className="contactForm">
      <ToastContainer />
      <h3>
        <span>Reach</span> Out To Us
      </h3>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <div className="formName">
            <input
              type="text"
              placeholder="First Name"
              required
              autoComplete="off"
              name="firstName"
              value={firstName}
              onChange={handleData}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              autoComplete="off"
              name="lastName"
              value={lastName}
              onChange={handleData}
            />
          </div>
          <div className="formMail">
            <input
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
              name="email"
              value={email}
              onChange={handleData}
            />
            <input
              type="tel"
              placeholder="Phone"
              required
              autoComplete="off"
              name="phone"
              value={phone}
              onChange={handleData}
            />
          </div>
          <div className="formTextarea">
            <textarea
              name="message"
              id=""
              cols={90}
              rows={5}
              placeholder="Additional Message"
              value={message}
              onChange={handleData}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
