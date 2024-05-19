import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
            para=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            itaque blanditiis beatae eum hic corporis veritatis quisquam nihil
            nesciunt, alias est et delectus. Voluptate, rerum ipsa amet sed
            soluta praesentium"
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
            para=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        itaque blanditiis beatae eum hic corporis veritatis quisquam nihil
        nesciunt, alias est et delectus. Voluptate, rerum ipsa amet sed
        soluta praesentium"
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
            para=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
       itaque blanditiis beatae eum hic corporis veritatis quisquam nihil
       nesciunt, alias est et delectus. Voluptate, rerum ipsa amet sed
       soluta praesentium"
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
