import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import logo from '../assets/VictorGlobalLogo.png';
import { ArrowOutward, KeyboardArrowUp } from '@mui/icons-material';

function Header() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleChange = () =>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
      }

    return (
        <>
            <Navbar bg="transparent" expand="lg" variant="dark">
                <div className='container d-flex justify-content-between'>
                    <Navbar.Brand className='col-1 col-md-2' href="#home">
                    <Link className='text-decoration-none' style={{color:"var(--primary-color)"}} onClick={handleChange} to="/">
                    {/* <h2>Victor Global Pty Ltd</h2> */}
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle className='col-md-1 col-2' style={{ background: "var(--primary-color)" }} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="col-md-9 d-flex justify-content-between">
                            <Nav.Link style={{color:"var(--secondary-color)"}} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link style={{color:"var(--secondary-color)"}} as={Link} to="/aboutus">About Us</Nav.Link>
                            <Nav.Link style={{color:"var(--secondary-color)"}} as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link style={{color:"var(--secondary-color)"}} as={Link} to="/contactus">Contact Us</Nav.Link>
                            <Link className='text-decoration-none' to="/requestquote">
                                <button className='primary-btn d-flex align-items-center'>Request Quote <ArrowOutward /></button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            {showScrollToTop && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <KeyboardArrowUp />
                </div>
            )}
        </>
    );
}

export default Header;
