import React from "react";
import ServiceLawImg from "../Services/CivilLawPage/ServiceLawImg";
import announcementImg from "./../../Images/announcementImg.png";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import AnnouncementNestedRoute from "./AnnouncementNestedRoute";
import "./Announcement.css"
import AnnouncementHead from "./AnnouncementHead";
const AnnouncementPage = () => {
  return (
    <div className="announcementPage">
      <ServiceLawImg
        img={announcementImg}
        alt={announcementImg}
        head="Law Announcements"
      />
      <BreadCrumbs service="Announcement" />
      <AnnouncementHead/>
      <AnnouncementNestedRoute />
    </div>
  );
};

export default AnnouncementPage;
