import React from 'react';

const skills = [
  ['Interface', 'React.js · JavaScript · Tailwind · CSS'],
  ['Systems', 'Node.js · Express · REST APIs · Docker'],
  ['Mobile', 'Flutter · Dart · Firebase · GetX'],
  ['Data', 'MongoDB · PostgreSQL · MySQL · Firestore'],
];

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="section-kicker"><span>02</span> A little context</p>
          <h2>Engineer by training.<br /><em>Maker</em> by instinct.</h2>
        </div>
        <div className="about-layout">
          <div className="about-statement" data-reveal>
            <p>I build products from the interface all the way down to the data layer. My sweet spot is where solid engineering meets a tactile, thoughtful experience.</p>
            <p className="about-note">I&apos;m especially drawn to products that remove friction, make information clearer, or simply feel delightful to use.</p>
          </div>
          <div className="principles" data-reveal>
            <article><span>01</span><h3>Clarity before cleverness</h3><p>Simple flows, legible systems, and decisions users never have to second-guess.</p></article>
            <article><span>02</span><h3>Motion with purpose</h3><p>Animation should guide attention and communicate state—not become visual noise.</p></article>
            <article><span>03</span><h3>Built to last</h3><p>Maintainable code, responsive layouts, and resilient behavior from the start.</p></article>
          </div>
        </div>
        <div className="skill-ticker" data-reveal>
          {skills.map(([title, items]) => <div className="skill-row" key={title}><span>{title}</span><strong>{items}</strong></div>)}
        </div>
      </div>
    </section>
  );
}

export default About;
