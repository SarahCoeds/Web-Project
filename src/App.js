import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Mission from "./Pages/OurMission";
import Test from "./Pages/Test";
import Login from "./Pages/Login";
import Footer from './Pages/Footer';
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourmission" element={<Mission />} />
            <Route path="/takethetest" element={<Test />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
