import React from 'react'
import { servicesData } from '../data/Data';


const ServiceCard = ({ title, description, icon: Icon }) => {
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
      <div className="service-card shadow">
        <div className="service-icon">
          <Icon style={{ fontSize: "80px" }}  />
        </div>
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
      </div>
    );
  }
  
  const Services = () => {
    return (
      <div className='container pt-5'>
        <div className="row align-items-center my-5">
        <div className="col-md-5">
          <h2 className='service-heading'>{servicesData.title}</h2>
        </div>
        <div className="col-md-7">
          <img className="image-shadow"  src={servicesData.image} alt={servicesData.title} width="100%" />
        </div>
       
      </div>
        <div className="services-container row ">
          {servicesData.services.map(service => (
            <ServiceCard
              key={service.key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    );
  }
  export default Services;