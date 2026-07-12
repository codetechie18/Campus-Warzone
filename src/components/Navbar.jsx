import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMuted, setIsMuted] = useState(false);
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
    <div className="nav1">
      <nav className="navbar" data-navbar>
        <ul className="navbar-list">
          <Link to="/" className="logo3">
            <img src="/images/logos/ghriet.webp" alt="GHRiet Logo" />
          </Link>
          
          <div className="logo4">
            <img src="/images/logos/BGMI.png" alt="BGMI Logo" />
          </div>
          
          <li>
            <button className="nav-link-btn" onClick={() => handleNavClick('section1')}>
              Home
            </button>
          </li>
          <li>
            <button className="nav-link-btn" onClick={() => handleNavClick('section3')}>
              About Us
            </button>
          </li>
          <li>
            <button className="nav-link-btn" onClick={() => handleNavClick('section6')}>
              Leaders
            </button>
          </li>

          <li>
            <button 
              id="muteUnmuteBtn" 
              onClick={toggleMute} 
              aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            >
              <span id="icon">{isMuted ? '🔇' : '🔊'}</span>
            </button>
          </li>
          
          <li>
            <Link to="/register" className="btn" data-btn>Register</Link>
          </li>
        </ul>
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
