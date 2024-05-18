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
        head="1.Schedule A Time"
        para="Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
        Neque laoreet."
      />
      <HomeSolutionCard
        icon={
          <FontAwesomeIcon
            icon={faScaleBalanced}
            className="solCal"
          ></FontAwesomeIcon>
        }
        head="2.Meet A Consultant"
        para="Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit."
      />
      <HomeSolutionCard
        icon={
          <FontAwesomeIcon
            icon={faHandshake}
            className="solCal"
          ></FontAwesomeIcon>
        }
        head="3.Plan With Success"
        para="Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Eget duis."
      />
    </div>
  );
};

export default HomeSolutionMain;
