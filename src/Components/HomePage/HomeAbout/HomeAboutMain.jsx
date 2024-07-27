import React from "react";
import "./HomeAbout.css";
import NumberCounter from "number-counter";

const HomeAboutMain = () => {
  return (
    <div className="homeAboutMain">
      <div className="homeAboutMainContent" id="homeAboutMainContent1">
        <div className="homeAboutMainItem1">
          <h3>
            {" "}
            <NumberCounter end={8} delay={5} />
          </h3>
        </div>
        <div className="homeAboutMainItem2">
          <p>Team of Professionals</p>
        </div>
      </div>
      <div className="homeAboutMainContent" id="homeAboutMainContent2">
        <div className="homeAboutMainItem1">
          <h3>
            {" "}
            <NumberCounter end={100} delay={5} postFix="+" />
          </h3>
        </div>
        <div className="homeAboutMainItem2">
          <p>Satisfied Clients</p>
        </div>
      </div>
      <div className="homeAboutMainContent" id="homeAboutMainContent1">
        <div className="homeAboutMainItem1">
          <h3>
            {" "}
            <NumberCounter end={147} delay={5} />
          </h3>
        </div>
        <div className="homeAboutMainItem2">
          <p>Total Cases Won</p>
        </div>
      </div>
      <div className="homeAboutMainContent" id="homeAboutMainContent2">
        <div className="homeAboutMainItem1">
          <h3><NumberCounter end={4} delay={5}  />
          </h3>
        </div>
        <div className="homeAboutMainItem2">
          <p>Number of Branches</p>
        </div>
      </div>
      <div className="homeAboutMainContent" id="homeAboutMainContent1">
        <div className="homeAboutMainItem1">
          <h3><NumberCounter end={5} delay={5} postFix="+" />
          </h3>
        </div>
        <div className="homeAboutMainItem2">
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutMain;
