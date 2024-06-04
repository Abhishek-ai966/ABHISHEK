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
           <div class="container">
    <div class="width-50">
      <img src="Screenshot_20231203_013959_Drive.png" class="about-img">
    </div>
    <div class="width-50">
      <div class="about-us">
        <h2 class="heading-text">About Us</h2>
        <h3>I am working on web development Project</h3>
        <p>Hi, I am Abhishek Kumar, From Barahi Newada Varanasi. Get best computer science student portfolio website Genius In You With Genius 2023. Welcome To The Best Private University in 2023.</p>
        <div class="width-50 mt-20">
          <table cellspacing="8" cellpadding="8">
            <tr>
              <th>Name:</th>
              <td>Abhishek kumar</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td> kumarabhishek44279@gmail.com</td>
            </tr>
            <tr>
              <th>Birthday:</th>
              <td> 20JUNE,2006</td>
            </tr>
            <tr>
              <th>Study:</th>
              <td> GIET UNIVERSITY </td>
            </tr>
          </table>
        </div>
        <div class="width-50 mt-20">
          <table cellspacing="8" cellpadding="8">
            <tr>
              <th>Phone:</th>
              <td>(+92) 7518-531-311</td>
            </tr>
            <tr>
              <th>City:</th>
              <td>Gunupur Rayagada Odisha</td></td>
            </tr>
            <tr>
              <th>Freelancer:</th>
              <td> Available</td>
            </tr>
            <tr>
              <th>Website:</th>
              <td> www.Abhishekkumar.com</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
        </div>
      </section>
      <section id="education">
        <h2>Education</h2>
        <p>This is the education section.</p>
      </section>
      <section id="skills">
       <div class="main-section">
  <div class="container">
    <h2 class="heading-text">My Skills</h2>
    <div class="width-50">
      <div class="skill">
        <b>HTML</b>
        <span>95%</span>
        <div>
          <span style="width:95%"></span>
        </div>
      </div>
      <div class="skill">
        <b>CSS</b>
        <span>91%</span>
        <div>
          <span style="width:91%"></span>
        </div>
      </div>
      <div class="skill">
        <b>JavaScript</b>
        <span>90%</span>
        <div>
          <span style="width:85%"></span>
        </div>
      </div>
      <div class="skill">
        <b>React js</b>
        <span>90%</span>
        <div>
          <span style="width:79%"></span>
        </div>
      </div>
    </div>
    <div class="width-50">
      <div class="width-50">
        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:65">React-10</div>
      </div>
      <div class="width-50">
        <div role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="--value:85">Jquery-5</div>
      </div>
      <div class="width-50">
        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:65">Node-10</div>
      </div>
      <div class="width-50">
        <div role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="--value:85">CMD-60</div>
      </div>
    </div>
  </div>
</div>
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
