import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundSliderSection = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Start with second slide active as in original
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      id: 1,
      mobileImage: "https://sigmatechnology.com/content/uploads/2022/09/EDS_Technology_Sthlm_2880px_sRGB_9-1-1.jpg?x25367",
      desktopImage: "https://sigmatechnology.com/content/uploads/2022/09/EDS_Technology_Sthlm_2880px_sRGB_9-1-1.jpg?x25367",
      title: "IT SERVICES"
    },
    {
              id: 2,
              mobileImage: "https://sigmatechnology.com/content/uploads/2022/09/EDS_Technology_Sthlm_2880px_sRGB_9-1-1-1.jpg?x25367",
              desktopImage: "https://sigmatechnology.com/content/uploads/2022/09/EDS_Technology_Sthlm_2880px_sRGB_9-1-1-1.jpg?x25367",
              title: "TECHNOLOGY\nCONSULTING" // Added line break here
            },
    {
      id: 3,
      mobileImage: "https://sigmatechnology.com/content/uploads/2022/09/EDS_Technology_Sthlm_2880px_sRGB_9-1-2-1.jpg?x25367",
      desktopImage: "https://sigmatechnology.com/content/uploads/2022/09/EDS_Technology_Sthlm_2880px_sRGB_9-1-2-1.jpg?x25367",
      title: "PRODUCT INFORMATION\nSERVICES"
    },
    {
      id: 4,
      mobileImage: "https://sigmatechnology.com/content/uploads/2022/09/EDS_Technology_Sthlm_2880px_sRGB_9-1-3-1.jpg?x25367",
      desktopImage: "https://sigmatechnology.com/content/uploads/2022/09/EDS_Technology_Sthlm_2880px_sRGB_9-1-3-1.jpg?x25367",
      title: "BUSINESS SERVICES"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === slide.id ? 'opacity-100' : 'opacity-0'}`}
          >
            <picture>
              <source 
                media="(min-width: 1024px)" 
                srcSet={slide.desktopImage}
              />
              <img
                src={isMobile ? slide.mobileImage : slide.desktopImage}
                alt="Background"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-content text-white"
              >
                <h2 className="hero-awards-title text-3xl md:text-4xl lg:text-7xl font-bold mb-4 capitalize">
                  Our services
                </h2>
                <p className="hero-subtitle text-xl md:text-2xl mb-8">
                  We drive development forward, fulfilling our main goal of making technology usable.
                </p>

                {/* Hexagonal Buttons */}
                <div className="button-hex flex flex-wrap gap-1 mb-8">
                  {slides.map((slide) => (
                    <motion.button
                      key={slide.id}
              //         whileHover={{ scale: 1.05 }}
              //         whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveSlide(slide.id)}
                      className={`hex-bt relative px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 h-[150px] ${
                        activeSlide === slide.id 
                          ? 'bg-[#086AD7] text-white ' 
                          : 'bg-white/20 text-white hover:bg-[#086AD7]'
                      }`}
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      {slide.title}
                    </motion.button>
                  ))}
                </div>

                <motion.a
                  href="/services/"
                  className="button inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-[#086AD7] hover:text-white transition-colors duration-300"
              //     whileHover={{ scale: 1.05 }}
              //     whileTap={{ scale: 0.95 }}
                >
                  Discover Our Services
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSliderSection;