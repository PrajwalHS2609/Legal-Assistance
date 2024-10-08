import React from "react";
import "./MainService.css";
import ServiceCard from "./ServiceCard";
import servDivorce from "./../../../Images/Law Service Icons/Divorce_Law___Family_Court_Matters.png";
import servDispute from "./../../../Images/Law Service Icons/Alternative_Dispute_Resolution.png";
import servNotary from "./../../../Images/Law Service Icons/Notary_Services.png";
import servCriminal from "./../../../Images/Law Service Icons/Criminal_law.png";
import servCivil from "./../../../Images/Law Service Icons/Civil_law.png";
import servCommercial from "./../../../Images/Law Service Icons/Commercial_law.png";
import servConsumer from "./../../../Images/Law Service Icons/Consumer_law.png";
import servHighCourt from "./../../../Images/Law Service Icons/High_Court_Matters.png";
import servCorporate from "./../../../Images/Law Service Icons/Corporate_IPR_and_Labour_Cases.png";
import servDrafting from "./../../../Images/Law Service Icons/Drafting_Agreement_Deed___Documentation_Registration_of_Property.png";
import servPropertyVerif from "./../../../Images/Law Service Icons/Property_Document_Verification.png";
import servMarriage from "./../../../Images/Law Service Icons/Court_Marriage__Marriage_Registration.png";
import servLokayukta from "./../../../Images/Law Service Icons/lokayukta.png";
import servCyberCrime from "./../../../Images/Law Service Icons/cyberCrime.png";

const MainService = () => {
  return (
    <div className="mainServiceContainer">
      <div className="mainServiceContent1">
        <h1>
          Lawyers Services in Bangalore at <span>MM Associates</span>
        </h1>
        <p>
          We offer comprehensive legal services, including consultation,
          representation, and guidance, ensuring effective and efficient
          resolution of legal matters.
        </p>
      </div>
      <div className="mainServiceContent2">
        <ServiceCard
          icon={servDivorce}
          head="Divorce Law / Family Court Matters"
          para="Comprehensive legal support and expertise for divorce and family court matters."
          link="/divorce-and-family-court-lawyers-in-bangalore"
        />

        <ServiceCard
          icon={servDispute}
          head="Alternative Dispute Resolution"
          para="Tailored, efficient resolution methods designed to meet your specific needs without resorting to court litigation."
          link="/alternative-dispute-resolution-in-bangalore"
        />

        <ServiceCard
          icon={servCriminal}
          head="Criminal law"
          para="Effective defense and representation for criminal charges, ensuring the protection of clients' rights."
          link="/criminal-lawyers-in-bangalore"
        />

        <ServiceCard
          icon={servCivil}
          head="Civil law"
          para="Professional legal guidance and representation for all civil law matters."
          link="/civil-lawyers-in-bangalore"
        />

        <ServiceCard
          icon={servNotary}
          head="Notary Services"
          para="Secure your documents with our professional and dependable notary services."
          link="/notary-services-in-bangalore"
        />

        <ServiceCard
          icon={servCommercial}
          head="Commercial law"
          para="Specialized legal services for businesses, addressing all facets of commercial law."
          link="/commercial-court-lawyers-in-bangalore"
        />
        <ServiceCard
          icon={servHighCourt}
          head="High Court Matters"
          para="Expert legal representation and advocacy for intricate and high-stakes cases in the High Court."
          link="/high-court-lawyers-in-bangalore"
        />

        <ServiceCard
          icon={servCorporate}
          head="Labour Law"
          para="Specialized legal services for corporate intellectual property rights and labor law cases."
          link="/labour-court-lawyers-in-bangalore"
        />
        <ServiceCard
          icon={servDrafting}
          head="Drafting Agreement Deed & Documentation Registration of Property"
          para="Complete services for drafting agreements, documenting deeds, and registering properties, ensuring legal precision and compliance."
          link="/lawyers-for-property-registration-in-bangalore"
        />
        <ServiceCard
          icon={servPropertyVerif}
          head="Property Document Verification"
          para="Skilled legal defense for criminal charges, effectively safeguarding your rights and freedom."
          link="/property-document-verification-lawyers-in-bangalore"
        />

        <ServiceCard
          icon={servMarriage}
          head="Court Marriage/ Marriage Registration"
          para="Thorough legal representation and advocacy for intricate and high-stakes cases in the Supreme Court of Justice."
          link="/marriage-registration-lawyers-in-bangalore  "
        />
        <ServiceCard
          icon={servConsumer}
          head="Consumer Law"
          para="Specialized legal services for businesses, addressing all facets of Consumer law."
          link="/consumer-court-lawyers-in-bangalore"
        />
        <ServiceCard
          icon={servLokayukta}
          head="Lokayuktha Matters"
          para="Expert legal services, specializing in investigating corruption and misconduct among public officials, promoting transparency and accountability."
          link="/lokayukta-court-lawyers-in-bangalore"
        />
        <ServiceCard
          icon={servCyberCrime}
          head="Cyber Crime"
          para="Expert legal services, specializing in investigating cybercrime and online misconduct, promoting digital security and accountability."
          link="/cyber-crime-lawyers-in-bangalore"
        />
      </div>
    </div>
  );
};

export default MainService;
