import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import HomeHeaderTxt from "./HomeHeaderTxt";
import header1 from "./../../../Images/HeaderImg/HeaderImg1.jpg";
import header2 from "./../../../Images/HeaderImg/HeaderImg2.jpg";
import header3 from "./../../../Images/HeaderImg/HeaderImg3.jpg";
import criminal from "./../../../Images/HeaderImg/Criminal.png";
import divorce from "./../../../Images/HeaderImg/Divorce.png";

const HomeHeaderSlider = () => {
  return (
    <div className="HomeSliderContainer">
      <Carousel fade className="carouselContainer">
        <Carousel.Item className="carouselItem" interval={3000}>
          <HomeHeaderTxt
            quote="CONSUMER COURT"
            head="Top Consumer Rights Champions"
            para="We are dedicated to defending your rights. With extensive expertise in consumer law, we provide strong, effective representation to ensure justice is served. Trust us to handle your consumer disputes with professionalism and commitment."
            link="/consumer-court-lawyers-in-bangalore"
          />

          <img src={header1} alt="header1" />
        </Carousel.Item>
        <Carousel.Item className="carouselItem" interval={3000}>
          <HomeHeaderTxt
            quote="LABOUR COURT"
            head="Elite Labour Law Advocates"
            para="We offer expert legal representation for all labour and employment issues. Our dedicated team ensures your rights are protected with professionalism and precision."
            link="/labour-court-lawyers-in-bangalore"
          />

          <img src={header2} alt="header2" />
        </Carousel.Item>
        <Carousel.Item className="carouselItem" interval={3000}>
          <HomeHeaderTxt
            quote="CIVIL COURT"
            head="Premier Civil Litigation Experts"
            para="Providing expert legal support, we are dedicated to delivering justice for our clients. Our experienced team offers professional, reliable guidance to navigate complex legal issues and achieve the best outcomes."
            link="/civil-lawyers-in-bangalore"
          />

          <img src={header3} alt="header3" />
        </Carousel.Item>
        <Carousel.Item className="carouselItem" interval={3000}>
          <div className="bannerCover">
            {" "}
            <HomeHeaderTxt
              quote="FAMILY COURT"
              head="Expert Family and Divorce Legal Services"
              para="We offer exceptional legal representation for all civil matters. With a focus on achieving justice and tailored solutions, trust our dedicated team to handle your case with expertise and precision."
              link="/divorce-and-family-court-lawyers-in-bangalore"
            />
          </div>
          <img src={divorce} alt="divorce" />
        </Carousel.Item>
        <Carousel.Item className="carouselItem" interval={3000}>
          <div className="bannerCover">
            {" "}
            <HomeHeaderTxt
              quote=" MAGISTRATE COURT"
              head="Top-Notch Criminal Defense Attorneys"
              para="We deliver outstanding legal representation to safeguard your rights. With vast experience and a dedication to justice, we provide a strong defense tailored to your specific case. Rely on our expertise and commitment for all your criminal legal needs."
              link="/criminal-lawyers-in-bangalore"
            />
          </div>
          <img src={criminal} alt="criminal" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeHeaderSlider;
