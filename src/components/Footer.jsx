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
                    <div className='col-md-4 my-3'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.7456690834615!2d145.16083837530925!3d-37.93637164105423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6151e2737fac3%3A0x495a653ee18fabe5!2sFactory%2027%2F820-828%20Princes%20Hwy%2C%20Springvale%20VIC%203171%2C%20Australia!5e0!3m2!1sen!2sca!4v1715155537076!5m2!1sen!2sca" width="100%" height="100%" className='shadow' title='Location' style={{borderRadius:"20px"}}  allowfullscreen="" loading="lazy"/>
                    </div>
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
