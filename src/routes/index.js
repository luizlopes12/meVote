import React,{useContext} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SplashPage from '../pages/SplashPage';
import CPFPage from '../pages/CPFPage';
import CandidatesPage from '../pages/CandidatesPage';
import { AuthContext } from '../providers/auth'
import LoadingAnimation from "../components/LoadingAnimation";


const RoutesManager = () => {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><SplashPage /> <CPFPage/></>} />
        <Route path="/candidates" element={user.cpf.length > 1 ? <><LoadingAnimation/> <CandidatesPage/></>:<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default RoutesManager;
