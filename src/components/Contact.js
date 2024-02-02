import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaLinkedinIn, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { SiIndeed } from 'react-icons/si';

function Contact() {
    return (
        <div className='container'>
            <div className='container' style={{ marginTop: '5rem' }}>
                <h1 className='text-center display-2' style={{ fontFamily: 'serif' }}>Contact</h1>
            </div>
            <div className="card mb-3 border-0">
                <p className='text-center' style={{ fontFamily: 'fantasy', fontSize: '20px', color: 'grey' }}>
                    "Get in touch with me! I'd love to hear from you."
                </p>
                <div className="card-body">
                    <div className="row">
                        {/* Location */}
                        <div className="col text-center p-4">
                            <FaMapMarkerAlt className="icon" style={{ fontSize: '2.0rem', color: 'black' }} />
                            <p className="card-text mt-3">Gkp, UP, IN, 273001</p>
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
            <div className="social-icons text-center mt-5">
                <a href="https://www.linkedin.com/" className="social-icon mx-2"><FaLinkedinIn className="icon" style={{ fontSize: '1.5rem' }} /></a>
                <a href="https://github.com/" className="social-icon mx-2"><FaGithub className="icon" style={{ fontSize: '1.5em' }} /></a>
                <a href="https://www.facebook.com/" className="social-icon mx-2"><FaFacebook className="icon" style={{ fontSize: '1.5rem' }} /></a>
                <a href="https://www.instagram.com/" className="social-icon mx-2"><FaInstagram className="icon" style={{ fontSize: '1.5rem' }} /></a>
                <a href="https://twitter.com/" className="social-icon mx-2"><FaXTwitter className="icon" style={{ fontSize: '1.5rem' }} /></a>
                <a href="https://www.indeed.com/" className="social-icon mx-2"><SiIndeed className="icon" style={{ fontSize: '1.5rem' }} /></a>
            </div>
            <div>
                <p className='text-center mt-3' style={{ fontSize: '13px', fontFamily: 'monospace', color: 'grey' }}>© Copyright PratyushRajMishra. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Contact;
