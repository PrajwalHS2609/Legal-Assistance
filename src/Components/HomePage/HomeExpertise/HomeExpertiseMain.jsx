import React, { useEffect } from "react";
import "./HomeExpertise.css";
import HomeExpertiseCard from "./HomeExpertiseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faPeopleRoof,
  faScaleBalanced,
  faEnvelopeOpenText,
  faHammer,
  faBuildingColumns,
  faHandcuffs,
  faGavel,
  faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";
import AOS from "aos";

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
        icon={
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className="expIcon"
          ></FontAwesomeIcon>
        }
        txt="Family Law"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-1.jpg"
        data-aos="fade-left"
      />
      <HomeExpertiseCard
        icon={
          <FontAwesomeIcon
            icon={faHandcuffs}
            className="expIcon"
          ></FontAwesomeIcon>
        }
        txt="Criminal Law"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-2.jpg"
        data-aos="fade-left"
      />
      <HomeExpertiseCard
        icon={
          <FontAwesomeIcon icon={faGavel} className="expIcon"></FontAwesomeIcon>
        }
        txt="Civil Law"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-3.jpg"
        data-aos="fade-left"
      />
      </div>
      <div className="homeExpertiseMainContent" data-aos="fade-right">
        <HomeExpertiseCard
          icon={
            <FontAwesomeIcon
              icon={faHammer}
              className="expIcon"
            ></FontAwesomeIcon>
          }
          txt="Employment Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-4.jpg"
          data-aos="fade-right"
        />
        <HomeExpertiseService
          icon={
            <FontAwesomeIcon
              icon={faScaleBalanced}
              className="expServIcon"
            ></FontAwesomeIcon>
          }
          txt="More Services"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-5.jpg"
          link="/service"
        />

        <HomeExpertiseCard
          icon={
            <FontAwesomeIcon
              icon={faPeopleRoof}
              className="expIcon"
            ></FontAwesomeIcon>
          }
          txt="Real Estate Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-6.jpg"
        />
      </div>
      <div className="homeExpertiseMainContent" data-aos="fade-left">
        <HomeExpertiseCard
          icon={
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className="expIcon"
            ></FontAwesomeIcon>
          }
          txt="Consumer Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-7.jpg"
        />
        <HomeExpertiseCard
          icon={
            <FontAwesomeIcon
              icon={faSuitcaseRolling}
              className="expIcon"
            ></FontAwesomeIcon>
          }
          txt="Immigration Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-8.jpg"
        />
        <HomeExpertiseCard
          icon={
            <FontAwesomeIcon
              icon={faBuildingColumns}
              className="expIcon"
            ></FontAwesomeIcon>
          }
          txt="Commercial Law"
          img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-9.jpg"
        />
      </div>
    </div>
  );
};

export default HomeExpertiseMain;
