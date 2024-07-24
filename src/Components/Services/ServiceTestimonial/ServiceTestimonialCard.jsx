import React, { useEffect } from "react";
import "./ServiceTestimonial.css";
import quote from "./../../../Images/double-quotes.png"
import "aos/dist/aos.css";
import AOS from "aos";
const ServiceTestimonialCard = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="serviceTestimonialCard" data-aos="fade-up">
      <div className="serviceTestimonialCardContent">
        <p>
         {props.para}
        </p>
      </div>
      <div className="serviceTestimonialCardContent">
        <div className="serviceTestimonialCardItem">
          <p>{props.name}</p>
        </div>
        <div className="serviceTestimonialCardItem">
          <img src={quote} alt="quote" />
        </div>
      </div>
    </div>
  );
};

export default ServiceTestimonialCard;
