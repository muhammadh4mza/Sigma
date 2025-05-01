import React from 'react';
import { motion } from 'framer-motion';

const HeroSectionAbout = () => {
  return (
    <section className="relative h-[850px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source 
            media="(max-width: 1023px)" 
            srcSet="https://sigmatechnology.com/content/uploads/2022/09/Property-1Default-1-1.jpg?x25367"
          />
          <img
            src="https://sigmatechnology.com/content/uploads/2022/09/Property-1Default-1-1.jpg?x25367"
            alt="hero background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-xs-12 w-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-content text-center text-white"
              >
                <p className="hero-subtitle text-xl md:text-2xl mb-4 font-light">
                  Doing it with one and the same promise
                </p>
                
                <div className="text-5xl md:text-7xl lg:text-9xl font-bold leading-none mb-8 capitalize">
                  <motion.p 
                    className="textTop"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    expect
                  </motion.p>
                  <motion.p 
                    className="textMiddle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    a better
                  </motion.p>
                  <motion.p 
                    className="textBottom"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    tomorrow
                  </motion.p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                  <motion.a
                    href="/career/"
                    className="button bg-[#086AD7] hover:bg-[white] text-white hover:text-[#086AD7] px-8 py-4 rounded-lg font-medium transition-colors duration-300 text-lg capitalize"
              //       whileHover={{ scale: 1.05 }}
              //       whileTap={{ scale: 0.95 }}
                  >
                    Career with sigma
                  </motion.a>
                  <motion.a
                    href="/open-positions/"
                    className="button button-white bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 text-lg capitalize"
              //       whileHover={{ scale: 1.05 }}
              //       whileTap={{ scale: 0.95 }}
                  >
                    Open position
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionAbout;