import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="relative py-20 md:py-32 text-center overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 bg-gray-900/70">
        <motion.img 
          src="https://sigmatechnology.com/content/uploads/2022/05/d7314e2899fa4160cbe7c1f04e6c4631.jpeg?x25367" 
          alt="Team background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h3 
            className="text-3xl md:text-4xl lg:text-7xl uppercase font-bold text-white mb-4"
            variants={itemVariants}
          >
            Want to stand among us?
          </motion.h3>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8"
            variants={itemVariants}
          >
            WE ARE 3400+ FRONTIERS OF THE DIGITAL REVOLUTION.
          </motion.p>
          
          <motion.a 
            href="/open-positions/" 
            className="inline-block bg-[#086AD7] text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#086AD7] transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
          >
            Join us!
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;