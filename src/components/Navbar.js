import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleDownloadResume = () => {
    // Assuming your resume is named "Pratyush_Raj_Resume.pdf"
    const resumeUrl = '/images/Pratyush_Raj_Resume.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank'; // Open the link in a new tab
    link.download = 'Pratyush_Resume.pdf'; // Set the download attribute
    link.click(); // Trigger the click event to start the download
  };

  return (
    <div>
      <nav className="navbar navbar-dark" style={{ backgroundColor: '#000000d6' }}>
        <div className="container-fluid position-relative d-flex align-items-center">
          {/* Green dot circles */}
          <div className="d-flex align-items-center">
            <div className="green-dot left-dot"></div>
            <div className="green-dot right-dot"></div>
          </div>

          {/* Center spacer to push items to the right */}
          <div className="flex-grow-1"></div>

          {/* Download Resume Button */}
          <button className="btn btn-success me-2" style={{margin: '5px'}} type="button" onClick={handleDownloadResume}>
            Download Resume
          </button>

          {/* Menu button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style={{ maxWidth: '70%' }}>
            <div className="offcanvas-header">
              <button className="btn btn-warning mt-1" type="button" onClick={handleDownloadResume}>
                Download Resume
              </button>
              <button type="button" className="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mb-2">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={100}
                    onClick={scrollToTop}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={100}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={100}
                  >
                    Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={100}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link disabled"
                    aria-disabled="true"
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={100}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link disabled"
                    aria-disabled="true"
                    activeClass="active"
                    to="blogs"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={100}
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
            <hr></hr>
            <div className='container text-center mb-4'>copyright©pratyushraj</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
