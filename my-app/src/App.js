// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Inquiry from './pages/Inquiry';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
    <Navbar />
    <div style={{ minHeight: 'calc(100vh - 140px)' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
    <Footer /> {/* ✅ Add Footer here */}
  </Router>
  );
}

export default App;
