import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashPage from '../pages/SplashPage';
import CPFPage from '../pages/CPFPage';
import CandidatesPage from '../pages/CandidatesPage';


const RoutesManager = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><SplashPage /> <CPFPage/></>} />
        <Route path="/candidates" element={<CandidatesPage/>} />
      </Routes>
    </Router>
  );
};

export default RoutesManager;
