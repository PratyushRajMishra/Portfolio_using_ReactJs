import React, { useRef, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowDownRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

function Home() {
  const visualRef = useRef(null);
  const [visualTransform, setVisualTransform] = useState({});

  const handleMove = (event) => {
    if (!visualRef.current || window.innerWidth < 900) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setVisualTransform({ transform: `perspective(1100px) rotateX(${-y * 5}deg) rotateY(${x * 7}deg) translate3d(${x * 7}px, ${y * 7}px, 0)` });
  };

  return (
    <section id="home" className="cover-hero">
      <div className="cover-rail rail-left" aria-hidden="true">
        <span>PR / PORTFOLIO 2026</span><i /><span>NEW DELHI, INDIA</span>
      </div>
      <div className="cover-rail rail-right" aria-hidden="true">
        <span>BUILD</span><span>REFINE</span><span>SHIP</span>
      </div>

      <div className="cover-canvas">
        <div className="cover-intro" data-reveal>
          <span className="cover-index">01 — INTRODUCTION</span>
          <p>Software developer<br />web · mobile · backend</p>
        </div>

        <div className="cover-title" aria-label="Software developer">
          <span className="title-line line-solid" data-reveal>SOFTWARE</span>
          <span className="title-line line-outline" data-reveal>DEVELOPER</span>
        </div>

        <div
          ref={visualRef}
          className="cover-portrait"
          onMouseMove={handleMove}
          onMouseLeave={() => setVisualTransform({ transform: 'perspective(1100px) rotateX(0) rotateY(0)' })}
          style={visualTransform}
          data-reveal
        >
          <div className="portrait-sun" aria-hidden="true"><span>PR</span></div>
          <div className="portrait-rings" aria-hidden="true"><i /><i /><i /></div>
          <div className="portrait-strokes" aria-hidden="true"><i /><i /><i /></div>
          <img src="/images/pratyush-sketch.png" alt="Hand-drawn portrait of Pratyush Raj" />
        </div>

        <div className="cover-copy" data-reveal>
          <p className="cover-name">PRATYUSH RAJ</p>
          <h1>I develop reliable web and mobile products with <em>clean code</em> and thoughtful experiences.</h1>
        </div>

        <div className="cover-actions" data-reveal>
          <Link className="cover-primary" to="project" smooth offset={-70} duration={500}>Explore work <FiArrowDownRight /></Link>
          <Link className="cover-contact" to="contact" smooth offset={-70} duration={500}>Let&apos;s work together ↗</Link>
        </div>

        <div className="cover-social" data-reveal>
          <a href="https://github.com/PratyushRajMishra" target="_blank" rel="noopener noreferrer"><FaGithub /> GH</a>
          <a href="https://www.linkedin.com/in/pratyush-raj-/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> IN</a>
        </div>
      </div>

      <div className="cover-ticker" aria-hidden="true"><div>REACT · FLUTTER · NODE · FIREBASE · PRODUCT THINKING · INTERACTION · REACT · FLUTTER · NODE · FIREBASE · PRODUCT THINKING · INTERACTION · </div></div>
    </section>
  );
}

export default Home;
