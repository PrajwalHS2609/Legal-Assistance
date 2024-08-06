import React from "react";
import { Outlet } from "react-router-dom";
import "./Announcement.css"

const AnnouncementDisplay = () => {
  return (
    <div className="AnnouncementDisplay">
      <Outlet />
    </div>
  );
};

export default AnnouncementDisplay;
