import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { KeyboardArrowUp } from '@mui/icons-material';
import logo from '../assets/logo.png'

function Header() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const location = useLocation();

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

    const handleChange = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <>
            <Navbar bg="transparent" expand="lg" variant="dark">
                <div className='container d-flex justify-content-between'>
                    <Navbar.Brand className='col-1 col-md-2 d-flex align-items-center' href="#home">
                        <Link className='text-decoration-none d-flex' style={{ color: "var(--primary-color)" }} onClick={handleChange} to="/">
                            <img src={logo} alt='logo' width="45px" height="100%"/>
                            <h3>Victor Global Pty Ltd</h3>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle className='col-md-1 col-2' style={{ background: "var(--primary-color)" }} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="col-md-6 d-flex justify-content-between">
                            <Nav.Link style={{ color: location.pathname === '/' ? "var(--primary-color)" : "var(--secondary-color)", borderBottom: location.pathname === '/' ? "2px solid var(--primary-color)" : "none", paddingBottom: location.pathname === '/' ? "2px" : "0" }} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link style={{ color: location.pathname === '/aboutus' ? "var(--primary-color)" : "var(--secondary-color)", borderBottom: location.pathname === '/aboutus' ? "2px solid var(--primary-color)" : "none", paddingBottom: location.pathname === '/aboutus' ? "2px" : "0" }} as={Link} to="/aboutus">About Us</Nav.Link>
                            <Nav.Link style={{ color: location.pathname === '/services' ? "var(--primary-color)" : "var(--secondary-color)", borderBottom: location.pathname === '/services' ? "2px solid var(--primary-color)" : "none", paddingBottom: location.pathname === '/services' ? "2px" : "0" }} as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link style={{ color: location.pathname === '/contactus' ? "var(--primary-color)" : "var(--secondary-color)", borderBottom: location.pathname === '/contactus' ? "2px solid var(--primary-color)" : "none", paddingBottom: location.pathname === '/contactus' ? "2px" : "0" }} as={Link} to="/contactus">Contact Us</Nav.Link>
                            {/* <Link className='text-decoration-none my-1' to="/requestquote">
                                <button className='primary-btn d-flex align-items-center'>Request Quote <ArrowOutward /></button>
                            </Link> */}
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
