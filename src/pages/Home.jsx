import React from 'react'
import { homePageData } from '../data/Data';
import { Link } from 'react-router-dom';
import { ArrowOutward } from '@mui/icons-material';


function Home() {

  const handleChange = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className='container'>
      <div className="row align-items-center ">
        <div className="col-lg-5 col-md-12 my-3">
          <h2 className='home-heading'>{homePageData.welcomeMessage}</h2>
          <h2 className="home-slogan">{homePageData.description}</h2> 

        </div>
        <div className="col-lg-7 col-md-12 my-3">
          <img src={homePageData.image} alt={homePageData.welcomeMessage} width="100%" />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 my-3'>
          <h2 className='home-heading'>{homePageData.overview.title}</h2>
          <p className='home-description' style={{textAlign:"justify"}} dangerouslySetInnerHTML={{ __html: homePageData.overview.description }} />
        </div>

        {/* <div className='col-md-4 my-3'>
          <div className='home-quote shadow'>
            <div className='col-md-12'>
              <h2 className='home-heading'>{homePageData.quote.title}</h2>
              <p className='home-description'>{homePageData.quote.description}</p>
            </div>
            <div className='col-md-12 d-flex align-items-center justify-content-center'>
              <Link onClick={handleChange} className='text-decoration-none' to="/requestquote">
                <button className='primary-btn d-flex align-items-center'>Request Quote <ArrowOutward /></button>
              </Link>
            </div>
          </div>
        </div> */}

        <div className='col-md-12 my-3'>
          <div className="home-industry shadow">
            <h3 className='home-heading'>{homePageData.industry.title}</h3>
            <p className='home-description'>{homePageData.industry.description}</p>
            <div className='row'>
              {homePageData.industry.sectors.map(sector => (
                <div className='col-lg-4 col-md-6 my-3' key={sector.name}>
                  <div className='home-industry-card'>
                    <h4 className='home-subheading'> {sector.icon}</h4>
                    <h4 className='home-subheading'>{sector.name}</h4>
                    <p className='home-description'>{sector.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='col-md-12 my-3'>
          <div className="home-solutions  shadow">
            <h3 className='home-heading'>{homePageData.solutions.title}</h3>
            <p className='home-description'>{homePageData.solutions.description}</p>
            <div className='row'>
              {homePageData.solutions.sectors.map(sector => (
                <div className='col-lg-12 col-md-12 my-3 px-4' key={sector.name}>
                  <div className='home-solutions-card row shadow'>
                    <div className='col-lg-6 col-md-12 d-flex flex-column align-tems-center justify-content-center my-3'>
                      <img className='home-solutions-image' src={sector.image} alt={sector.name} width="100%" />
                    </div>
                    <div className='col-lg-6 col-md-12 d-flex flex-column align-tems-center justify-content-center my-3'>
                      <h4 className='home-subheading'>{sector.title}</h4>
                      <p className='home-description'>{sector.description}</p>
                      {sector.title === 'Logistics Solutions' && (
                      <Link onClick={handleChange} className='text-decoration-none' to="/requestquote">
                        <button className='primary-btn d-flex align-items-center'>Request Quote <ArrowOutward /></button>
                      </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='row my-5 justify-content-center' >
        <h2 className='home-heading'>{homePageData.globalSupportPartners.title}</h2>
      {homePageData.globalSupportPartners.countries.map((country, index) => (
            <div className='col-lg-4 col-md-6 my-3' key={index}>
              <div className='w-100 home-country-card'>
                <img className='rounded' src={country.image} alt={country.description} width="100%" />
                <h2 className='home-subheading mt-2'>{country.title}</h2>
                <p className='home-description'>{country.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home