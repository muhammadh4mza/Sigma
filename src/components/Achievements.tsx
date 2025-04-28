import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative h-auto min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image - Responsive */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://sigmatechnology.com/content/uploads/2022/09/Mountain-1-1-1-1-1.jpg?x25367"
          alt="Our story background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-white text-center"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-7xl font-bold mb-6 uppercase"
            >
              our story
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Today, we are 3400 frontiers of the digital revolution, driving development forward, and making the world a better place.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* 2020-2024 */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-yellow-400 text-xl font-bold mb-4">2020-2024</p>
                <p className="text-white/90">
                  Continued growth strategy. Start of new companies in strategic business areas. Acquisition of etecture and appbites
                </p>
              </motion.div>

              {/* 2013 */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-yellow-400 text-xl font-bold mb-4">2013</p>
                <p className="text-white/90">
                  Sigma becomes a privately-owned company. Broadening the business scope and growth strategy
                </p>
              </motion.div>

              {/* 2006 */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-yellow-400 text-xl font-bold mb-4">2006</p>
                <p className="text-white/90">
                  Global expansion to China, Hungary, Ukraine
                </p>
              </motion.div>

              {/* 1997 */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-yellow-400 text-xl font-bold mb-4">1997</p>
                <p className="text-white/90">
                  Expansion in Sweden
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;