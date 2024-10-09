import React from 'react';
import './css/Services.css';

function Services() {
  return (
    <div className="services">
      <h2>Services</h2>
      <div className="services-grid">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>I build responsive and user-friendly web applications.</p>
        </div>
        <div className="service-item">
          <h3>Android Development</h3>
          <p>I create robust and efficient Android applications.</p>
        </div>
        <div className="service-item">
          <h3>UI/UX Design</h3>
          <p>I design intuitive and engaging user interfaces.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
