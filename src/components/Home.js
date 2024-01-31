import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

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

    const socialButtonsContainer = {
        display: 'flex',
        gap: '20px', // Adjust the gap between buttons
        marginTop: '20px', // Adjust the margin between buttons and text
    };

    const socialButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderRadius: '10px',
        background: 'transparent', // Facebook color with transparency
        color: '#fff',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background 0.3s ease', // Add transform property for size change
        border: '1px solid #fff',
        overflow: 'hidden', // Hide overflow for rounded corners
    };

    const socialIconStyle = {
        fontSize: '1.5em', // Adjust the font size as needed
        marginRight: '8px', // Adjust the margin between icon and text
        transition: 'transform 0.3s ease', // Smooth transition for size change
    };

    return (
        <div className='' style={backgroundStyle}>
            <div>
                <h1 className="display-3 text-white text-center" style={{ fontFamily: 'cursive' }}>Pratyush Raj</h1>
            </div>
            <div>
                <h3 className="text-white text-center mt-2" style={{ fontSize: '18px', fontFamily: 'monospace' }}>I'M A PASSIONATE SOFTWARE DEVELOPER FROM INDIA.</h3>
            </div>
            <div style={socialButtonsContainer}>
                <div
                    className='social-button'
                    style={socialButtonStyle}
                    onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.2)'} // Increase size on hover
                    onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'} // Reset size on hover out
                >
                    <FaLinkedin style={socialIconStyle} />
                    Linkedin
                </div>
                <div
                    className='social-button'
                    style={socialButtonStyle}
                    onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.2)'} // Increase size on hover
                    onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'} // Reset size on hover out
                >
                    <FaGithub style={socialIconStyle} />
                    Github
                </div>
            </div>
        </div>
    );
}

export default Home;
