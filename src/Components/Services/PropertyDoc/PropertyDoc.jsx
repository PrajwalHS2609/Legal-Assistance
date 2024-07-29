import React from 'react'
import { Helmet } from 'react-helmet'
import PropertyDocHead from './PropertyDocHead'
import PropertyDocService from './PropertyDocService'
import PropertyDocWhy from './PropertyDocWhy'
import InnerBreadCrumb from '../../BreadCrumbs/InnerBreadCrumb'
import ServiceLawImg from '../CivilLawPage/ServiceLawImg'
import propertyDocImg from "./../../../Images/InnerServicesImgs/Property Document Verification.png"
import HomeTestimonial from '../../HomePage/HomeTestimonial/HomeTestimonial'
import HomeWhy from '../../HomePage/HomeWhy/HomeWhy'

const PropertyDoc = () => {
  return (
    <div className="">
    <Helmet>
      <title>
     Property Document Verification Lawyers in Bangalore – Speak to Experts</title>
      <meta
        name="description"
        content="Property Document Verification Lawyers in Bangalore. This detailed guide will help you understand the importance of property document verification and how our expert team can assist you."
      />
      <link
        rel="canonical"
        href="https://lawyersinbangalore.com/property-document-verification-lawyers-in-bangalore"
      />
    </Helmet>
    <ServiceLawImg img={propertyDocImg} alt="propertyDocImg" head="Property Document Verification"/>
    <InnerBreadCrumb
      link="/services"
      service="Services"
      currService="Property Verification"
    />
   <PropertyDocHead/>
   <PropertyDocService/>
   <PropertyDocWhy/>
   <HomeWhy />
   <HomeTestimonial />
  </div>
  )
}

export default PropertyDoc
