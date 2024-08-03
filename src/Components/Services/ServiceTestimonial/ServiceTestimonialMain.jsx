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
      <ServiceTestimonialCard
        para="MM Associates provided exceptional legal support during my property dispute. Their lawyers in Bangalore were professional and dedicated, achieving a favorable outcome for me."
        name="Sharma A"
      />
      <ServiceTestimonialCard
        para="Navigating my divorce was challenging, but the team at MM Associates made it manageable. Their lawyers in Bangalore offered compassionate and expert guidance throughout the process."
        name="Patel R"
      />
      <ServiceTestimonialCard
        para="Our business has relied on MM Associates for legal advice and representation. Their lawyers in Bangalore have been instrumental in ensuring our compliance and handling complex transactions."
        name="Verma K"
      />
    </div>
  );
};

export default ServiceTestimonialMain;
