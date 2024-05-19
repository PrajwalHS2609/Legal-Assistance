import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import "./Global.css";
import Services from "./Components/Services/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollTo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
