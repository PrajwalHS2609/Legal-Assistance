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
import ImmigrationLaw from "./Components/Services/ImmigrationLaw/ImmigrationLaw";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollTo />
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
            path="/immigration-lawyers-in-bangalore"
            element={<ImmigrationLaw />}
          />
          <Route path="/contact-us" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
