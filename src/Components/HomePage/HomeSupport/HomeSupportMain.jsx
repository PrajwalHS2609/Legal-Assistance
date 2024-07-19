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
import "aos/dist/aos.css";
import AOS from "aos";
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
              <h3>01 Commercial Litigation</h3>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel className="accPanel">
            <img 
              src="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-2.jpg"
              alt=""
            />
            <p>
              <h4>Strategic Information</h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              eaque nemo sint, velit quasi maiores, excepturi, blanditiis
              officia eveniet eum ex. Corrupti rem pariatur ducimus id facere
              dolorum aspernatur obcaecati.
              <button>Know More</button>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accItem" data-aos="fade-right">
          <AccordionItemHeading className="accHead">
            <AccordionItemButton className="accBut">
              <h3>02 Franchising & Licensing</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accPanel">
            <img
              src="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-2.jpg"
              alt=""
            />
            <p>
              <h4>Business Relationship</h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              temporibus facere voluptate ab quis. Maxime aut animi quae
              accusantium iusto, quo maiores! Necessitatibus a assumenda magnam
              veniam asperiores nam vitae!
              <button>Know More</button>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accItem" data-aos="fade-right">
          <AccordionItemHeading className="accHead">
            <AccordionItemButton className="accBut">
              <h3>03 Bankruptcy & Insolvency</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accPanel">
            <img
              src="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-2.jpg"
              alt=""
            />
            <p>
              <h4>Professional Agencies</h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, velit? Hic vitae et facilis dolore maxime doloremque
              excepturi, eius ducimus architecto in, ullam tempore obcaecati,
              sint autem consequuntur sapiente maiores?
              <button>Know More</button>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accItem" data-aos="fade-right">
          <AccordionItemHeading className="accHead">
            <AccordionItemButton className="accBut">
              <h3>04 Dispute Resolution</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accPanel">
            <img
              src="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-2.jpg"
              alt=""
            />
            <p>
              <h4>Settling Outside</h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus exercitationem et ut molestiae ipsa adipisci sit, fuga
              veritatis totam laboriosam odit aliquam, assumenda nihil
              perferendis, quis repellat provident voluptate magnam.
              <button>Know More</button>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HomeSupportMain;
