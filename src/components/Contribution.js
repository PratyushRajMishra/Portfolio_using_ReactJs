import React from 'react';
import { FiExternalLink, FiCheckCircle, FiPackage, FiCode } from 'react-icons/fi';

// Reusable Card Component
function ContributionCard({ title, description, highlights, link }) {
  return (
    <article className="glass-panel contribution-card">
      <div className="contribution-content">
        <p className="contribution-label">Featured Flutter Package</p>

        <h3 className="contribution-title">{title}</h3>

        <p className="contribution-description">{description}</p>

        <div className="contribution-meta">
          <span className="meta-pill">
            <FiPackage /> Package
          </span>
          <span className="meta-pill">
            <FiCode /> Open Source
          </span>
        </div>

        <div className="contribution-highlights">
          {highlights.map((item, index) => (
            <p key={index}>
              <FiCheckCircle className="highlight-icon" />
              <span>{item}</span>
            </p>
          ))}
        </div>

        <a
          className="primary-cta contribution-cta"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on pub.dev <FiExternalLink />
        </a>
      </div>

      {/* Visual Section */}
      <div className="contribution-visual" aria-hidden="true">
        <div className="visual-glow"></div>
        <div className="visual-ring ring-one"></div>
        <div className="visual-ring ring-two"></div>
        <div className="visual-ring ring-three"></div>

        <div className="contribution-mini-card">
          <h4>{title}</h4>
          <div className="mini-stats">
            <div>
              <strong>Flutter</strong>
              <span>SDK</span>
            </div>
            <div>
              <strong>Reusable</strong>
              <span>Widgets</span>
            </div>
            <div>
              <strong>Smooth</strong>
              <span>Animation</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Contribution() {
  const contributions = [
    {
      title: 'loader_pro_kit',
      description:
        'A modern Flutter loader toolkit built for visually polished loading states and reusable integration.',
      highlights: [
        'Highly customizable loader animations',
        'Plug & play setup for Flutter apps',
        'Open-source & actively maintained',
      ],
      link: 'https://pub.dev/packages/loader_pro_kit',
    },
    {
      title: 'first_run_kit',
      description:
        'A modern onboarding toolkit designed for seamless first-time user experiences in Flutter apps.',
      highlights: [
        'Fully customizable onboarding screens',
        'Easy integration with minimal setup',
        'Optimized for performance & UX',
      ],
      link: 'https://pub.dev/packages/first_run_kit',
    },
  ];

  return (
    <>
      <section id="contribution" className="section contribution-section">
        <div className="container">
          <div className="section-title-wrap">
            <p className="section-kicker">Open Source</p>
            <h2 className="section-title">Contributions</h2>
          </div>

          <div className="contribution-grid">
            {contributions.map((item, index) => (
              <ContributionCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CSS IN SAME FILE */}
      <style>{`
        .contribution-section {
          padding: 60px 20px;
        }

        .contribution-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 25px; /* 🔥 GAP BETWEEN CARDS */
        }
        
      `}</style>
    </>
  );
}

export default Contribution;