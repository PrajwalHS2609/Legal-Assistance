import React from 'react'
import { Helmet } from 'react-helmet'
import PropertyDocImg from './PropertyDocImg'
import PropertyDocHead from './PropertyDocHead'
import PropertyDocService from './PropertyDocService'
import PropertyDocWhy from './PropertyDocWhy'
import InnerBreadCrumb from '../../BreadCrumbs/InnerBreadCrumb'

const PropertyDoc = () => {
  return (
    <div className="">
    <Helmet>
      <title>
     Property Document Verification Lawyers in Bangalore – Speak to Experts       </title>
      <meta
        name="description"
        content="Property Document Verification Lawyers in Bangalore. This detailed guide will help you understand the importance of property document verification and how our expert team can assist you."
      />
      <link
        rel="canonical"
        href="https://lawyersinbangalore.com/property-document-verification-lawyers-in-bangalore"
      />
    </Helmet>
    <PropertyDocImg/>
    <InnerBreadCrumb
      link="/services"
      service="Services"
      currService="Property Verification"
    />
   <PropertyDocHead/>
   <PropertyDocService/>
   <PropertyDocWhy/>
  </div>
  )
}

export default PropertyDoc
