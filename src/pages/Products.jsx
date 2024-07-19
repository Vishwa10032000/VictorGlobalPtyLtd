import React, { useRef, useEffect } from 'react';
import { ProductsPageData } from '../data/Data';
export default function Products() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (elementsRef.current) {
        elementsRef.current.forEach(element => {
          if (element) {
            observer.unobserve(element);
          }
        });
      }
    };
  }, []);

  return (
    <div className='container mt-5'>
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h2 className='service-heading'>{ProductsPageData.title}</h2>
          <p className="service-description text-center">{ProductsPageData.description}</p>
        </div>
        <div className="col-md-6">
          <img className="image-shadow" src={ProductsPageData.image} alt={ProductsPageData.title} width="100%" />
        </div>
      </div>
      <div className='row d-flex align-items-center'>
        {ProductsPageData.sectors.map((sector, index) => (
          <div className='row d-flex align-items-center' key={sector.name}>
            {index % 2 === 0 ? (
              <>
                <div className='col-md-6 d-flex  my-5'>
                  <div className='mt-5 animated-slide-left' ref={el => (elementsRef.current[index * 2] = el)}>
                    <img src={sector.imageOne} className='products-images' alt={sector.name} width="100%" />
                    <img src={sector.imageTwo} className='products-images' alt={sector.name} width="100%" />
                  </div>
                  <div className='vertical-line'></div>
                  <div className='mb-5 animated-slide-right' ref={el => (elementsRef.current[index * 2 + 1] = el)}>
                    <img src={sector.imageThree} className='products-images' alt={sector.name} width="100%" />
                    <img src={sector.imageFour} className='products-images' alt={sector.name} width="100%" />
                  </div>
                </div>
                <div className='col-md-6  my-5'>
                  <h2 className='service-heading'>{sector.name}</h2>
                  <p className="service-description text-center">{sector.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className='col-md-6  my-5'>
                  <h2 className='service-heading'>{sector.name}</h2>
                  <p className="service-description text-center">{sector.description}</p>
                </div>
                <div className='col-md-6 d-flex  my-5'>
                  <div className='mt-5 animated-slide-left' ref={el => (elementsRef.current[index * 2] = el)}>
                    <img src={sector.imageOne} className='products-images' alt={sector.name} width="100%" />
                    <img src={sector.imageTwo} className='products-images' alt={sector.name} width="100%" />
                  </div>
                  <div className='vertical-line'></div>
                  <div className='mb-5 animated-slide-right' ref={el => (elementsRef.current[index * 2 + 1] = el)}>
                    <img src={sector.imageThree} className='products-images' alt={sector.name} width="100%" />
                    <img src={sector.imageFour} className='products-images' alt={sector.name} width="100%" />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
