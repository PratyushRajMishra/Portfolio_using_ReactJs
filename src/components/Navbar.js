import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const links = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'project', label: 'Projects' },
    { to: 'contribution', label: 'Contribution' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <nav className="site-nav container">
        <button className="brand-button" type="button" onClick={scrollToTop}>
          <span className="brand-mark" aria-hidden="true"></span>
          <span className="brand-text">
            <strong>Pratyush Raj</strong>
            <small>Software Engineer</small>
          </span>
        </button>

        <div className={`nav-links-wrap ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links-list">
            {links.map((item) => (
              <li key={item.to}>
                <Link
                  className="nav-link-item"
                  activeClass="active"
                  to={item.to}
                  spy={true}
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
          <button className="resume-btn nav-resume-btn" type="button" onClick={handleDownloadResume}>
            Resume
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
