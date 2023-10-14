import React from "react";

import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services/Services";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Partner from "./pages/Partner/Partner";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partner />} />
      </Routes>
    </Router>
  );
}

export default App;
