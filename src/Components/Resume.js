import React from 'react';
import './css/Resume.css'; // Ensure to have your CSS file for styling

function Resume() {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      
      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Computer Technology</h3>
          <p>Sanjivani College of Engineering</p>
          <p>2019 - Present</p>
          <p>Diploma with an aggregate of 91.37%</p>
        </div>
      </section>
      
      <section className="resume-section">
        <h2>Work Experience</h2>
        <div className="resume-item">
          <h3>Android Developer Intern</h3>
          <p>ATJOIN Pvt. Ltd.</p>
          <p>June 2023 - August 2023</p>
          <p>Developed and maintained Android applications using Java and XML.</p>
        </div>
        <div className="resume-item">
          <h3>Web Developer Intern</h3>
          <p>CodeClause</p>
          <p>January 2023 - April 2023</p>
          <p>Worked on front-end development, creating responsive and interactive web applications.</p>
        </div>
        <div className="resume-item">
          <h3>Basics of ML with Python Intern</h3>
          <p>BeyonDegree Pvt. Ltd.</p>
          <p>Online - 2023</p>
          <p>Learned and applied machine learning concepts and algorithms using Python.</p>
        </div>
      </section>
      
      <section className="resume-section">
        <h2>Skills</h2>
        <ul>
          <li>Frontend Development: HTML, CSS, JavaScript, React</li>
          <li>Backend Development: Node.js, Express</li>
          <li>Android Development: Java, XML</li>
          <li>UI/UX Design</li>
          <li>Machine Learning: Python, PANDAS</li>
          <li>Database Management: SQL</li>
        </ul>
      </section>
      
      <section className="resume-section">
        <h2>Certifications</h2>
        <div className="resume-item">
          <h3>Introduction to PANDAS</h3>
          <p>Earned on July 15, 2024</p>
        </div>
      </section>
      
      <section className="resume-section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:maheshshinde9100@gmail.com">maheshshinde9100@gmail.com</a></p>
        <p>Phone: +91 95295 44681</p>
        <p>Location: Yeola</p>
      </section>
    </div>
  );
}

export default Resume;
