import React from "react";
import "./HomeSolution.css";
import HomeSolutionCard from "./HomeSolutionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faScaleBalanced,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
const HomeSolutionMain = () => {
  return (
    <div className="homeSolutionMainContainer">
      <HomeSolutionCard
        icon={
          <FontAwesomeIcon
            icon={faCalendar}
            className="solCal"
          ></FontAwesomeIcon>
        }
        head="1. Schedule A Time"
        para="Please schedule a time that suits you for a consultation or meeting."
      />
      <HomeSolutionCard
        icon={
          <FontAwesomeIcon
            icon={faScaleBalanced}
            className="solCal"
          ></FontAwesomeIcon>
        }
        head="2. Meet A Consultant"
        para="Connect with a consultant to receive expert advice and personalized support."
      />
      <HomeSolutionCard
        icon={
          <FontAwesomeIcon
            icon={faHandshake}
            className="solCal"
          ></FontAwesomeIcon>
        }
        head="3. Plan With Success"
        para="Strategically plan with success in mind to achieve your goals and drive positive outcomes."
      />
    </div>
  );
};

export default HomeSolutionMain;
