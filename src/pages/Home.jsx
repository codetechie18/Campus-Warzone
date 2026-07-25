import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Setup Scroll-reveal Animations using GSAP and ScrollTrigger
    const sections = gsap.utils.toArray('.reveal-section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: "play none none none" 
          }
        }
      );
    });

    ScrollTrigger.refresh();

    // 2. Scroll to target section if passed via routing state
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="home-page">
      {/* Floating Vertical Social Bar */}
      <div className="floating-socials">
        <a href="https://discord.gg/4kPqfRDw" target="_blank" rel="noopener noreferrer" className="social-link" title="Discord">
          <i className="fab fa-discord"></i>
        </a>
        <a href="https://www.instagram.com/campuswarzone" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" title="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text-side">
            <span className="hero-tagline animate-text">THE BATTLE IS ON</span>
            <h1 className="hero-title animate-text">
              CAMPUS <span className="gold">WARZONE</span>
            </h1>
            <p className="hero-desc animate-text">
              The Ultimate BGMI Tournament Platform for Campus Warriors. <br />
              Compete. Conquer. Dominate.
            </p>
            <div className="hero-buttons animate-text">
              <Link to="/register" className="hero-btn-primary">
                REGISTER NOW <i className="fas fa-chevron-right"></i>
              </Link>
              <button className="hero-btn-outline" onClick={() => {
                const aboutEl = document.getElementById('about');
                if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
              }}>
                HOW IT WORKS <i className="far fa-play-circle"></i>
              </button>
            </div>
          </div>
          
          <div className="hero-graphic-side">
            <div className="bgmi-badge">
              <span className="badge-bgmi">BGMI</span>
              <span className="badge-krafton">KRAFTON</span>
            </div>
            <img 
              src="/images/ui/hero_characters.png" 
              alt="Campus Warzone Battlefield Heroes" 
              className="hero-characters" 
            />
          </div>
        </div>
      </section>

      {/* Feature ribbon */}
      <section className="features-ribbon">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="feature-info">
              <h3>BIG PRIZES</h3>
              <p>Exciting prize pools for winners</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <i className="fas fa-users"></i>
            </div>
            <div className="feature-info">
              <h3>COLLEGE RIVALRY</h3>
              <p>Compete against the best college teams</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="feature-info">
              <h3>FAIR PLAY</h3>
              <p>100% fair & anti-cheat environment</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <i className="fas fa-broadcast-tower"></i>
            </div>
            <div className="feature-info">
              <h3>LIVE STREAM</h3>
              <p>All matches streamed live</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments and Stats Section */}
      <section id="tournaments" className="tournaments-stats-section reveal-section">
        <div className="section-grid">
          {/* Upcoming Tournament */}
          <div className="upcoming-tournament-wrapper">
            <h2 className="section-title">UPCOMING TOURNAMENT</h2>
            <div className="tournament-card">
              <div className="tournament-card-image">
                <img src="/images/ui/upcoming_tournament.png" alt="Campus Warzone Season 1" />
              </div>
              <div className="tournament-card-details">
                <h3>CAMPUS WARZONE SEASON 1</h3>
                
                <div className="detail-row">
                  <i className="far fa-calendar-alt text-gold"></i>
                  <span>25 May - 02 June, 2024</span>
                </div>
                
                <div className="detail-row">
                  <i className="fas fa-users text-gold"></i>
                  <span>64 Teams</span>
                </div>

                <div className="detail-row">
                  <i className="fas fa-indian-rupee-sign text-gold"></i>
                  <span>₹1,00,000 Prize Pool</span>
                </div>

                <Link to="/register" className="register-team-btn">
                  REGISTER YOUR TEAM <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Tournament Stats */}
          <div className="tournament-stats-wrapper">
            <h2 className="section-title">TOURNAMENT STATS</h2>
            <div className="stats-grid">
              
              <div className="stat-card purple-theme">
                <div className="stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="stat-value">124</div>
                <div className="stat-label">TEAMS REGISTERED</div>
              </div>

              <div className="stat-card green-theme">
                <div className="stat-icon">
                  <i className="fas fa-gamepad"></i>
                </div>
                <div className="stat-value">256</div>
                <div className="stat-label">MATCHES PLAYED</div>
              </div>

              <div className="stat-card gold-theme">
                <div className="stat-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <div className="stat-value">₹2,50,000</div>
                <div className="stat-label">TOTAL PRIZE POOL</div>
              </div>

              <div className="stat-card pink-theme">
                <div className="stat-icon">
                  <i className="fas fa-satellite-dish"></i>
                </div>
                <div className="stat-value">10K+</div>
                <div className="stat-label">LIVE VIEWERS</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Bar */}
      <section id="sponsors" className="sponsors-section reveal-section">
        <span className="sponsors-title">OUR SPONSORS</span>
        <div className="sponsors-logos">
          <div className="sponsor-logo redbull">
            <span className="sponsor-text-red">Red</span>
            <span className="sponsor-text-white">Bull</span>
            <i className="fas fa-bolt sponsor-icon-red"></i>
          </div>
          <div className="sponsor-logo loco">
            <span>LOCO</span>
          </div>
          <div className="sponsor-logo amd">
            <span>AMD</span>
          </div>
          <div className="sponsor-logo zebronics">
            <span>ZEBRONICS</span>
          </div>
          <div className="sponsor-logo boat">
            <span>boAt</span>
          </div>
          <div className="sponsor-logo rooter">
            <span>rooter</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section reveal-section">
        <h2 className="section-title text-center">ABOUT THE TOURNAMENT</h2>
        <div className="about-grid">
          <div className="about-card glass-panel">
            <p>
              Gear up for the ultimate BGMI showdown at our college! This event 
              will bring together the best players from across the campus to test
              their skills in the most exciting battle royale action. Whether you're a 
              veteran player with years of experience or a newcomer looking to prove your abilities,
              this is the perfect opportunity to showcase your gaming prowess. 
            </p>
            <p>
              Strategize with your squad, master the map, and compete for amazing prizes that 
              will make your victory even sweeter. With intense battles, unexpected twists, 
              and fierce competition, this event promises to be full of adrenaline-pumping moments 
              and unforgettable experiences. Don't miss out on the chance to be part of the action—gather 
              your squad, register now, and claim your shot at glory!
            </p>
          </div>
          <div className="about-groups">
            <div className="group-card glass-panel">
              <h3>Group A</h3>
              <div className="group-detail">Time: <strong>12:00 PM</strong></div>
              <div className="group-detail">Maps: <strong>ERANGEL, MIRAMAR, SANHOK</strong></div>
            </div>
            <div className="group-card glass-panel">
              <h3>Group B</h3>
              <div className="group-detail">Time: <strong>12:00 PM</strong></div>
              <div className="group-detail">Maps: <strong>ERANGEL, MIRAMAR, VIKENDI</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* Casters & Streamers */}
      <section id="casters" className="casters-section reveal-section">
        <h2 className="section-title text-center">CASTERS & STREAMERS</h2>
        <div className="casters-container">
          <div className="caster-card glass-panel">
            <div className="caster-img-wrapper">
              <img src="/images/team/talk_with_viru.jpg" alt="Viru" className="centered-image" />
            </div>
            <h3>talk_with_viru</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/caster_harsh" className="instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="caster-card glass-panel">
            <div className="caster-img-wrapper">
              <img src="/images/team/caster1.png" alt="Harsh" className="centered-image" />
            </div>
            <h3>Harsh</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/caster_harsh" className="instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="caster-card glass-panel">
            <div className="caster-img-wrapper">
              <img src="/images/team/caster2.png" alt="Sneha" className="centered-image" />
            </div>
            <h3>Sneha</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/_sneha45_45" className="instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers & Core Team */}
      <section id="organizers" className="organizers-section reveal-section">
        <h2 className="section-title text-center">ORGANIZERS & CORE TEAM</h2>
        <div className="organizers-container">
          <div className="organizer-card glass-panel">
            <div className="org-img-wrapper">
              <img src="/images/team/pranav.jpg" alt="Pranav Tekade" />
            </div>
            <h3>Pranav Tekade</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/aadityaa.18_" target="_blank" rel="noopener noreferrer" className="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/pranav-tekade-57b5a2320" target="_blank" rel="noopener noreferrer" className="linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div> 
          
          <div className="organizer-card glass-panel">
            <div className="org-img-wrapper">
              <img src="/images/team/ayush.jpg" alt="Ayush Thakre" />
            </div>
            <h3>Ayush Thakre</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/ayushthakre__/" target="_blank" rel="noopener noreferrer" className="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/ayush-thakre-096558294/" target="_blank" rel="noopener noreferrer" className="linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="organizer-card glass-panel">
            <div className="org-img-wrapper">
              <img src="/images/team/Pratiksh.jpg" alt="Pratiksh Borkar" />
            </div>
            <h3>Pratiksh Borkar</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/borkarpratiksh" target="_blank" rel="noopener noreferrer" className="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/pratiksh-borkar-570078340" target="_blank" rel="noopener noreferrer" className="linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div> 

        <article className="core-team-marquee-section">
          <div className="marquee marquee--reverse">
            <div className="marquee__group">
              <div className="marquee-item">
                <img src="/images/team/Pranav Atkar.jpg" alt="Pranav Atkar" />
                <p>Pranav Atkar</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Om bhendi.jpg" alt="Om Bhendarkar" />
                <p>Om Bhendarkar</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/sher.jpg" alt="Prajwal Shamkuwar" />
                <p>Prajwal Shamkuwar</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Omya.jpg" alt="Om Wankhade" />
                <p>Om Wankhade</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/mohit.jpg" alt="Mohit Talmale" />
                <p>Mohit Talmale</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Sumit Achare.jpg" alt="Sumit Achare" />
                <p>Sumit Achare</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Om Dawle.jpg" alt="Om Dawle" />
                <p>Om Dawle</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Karansingh Rajpurohit.jpg" alt="Karansingh Rajpurohit" />
                <p>Karansingh Rajpurohit</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Harsh Kurve.jpg" alt="Harsh Kurve" />
                <p>Harsh Kurve</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Mrunal Gaidhane.jpg" alt="Mrunal Gaidhane" />
                <p>Mrunal Gaidhane</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/viru.jpg" alt="Virendra Makde" />
                <p>Virendra Makde</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Omkar Katore .jpg" alt="Omkar Katore" />
                <p>Omkar Katore</p>
              </div>
            </div>
            
            <div className="marquee__group">
              <div className="marquee-item">
                <img src="/images/team/Pranav Atkar.jpg" alt="Pranav Atkar" />
                <p>Pranav Atkar</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Om bhendi.jpg" alt="Om Bhendarkar" />
                <p>Om Bhendarkar</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/sher.jpg" alt="Prajwal Shamkuwar" />
                <p>Prajwal Shamkuwar</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Omya.jpg" alt="Om Wankhade" />
                <p>Om Wankhade</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/mohit.jpg" alt="Mohit Talmale" />
                <p>Mohit Talmale</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Sumit Achare.jpg" alt="Sumit Achare" />
                <p>Sumit Achare</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Om Dawle.jpg" alt="Om Dawle" />
                <p>Om Dawle</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Karansingh Rajpurohit.jpg" alt="Karansingh Rajpurohit" />
                <p>Karansingh Rajpurohit</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Harsh Kurve.jpg" alt="Harsh Kurve" />
                <p>Harsh Kurve</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Mrunal Gaidhane.jpg" alt="Mrunal Gaidhane" />
                <p>Mrunal Gaidhane</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/viru.jpg" alt="Virendra Makde" />
                <p>Virendra Makde</p>
              </div>
              <div className="marquee-item">
                <img src="/images/team/Omkar Katore .jpg" alt="Omkar Katore" />
                <p>Omkar Katore</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
