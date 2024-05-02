import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { footerContent } from '../data/Data';

// import { ArrowOutward } from '@mui/icons-material';

function Footer() {
    const handleChange = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <footer className="footer">
            <div className="container mt-5">
                <div className="row d-flex align-items-center">
                    <Link className='text-decoration-none d-flex' style={{ color: "var(--primary-color)" }} onClick={handleChange} to="/">
                    <img src={logo} alt='logo' width="45px" height="100%"/>
                        <h3>Victor Global Pty Ltd</h3>
                    </Link>
                    <div className='col-md-6 my-3'>
                        <h2 className='footer-heading'>{footerContent.address.title}</h2>
                        {footerContent.address.items.map((item, index) => (
                            <>
                                <div className='footer-list d-flex gap-2' key={index}>
                                    <item.icon />
                                    <p >{item.value}</p>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="col-md-2 my-3">
                        <h4 className='footer-heading'>Pages</h4>
                        {Object.entries(footerContent.pages).map(([key, value]) => (
                            <div key={key}><Link onClick={handleChange} className='footer-list' to={value}>{key}</Link></div>
                        ))}
                    </div>
                    {/* <div className="col-md-4 my-3">
                        <h4 className='footer-heading'>{footerContent.quote.title}</h4>
                        <p className='footer-list'>{footerContent.quote.description}</p>
                        <Link onClick={handleChange} className='text-decoration-none' to="/requestquote"><button className='primary-btn d-flex align-items-center'>Request Quote <ArrowOutward /></button></Link>

                    </div> */}
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between">
                        <div className='footer-copyright text-center' dangerouslySetInnerHTML={{ __html: footerContent.copyright }} />
                        <div className='footer-copyright text-center' dangerouslySetInnerHTML={{ __html: footerContent.poweredBy }} />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
