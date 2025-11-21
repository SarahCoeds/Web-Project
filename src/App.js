import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import MyForm from "./Pages/Login";
import Mission from "./Pages/OurMission";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourmission" element={<Mission />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
