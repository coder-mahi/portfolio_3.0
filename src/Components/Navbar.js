import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Mahesh Shinde
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-links">
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-links">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
