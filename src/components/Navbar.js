import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FiMoon, FiSun } from 'react-icons/fi';

const links = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'process', label: 'Process' },
  { to: 'project', label: 'Projects' },
  { to: 'contribution', label: 'Contribution' },
  { to: 'contact', label: 'Contact' },
];

function Navbar({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const updateActiveSection = () => {
      const pageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      if (pageBottom) {
        setActiveSection('contact');
        return;
      }

      let current = 'home';
      links.forEach(({ to }) => {
        const section = document.getElementById(to);
        if (section && section.getBoundingClientRect().top <= 130) current = to;
      });
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpen(false);
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/images/Pratyush_Raj_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank';
    link.download = 'Pratyush_Resume.pdf';
    link.click();
  };

  return (
    <header className="site-header">
      <nav className="site-nav">
        <button className="brand-button" type="button" onClick={scrollToTop}>
          <span className="brand-mark brand-image" aria-hidden="true">
            <img src="/images/pratyush-sketch.png" alt="" />
          </span>
          <span className="brand-text">
            <strong>Pratyush Raj</strong>
            <small>Creative developer</small>
          </span>
        </button>

        <div className={`nav-links-wrap ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links-list">
            {links.map((item) => (
              <li key={item.to}>
                <Link
                  className={`nav-link-item ${activeSection === item.to ? 'active' : ''}`}
                  to={item.to}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span className="theme-icon sun-icon"><FiSun /></span>
            <span className="theme-icon moon-icon"><FiMoon /></span>
            <span className="theme-knob" />
          </button>
          <button className="resume-btn nav-resume-btn" type="button" onClick={handleDownloadResume}>
            Résumé ↗
          </button>
          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
