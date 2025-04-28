import React from 'react';
import { motion } from 'framer-motion';

const HexAreaText = () => {
  const hexItems = [
    {
      id: 1,
      bgImage: "https://sigmatechnology.com/content/uploads/2022/09/Polygon-32.png",
      title: "Talent",
      description: "We help our employees match their ingenuity with the assignments and support them with learning and development activities."
    },
    {
      id: 2,
      bgImage: "https://sigmatechnology.com/content/uploads/2022/09/Polygon-30.png",
      title: "Openness",
      description: "Career at Sigma Technology is about being what and who people want to be. The real aspirational self of each individual is what creates such a unique and friendly environment at the workplace."
    },
    {
      id: 3,
      bgImage: "https://sigmatechnology.com/content/uploads/2022/09/Polygon-29.png",
      title: "Passion",
      description: "Our people are curious minds striving to discover new things and find the best solution. That is what shapes our approach to making a better tomorrow for the world around us."
    }
  ];

  return (
    <section className="hex-area-text py-16 md:py-24 bg-gray-50 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 lg:pr-8">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray-900 mb-6"
            >
              Superior Employment
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600"
            >
              <p>Making employment a superior experience is one of our key goals. We continuously develop a corporate culture to provide equal opportunities based on people's qualifications and abilities.</p>
            </motion.div>
          </div>

          {/* Right Column - Hexagonal Items */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 relative">
              {hexItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative z-10"
                >
                  {/* Hexagon Container */}
                  <div className="hexagon-container relative h-[250px] w-full group">
                    {/* Hexagon Background - No overlay */}
                    <div 
                      className="hexagon absolute inset-0 bg-cover bg-center flex items-center justify-center transition-all duration-500 group-hover:scale-105"
                      style={{ 
                        backgroundImage: `url(${item.bgImage})`,
                        backgroundColor: '#f8fafc' // Light gray fallback
                      }}
                    >
                      {/* Content */}
                      <div className="hexagon-content relative z-10 p-6 h-full flex flex-col justify-center text-center">
                        <motion.h4 
                          className="text-xl font-bold mb-3 text-white transition-all duration-300 group-hover:text-white"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.title}
                        </motion.h4>
                        <p className="text-[10px] text-white transition-all duration-300 group-hover:translate-y-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for hexagon shape */}
      {/* <style jsx>{`
        .hexagon-container {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        .hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        @media (max-width: 1023px) {
          .hexagon-container {
            height: 320px;
          }
        }
        @media (max-width: 767px) {
          .hexagon-container {
            height: 260px;
          }
        }
      `}</style> */}
    </section>
  );
};

export default HexAreaText;