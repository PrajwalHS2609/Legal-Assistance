import React, { useEffect } from "react";
import "./HomeFaq.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "aos/dist/aos.css";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const HomeFaqAcco = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="homeFaqAcco">
      <Accordion className="faqMainContent" allowZeroExpanded>
        <AccordionItem className="faqItem" data-aos="fade-left">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>What services does M & M Associates provide ? </h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel className="faqPanel">
            <p>
              We offer a wide range of legal services, including commercial
              litigation, franchising and licensing, property buying and
              selling, divorce and compensation, business legal advisory, and
              intellectual property rights.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-left">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>How can I schedule a consultation ?</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              You can schedule a consultation by contacting us via phone, email,
              or through our website’s booking form. Our team will get in touch
              with you to arrange a convenient time.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-left">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>What should I bring to my first meeting ?</h3>{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              For your initial consultation, please bring any relevant documents
              related to your case or legal matter, including contracts,
              agreements, or previous correspondence.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-left">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3> How do you ensure client confidentiality ?</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              We adhere to strict confidentiality protocols and are committed to
              protecting your personal and sensitive information in accordance
              with legal and ethical standards.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-left">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3> What is the cost of your legal services ?</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Fees vary depending on the nature and complexity of the legal
              matter. We offer transparent pricing and will provide you with a
              detailed fee structure during your initial consultation.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-left">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>How long will it take to resolve my legal issue ?</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              The timeline for resolving legal issues depends on various
              factors, including the complexity of the case and the
              responsiveness of all parties involved. We will provide you with
              an estimated timeline based on your specific situation.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-left">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>Can you assist with legal matters outside of Karnataka ?</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              Our primary focus is on legal matters within Karnataka. However,
              we can refer you to trusted partners or collaborate with attorneys
              in other regions if needed.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-left">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3> What sets M & M Associates apart from other law firms ?</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              With over a decade of experience, our team is dedicated to
              providing tailored legal solutions with a focus on client
              satisfaction and excellence. Our personalized approach and deep
              legal expertise set us apart in the industry.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-left">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3> How can I contact you for further inquiries ?</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              You can reach us via phone, email, or by filling out the contact
              form on our website. We are here to assist you with any questions
              or concerns you may have.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="faqItem" data-aos="fade-left">
          <AccordionItemHeading className="faqHead">
            <AccordionItemButton className="faqBut">
              <h3>Do you offer free initial consultations ?</h3>{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="dropIcon"
              ></FontAwesomeIcon>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="faqPanel">
            <p>
              We offer an initial consultation to discuss your legal needs and
              provide an overview of how we can assist you. During this
              consultation, we can also discuss any applicable
              fees and services.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HomeFaqAcco;
