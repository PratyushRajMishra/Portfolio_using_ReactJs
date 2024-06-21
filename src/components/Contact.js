import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaLinkedinIn, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { SiIndeed } from 'react-icons/si';
import ContactForm from './ContactForm'

function Contact() {
    return (
        <div className='container' id="contact">
            <div className='container' style={{ marginTop: '5rem' }}>
                <h1 className='text-center display-2' style={{ fontFamily: 'serif' }}>Contact</h1>
            </div>
            <div className="card mb-5 border-0" style={{ backgroundColor: 'whitesmoke' }}>
                <p className='text-center' style={{ fontFamily: 'fantasy', fontSize: '20px', color: 'grey' }}>
                    "Get in touch with me! I'd love to hear from you."
                </p>
                <div className="card-body">
                    <div className="row">
                        {/* Location */}
                        <div className="col text-center p-4">
                            <FaMapMarkerAlt className="icon" style={{ fontSize: '2.0rem', color: 'black' }} />
                            <p className="card-text mt-3">Gorakhpur, UP, IN, 273001</p>
                        </div>

                        {/* Email */}
                        <div className="col text-center p-4">
                            <FiMail className="icon" style={{ fontSize: '2.0rem', color: 'black' }} />
                            <p className="card-text mt-3">pratyushrajmishra70@gmail.com</p>
                        </div>

                        {/* WhatsApp */}
                        <div className="col text-center p-4">
                            <FaWhatsapp className="icon" style={{ fontSize: '2.0rem', color: 'black' }} />
                            <p className="card-text mt-3">+91 9454969946</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ContactForm />
            </div>
            <div className="social-icons text-center mt-5">
                <a href="https://www.linkedin.com/in/pratyush-raj-/" className="social-icon mx-2" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="icon" style={{ fontSize: '1.5rem' }} />
                </a>
                <a href="https://github.com/PratyushRajMishra" className="social-icon mx-2" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" style={{ fontSize: '1.5em' }} />
                </a>
                <a href="https://www.facebook.com/pratyushraj.mishra.79/" className="social-icon mx-2" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="icon" style={{ fontSize: '1.5rem' }} />
                </a>
                <a href="https://www.instagram.com/__royal__bhumihar__/" className="social-icon mx-2" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon" style={{ fontSize: '1.5rem' }} />
                </a>
                <a href="https://twitter.com/_Q_matrix" className="social-icon mx-2" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="icon" style={{ fontSize: '1.5rem' }} />
                </a>
                <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage&_ga=2.60316969.56304579.1706941903-546330254.1706848408" className="social-icon mx-2" target="_blank" rel="noopener noreferrer">
                    <SiIndeed className="icon" style={{ fontSize: '1.5rem' }} />
                </a>
            </div>

            <div>
                <p className='text-center mt-3' style={{ fontSize: '13px', fontFamily: 'monospace', color: 'grey' }}>© Copyright PratyushRajMishra. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Contact;
