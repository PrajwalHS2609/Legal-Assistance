import React from 'react'
import "../Footer.css"
import Footer1Add from './Footer1Add'
import Footer1Menu from './Footer1Menu'
import Footer1Service from './Footer1Service'
import Footer1Social from './Footer1Social'
const Footer1 = () => {
  return (
    <div className='footer1Container'>
      <Footer1Add/>
      <Footer1Menu/>
      <Footer1Service/>
      <Footer1Social/>
    </div>
  )
}

export default Footer1
