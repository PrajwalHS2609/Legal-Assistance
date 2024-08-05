import React from "react";
import OnlineAppointForm from "./OnlineAppointForm";
import aboutUsImg from "./../../Images/AboutUs.png";
import ServiceLawImg from "../Services/CivilLawPage/ServiceLawImg";

const OnlineAppoint = () => {
  return (
    <div className="onlineAppointmentContainer">
      <ServiceLawImg img={aboutUsImg} alt="aboutUsImg" head="Online Appointment" />
      <OnlineAppointForm />
    </div>
  );
};

export default OnlineAppoint;
