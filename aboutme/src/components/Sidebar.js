// src/components/Sidebar.js
import React from 'react';
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ mode }) => {
  return (
    <div className={`sidebar ${mode}`}>
      <a href="mailto:youremail@example.com"><FaEnvelope /></a>
      <a href="https://linkedin.com/in/yourprofile"><FaLinkedin /></a>
      <a href="https://wa.me/yourwhatsappnumber"><FaWhatsapp /></a>
      <a href="https://facebook.com/yourprofile"><FaFacebook /></a>
      <a href="https://instagram.com/yourprofile"><FaInstagram /></a>
      <a href="https://twitter.com/yourprofile"><FaTwitter /></a>
    </div>
  );
}

export default Sidebar;
