import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo-brand">
          <img src="Logo.PNG" alt="Logo" className="nav-logo-icon" />
          <div className="logo-text">VIGHNAHARTA <span>INFINITY</span></div>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">Overview</a></li>
          <li><a href="#amenities">Amenities</a></li>
          <li><a href="#floorplan">Floor Plans</a></li>
          <li><a href="#developer">Developer</a></li>
        </ul>

        <Link to="/login" className="enquiry-btn">Admin Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;