import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import ContactForm from './ContactForm';

function Contact() {
  const contacts = [
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'New Delhi, INDIA' },
    { icon: <FiMail />, label: 'Email', value: 'pratyushrajmishra70@gmail.com' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+91 9454969946' },
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-title-wrap">
          <p className="section-kicker">Let&apos;s Build Something</p>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-grid">
          {contacts.map((item) => (
            <article key={item.label} className="glass-panel contact-card">
              <div className="contact-icon">{item.icon}</div>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </article>
          ))}
        </div>

        <div className="glass-panel contact-form-wrap">
          <p className="contact-lead">Get in touch. I&apos;d love to hear about your next idea.</p>
          <ContactForm />
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/pratyush-raj-/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/PratyushRajMishra" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        <p className="copyright-text">© Copyright Pratyush Raj. All Rights Reserved</p>
      </div>
    </section>
  );
}

export default Contact;
