import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaLinkedinIn, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { SiIndeed } from 'react-icons/si';
import ContactForm from './ContactForm';

function Contact() {
  const contacts = [
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Gorakhpur, UP, IN, 273001' },
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
          <a href="https://www.facebook.com/pratyushraj.mishra.79/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/__royal__bhumihar__/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/_Q_matrix" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="X">
            <FaXTwitter />
          </a>
          <a
            href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage&_ga=2.60316969.56304579.1706941903-546330254.1706848408"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Indeed"
          >
            <SiIndeed />
          </a>
        </div>

        <p className="copyright-text">© Copyright PratyushRajMishra. All Rights Reserved</p>
      </div>
    </section>
  );
}

export default Contact;
