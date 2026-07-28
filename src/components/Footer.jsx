import React from 'react';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h2>CAMPUS WARZONE GHR SPECIAL</h2>
          <p>&copy; 2024 All Rights Reserved</p>
        </div>
        
        <div className="footer-right">
          <div className="social-icons">
            <a href="https://www.instagram.com/campuswarzone?igsh=eXY2YjRwMnRydTl6" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://discord.gg/4kPqfRDw" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <i className="fa-brands fa-discord"></i>
            </a>
            <a href="https://chat.whatsapp.com/C2gjshEkTPF8fN4wMTHEYA" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="scroll-top">
            <a href="#top" onClick={scrollToTop} id="scroll-top">
              <i className="fas fa-arrow-up"></i> Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
