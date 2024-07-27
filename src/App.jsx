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
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollTo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/civil-lawyers-in-bangalore" element={<CivilLawPage />} />
          <Route
            path="/divorce-and-family-court-lawyers-in-bangalore"
            element={<DivorcePage />}
          />
          <Route
            path="/alternative-dispute-resolution-in-bangalore"
            element={<AltDispute />}
          />{" "}
          <Route path="/criminal-lawyers-in-bangalore" element={<CriminalLaw />} />
          <Route
            path="/notary-services-in-bangalore"
            element={<NotaryService />}
          />
          <Route path="/contact-us" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
