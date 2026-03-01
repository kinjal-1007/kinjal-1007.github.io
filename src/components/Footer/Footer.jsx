import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-copy">© 2025 Kinjal Gupta</span>
      <div className="footer-links">
        <a
          href="https://github.com/kinjal-1007"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kinjalgupta1007/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:kinjal150922@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
