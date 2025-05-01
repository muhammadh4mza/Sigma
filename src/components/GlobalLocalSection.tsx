import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const GlobalLocalSection = () => {
  return (
    <section className="relative min-h-screen py-16 flex items-center" id="text-with-squere">
      {/* Main Background Image with Dark Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://sigmatechnology.com/content/uploads/2022/12/pexels-arthouse-studio-4344434-1-1.jpeg"
          alt="Technology background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          {/* Left Column - White Card */}
          <motion.div 
            className="w-full lg:w-5/12 p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-[64px] font-bold mb-8 text-left text-[#086AD7] leading-none"
              variants={itemVariants}
            >
              GLOBAL YET LOCAL
            </motion.h3>
            <motion.div 
              className="space-y-6 text-center text-lg"
              variants={containerVariants}
            >
              <motion.p className="text-left text-black" variants={itemVariants}>
                Sigma Technology combines a strong local presence with a global reach – "Local Drive. Global Strength".
              </motion.p>
              <motion.p className="text-left text-black" variants={itemVariants}>
                The local presence at the clients' main R&amp;D hubs combined with our global operations makes us a unique supplier within our area.
              </motion.p>
              <motion.p className="text-left text-black" variants={itemVariants}>
                The aim is to always outperform our competitors with Superior Supplier Value.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Background with blue Overlay */}
          <motion.div 
            className="w-full lg:w-7/12 rounded-xl text-white relative min-h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background Image with blue Overlay */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <img
                src="https://sigmatechnology.com/content/themes/sigma/assets/img/mainhexa.svg"
                alt="Global offices"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Content */}
            <motion.div 
              className="relative p-16 pr-36 pl-36 h-full flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div 
                className="hexagon-shape absolute top-10 right-10 w-28 h-28 bg-white opacity-20"
                initial={{ opacity: 0, rotate: -30 }}
                whileInView={{ opacity: 0.2, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.div>
              
              <motion.h3 
                className="text-[43px] font-bold mb-8 text-center leading-none text-white"
                variants={itemVariants}
              >
                LOCAL DRIVE – GLOBAL STRENGTH
              </motion.h3>
              
              <motion.div 
                className="space-y-6 text-center text-lg mb-10 text-white"
                variants={containerVariants}
              >
                <motion.p variants={itemVariants}>Sigma Technology has offices and representative partners in</motion.p>
                <motion.p 
                  className="text-2xl font-semibold text-white"
                  variants={{
                    hidden: { scale: 0.9, opacity: 0 },
                    visible: { 
                      scale: 1, 
                      opacity: 1,
                      transition: { 
                        type: "spring", 
                        stiffness: 200,
                        damping: 10
                      }
                    }
                  }}
                >
                  14 countries worldwide
                </motion.p>
                <motion.p variants={itemVariants}>
                  Our philosophy is Local Drive – Global Strength. The global presence ensures the competence and capacity to offer high-quality local delivery.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="mt-auto flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.a 
                  href="/contact/" 
                  className="inline-flex items-center px-10 py-5 bg-white text-[#086AD7] font-medium text-xl rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact us
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 15 14" fill="none" className="ml-4">
                    <path d="M0.5 7.02539H13.8171" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.19336 1.17773L14.4998 7.00631L8.19336 13.1777" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalLocalSection;