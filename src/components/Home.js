import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
    const socialButtonsContainer = {
        display: 'flex',
        gap: '20px', // Adjust the gap between buttons
    };

    const socialButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderRadius: '10px',
        background: 'transparent', // Background color with transparency
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
        <div className="card mt-3 container-sm" style={{ background: 'transparent', border: 'none', position: 'relative' }}>
            <img
                src="images/cover.png"
                alt="Background"
                className="background-image"
            />
             <div className="card-body d-flex align-items-center justify-content-between" style={{ position: 'relative', zIndex: 2, height: '20vh' }}>
                <div className="d-flex align-items-center">
                    <div className="mr-3">
                        <img
                            src="images/picture.png"
                            alt="Profile"
                            className="rounded-circle"
                            style={{
                                width: '130px',
                                height: '130px',
                                objectFit: 'cover',
                                border: '5px solid white', // White border
                                borderRadius: '50%' // Circular border
                            }}
                        />
                    </div>
                    <div style={{ marginLeft: '20px' }}> {/* Add margin-left to the text container */}
                        <h5 className="card-title mb-1 title">Pratyush Raj</h5>
                        <h6 className="card-subtitle mb-2 text-light"> @Flutter Developer</h6>
                    </div>
                </div>
                <div className="d-none d-md-flex" style={socialButtonsContainer}> {/* Hide on small screens */}
                    <a
                        href="https://www.linkedin.com/in/pratyush-raj-/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='social-button'
                        style={socialButtonStyle}
                        onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.2)'} // Increase size on hover
                        onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'} // Reset size on hover out
                    >
                        <FaLinkedin style={socialIconStyle} />
                        Linkedin
                    </a>
                    <a
                        href="https://github.com/PratyushRajMishra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='social-button'
                        style={socialButtonStyle}
                        onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.2)'} // Increase size on hover
                        onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'} // Reset size on hover out
                    >
                        <FaGithub style={socialIconStyle} />
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
