import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-lg bg-light">
      <style>
        {`
          @media (max-width: 767px) {
            .btn-full-width {
              width: 100%;
              margin-top: 5px; /* Optional: Add some spacing */
            }
          }
        `}
      </style>
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand" href="#"><strong>{"</Pratyush's Portfolio>"}</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-underline mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link me-4" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4" href="#">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4" href="#">Contact</a>
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
