import React from 'react'
import CivilLawLitigation from './CivilLawLitigation'
import CivilLawNonLitigation from './CivilLawNonLitigation'
import "./CivilLawPage.css"
const CivilLawMain = () => {
  return (
    <div className='civilLawMainContainer'>
      <CivilLawLitigation/>
      <CivilLawNonLitigation/>
    </div>
  )
}

export default CivilLawMain

