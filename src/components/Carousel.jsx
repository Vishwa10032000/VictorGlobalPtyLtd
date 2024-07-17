import React, { useState, useEffect, useRef, useCallback } from 'react';
import FastMovingConsumerGoodsImage from '../assets/FastMovingConsumerGoods.jpg';
import GlobalSourcingImage from '../assets/GlobalSourcing.jpg';
import RetailGoodsImage from '../assets/RetailGoods.jpg';
import PharmaceuticalProductsImage from '../assets/PharmaceuticalProducts.jpg';
import LifestyleandFashionGoodsImage from '../assets/LifestyleandFashionGoods.jpg';
import TechnologyProductsImage from '../assets/TechnologyProducts.jpg';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

const CarouselSlider = () => {
  const initialItems = [
    { id: 1, image: GlobalSourcingImage, title: 'Global Sourcing', type: 'Solution', description: 'Effective global product sourcing is essential for securing a competitive edge, enabling you to import top-notch, cost-effective goods to attract customer base. Through strategic partnerships in key regions such as Malaysia, China and India, Victor Global facilitates connections with premier suppliers to address your product sourcing challenges effectively.' },
    { id: 2, image: FastMovingConsumerGoodsImage, title: 'Fast-Moving Consumer Goods (FMCG)', type: 'Solution', description: 'We understand the fast-paced nature of the FMCG industry and offer efficient transportation and distribution solutions to ensure your products reach shelves on time, every time.' },
    { id: 3, image: RetailGoodsImage, title: 'Retail Goods', type: 'Solution', description: 'From clothing and electronics to home goods and beyond, we specialize in handling retail goods of all types, offering reliable shipping and warehousing solutions to keep your supply chain running smoothly.' },
    { id: 4, image: PharmaceuticalProductsImage, title: 'Pharmaceutical Products', type: 'Solution', description: 'With strict regulations and sensitive products, the pharmaceutical industry requires precise handling and temperature-controlled environments. We provide specialized logistics solutions to ensure the integrity and security of your pharmaceutical shipments from origin to destination.' },
    { id: 5, image: LifestyleandFashionGoodsImage, title: 'Lifestyle and Fashion Goods', type: 'Solution', description: 'Fashion and lifestyle products demand attention to detail and timely delivery. Our expertise in handling delicate items and our commitment to reliability make us the ideal partner for transporting your fashion and lifestyle goods.' },
    { id: 6, image: TechnologyProductsImage, title: 'Technology Products', type: 'Solution', description: 'Innovation moves quickly in the technology sector, and so do we. Whether it`s the latest gadgets or complex electronic components, we offer tailored logistics solutions to ensure the safe and timely delivery of your technology products.' },
  ];

  const [sliderItems, setSliderItems] = useState(initialItems);
  const sliderRef = useRef(null);

  const moveSlider = useCallback((direction) => {
    let newItems = [...sliderItems];
    if (direction === 'next') {
      const firstItem = newItems.shift();
      newItems.push(firstItem);
      sliderRef.current.classList.add('next');
    } else {
      const lastItem = newItems.pop();
      newItems.unshift(lastItem);
      sliderRef.current.classList.add('prev');
    }
    setSliderItems(newItems);
  }, [sliderItems]);

  useEffect(() => {
    const handleAnimationEnd = () => {
      sliderRef.current.classList.remove('next', 'prev');
    };

    const sliderElement = sliderRef.current;
    sliderElement.addEventListener('animationend', handleAnimationEnd);

    return () => {
      sliderElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlider('next');
    }, 8000); // Change slides every 8 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [moveSlider]);

  return (
    <div className="global-background">
      <div className="slider" ref={sliderRef}>
        <div className="list">
          {sliderItems.map((item, index) => (
            <div key={item.id} className={`item ${index === 0 ? 'active' : ''}`}>
              <img src={item.image} alt={item.title} />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="type">{item.type}</div>
                <div className="description">{item.description}</div>
                <div className="buttons mt-3">
                  <button className='primary-btn'>See More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='thumbnail'>
          {sliderItems.map((item, index) => (
            <div key={item.id} className={`item ${index === 1 ? 'active' : ''}`}>
              <img src={sliderItems[(index + 1) % sliderItems.length].image} alt={sliderItems[(index + 1) % sliderItems.length].title} />
            </div>
          ))}
        </div>
        <div className='nextPrevArrows'>
          <button className='prev' onClick={() => moveSlider('prev')}><ArrowLeft /></button>
          <button className='next' onClick={() => moveSlider('next')}><ArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
