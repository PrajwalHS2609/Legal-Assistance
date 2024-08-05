import React, { useState } from "react";
import "./OnlineAppoint.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const OnlineAppointForm = () => {
  let [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    address: "",
    date: "",
    time: "",
    caseType: "",
  });

  let { name, email, phone, state, city, address, date, time, caseType } = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    emailjs 
      .sendForm(
        "service_nut4cih",
        "template_ylqr91nr",
        e.target,
        "eqzf568BGJMMi5ZSG"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("mail sent successfully");
          setTimeout(() => {
            window.location.assign("/online-appointment");
          }, 5000);
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send mail");
          // setTimeout(() => {
            // window.location.assign("/online-appointment");
          // }, 5000);
        }
      );
  };
  return (
    <div className="onlineForm">
      <ToastContainer />
      <h3>
        <span>Online</span> Appointment
      </h3>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <div className="onlineFormName">
            <input
              type="text"
              placeholder="Name"
              required
              autoComplete="off"
              name="name"
              value={name}
              onChange={handleData}
            />
            <input
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
              name="email"
              value={email}
              onChange={handleData}
            />
          </div>
          <div className="onlineFormMail">
            <input
              type="tel"
              placeholder="Phone"
              required
              autoComplete="off"
              name="phone"
              value={phone}
              onChange={handleData}
            />
            <input
              type="text"
              placeholder="State"
              required
              autoComplete="off"
              name="state"
              value={state}
              onChange={handleData}
            />
          </div>
          <div className="onlineFormMail">
            <input
              type="text"
              placeholder="City"
              required
              autoComplete="off"
              name="city"
              value={city}
              onChange={handleData}
            />
            <select
              name="caseType"
              value={caseType}
              id=""
              onChange={handleData}
            >
              <option value="">Type of Case</option>
              <option value="Civil">Civil</option>
              <option value="Criminal">Criminal</option>
              <option value="Family Law">Family Law</option>
              <option value="Consumer">Consumer Law</option>
            </select>
          </div>
          <div className="onlineFormMail">
            <input
              type="date"
              //   placeholder="State"
              required
              autoComplete="off"
              name="date"
              value={date}
              onChange={handleData}
            />
            <input
              type="time"
              placeholder="appointment time"
              required
              autoComplete="off"
              name="time"
              value={time}
              onChange={handleData}
            />
          </div>
          <div className="onlineFormTextarea">
            <textarea
              name="address"
              id="address"
              cols={90}
              rows={5}
              placeholder="Address"
              value={address}
              onChange={handleData}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};
export default OnlineAppointForm;
