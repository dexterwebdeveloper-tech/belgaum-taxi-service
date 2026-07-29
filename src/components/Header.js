
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen] = useState(false);

  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  // ✅ Auto close on route change (important fix)
  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  return (
    <header>

      {/* Header Top */}
      <div className="header-top bgg-darkk pt-md-2">
        <div className="container">
          <div className="row justify-content-center justify-content-xl-between align-items-center">

            <div className="col-auto">
              <div className="header-top-contact">
                <ul className='anchor d-md-flex align-items-center'>

                  <li className='px-md-5 fw-bold'>
                    <a className='text-white' href="tel:+918722158435">
                      <i className="fas fa-phone-volume text-white"></i> +91 8722158435
                    </a>
                  </li>

                  {/* <li className='px-md-5 fw-bold'>
                    <a className='text-white' href="tel:+919552937070">
                      <i className="fas fa-phone-volume text-white"></i> +91 9552937070
                    </a>
                  </li> */}

                  <li className='px-md-5'>
                    <a className='text-white' href="mailto:booking@belgaumtaxiservice.com">
                      <i className="far fa-envelope text-white"></i>
                      <span className='text-white fw-bold'>
                        booking@belgaumtaxiservice.com
                      </span>
                    </a>
                  </li>

                  {/* Social Media Links */}
                  <li className="d-flex gap-3">
                    <a href="https://www.instagram.com/aaradhyatravels99/" target="_blank" rel="noreferrer">
                      <i className="fab fa-instagram text-white"></i>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=61590624514268" target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook-f text-white"></i>
                    </a>

                    <a href="https://x.com/aaradhyatravel9" target="_blank" rel="noreferrer">
                      <i className="fab fa-twitter text-white"></i>
                    </a>

                    <a href="https://www.pinterest.com/aaradhyatravels1111/" target="_blank" rel="noreferrer">
                      <i className="fab fa-pinterest-p text-white"></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-navigation">

        {/* ✅ controlled navbar */}
        <Navbar expand="lg" expanded={isNavOpen}>

          <Container>

            <Link to="/" onClick={closeNav}>
              <img src="/images/logo.jpg" className='logoo' alt="logo" />
            </Link>

            <Navbar.Toggle aria-controls="main_nav" onClick={toggleNav}>
              <i className="fas fa-bars darkcolorr"></i>
            </Navbar.Toggle>

            <Navbar.Collapse id="main_nav">

              <Nav className="mx-auto">

                <Nav.Link as={Link} to="/" onClick={closeNav} className='fw-bold nav-item'>
                  Home
                </Nav.Link>

                <NavDropdown title="About Us" id="about-us-dropdown" className='fw-bold'>

                  <NavDropdown.Item as={Link} to="/about-us" onClick={closeNav}>
                    About Us
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/term-condition" onClick={closeNav}>
                    Term & Condition
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/privacy-policy" onClick={closeNav}>
                    Privacy Policy
                  </NavDropdown.Item>

                </NavDropdown>

                <Nav.Link as={Link} to="/services" onClick={closeNav} className='fw-bold nav-item'>
                  Services
                </Nav.Link>

                <Nav.Link as={Link} to="/our-fleet" onClick={closeNav} className='fw-bold nav-item'>
                  Our Fleet
                </Nav.Link>

                <Nav.Link as={Link} to="/packages" onClick={closeNav} className='fw-bold nav-item'>
                  Packages
                </Nav.Link>

                <Nav.Link as={Link} to="/our-network" onClick={closeNav} className='fw-bold nav-item'>
                  Our Network
                </Nav.Link>

                <Nav.Link as={Link} to="/booking" onClick={closeNav} className='fw-bold nav-item'>
                  Online Booking
                </Nav.Link>

                <Nav.Link as={Link} to="/gallery" onClick={closeNav} className='fw-bold nav-item'>
                  Gallery
                </Nav.Link>

                <Nav.Link as={Link} to="/career" onClick={closeNav} className='fw-bold nav-item'>
                  Career
                </Nav.Link>

                <NavDropdown title="Contact Us" id="contact-dropdown" className='fw-bold'>

                  <NavDropdown.Item as={Link} to="/contact-us" onClick={closeNav}>
                    Contact Us
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/enquiry" onClick={closeNav}>
                    Enquiry
                  </NavDropdown.Item>

                </NavDropdown>

              </Nav>

            </Navbar.Collapse>

          </Container>
        </Navbar>
      </div>

      {/* Search Area */}
      {isSearchOpen && (
        <div className="search-area">
          <form action="#">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Type Keyword..." />
              <button type="submit" className="search-icon-btn">
                <i className="far fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      )}

    </header>
  );
};

export default Header;