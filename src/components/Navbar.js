import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-transparent fixed-top">
        <div className="container-fluid">
          {/* Conditional rendering of logo based on screen size */}
          <a className="navbar-brand d-none d-sm-block" href="#"><strong>{"</Pratyush's Portfolio>"}</strong></a>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style={{ maxWidth: '70%' }}>
            <div className="offcanvas-header">
            <button className="btn btn-warning mt-1" type="button">
                Download Resume
              </button>
              {/* <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Pratyush's Portfolio</h5> */}
              <button type="button" className="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mb-2">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blogs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
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
