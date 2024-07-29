import React from "react";
import tick from "./../../../Images/check-mark.png";
import "./HomeWhy.css";
const HomeWhy = () => {
  return (
    <div className="homeWhy">
      <h2>Why Choose MM Associates?</h2>{" "}
      <p>
        We offer comprehensive legal services with a client-first approach,
        ensuring personalized and effective solutions for all your legal needs.
        Our team of expert attorneys, led by Adv. Manjunath K.V., brings
        extensive experience and innovative strategies to deliver exceptional
        results. Committed to the highest standards of professionalism and
        integrity, we guide you through the legal process smoothly and
        efficiently. Trust MM Associates for reliable, expert legal
        representation. Here are the unique attributes for MM Associates:
      </p>
      <li>
        <div className="homeWhyIcon">
          {" "}
          <img src={tick} alt="" />
        </div>
        <div className="homeWhyList">
          <span> Comprehensive Legal Services:</span>{" "}
          <p>
            MM Associates provides a full spectrum of legal services, ensuring
            that clients receive all-encompassing support under one roof.
          </p>
        </div>
      </li>
      <li>
        <div className="homeWhyIcon">
          {" "}
          <img src={tick} alt="" />
        </div>
        <div className="homeWhyList">
          <span>People-Oriented Approach:</span>{" "}
          <p>
            The firm places clients at the center of their practice, delivering
            personalized legal solutions tailored to individual needs.
          </p>
        </div>
      </li>
      <li>
        <div className="homeWhyIcon">
          {" "}
          <img src={tick} alt="" />
        </div>
        <div className="homeWhyList">
          <span>Expertise Across Multiple Fields:</span>{" "}
          <p>
            With specialized lawyers in criminal, civil, family, and more, MM
            Associates ensures expert handling of diverse legal matters.
          </p>
        </div>
      </li>
      <li>
        <div className="homeWhyIcon">
          {" "}
          <img src={tick} alt="" />
        </div>
        <div className="homeWhyList">
          <span> High Professional Standards:</span>{" "}
          <p>
            The firm is committed to the highest levels of professionalism and
            integrity, ensuring trust and reliability in their services.
          </p>
        </div>
      </li>
      <li>
        <div className="homeWhyIcon">
          {" "}
          <img src={tick} alt="" />
        </div>
        <div className="homeWhyList">
          <span>Client-First Principle :</span>{" "}
          <p>
            MM Associates prioritizes clients' interests, providing reliable and
            highly effective legal services aimed at achieving the best
            outcomes.
          </p>
        </div>
      </li>
      <li>
        <div className="homeWhyIcon">
          {" "}
          <img src={tick} alt="" />
        </div>
        <div className="homeWhyList">
          <span> Innovative Legal Strategies:</span>{" "}
          <p>
            Led by founder Adv. Manjunath K.V., the firm adopts creative and
            practical legal approaches to address complex legal issues.
          </p>
        </div>
      </li>
      <li>
        <div className="homeWhyIcon">
          {" "}
          <img src={tick} alt="" />
        </div>
        <div className="homeWhyList">
          <span> Wide Practical Knowledge:</span>{" "}
          <p>
            The team at MM Associates brings rich experience and extensive
            knowledge to deliver comprehensive legal solutions.
          </p>
        </div>
      </li>
      <li>
        <div className="homeWhyIcon">
          {" "}
          <img src={tick} alt="" />
        </div>
        <div className="homeWhyList">
          <span> Smooth Legal Journey:</span>{" "}
          <p>
            The firm ensures a seamless legal process, guiding clients through
            the complexities of the legal system with ease.
          </p>
        </div>
      </li>
      <li>
        <div className="homeWhyIcon">
          {" "}
          <img src={tick} alt="" />
        </div>
        <div className="homeWhyList">
          <span> Personalized Legal Representation:</span>{" "}
          <p>
            Listening to clients’ needs and providing tailored legal strategies,
            MM Associates ensures effective and individualized legal
            representation.
          </p>
        </div>
      </li>
      <li>
        <div className="homeWhyIcon">
          {" "}
          <img src={tick} alt="" />
        </div>
        <div className="homeWhyList">
          <span> Expanding Services :</span>{" "}
          <p>
            Building on their success in Bangalore, MM Associates is soon
            extending their services to other metropolitan cities, bringing
            their expertise to a broader audience.
          </p>
        </div>
      </li>
    </div>
  );
};

export default HomeWhy;
