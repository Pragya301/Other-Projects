// src/Footer.js
import React from 'react';
import './Footer.css'; // Optional: For styling the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} JPCC Group. All rights reserved.</p>
        <p>
          Follow us on 
          <a href="https://twitter.com/mycompany" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
          <a href="https://facebook.com/mycompany" target="_blank" rel="noopener noreferrer"> Facebook</a>, and 
          <a href="https://instagram.com/mycompany" target="_blank" rel="noopener noreferrer"> Instagram</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
