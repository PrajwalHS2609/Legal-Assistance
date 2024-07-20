import React from 'react'
import "./Footer.css"
import Footer1 from './Footer1/Footer1'
import Footer2 from './Footer2/Footer2'
const Footer = () => {
  return (
    <div className='footerContainer'>
      <Footer1/>
      {/* <div className='footerUnderline'></div> */}
      <Footer2/>
    </div>
  )
}

export default Footer
