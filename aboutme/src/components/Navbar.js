// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg'; // Adjust the path if your logo is in a different location
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ mode, toggleMode }) => {
  return (
    <nav className={`navbar ${mode}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="mode-toggle" onClick={toggleMode}>
        {mode === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
}

export default Navbar;
