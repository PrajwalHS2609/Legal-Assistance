import React from "react";
import ServiceTestimonialCard from "./ServiceTestimonialCard";

const ServiceTestimonialMain = () => {
  return (
    <div className="serviceTestimonialMain">
      <ServiceTestimonialCard
        para="MM Associates provided exceptional legal support for my civil court case. Their expertise, professionalism, and dedication led to a successful outcome. Highly recommend their services."
        name="Dhirendra Kumar"
      />
      <ServiceTestimonialCard
        para="MM Associates boasts a versatile team that truly values clients' time. They specialize in criminal, civil, and family matters, with experts dedicated to each field. Their work ethic and professionalism are commendable."
        name="Arvind Naik"
      />
      <ServiceTestimonialCard
        para="I loved the way MM Associates treated me. Their prompt and steady responses were impressive. I didn't expect the property verification to be completed so quickly. They have been a great help."
        name="Harsheeta Nair"
      />
    </div>
  );
};

export default ServiceTestimonialMain;
