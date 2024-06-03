// src/components/MainContent.js
import React from 'react';
import profileImage from '../assets/profile.jpg'; // Adjust the path if your image is in a different location
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <section id="about">
        <h2>About Me</h2>
        <div className="about-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="about-text">
            <p>This is the about me section. Here you can include details about yourself, your background, interests, and more.</p>
          </div>
        </div>
      </section>
      <section id="education">
        <h2>Education</h2>
        <p>This is the education section.</p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <p>This is the skills section.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>This is the projects section.</p>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <p>This is the experience section.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>This is the contact section.</p>
      </section>
    </div>
  );
}

export default MainContent;
