import React, { useState } from 'react';
import Imagecareer from '../src/assets/Careers/careers.jpeg'
import HexagonImage from '../assets/careers/careers.jpg';

const FlexibleAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionItems = [
    {
      title: "Expect a better tomorrow",
      content: "Sigma Technology contributes to a better tomorrow by driving education and innovation development. We focus our sustainability work in several areas, based on the significance of economic, environmental, and social impacts as well as influence on business operations."
    },
    {
      title: "Engineering the digital revolution",
      content: "Our main driving force is to create a better tomorrow. We have great people with great ideas that drive development forward, fulfilling our main goal of making technology usable."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="flexible-accordion py-16">
      <div className="container mx-auto px-4">
        <div className="row flex flex-col md:flex-row">
          {/* Left Column - Content */}
          <div className="col-md-5 col-xs-12 w-full md:w-5/12 mb-8 md:mb-0 md:pr-8">
            <h3 className="title text-7xl font-bold mb-4 uppercase">Focus on people</h3>
            <p className="subtitle text-lg mb-8 font-medium">
              Enjoy working in a respectful environment where your personality, talent, and curiosity come first.
            </p>
            
            {/* Mobile Image */}
            <img 
              src={HexagonImage}
              alt="Careers at our company"
              className="w-full mb-8 md:hidden rounded-lg shadow-md"
              loading="lazy"
            />
            
            {/* Accordion */}
            <div className="accordion border-t border-gray-200">
              {accordionItems.map((item, index) => (
                <div key={index} className="accordion__item border-b border-gray-200">
                  <div 
                    className={`accordion__title flex justify-between items-center py-4 cursor-pointer ${activeAccordion === index ? 'accordion-active' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="accordion__title-text font-medium text-4xl capitalize">
                      {item.title}
                    </span>
                    <div className={`accordion__arrow transition-transform duration-300 ${activeAccordion === index ? 'accordion__rotate rotate-180' : ''}`}>
                      <span className="accordion__arrow-item">
                        <img 
                          src="https://sigmatechnology.com/content/themes/sigma/img/arr-acordion.svg?x25367" 
                          alt="arrow" 
                          className="w-4 h-4"
                          loading="lazy"
                        />
                      </span>
                    </div>
                  </div>
                  <div 
                    className={`accordion__content overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-96 pb-4' : 'max-h-0'}`}
                  >
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Career Image */}
          <div className="col-md-7 col-xs-12 w-full md:w-7/12 relative hidden md:block">
            <div className="h-full flex items-center justify-center">
              <img 
                src={HexagonImage}
                alt="Careers at our company"
                className="w-full max-w-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibleAccordion;