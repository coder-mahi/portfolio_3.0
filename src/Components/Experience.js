import React from 'react';
import './css/Experience.css';

function Experience() {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-timeline">
        <div className="experience-item">
          <h3>Android Developer at ATJOIN Pvt. Ltd.</h3>
          <span>Jan 2024 - Apr 2024</span>
          <p>Developed Android applications for various clients with a focus on performance and user experience.</p>
        </div>
        <div className="experience-item">
          <h3>Web Developer Intern at CodeClause</h3>
          <span>Sep 2023 - Dec 2023</span>
          <p>Worked on front-end development for client websites using HTML, CSS, and JavaScript.</p>
        </div>
        {/* Add more experience items as needed */}
      </div>
    </div>
  );
}

export default Experience;
