import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceItem {
  name: string;
  link?: string;
}

interface ServiceTab {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

const services: ServiceTab[] = [
  {
    id: 'digital-engineering',
    title: 'Digital & Engineering',
    description: 'From vision to innovation—power your ideas with our expert digital and engineering solutions.',
    items: [
      { name: 'Software development', link: '/service/software-development-services' },
      { name: 'Embedded systems development', link: '/service/embedded-systems-development' },
      { name: 'AI development and consulting', link: '/service/artificial-intelligence-ai-consulting-services' },
      { name: 'Cloud services', link: '/service/cloud-services' },
      { name: 'DevOps & Infrastructure', link: '/service/devops-by-sigma-technology-cloud' },
      { name: 'Test & Quality' },
      { name: 'Digital strategy and transformation', link: '/service/digital-transformation-sigma-technology-cloud' },
      { name: 'UX/UI, accessibility services', link: '/service/accessibility-review-sigma-technology-cloud' },
    ]
  },
  {
    id: 'business-solutions',
    title: 'Business solutions',
    description: 'Powering growth with tailored business solutions and expertise.',
    items: [
      { name: 'Digital Product Passports', link: '/service/digital-product-passports' },
      { name: 'Data analytics & BI', link: '/service/data-analytics-and-bi-services' },
      { name: 'License management', link: '/service/license-management-services' },
      { name: 'Microsoft 365 Copilot', link: '/service/microsoft-365-copilot' },
      { name: 'ERP implementation' },
      { name: 'CIO advisory' },
      { name: 'Predictive maintenance' },
      { name: 'ISO consulting', link: '/service/iso-consulting-services' }
    ]
  },
  {
    id: 'product-information',
    title: 'Product information',
    description: 'Deliver the right information, at the right time, in the right way.',
    items: [
      { name: 'Product information', link: '/service/product-information-services' },
      { name: 'Learning & Development', link: '/service/learning-and-change-management' },
      { name: 'Workshops & Education' },
      { name: 'Graphic design', link: '/service/design-services' }
    ]
  }
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className="relative py-20 overflow-hidden min-h-screen"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://sigmatechnology.com/content/uploads/2025/02/gr-1-1-1.webp')" }}
        ></motion.div>
        
        <div className="absolute inset-0 bg-gray-900"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-[70vh]">
        {/* Title */}
        <motion.div 
          variants={slideUp}
          className="text-center mb-16"
        >
          <h2 className="text-[64px] md:text-[64px] font-bold text-white mb-4 leading-tight uppercase">
            <span className="text-red-600">Our</span> Services
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-[250px] h-1 bg-red-600 mx-auto origin-left"
          ></motion.div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Left Column - Tabs */}
          <motion.div variants={item} className="space-y-4">
            {services.map((service) => (
              <motion.button
                key={service.id}
                variants={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(service.id)}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 border-l-4
                  ${activeTab === service.id 
                    ? 'bg-red-600 text-white shadow-lg border-white' 
                    : 'bg-white/5 text-white hover:bg-white/10 border-transparent'
                  }`}
              >
                <h3 className="text-2xl font-semibold uppercase">{service.title}</h3>
              </motion.button>
            ))}
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            variants={item}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 shadow-lg min-h-[500px] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {services.map((service) => (
                activeTab === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <motion.p 
                      className="text-white/90 text-[30px] mb-8 uppercase"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {service.description}
                    </motion.p>
                    <motion.ul 
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      variants={container}
                      initial="hidden"
                      animate="show"
                    >
                      {service.items.map((item, index) => (
                        <motion.li 
                          key={index} 
                          variants={item}
                          whileHover={{ x: 5 }}
                          className="flex items-center"
                        >
                          <motion.span 
                            className="w-2 h-2 bg-red-600 rounded-full mr-3"
                            animate={{
                              scale: [1, 1.3, 1],
                              transition: { delay: index * 0.05 }
                            }}
                          ></motion.span>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-white hover:text-red-400 transition-colors text-lg"
                            >
                              {item.name}
                            </a>
                          ) : (
                            <span className="text-white text-lg">{item.name}</span>
                          )}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;