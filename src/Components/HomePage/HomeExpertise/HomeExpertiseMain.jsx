import React, { useEffect } from "react";
import "./HomeExpertise.css";
import HomeExpertiseCard from "./HomeExpertiseCard";
import "aos/dist/aos.css";
import AOS from "aos";
import familyWhite from "./../../../Images/ExpertiseImg/FamilyWhite.png";
import criminalWhite from "./../../../Images/ExpertiseImg/CriminalWhite.png";
import civilWhite from "./../../../Images/ExpertiseImg/CivilWhite.png";
import familyBlack from "./../../../Images/ExpertiseImg/FamilyBlack.png";
import criminalBlack from "./../../../Images/ExpertiseImg/CriminalBlack.png";
import civilBlack from "./../../../Images/ExpertiseImg/CivilBlack.png";
import employmentWhite from "./../../../Images/ExpertiseImg/EmployementWhite.png";
import realEstateWhite from "./../../../Images/ExpertiseImg/Real_EstateWhite.png";
import employmentBlack from "./../../../Images/ExpertiseImg/EmployementBlack.png";
import realEstateBlack from "./../../../Images/ExpertiseImg/Real_EstateBlack.png";
import commercialWhite from "./../../../Images/ExpertiseImg/CommercialWhite.png";
import consumerWhite from "./../../../Images/ExpertiseImg/ConsumerWhite.png";
import immigrantWhite from "./../../../Images/ExpertiseImg/ImmigrationWhite.png";
import commercialBlack from "./../../../Images/ExpertiseImg/CommercialBlack.png";
import consumerBlack from "./../../../Images/ExpertiseImg/ConsumerBlack.png";
import immigrantBlack from "./../../../Images/ExpertiseImg/ImmigrationBlack.png";
import service from "./../../../Images/ExpertiseImg/OtherService.png"
import HomeExpertiseService from "./HomeExpertiseServiceCard";
const HomeExpertiseMain = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="homeExpertiseMainContainer">
      <div className="homeExpertiseMainContent" data-aos="fade-left">
        <HomeExpertiseCard
          imgIconBlack={familyBlack}
          imgIconWhite={familyWhite}
          txt="Family Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-1.jpg"
       link="/divorce-and-family-court-lawyers-in-bangalore"
       />
        <HomeExpertiseCard
          imgIconBlack={criminalBlack}
          imgIconWhite={criminalWhite}
          txt="Criminal Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-2.jpg"
       link="/criminal-lawyers-in-bangalore"
       />
        <HomeExpertiseCard
          imgIconBlack={civilBlack}
          imgIconWhite={civilWhite}
          txt="Civil Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-3.jpg"
       link="/civil-lawyers-in-bangalore"
       />
      </div>
      <div className="homeExpertiseMainContent" data-aos="fade-right">
        <HomeExpertiseCard
          imgIconBlack={employmentBlack}
          imgIconWhite={employmentWhite}
          txt="Employment Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-4.jpg"
        link="/labour-court-lawyers-in-bangalore"
        />
        <HomeExpertiseService
          iconService={service}
          txt="More Services"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-5.jpg"
          link="/service"
       />

        <HomeExpertiseCard
          imgIconBlack={realEstateBlack}
          imgIconWhite={realEstateWhite}
          txt="Real Estate Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-6.jpg"
       link="/lawyers-for-property-registration-in-bangalore"
       />
      </div>
      <div className="homeExpertiseMainContent" data-aos="fade-left">
        <HomeExpertiseCard
          imgIconBlack={consumerBlack}
          imgIconWhite={consumerWhite}
          txt="Consumer Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-7.jpg"
       link="/consumer-court-lawyers-in-bangalore"
       />
        <HomeExpertiseCard
          imgIconBlack={immigrantBlack}
          imgIconWhite={immigrantWhite}
          txt="Immigration Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-8.jpg"
        link="/immigration-lawyers-in-bangalore"
        />
        <HomeExpertiseCard
          imgIconBlack={commercialBlack}
          imgIconWhite={commercialWhite}
          txt="Commercial Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-9.jpg"
        link="/commercial-court-lawyers-in-bangalore"
        />
      </div>
    </div>
  );
};

export default HomeExpertiseMain;
