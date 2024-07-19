import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import HomeHeaderTxt from "./HomeHeaderTxt";

const HomeHeaderSlider = () => {
  return (
    <div className="HomeSliderContainer">
      <Carousel fade className="carouselContainer">
        <Carousel.Item className="carouselItem" interval={3000}>
          <HomeHeaderTxt
            quote="LEGAL EXPERTS"
            head="Focused On Client Based Law Firm"
            para="Specializing in client-centered legal services, we prioritize your needs and success. Our dedicated team provides personalized, expert guidance to navigate your legal challenges effectively."
          />

          <img
            src="https://bylaw.wpengine.com/wp-content/uploads/2023/10/Rectangle-331.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item className="carouselItem" interval={3000}>
          <HomeHeaderTxt
            quote="CARE & COMMITTED"
            head="We Work For Client Legal Success"
            para="At M & M Associates, we are committed to your legal success. Our experienced team provides top-notch, tailored legal services, ensuring the best outcomes for our clients. Trust us as your reliable partner in navigating legal complexities. "
          />

          <img
            src="https://bylaw.wpengine.com/wp-content/uploads/2023/09/Rectangle-329.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item className="carouselItem" interval={3000}>
          <HomeHeaderTxt
            quote="EXPERT TEAM"
            head="Expert Legal Support And Justice"
            para="Providing expert legal support, we are dedicated to delivering justice for our clients. Our experienced team offers professional, reliable guidance to navigate complex legal issues and achieve the best outcomes."
          />

          <img
            src="https://bylaw.wpengine.com/wp-content/uploads/2023/10/dy-slider-1.jpg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeHeaderSlider;
