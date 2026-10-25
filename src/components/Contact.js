import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-orbit" aria-hidden="true">LET&apos;S MAKE IT REAL · LET&apos;S MAKE IT REAL · </div>
      <div className="container contact-layout">
        <div className="contact-copy" data-reveal>
          <p className="section-kicker"><span>05</span> Have a project?</p>
          <h2>Let&apos;s build something<br /><em>worth remembering.</em></h2>
          <p>Tell me what you&apos;re exploring, building, or trying to improve. I&apos;ll reply with thoughts, questions, and a clear next step.</p>
          <a href="mailto:pratyushrajmishra70@gmail.com" className="email-link">pratyushrajmishra70@gmail.com ↗</a>
        </div>
        <div className="contact-form-wrap" data-reveal><ContactForm /></div>
      </div>
      <footer className="container site-footer">
        <span>© {new Date().getFullYear()} Pratyush Raj</span>
        <span>New Delhi, India · IST</span>
        <div><a href="https://github.com/PratyushRajMishra" target="_blank" rel="noopener noreferrer"><FaGithub /></a><a href="https://www.linkedin.com/in/pratyush-raj-/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></div>
      </footer>
    </section>
  );
}

export default Contact;
