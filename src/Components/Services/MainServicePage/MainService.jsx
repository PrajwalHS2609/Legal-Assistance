import React from "react";
import "./MainService.css";
import ServiceCard from "./ServiceCard";

const MainService = () => {
  return (
    <div className="mainServiceContainer">
      <h1>Our Services</h1>
      <div className="mainServiceContent">
        <ServiceCard
          icon={
            <img
              src="https://kamalandcoadvocates.com/assets/images/icons/icon-4.png"
              alt=""
            />
          }
          head="Divorce Law / Family Court Matters"
          para=" Family matters, our firm has been dealing with a long time now and we
          have developed a knack for getting judgments and orders in our favor.
          Family matters involve a lot of emotions, feelings, empathy; and
          understanding these and valuing them to the required extent helps to
          deal in family matters more easily. Matters like marriages, child
          adoption, child custody, marital breakdown, maintenance, and more
          delicate cases like domestic violence, divorce are all cases that we
          have advocated and disposed of with a snap of the finger."
        />
        <ServiceCard
          icon={
            <img
              src="https://kamalandcoadvocates.com/assets/images/icons/service.png"
              alt=""
            />
          }
          head="Notary Services"
          para="Efficient and trusted notary services ensuring fast and reliable authentication for your legal documents and transactions."
        />
        <ServiceCard
          icon={
            <img
              src="https://kamalandcoadvocates.com/assets/images/icons/intermediary.png"
              alt=""
            />
          }
          head="Alternative Dispute Resolution"
          para="Skilled in arbitration and mediation, we provide effective dispute resolution, focusing on amicable solutions and cost-efficiency."
        />
        <ServiceCard
          icon={
            <img
              src="https://kamalandcoadvocates.com/assets/images/icons/property-law.png"
              alt=""
            />
          }
          head="Intellectual Property Rights Services"
          para="Expert management of copyright, trademark, and patent registrations, with dedicated maintenance and follow-up to protect your creative assets."
        />
        <ServiceCard
          icon={
            <img
              src="https://kamalandcoadvocates.com/assets/images/icons/icon-2.png"
              alt=""
            />
          }
          head="Criminal law"
          para="Criminal Law covers issues such as physical assault, theft, rape, homicide, extortion, dowry harassment, caste atrocities and financial fraud..."
        />
        <ServiceCard
          icon={
            <img
              src="https://kamalandcoadvocates.com/assets/images/icons/icon-7.png"
              alt=""
            />
          }
          head="Property document verification"
          para="Property lawyers in Bangalore help clients with legal issues related to residential and property development, acquisitions, leases, ownership..."
        />
        <ServiceCard
          icon={
            <img
              src="https://kamalandcoadvocates.com/assets/images/icons/icon-1.png"
              alt=""
            />
          }
          head="Civil law"
          para="Advocate Kamal, A civil lawyer holds many years of experience and skills to defend individuals in civil legal matters..."
        />
        <ServiceCard
          icon={
            <img
              src="https://kamalandcoadvocates.com/assets/images/icons/icon-8.png"
              alt=""
            />
          }
          head="Commercial law"
          para="Commercial lawyers are Counselor who advises companies and governments on business-related issues. commercial law firms are divided up into..."
        />
        <ServiceCard
          icon={
            <img
              src="https://kamalandcoadvocates.com/assets/images/icons/icon-3.png"
              alt=""
            />
          }
          head="High Court Matters"
          para="We provide specialist lawyers who specifically possess the expertise to deal with high court cases. The lawyers are seasoned to deal with all high court matters that extend to cover writ petitions, criminal petitions, appeals, MFA, RFA, RSA. Over time, we have gained the tactical knowledge required to handle all types of appeals – criminal, miscellaneous first appeal, regular first appeal, regular second appeal with the utmost skill."
        />
        <ServiceCard
          icon={
            <img
              src="https://kamalandcoadvocates.com/assets/images/icons/icon-5.png"
              alt=""
            />
          }
          head="Supreme Court Matters"
          para="Dealing with supreme court cases requires utmost precision, skill, knowledge, presence of mind; which is why the lawyers handling supreme court cases have been handpicked with utmost care. These lawyers know their work like the back of their hands. Any engagement with the supreme court shall require experience, work dynamics that are not ordinary; Our firm is proud to provide you with specialist lawyers in this regard."
        />
        <ServiceCard
          icon={
            <img
              src="https://kamalandcoadvocates.com/assets/images/icons/icon-6.png"
              alt=""
            />
          }
          head="Court Marriage/ Marriage Registration"
          para="We also help in marriage registration and have well-specialized lawyers who deal with it. In India, marriage registration can be done either under..."
        />
        <ServiceCard
          icon={
            <img
              src="https://kamalandcoadvocates.com/assets/images/icons/icon-9.png"
              alt=""
            />
          }
          head="Animal law"
          para="We handle all cases related to animal cruelty and animal abuse. Do call the number given below in case you need help with anything related to the.."
        />
      </div>
    </div>
  );
};

export default MainService;
