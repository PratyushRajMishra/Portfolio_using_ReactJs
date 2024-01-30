import React from 'react';

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

    return (
        <div style={backgroundStyle}>
            <div>
                <h1 className="display-3 text-white" style={{ fontFamily: 'cursive' }}>Pratyush Raj</h1>
            </div>
            <div>
                <h3 className="text-white text-center" style={{ fontSize: '17px', fontFamily: 'monospace' }}>I'M A PASSIONATE SOFTWARE DEVELOPER FROM INDIA.</h3>
            </div>
        </div>
    );
}

export default Home;
