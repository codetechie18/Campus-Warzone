import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const audioRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Attempt autoplay when component mounts
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          console.log('Autoplay started successfully.');
        })
        .catch((err) => {
          console.warn('Autoplay blocked or failed:', err);
        });
    }

    // Load initial theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.body.classList.add('light-mode');
    } else {
      setIsDarkMode(true);
      document.body.classList.remove('light-mode');
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(() => {});
        setIsMuted(false);
      } else {
        audioRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        {/* Logo and Branding */}
        <Link to="/" className="navbar-logo" onClick={() => handleNavClick('hero')}>
          <img src="/images/logos/warzonelogo.png" alt="Campus Warzone Logo" className="logo-img" />
          <div className="logo-text">
            <span>CAMPUS</span>
            <span className="gold">WARZONE</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <button className="nav-link active" onClick={() => handleNavClick('hero')}>HOME</button>
          <button className="nav-link" onClick={() => handleNavClick('tournaments')}>TOURNAMENTS</button>
          <button className="nav-link" onClick={() => handleNavClick('stats')}>LEADERBOARD</button>
          <button className="nav-link" onClick={() => handleNavClick('stats')}>TEAMS</button>
          <button className="nav-link" onClick={() => handleNavClick('sponsors')}>SPONSORS</button>
          <button className="nav-link" onClick={() => handleNavClick('about')}>ABOUT US</button>
        </div>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Mute/Unmute Audio */}
          <button 
            className="action-btn mute-btn" 
            onClick={toggleMute} 
            aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {isMuted ? <i className="fas fa-volume-mute"></i> : <i className="fas fa-volume-up"></i>}
          </button>

          {/* Light/Dark Toggle */}
          <button 
            className="action-btn theme-btn" 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>

          {/* Login/Signup */}
          <Link to="/register" className="login-btn">LOGIN / SIGNUP</Link>
        </div>
      </nav>

      {/* Persistent Audio Tag */}
      <audio 
        ref={audioRef} 
        id="soundEffect" 
        src="/audio/new world era.mp3" 
        preload="auto" 
        loop
      />
    </div>
  );
};

export default Navbar;

