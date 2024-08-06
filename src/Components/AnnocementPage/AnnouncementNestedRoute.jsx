import React from 'react'
import AnnouncementNestedNavbar from './AnnouncementNestedNavbar'
import AnnouncementDisplay from './AnnouncementDisplay'

const AnnouncementNestedRoute = () => {
  return (
    <div className='announcementNestedRoute'>
      <AnnouncementNestedNavbar/>
      <AnnouncementDisplay/>
    </div>
  )
}

export default AnnouncementNestedRoute
