import React, { useRef, useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiArrowDownRight, FiCode, FiLayers, FiSmartphone } from 'react-icons/fi';
import { Link } from 'react-scroll';

function Home() {
  const heroRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleHeroMove = (event) => {
    if (!heroRef.current || window.innerWidth < 992) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 3;
    const rotateX = (0.5 - (y / rect.height)) * 2.6;

    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const resetHeroTilt = () => {
    setTiltStyle({
      transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg)',
    });
  };

  return (
    <section id="home" className="section hero-section">
      <div
        ref={heroRef}
        className="container hero-card"
        onMouseMove={handleHeroMove}
        onMouseLeave={resetHeroTilt}
        style={tiltStyle}
      >
        <div className="hero-main">
          <div className="hero-left">
            <div className="hero-copy">
              <p className="eyebrow">Hi, I&apos;m Pratyush Raj</p>
              <h1>
                Building products with <span>clarity</span>, speed, and impact.
              </h1>
              <p className="subtitle">Full-stack and Flutter developer crafting modern, scalable, and user-focused digital experiences.</p>
            </div>

            <div className="hero-stats">
              <article>
                <strong>3+</strong>
                <span>Projects Delivered</span>
              </article>
              <article>
                <strong>2+</strong>
                <span>Years of Building</span>
              </article>
              <article>
                <strong>Open Source</strong>
                <span>Package Contributor</span>
              </article>
            </div>

            <div className="hero-badges">
              <span>
                <FiCode />
                React UI
              </span>
              <span>
                <FiLayers />
                Node APIs
              </span>
              <span>
                <FiSmartphone />
                Flutter Apps
              </span>
            </div>

            <div className="hero-cta">
              <Link className="primary-cta" to="project" smooth={true} offset={-80} duration={350}>
                Explore Projects <FiArrowDownRight />
              </Link>
              <Link className="ghost-cta" to="contact" smooth={true} offset={-80} duration={350}>
                Let&apos;s Connect
              </Link>
            </div>

            <div className="hero-social">
              <a href="https://www.linkedin.com/in/pratyush-raj-/" target="_blank" rel="noopener noreferrer" className="social-pill">
                <FaLinkedinIn />
                LinkedIn
              </a>
              <a href="https://github.com/PratyushRajMishra" target="_blank" rel="noopener noreferrer" className="social-pill">
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-scene-wrap" aria-hidden="true">
            <div className="hero-visual">
              <div className="hero-visual-orb orb-one"></div>
              <div className="hero-visual-orb orb-two"></div>
              <div className="hero-visual-grid"></div>
              <div className="hero-profile-panel">
                <img src="images/picture.png" alt="Pratyush Raj" className="profile-photo" />
                <div className="hero-profile-copy">
                  <strong>Pratyush Raj</strong>
                  <span>Full-stack & Flutter Developer</span>
                </div>
                
              </div>
              
              <div className="hero-visual-card card-skill-1">
                <p>Languages</p>
                <strong>JavaScript, Dart, Python</strong>
              </div>

              <div className="hero-visual-card card-skill-2">
                <p>Frameworks</p>
                <strong>React, Node.js, Flutter</strong>
              </div>

              <div className="hero-visual-card card-skill-3">
                <p>Tools & DB</p>
                <strong>Git, Firebase, MongoDB</strong>
              </div>
              
              <div className="hero-visual-card card-focus">
                <p>Current Focus</p>
                <strong>Scalable products with polished UX</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
