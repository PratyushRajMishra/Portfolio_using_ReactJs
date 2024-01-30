import React, { useState } from 'react';

export default function Navbar() {
  const [isNavbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-lg fixed-top ${isNavbarExpanded ? 'navbar-expanded' : ''}`}>
      <style>
        {`
          @media (max-width: 767px) {
            .btn-full-width {
              width: 100%;
              margin-top: 5px; /* Optional: Add some spacing */
            }

            .navbar-expanded {
              background-color: ${isNavbarExpanded ? 'rgba(0, 0, 0, 0.8)' : 'transparent'} !important;
            }

            .d-md-flex {
              flex-direction: row;
              justify-content: space-between;
            }

            .navbar-toggler {
              display: block;
              background-color: transparent !important;
              border: none;
            }

            .navbar-toggler:focus {
              box-shadow: none;
            }

            .navbar-toggler-icon {
              background-color: ${isNavbarExpanded ? 'white' : 'transparent'} !important;
            }

            .navbar-expand-lg .navbar-collapse {
              padding: ${isNavbarExpanded ? '0.5rem 1rem' : '1rem'} !important;
            }
          }
        `}
      </style>
      <div className="container-fluid d-md-flex">
        <div className="d-flex align-items-center">
          <a className="navbar-brand text-white d-none d-md-block" href="#"><strong>{"</Pratyush's Portfolio>"}</strong></a>
        </div>
        <button
          className={`navbar-toggler ${isNavbarExpanded ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavbarExpanded}
          aria-label="Toggle navigation"
          onClick={handleNavbarToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav nav-underline mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link me-4 text-white" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4 text-white" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4 text-white" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4 text-white" href="#">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4 text-white" href="#">Contact</a>
            </li>
          </ul>
          <button className="btn btn-warning btn-full-width" type="button">
            Download Resume
          </button>
        </div>
      </div>
    </nav>
  );
}
