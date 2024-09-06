import React from "react";
import OnlineAppointForm from "./OnlineAppointForm";
import onlineAppoint from "./../../Images/onlineAppointment.png";
import ServiceLawImg from "../Services/CivilLawPage/ServiceLawImg";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";

const OnlineAppoint = () => {
  return (
    <div className="onlineAppointmentContainer">
      <ServiceLawImg
        img={onlineAppoint}
        alt="onlineAppoint"
        head="Online Appointment"
      />
      <OnlineAppointForm />
      <WhatsApp/>
    </div>
  );
};

export default OnlineAppoint;
