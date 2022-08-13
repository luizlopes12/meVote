import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Tech from "../pages/Techs";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const RoutesManager = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/techs" element={<Tech />} />
      </Routes>
    <Footer/>
    </Router>
  );
};

export default RoutesManager;
