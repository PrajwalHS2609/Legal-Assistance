import React from "react";
import { NavLink } from "react-router-dom";
import "./Announcement.css"
const AnnouncementNestedNavbar = () => {
  return (
    <div className="announcementNestedNavbar">
      <li id="nestedNav">
        <NavLink to="/announcement/court-cases">Court Cases</NavLink>
      </li>
      <li id="nestedNav">
        <NavLink to="/announcement/judgments">Judgments</NavLink>
      </li>
       <li id="nestedNav">
        <NavLink to="/announcement/online-consultations">
          Online Consultation
        </NavLink>
      </li>
    </div>
  );
};

export default AnnouncementNestedNavbar;
