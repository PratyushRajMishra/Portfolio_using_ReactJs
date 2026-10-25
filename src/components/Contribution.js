import React from 'react';
import { FiArrowUpRight, FiPackage } from 'react-icons/fi';

const packages = [
  { title: 'loader_pro_kit', description: 'A flexible Flutter toolkit for expressive, polished loading states.', link: 'https://pub.dev/packages/loader_pro_kit', tags: ['Customizable', 'Plug & play', 'Animated'] },
  { title: 'first_run_kit', description: 'A focused onboarding toolkit for smoother first-time app experiences.', link: 'https://pub.dev/packages/first_run_kit', tags: ['Reusable', 'Performant', 'Simple API'] },
];

function Contribution() {
  return (
    <section id="contribution" className="section contribution-section">
      <div className="container contribution-layout">
        <div className="section-heading contribution-heading" data-reveal>
          <p className="section-kicker"><span>05</span> Open source</p>
          <h2>Small tools.<br />Shared freely.</h2>
          <p>I package the useful pieces so other builders don&apos;t have to start from zero.</p>
        </div>
        <div className="package-list">
          {packages.map((item, index) => (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="package-card" key={item.title} data-reveal>
              <div className="package-icon"><FiPackage /></div>
              <span className="package-number">0{index + 1} / PUB.DEV</span>
              <h3>{item.title}</h3><p>{item.description}</p>
              <div className="package-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <FiArrowUpRight className="package-arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contribution;
