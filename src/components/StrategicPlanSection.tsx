import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StrategicPlanSection = () => {
  const [activeTab, setActiveTab] = useState('tab-item-1');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="relative py-16 bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://sigmatechnology.com/content/uploads/2022/12/gr-1.jpeg?x25367"
          alt="Strategic plan background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <motion.div 
          className="row mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="w-full">
            <motion.h2 
              className="text-[64px] font-bold text-black opacity-90 mb-4"
              variants={titleVariants}
            >
              STRATEGIC PLAN DELIVER SUPERIOR VALUE
            </motion.h2>
            <motion.p 
              className="text-xl text-black opacity-90"
              variants={itemVariants}
            >
              Our overall operational strategy is to build trust that makes us reliable and attractive as a company. 
              The goal is to get sustainable growth with satisfied customers and employees. Trust is built on performance.
            </motion.p>
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="row flex flex-col md:flex-row gap-8">
          {/* Left Tab List */}
          <div className="w-full md:w-1/2 relative">
            <motion.div 
              className={`p-6 mb-4 bg-white bg-opacity-90 rounded-lg cursor-pointer transition-all ${activeTab === 'tab-item-1' ? 'border-l-4 border-red-600' : ''}`}
              onClick={() => setActiveTab('tab-item-1')}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800">SUPERIOR SUPPLIER VALUE</h3>
            </motion.div>
            <motion.div 
              className={`p-6 bg-white bg-opacity-90 rounded-lg cursor-pointer transition-all ${activeTab === 'tab-item-2' ? 'border-l-4 border-red-600' : ''}`}
              onClick={() => setActiveTab('tab-item-2')}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-800">SUPERIOR EMPLOYMENT</h3>
            </motion.div>
            
            {/* Hexagon Decorations */}
            <motion.div 
              className="absolute -top-8 -left-8 w-16 h-16 bg-red-600 opacity-20 transform rotate-30 hidden md:block"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [30, 60, 30],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-red-600 opacity-20 transform rotate-30 hidden md:block"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [30, 0, 30],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            ></motion.div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 bg-[#ffffff78] bg-opacity-50 rounded-xl p-8 backdrop-blur-sm shadow-2xl min-h-[600px]">
            {/* Tab 1 Content */}
            <motion.div 
              className={` ${activeTab === 'tab-item-1' ? 'block' : 'hidden'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p 
                className="text-xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                ATTRACTIVENESS TOWARDS CUSTOMERS BY SUPERIOR SUPPLIER VALUE
              </motion.p>
              <motion.ul 
                className="space-y-3 text-gray-700"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  "Operational excellence",
                  "Technology capability",
                  "Leadership in services",
                  "Agile & lean operations that are flexible and scalable",
                  "Delivery excellence",
                  "Innovation",
                  "Commercial excellence",
                  "Structure capital",
                  "Capacity to meet global or local expectations",
                  "Stable financials"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-2"></span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Tab 2 Content */}
            <motion.div 
              className={`${activeTab === 'tab-item-2' ? 'block' : 'hidden'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p 
                className="text-xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                ATTRACTIVENESS TOWARDS EMPLOYEES BY SUPERIOR EMPLOYMENT
              </motion.p>
              <motion.ul 
                className="space-y-3 text-gray-700"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  "Employer branding",
                  "Conferences and summits",
                  "Challenging work",
                  "Health policy",
                  "Caring leaders",
                  "Team building",
                  "Trust and respect",
                  "Corporate spirit",
                  "Training & workshops",
                  "School mentorship (student ambassadors, sponsorship, courses)",
                  "Development 'Trainee to coach'",
                  "CSR"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-2"></span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPlanSection;
