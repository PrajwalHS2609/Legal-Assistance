import React from "react";
import OnlineAppointForm from "./OnlineAppointForm";
import onlineAppoint from "./../../Images/onlineAppointment.png";
import ServiceLawImg from "../Services/CivilLawPage/ServiceLawImg";

const OnlineAppoint = () => {
  return (
    <div className="onlineAppointmentContainer">
      <ServiceLawImg
        img={onlineAppoint}
        alt="onlineAppoint"
        head="Online Appointment"
      />
      <OnlineAppointForm />
    </div>
  );
};

export default OnlineAppoint;
