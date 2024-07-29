import React, { useEffect } from "react";
import "./HomeSupport.css";
// import Accordion from "react-bootstrap/Accordion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import property from "./../../../Images/SupportImg/Property Buying & Selling.png";
import divorce from "./../../../Images/SupportImg/Divorce & Companseation.png";
import business from "./../../../Images/SupportImg/Business Legal Advisor.png";
import dispute from "./../../../Images/SupportImg/Intellectual Property Rights.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";
const HomeSupportMain = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="homeSupportMainContainer">
      <Accordion className="accMainContent" allowZeroExpanded>
        <AccordionItem className="accItem" data-aos="fade-right">
          <AccordionItemHeading className="accHead">
            <AccordionItemButton className="accBut">
              <h3>01 Property Buying & Selling</h3>{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel className="accPanel">
            <img src={property} alt="property" />
            <p>
              <h4>Property Buying & Selling</h4>
              Property Buying & Selling services provide expert assistance in
              real estate transactions. Our knowledgeable team ensures smooth
              and secure dealings, guiding you through the legal complexities of
              purchasing or selling property to achieve the best results.
              <button><Link to={"/"}>Know More</Link></button>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accItem" data-aos="fade-right">
          <AccordionItemHeading className="accHead">
            <AccordionItemButton className="accBut">
              <h3>02 Divorce & Compensation</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accPanel">
            <img src={divorce} alt="divorce" />
            <p>
              <h4>Divorce & Compensation</h4>
              Divorce & Compensation services offer compassionate and
              professional support during difficult times. Our experienced team
              provides expert legal advice and representation to ensure fair
              settlements and protect your rights throughout the divorce
              process.
              <button><Link to={"/divorce-and-family-court-lawyers-in-bangalore"}>Know More</Link></button>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accItem" data-aos="fade-right">
          <AccordionItemHeading className="accHead">
            <AccordionItemButton className="accBut">
              <h3>03 Business Legal Advisor</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accPanel">
            <img src={business} alt="dispute" />
            <p>
              <h4>Business Legal Advisor</h4>A Business Legal Advisor provides
              expert guidance on legal matters affecting your company. Our
              seasoned professionals offer strategic advice to ensure
              compliance, mitigate risks, and support your business growth and
              success.
              <button><Link>Know More</Link></button>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accItem" data-aos="fade-right">
          <AccordionItemHeading className="accHead">
            <AccordionItemButton className="accBut">
              <h3>04 Dispute Resolution</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accPanel">
            <img src={dispute} alt="dispute" />
            <p>
              <h4>Intellectual Property Rights</h4>
              Intellectual Property Rights services protect your creative and
              innovative assets. Our expert team offers comprehensive support in
              securing and enforcing patents, trademarks, copyrights, and trade
              secrets, ensuring your intellectual property is safeguarded and
              leveraged effectively.
              <button><Link>Know More</Link></button>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HomeSupportMain;
