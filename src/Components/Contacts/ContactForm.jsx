import React from "react";
import "./Contact.css";
const ContactForm = () => {
  let handleSubmit = () => {
    console.log("submit success");
  };
  return (
    <div className="contactForm">
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
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              autoComplete="off"
            />
          </div>
          <div className="formMail">
            <input
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
            />
            <input
              type="tel"
              placeholder="Phone"
              required
              autoComplete="off"
            />
          </div>
          <div className="formTextarea">
            <textarea
              name=""
              id=""
              cols={90}
              rows={5}
              placeholder="Additional Message"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
