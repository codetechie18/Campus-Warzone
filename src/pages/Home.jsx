import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Setup Scroll-reveal Animations using GSAP and ScrollTrigger
    const sections = gsap.utils.toArray('.page');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, scale: 0.8 }, 
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1.5, 
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: "restart none none none" 
          }
        }
      );
    });

    // Refresh triggers to compute boundaries properly
    ScrollTrigger.refresh();

    // 2. Setup scroll listener for class toggles (equivalent to previous script.js)
    const handleScroll = () => {
      const checkVisibility = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          el.classList.add('scrolled');
        } else {
          el.classList.remove('scrolled');
        }
      };

      checkVisibility('.girl');
      checkVisibility('.sqad');
      checkVisibility('.info');
      checkVisibility('.gamers');
      checkVisibility('.battel');
      
      const boxes = document.querySelectorAll('.black-box, .black-box2');
      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          box.classList.add('scrolled');
        } else {
          box.classList.remove('scrolled');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    // Cleanup animations and listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // 3. Scroll to target section if passed via routing state
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      // Clean state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      {/* Section 1: Landing */}
      <section id="section1" className="landing">
        <div className="heading">
          <img src="/images/logos/GH.png" alt="GH Logo" />
        </div>
        <div className="subhead">
          <img src="/images/logos/BCA - Copy.png" alt="BCA Copy" />
        </div>
        <div className="logo">
          <img src="/images/logos/mainlogo.png" alt="Main Logo" />
        </div>

        <div className="plane">
          <img src="/images/ui/plane.png" alt="Plane" />
        </div>

        <div className="para">
          <img src="/images/ui/parashut.png" alt="Parachute" />
        </div>
          
        <div className="pp">
          <img src="/images/ui/para1.png" alt="Parachute 1" />
        </div>

        <div className="ppp">
          <img src="/images/ui/para2.png" alt="Parachute 2" />
        </div>
      </section>

      {/* Section 2: Empty Spacer */}
      <section id="section2" className="page"></section>

      {/* Section 3: About Us */}
      <section id="section3" className="page">
        <div className="girl">
          <img src="/images/icons/about us .png" alt="About Us Banner" />
        </div>
        <p className="box">
          Gear up for the ultimate BGMI showdown at our college! This event 
          will bring together the best players from across the campus to test
          their skills in the most exciting battle royale action. Whether you're a 
          veteran player with years of experience or a newcomer looking to prove your abilities,
          this is the perfect opportunity to showcase your gaming prowess. Strategize with your squad,
          master the map, and compete for amazing prizes that will make your victory even sweeter. With intense battles,
          unexpected twists, and fierce competition, this event promises to be full of adrenaline-pumping moments and unforgettable
          experiences. Don't miss out on the chance to be part of the action—gather your squad, register now, and claim your shot at glory!
          Prepare for a journey that will push your skills to the limit and leave you with memories to cherish forever.
        </p>

        <div className="sqad">
          <img src="/images/icons/ab sqad.png" alt="Squad Info" />
        </div>
        
        <div className="info">
          <img src="/images/icons/t info.png" alt="Tournament Info" />
        </div>

        <div className="box-container">
          <div className="black-box">
            <u><h2>Group A</h2></u>
            <p>Time: 12:00 PM</p>
            <p>Maps: ERANGEL, MIRAMAR, SANHOK</p>
          </div>
        </div>
        
        <div className="box-containerr">
          <div className="black-box2">
            <u><h2>Group B</h2></u>
            <p>Time: 12:00 PM</p>
            <p>Maps: ERANGEL, MIRAMAR, VIKENDI</p>
          </div>
        </div>
      </section>

      {/* Section 4: Battle Info */}
      <section id="section4" className="page">
        <div className="gamers">
          <img src="/images/icons/100+.png" alt="100+ Gamers" />
        </div>

        <div className="danger">
          <img src="/images/icons/danger.png" alt="Danger Zones" />
        </div>
           
        <div className="battel">
          <img src="/images/icons/battel.png" alt="Battle Details" />
        </div>

        <div className="battel-box">
          <p>
            "The wait is finally over! Get ready for an unforgettable e-sports experience. 
            Gear up and step into the battleground where the best players will compete for glory.
            Whether you're a seasoned pro or a newcomer, this thrilling event is your chance to showcase your 
            skills, join your squad, and dominate the competition. The battleground awaits—let's make this a showdown to remember!"
          </p>
        </div>
      </section>

      {/* Section 5: Casters & Streamers */}
      <section id="section5" className="page">
        <div className="booster">
          <img src="/images/icons/Booster.png" alt="Booster" />
        </div>
      
        <div className="container2">
          <div className="blur-box1 box-6">
            <img src="/images/team/talk_with_viru.jpg" alt="Viru" className="centered-image" />
            <h1>talk_with_viru</h1>
            <div className="social-icons">
              <a href="https://www.instagram.com/caster_harsh?igsh=ZXBjMHozYTV3Z2Jn" className="instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="container1">
          <div className="blur-box1 box-4">
            <img src="/images/team/caster1.png" alt="Harsh" className="centered-image" />
            <h1>Harsh</h1>
            <div className="social-icons">
              <a href="https://www.instagram.com/caster_harsh?igsh=ZXBjMHozYTV3Z2Jn" className="instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="blur-box1 box-5">
            <img src="/images/team/caster2.png" alt="Sneha" className="centered-image" />
            <h1>Sneha</h1>
            <div className="social-icons">
              <a href="https://www.instagram.com/_sneha45_45?igsh=cGQzYmo4aXVuenZn" className="instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="Dou">
          <img src="/images/icons/duo.png" alt="Duo Modes" />
        </div>
      </section>

      {/* Section 6: Organizers & Core Team */}
      <section id="section6" className="page">
        <div className="Orgnizer">
          <img src="/images/icons/Orgnizer.png" alt="Organizer Title" />
        </div>

        <div className="info-2">
          <p>
            "Behind every great event lies a team of visionaries, strategists, and innovators. 
            Meet the driving force behind Campus Warzone: GHR Special—the organizers who
            turned an idea into an epic gaming phenomenon.
            From crafting strategies to ensuring seamless execution, these leaders are dedicated 
            to delivering an unforgettable experience for gamers and spectators alike. Discover the faces behind the magic!"
          </p>
        </div>
        
        <div className="container">
          <div className="blur-box box-1">
            <img src="/images/team/pranav.jpg" alt="Pranav Tekade" className="centered-image" />
            <h1>Pranav Tekade</h1>
            <div className="social-icons">
              <a href="https://www.instagram.com/aadityaa.18_?igsh=MTlxeG82b3d3Y2p1dw==" target="_blank" rel="noopener noreferrer" className="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/pranav-tekade-57b5a2320" target="_blank" rel="noopener noreferrer" className="linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div> 
          
          <div className="blur-box box-2">
            <img src="/images/team/ayush.jpg" alt="Ayush Thakre" className="centered-image" />
            <h1>Ayush Thakre</h1>
            <div className="social-icons">
              <a href="https://www.instagram.com/ayushthakre__/" target="_blank" rel="noopener noreferrer" className="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/ayush-thakre-096558294/" target="_blank" rel="noopener noreferrer" className="linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="blur-box box-3">
            <img src="/images/team/Pratiksh.jpg" alt="Pratiksh Borkar" className="centered-image" />
            <h1>Pratiksh Borkar</h1>
            <div className="social-icons">
              <a href="https://www.instagram.com/borkarpratiksh?igsh=MWRpZ2FoZnZ1dDdkNA==" target="_blank" rel="noopener noreferrer" className="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/pratiksh-borkar-570078340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div> 

        <div className="support">
          <img src="/images/icons/support.png" alt="Support" />
        </div>

        <article className="Core_Team">
          <div className="marquee marquee--reverse">
            <div className="marquee__group">
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Pranav Atkar.jpg" alt="Pranav Atkar" />
                <p>Pranav Atkar</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Om bhendi.jpg" alt="Om Bhendarkar" />
                <p>Om Bhendarkar</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/sher.jpg" alt="Prajwal Shamkuwar" />
                <p>Prajwal Shamkuwar</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Omya.jpg" alt="Om Wankhade" />
                <p>Om Wankhade</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/mohit.jpg" alt="Mohit Talmale" />
                <p>Mohit Talmale</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Sumit Achare.jpg" alt="Sumit Achare" />
                <p>Sumit Achare</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Om Dawle.jpg" alt="Om Dawle" />
                <p>Om Dawle</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Karansingh Rajpurohit.jpg" alt="Karansingh Rajpurohit" />
                <p>Karansingh Rajpurohit</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Harsh Kurve.jpg" alt="Harsh Kurve" />
                <p>Harsh Kurve</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Mrunal Gaidhane.jpg" alt="Mrunal Gaidhane" />
                <p>Mrunal Gaidhane</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/viru.jpg" alt="Virendra Makde" />
                <p>Virendra Makde</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Omkar Katore .jpg" alt="Omkar Katore" />
                <p>Omkar Katore</p>
              </a>
            </div>
            
            <div className="marquee__group">
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Pranav Atkar.jpg" alt="Pranav Atkar" />
                <p>Pranav Atkar</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Om bhendi.jpg" alt="Om Bhendarkar" />
                <p>Om Bhendarkar</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/sher.jpg" alt="Prajwal Shamkuwar" />
                <p>Prajwal Shamkuwar</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Omya.jpg" alt="Om Wankhade" />
                <p>Om Wankhade</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/mohit.jpg" alt="Mohit Talmale" />
                <p>Mohit Talmale</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Sumit Achare.jpg" alt="Sumit Achare" />
                <p>Sumit Achare</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Om Dawle.jpg" alt="Om Dawle" />
                <p>Om Dawle</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Karansingh Rajpurohit.jpg" alt="Karansingh Rajpurohit" />
                <p>Karansingh Rajpurohit</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Harsh Kurve.jpg" alt="Harsh Kurve" />
                <p>Harsh Kurve</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Mrunal Gaidhane.jpg" alt="Mrunal Gaidhane" />
                <p>Mrunal Gaidhane</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/viru.jpg" alt="Virendra Makde" />
                <p>Virendra Makde</p>
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <img className="links team-core2" src="/images/team/Omkar Katore .jpg" alt="Omkar Katore" />
                <p>Omkar Katore</p>
              </a>
            </div>
          </div>
        </article>
      </section>

      {/* Section 7: Empty Spacer */}
      <section id="section7" className="page"></section>
    </>
  );
};

export default Home;
