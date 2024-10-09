import React from 'react';
import './css/About.css';

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-info">
          <h2>Mahesh Shinde</h2>
          <p><strong>Age:</strong> 18</p>
          <p><strong>Place:</strong> Yeola</p>
          <p><strong>Email:</strong> <a href="mailto:maheshshinde9100@gmail.com">maheshshinde9100@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919529544681">+91 95295 44681</a></p>
        </div>
        <div className="about-details">
          <p>
            I am a versatile developer with expertise in frontend development, UI/UX design, and Android development.
            With a diploma in Computer Technology, I have a strong foundation in various programming languages and technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
