import React, { useState, useEffect } from 'react';

const SliderResource = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 0,
      category: "Press Release",
      title: "Sigma Technology Group Ranks Among Sweden's Top 3 Best Employers in 2024",
      description: "Sigma Technology Group has been featured among Sweden's Best Employers for twelve years in a row. In 2024, the company secured the third place.",
      tags: [],
      link: "https://sigmatechnology.com/pressrelease/sigma-technology-group-ranks-among-swedens-top-3-best-employers-in-2024/",
      desktopImage: "https://sigmatechnology.com/content/uploads/2023/11/Hero-for-IL-2-scaled.webp?x25367",
      mobileImage: "https://sigmatechnology.com/content/uploads/2023/11/Hero-for-mob-scaled.webp?x25367"
    },
    {
      id: 1,
      category: "Article",
      title: "Tech Trends 2025: Beyond AI",
      description: "By understanding the significance of these emerging technologies, we can better prepare for the challenges and opportunities that lie ahead.",
      tags: ["AI", "Sustainability"],
      link: "https://sigmatechnology.com/articles/the-tech-trends-2025-beyond-ai/",
      desktopImage: "https://sigmatechnology.com/content/uploads/2024/11/018.jpg?x25367",
      mobileImage: "https://sigmatechnology.com/content/uploads/2024/11/018.jpg?x25367"
    },
    {
      id: 2,
      category: "Interview",
      title: "How can technologies address criminal justice needs?",
      description: "Robin Eklund, AI/ML expert at Sigma Technology Insight Solutions, tells us more about his current assignment at Griffeye, a software helping to solve the crimes in child sexual abuse cases. He explains how such technology helps in crime detection and how it works in practice.",
      tags: ["AI/ML", "Data analytics"],
      link: "https://sigmatechnology.com/interview/how-can-technologies-address-criminal-justice-needs/",
      desktopImage: "https://sigmatechnology.com/content/uploads/2022/08/55-scaled.jpg?x25367",
      mobileImage: "https://sigmatechnology.com/content/uploads/2022/08/55-copy-scaled.jpg?x25367"
    }
  ];

  const goToSlide = (index) => {
    if (index === activeIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((activeIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative slider-resource overflow-hidden h-[809px]">
      {/* Previous button */}
      <button 
        className="sigma-previous slick-arrow absolute left-0 top-1/2 z-[1000] -translate-y-1/2 h-12 w-12 bg-transparent border-none cursor-pointer"
        onClick={prevSlide}
        aria-label="Previous"
      >
        <svg className="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Slides container */}
      <div className="slick-list h-full overflow-hidden">
        <div 
          className="slick-track flex h-full relative"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${activeIndex * (100 / slides.length)}%)`,
            transition: isTransitioning ? 'transform 500ms ease' : 'none'
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slick-slide h-full float-left ${index === activeIndex ? 'slick-current slick-active' : ''}`}
              style={{ width: `${100 / slides.length}%` }}
              role="tabpanel"
              aria-hidden={index !== activeIndex}
              tabIndex={index === activeIndex ? 0 : -1}
            >
              <div className="item h-full w-full">
                <div className="covered-bg h-full relative">
                  {/* Background images */}
                  <div className="bg-cover absolute inset-0 h-full w-full">
                    <img
                      src={slide.desktopImage}
                      alt={slide.title}
                      className="background absolute inset-0 h-full w-full object-cover hidden md:block"
                    />
                    <img
                      src={slide.mobileImage}
                      alt={slide.title}
                      className="background absolute inset-0 h-full w-full object-cover md:hidden"
                    />
                  </div>

                  {/* Content */}
                  <div className="container h-full mx-auto px-4">
                    <div className="row h-full flex items-center">
                      <div className="col-lg-8 w-full lg:w-8/12">
                        <div className="hero-content heigtset h-full flex flex-col justify-center text-white">
                          <p className="category-slider text-lg mb-2">{slide.category}</p>
                          <a 
                            href={slide.link} 
                            className="sl-link block mb-4 no-underline hover:no-underline"
                            tabIndex={index === activeIndex ? 0 : -1}
                          >
                            <h2 className="title text-4xl font-bold mb-4">{slide.title}</h2>
                          </a>
                          
                          {slide.tags.length > 0 && (
                            <ul className="slider-tag flex gap-2 mb-4">
                              {slide.tags.map((tag, i) => (
                                <li key={i} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                                  {tag}
                                </li>
                              ))}
                            </ul>
                          )}
                          
                          <p className="description-slide text-lg mb-6">{slide.description}</p>
                          
                          <a 
                            href={slide.link} 
                            className="slider-link inline-flex items-center text-white no-underline hover:no-underline"
                            tabIndex={index === activeIndex ? 0 : -1}
                          >
                            Read more
                            <svg className="readsvg ml-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M29.3085 16.6383L23.207 27.2065C22.9789 27.6015 22.5575 27.8449 22.1013 27.8448L9.89827 27.8448C9.44226 27.8448 9.0209 27.6015 8.79288 27.2065L2.69132 16.6383C2.46326 16.2433 2.46326 15.7566 2.69133 15.3617L8.79284 4.79343C9.02092 4.39851 9.44235 4.15526 9.89839 4.15531L22.1015 4.15513C22.5575 4.15517 22.9789 4.39847 23.2069 4.79339L29.3087 15.3617C29.5367 15.7567 29.5367 16.2433 29.3087 16.6383L29.3085 16.6383Z" fill="#FF0000" stroke="#FF0000" strokeWidth="1.2"/>
                              <path d="M14.8535 12.3892L15.6333 11.6614L19.7063 16.0253L15.6333 20.3892L14.8535 19.6614L18.247 16.0253L14.8535 12.3892Z" fill="white"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next button */}
      <button 
        className="sigma-next slick-arrow absolute right-0 top-1/2 z-[1000] -translate-y-1/2 h-12 w-12 bg-transparent border-none cursor-pointer"
        onClick={nextSlide}
        aria-label="Next"
      >
        <svg className="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dots navigation */}
      <ul className="slick-dots absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2" role="tablist">
        {slides.map((slide, index) => (
          <li 
            key={slide.id} 
            className={index === activeIndex ? 'slick-active' : ''}
            role="presentation"
          >
            <button
              type="button"
              role="tab"
              id={`slick-slide-control0${index}`}
              aria-controls={`slick-slide0${index}`}
              aria-label={`${index + 1} of ${slides.length}`}
              aria-selected={index === activeIndex}
              className="w-3 h-3 rounded-full bg-white bg-opacity-50 border-none cursor-pointer p-0"
              onClick={() => goToSlide(index)}
              tabIndex={index === activeIndex ? 0 : -1}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SliderResource;