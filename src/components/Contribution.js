import React from 'react';
import { FiExternalLink, FiCheckCircle, FiPackage, FiCode } from 'react-icons/fi';

function Contribution() {
  const highlights = ['Customizable loader animations', 'Simple setup for Flutter apps', 'Open-source package on pub.dev'];

  return (
    <section id="contribution" className="section contribution-section">
      <div className="container">
        <div className="section-title-wrap">
          <p className="section-kicker">Open Source</p>
          <h2 className="section-title">Contribution</h2>
        </div>

        <article className="glass-panel contribution-card">
          <div className="contribution-content">
            <p className="contribution-label">Featured Flutter Package</p>
            <h3>loader_pro_kit</h3>
            <p>
              A modern Flutter loader toolkit built for visually polished loading states and reusable integration.
            </p>

            <div className="contribution-meta">
              <span className="meta-pill">
                <FiPackage />
                Package
              </span>
              <span className="meta-pill">
                <FiCode />
                Open Source
              </span>
            </div>

            <div className="contribution-highlights">
              {highlights.map((item) => (
                <p key={item}>
                  <FiCheckCircle />
                  <span>{item}</span>
                </p>
              ))}
            </div>

            <a
              className="primary-cta contribution-cta"
              href="https://pub.dev/packages/loader_pro_kit"
              target="_blank"
              rel="noopener noreferrer"
            >
              View On pub.dev <FiExternalLink />
            </a>
          </div>

          <div className="contribution-visual" aria-hidden="true">
            <div className="visual-glow"></div>
            <div className="visual-ring ring-one"></div>
            <div className="visual-ring ring-two"></div>
            <div className="visual-ring ring-three"></div>
            <div className="contribution-mini-card">
              <h4>loader_pro_kit</h4>
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
      </div>
    </section>
  );
}

export default Contribution;
