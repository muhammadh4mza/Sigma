import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CountTextSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      id: 1,
      bgImage: "https://sigmatechnology.com/content/uploads/2023/03/EDS_Technology_Sthlm_2880px_sRGB_16-1-2-1-e1663743958148-copy.jpg?x25367",
      title: "Superior employment experience",
      description: "We aim to attract over 700 talents within the next three years, fostering a collaborative journey where every voice is valued.",
      count: "700+",
      countDesc: "jobs in the next\n3 years"
    },
    {
      id: 2,
      bgImage: "https://sigmatechnology.com/content/uploads/2022/09/EDS_Technology_Sthlm_2880px_sRGB_16-1-3-1-e1663743925921.jpg?x25367",
      title: "People in focus",
      description: "Our professionals come from 40 countries. We are building a respectful work environment where equality and inclusiveness are the core values, and the uniqueness of our people is the foundation of everything we managed to achieve.",
      count: "3400",
      countDesc: "experts\nworldwide"
    },
    {
      id: 3,
      bgImage: "https://sigmatechnology.com/content/uploads/2022/09/EDS_Technology_Sthlm_2880px_sRGB_16-1-2-1-e1663743958148.jpg?x25367",
      title: "Sweden's Best Employer",
      description: "According to Universum's survey, Sigma Technology has been among Best Sweden's employers for 11 consecutive years.",
      count: "11 YEARS",
      countDesc: "Among Sweden's\nBest Employers"
    }
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.bgImage}
            alt="Background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-7xl font-bold text-white mb-8 uppercase"
            >
              WHAT DOES IT MEAN TO BE A PART OF SIGMA TECHNOLOGY?
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Buttons Column - Left */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {slides.map((slide, index) => (
                <motion.button
                  key={slide.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveSlide(index)}
                  className={`bg-[#086AD72c] backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 text-left capitalize ${
                    activeSlide === index ? 'border-white bg-[#086AD7]' : 'border-white/20'
                  }`}
                >
                  <p className="text-3xl font-bold text-white mb-2">{slide.count}</p>
                  <p className="text-white whitespace-pre-line">{slide.countDesc}</p>
                </motion.button>
              ))}
            </div>

            {/* Content Column - Right */}
            <motion.div 
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-white h-[400px]"
            >
              <h4 className="text-2xl md:text-3xl font-bold mb-4">{slides[activeSlide].title}</h4>
              <p className="text-lg">{slides[activeSlide].description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountTextSection;