import React, { useState } from 'react';
import { aboutUsPageData }  from '../data/Data';

const AboutUs = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleExpand = (title) => {
    setExpandedSections(prevState => ({
      ...prevState,
      [title]: !prevState[title]
    }));
  };

  return (
    <div className='container'>
      <div className="row align-items-center ">
        <div className="col-md-6">
          <h2 className='service-heading'>{aboutUsPageData.welcomeMessage}</h2>
          <p className="service-description text-center">{aboutUsPageData.description}</p>
        </div>
        <div className="col-md-6">
          <img src={aboutUsPageData.image} alt={aboutUsPageData.welcomeMessage} width="100%" />
        </div>
      </div>
      <div className='row'>
        {aboutUsPageData.sections.map(section => (
          <div className='col-lg-3 col-md-6 col-sm-6 col-12 my-3' key={section.title}>
            <div className='aboutus-container shadow'>
              <img src={section.image} alt={section.title} width="100%" height="200px" />
              <h2 className='aboutus-title'>{section.title}</h2>
              <p className='aboutus-description'>
                {expandedSections[section.title] ? section.content : `${section.content.substring(0, 150)}...`}
                <br/>
                <button className='aboutus-button' onClick={() => toggleExpand(section.title)}>
                  {expandedSections[section.title] ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='aboutus-calltoaction d-flex align-items-center justify-content-center'>
        <p style={{maxWidth:"500px"}}>{aboutUsPageData.callToAction}</p>
      </div>
    </div>
  );
}

export default AboutUs;
