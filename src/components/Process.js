import React from 'react';
import { FiCheck, FiCode, FiCompass, FiLayers, FiRefreshCw } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    icon: <FiCompass />,
    title: 'Understand',
    text: 'Clarify the real problem, the people using the product, and what a successful outcome should feel like.',
    output: 'Problem map',
  },
  {
    number: '02',
    icon: <FiLayers />,
    title: 'Architect',
    text: 'Shape the user flow, data model, component boundaries, and technical decisions before complexity grows.',
    output: 'System blueprint',
  },
  {
    number: '03',
    icon: <FiCode />,
    title: 'Build',
    text: 'Develop in small, testable slices with responsive interfaces and maintainable application logic.',
    output: 'Working product',
  },
  {
    number: '04',
    icon: <FiRefreshCw />,
    title: 'Refine',
    text: 'Test the edge cases, remove friction, improve performance, and polish the details that users notice.',
    output: 'Release-ready build',
  },
];

function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="process-header" data-reveal>
          <div className="section-heading">
            <p className="section-kicker"><span>03</span> How I work</p>
            <h2>From rough idea to<br /><em>reliable product.</em></h2>
          </div>
          <p className="process-intro">My process keeps product thinking and engineering connected. Every phase reduces uncertainty and moves the work toward something useful, understandable, and ready to ship.</p>
        </div>

        <div className="process-console" data-reveal>
          <div className="console-bar">
            <div><i /><i /><i /></div>
            <small>4 phases · one feedback loop</small>
          </div>
          <div className="process-flow">
            {steps.map((step) => (
              <article className="process-step" key={step.number}>
                <div className="step-top"><span>{step.number}</span><i>{step.icon}</i></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <div className="step-output"><FiCheck /><span>{step.output}</span></div>
              </article>
            ))}
          </div>
        </div>

        <div className="engineering-strip" data-reveal>
          <span>THE WORK SHOULD BE</span>
          <strong>Clear enough to understand.</strong>
          <strong>Flexible enough to evolve.</strong>
          <strong>Solid enough to trust.</strong>
        </div>
      </div>
    </section>
  );
}

export default Process;
