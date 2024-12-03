import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import "./Global.css";
import Services from "./Components/Services/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
import Footer from "./Components/Footer/Footer";
import CivilLawPage from "./Components/Services/CivilLawPage/CivilLawPage";
import DivorcePage from "./Components/Services/DivorcePage/DivorcePage";
import AltDispute from "./Components/Services/AltDispute/AltDispute";
import Contacts from "./Components/Contacts/Contacts";
import CriminalLaw from "./Components/Services/CriminalLaw/CriminalLaw";
import NotaryService from "./Components/Services/NotaryService/NotaryService";
import CommercialLaw from "./Components/Services/CommercialLaw/CommercialLaw";
import HighCourt from "./Components/Services/HighCourt/HighCourt";
import LabourLaw from "./Components/Services/LabourLaw/LabourLaw";
import DraftingAgreement from "./Components/Services/DraftingAgreement/DraftingAgreement";
import PropertyDoc from "./Components/Services/PropertyDoc/PropertyDoc";
import MarriageLaw from "./Components/Services/MarriageLaw/MarriageLaw";
import ConsumerLaw from "./Components/Services/ConsumerLaw/ConsumerLaw";
import AboutUs from "./Components/AboutUs/AboutUs";
import OnlineAppoint from "./Components/OnlineAppoint/OnlineAppoint";
// import AnnouncementPage from "./Components/AnnocementPage/AnnouncementPage";
// import CourtCase from "./Components/AnnocementPage/CourtCase/CourtCase";
// import Judgments from "./Components/AnnocementPage/Judgments/Judgments";
// import OnlineConsultation from "./Components/AnnocementPage/OnlineConsultation";
// import NestedScrollRestore from "./Components/ScrollTo/NestedScrollRestore";
import LokayuktaPage from "./Components/Services/LokayuktaPage/LokayuktaPage";
import CyberCrime from "./Components/Services/CyberCrime/CyberCrime";
import DivorceInBlore from "./Components/ContentPages/DivorceInBlore/DivorceInBlore.jsx";
import PropertyAttorney from "./Components/ContentPages/PropertyAttorney/PropertyAttorney.jsx";
import LawFirms from "./Components/ContentPages/LawFirms/LawFirms.jsx";
import FamilyCourt from "./Components/ContentPages/FamilyCourt/FamilyCourt.jsx";
import CriminalLawyers from "./Components/ContentPages/CriminalLawyers/CriminalLawyers.jsx";
import LabourLawyer from "./Components/ContentPages/LabourLawyer/LabourLawyer.jsx";
import RealEstate from "./Components/ContentPages/RealEstate/RealEstate.jsx";
import Snowfall from "./Components/Christmas/Snowfall/Snowfall";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollTo />
        <Snowfall />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/civil-lawyers-in-bangalore"
            element={<CivilLawPage />}
          />
          <Route
            path="/divorce-and-family-court-lawyers-in-bangalore"
            element={<DivorcePage />}
          />
          <Route
            path="/alternative-dispute-resolution-in-bangalore"
            element={<AltDispute />}
          />{" "}
          <Route
            path="/criminal-lawyers-in-bangalore"
            element={<CriminalLaw />}
          />
          <Route
            path="/notary-services-in-bangalore"
            element={<NotaryService />}
          />
          <Route
            path="/commercial-court-lawyers-in-bangalore"
            element={<CommercialLaw />}
          />
          <Route
            path="/high-court-lawyers-in-bangalore"
            element={<HighCourt />}
          />
          <Route
            path="/labour-court-lawyers-in-bangalore"
            element={<LabourLaw />}
          />
          <Route
            path="/lawyers-for-property-registration-in-bangalore"
            element={<DraftingAgreement />}
          />
          <Route
            path="/property-document-verification-lawyers-in-bangalore"
            element={<PropertyDoc />}
          />
          <Route
            path="/marriage-registration-lawyers-in-bangalore"
            element={<MarriageLaw />}
          />
          <Route
            path="/consumer-court-lawyers-in-bangalore"
            element={<ConsumerLaw />}
          />
          <Route
            path="/lokayukta-court-lawyers-in-bangalore"
            element={<LokayuktaPage />}
          />
          <Route
            path="/cyber-crime-lawyers-in-bangalore"
            element={<CyberCrime />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contacts />} />
          <Route path="/online-appointment" element={<OnlineAppoint />} />
          {/* <Route path="/announcement" element={<AnnouncementPage />}>
            <Route
              path="*"
              element={
                <NestedScrollRestore>
                  <Routes>
                    <Route path="/court-cases" element={<CourtCase />} />
                    <Route path="/judgments" element={<Judgments />} />
                    <Route
                      path="/online-consultations"
                      element={<OnlineConsultation />}
                    />
                  </Routes>
                </NestedScrollRestore>
              }
            />
          </Route> */}
          <Route
            path="/divorce-lawyers-in-bangalore"
            element={<DivorceInBlore />}
          />
          <Route
            path="/property-attorney-near-me"
            element={<PropertyAttorney />}
          />{" "}
          <Route path="/law-firms-near-me" element={<LawFirms />} />
          <Route
            path="/family-course-lawyers-near-me"
            element={<FamilyCourt />}
          />
          <Route
            path="/criminal-lawyers-near-me"
            element={<CriminalLawyers />}
          />
          <Route path="/labour-lawyers-near-me" element={<LabourLawyer />} />
          <Route path="/real-estate-lawyers-near-me" element={<RealEstate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
