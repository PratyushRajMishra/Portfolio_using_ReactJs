import React, { useEffect, useState } from 'react';
import './App.css';
import './Signature.css';
import './Theme.css';
import './HomeV2.css';
import './NavbarAvatar.css';
import './Process.css';
import './Mobile.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Process from './components/Process';
import Project from './components/Project';
import Contribution from './components/Contribution';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    const documentTheme = document.documentElement.getAttribute('data-theme');
    if (documentTheme === 'light' || documentTheme === 'dark') return documentTheme;
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
    try { window.localStorage.setItem('portfolio-theme', theme); } catch (error) { /* Storage can be unavailable in private contexts. */ }
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#0b0b0d' : '#f3f0e8');
  }, [theme]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 }
    );
    const revealItems = document.querySelectorAll('[data-reveal]');
    revealItems.forEach((item) => revealObserver.observe(item));

    const updatePointer = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', updatePointer, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('pointermove', updatePointer);
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="cursor-glow" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <Navbar theme={theme} onThemeToggle={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main>
        <Home />
        <About />
        <Process />
        <Project />
        <Contribution />
        <Contact />
      </main>
    </div>
  );
}

export default App;
