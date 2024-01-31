import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url('https://pratyushrajmishra.github.io/pratyushrajmishra_website/assets/service.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const socialIconStyle = {
        fontSize: '2.0em', // Adjust the font size as needed
        margin: '0 15px', // Adjust the margin between icons
        cursor: 'pointer', // Add a pointer cursor for better UX
        transition: 'transform 0.3s ease', // Smooth transition for size change
    };

    return (
        <div className='' style={backgroundStyle}>
            <div>
                <h1 className="display-3 text-white text-center" style={{ fontFamily: 'cursive' }}>Pratyush Raj</h1>
            </div>
            <div>
                <h3 className="text-white text-center" style={{ fontSize: '17px', fontFamily: 'monospace' }}>I'M A PASSIONATE SOFTWARE DEVELOPER FROM INDIA.</h3>
            </div>
            <div className='social-icon mt-3 text-white text-center'>
                <FaFacebook
                    style={socialIconStyle}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <FaLinkedin
                    style={socialIconStyle}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <FaGithub
                    style={socialIconStyle}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
            </div>
        </div>
    );
}

export default Home;
