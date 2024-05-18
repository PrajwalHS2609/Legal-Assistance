import React from "react";
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
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import HomeExpertiseService from "./HomeExpertiseServiceCard";
const HomeExpertiseMain = () => {
  return (
    <div className="homeExpertiseMainContainer">
      <HomeExpertiseCard
        icon={
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className="expIcon"
          ></FontAwesomeIcon>
        }
        txt="Family Law"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-1.jpg"
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
      />
      <HomeExpertiseCard
        icon={
          <FontAwesomeIcon icon={faGavel} className="expIcon"></FontAwesomeIcon>
        }
        txt="Civil Law"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-3.jpg"
      />
      <HomeExpertiseCard
        icon={
          <FontAwesomeIcon
            icon={faHammer}
            className="expIcon"
          ></FontAwesomeIcon>
        }
        txt="Employment Law"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-4.jpg"
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
      <HomeExpertiseCard
        icon={
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            className="expIcon"
          ></FontAwesomeIcon>
        }
        txt="Compensation"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-7.jpg"
      />
      <HomeExpertiseCard
        icon={
          <FontAwesomeIcon
            icon={faBullseye}
            className="expIcon"
          ></FontAwesomeIcon>
        }
        txt="Case Successions"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-8.jpg"
      />
      <HomeExpertiseCard
        icon={
          <FontAwesomeIcon
            icon={faBuildingColumns}
            className="expIcon"
          ></FontAwesomeIcon>
        }
        txt="Bank Law"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-9.jpg"
      />
    </div>
  );
};

export default HomeExpertiseMain;
