import React from 'react';
import './css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>© 2024 Mahesh Shinde. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <ul className="social-links">
            <li>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
