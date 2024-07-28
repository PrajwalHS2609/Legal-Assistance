import React from "react";
import InnerBreadCrumb from "../../BreadCrumbs/InnerBreadCrumb";
import NotaryServiceHead from "./NotaryServiceHead";
import NotaryServiceMain from "./NotaryServiceMain";
import NotaryServiceBenefits from "./NotaryServiceBenefits";
import NotaryServiceImp from "./NotaryServiceImp";
import NotaryServiceEnsuring from "./NotaryServiceEnsuring";
import NotaryServiceWhy from "./NotaryServiceWhy";
import NotaryServiceChoose from "./NotaryServiceChoose";
import NotaryServiceRole from "./NotaryServiceRole";
import NotaryComprehensiveService from "./NotaryComprehensiveService";
import NotaryServiceProcess from "./NotaryServiceProcess";
import NotaryServiceUnderstanding from "./NotaryServiceUnderstanding";
import { Helmet } from "react-helmet";
import notaryServiceImg from "./../../../Images/InnerServicesImgs/Notary Services.png"
import ServiceLawImg from './../CivilLawPage/ServiceLawImg';

const NotaryService = () => {
  return (
    <div className="civilLawPage">
      <Helmet>
        <title>
          Notary Services in Bangalore | Public Notary Services Near Me
        </title>
        <meta
          name="description"
          content="Notary Services in Bangalore. Our experienced notaries are committed to offering efficient and reliable services to meet all your notarization needs."
        />
        <link
          rel="canonical"
          href="https://lawyersinbangalore.com/notary-services-in-bangalore"
        />
      </Helmet>
      <ServiceLawImg img={notaryServiceImg} alt={notaryServiceImg} head="Notary Services"/>
      <InnerBreadCrumb
        link="/services"
        service="Services"
        currService="Notary Service"
      />
      <NotaryServiceMain />
      <NotaryServiceHead />
      <NotaryServiceImp />
      <NotaryComprehensiveService />
      <NotaryServiceBenefits />
      <NotaryServiceProcess />
      <NotaryServiceUnderstanding />
      <NotaryServiceWhy />
      <NotaryServiceChoose />
      <NotaryServiceRole />
      <NotaryServiceEnsuring />
    </div>
  );
};

export default NotaryService;
