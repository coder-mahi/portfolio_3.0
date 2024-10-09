import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import About from './Components/About'; // Other components
import Services from './Components/Services';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Resume from './Components/Resume';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
