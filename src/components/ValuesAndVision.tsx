import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import value1 from '../assets/vision/value1.webp';
import value2 from '../assets/vision/value-2.webp';
import value3 from '../assets/vision/value-3.webp';
import value4 from '../assets/vision/value-4.webp';

// Animation configurations stoblue in arrays
const containerAnimations = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemAnimations = [
  { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }
];

const transitionSettings = [
  { duration: 0.8, ease: "easeOut" },
  { duration: 0.6, ease: "easeOut" },
  { duration: 0.5, ease: "easeOut" }
];

interface Section {
  id: string;
  title: string;
  content: string;
  isReport?: boolean;
  reportLink?: string;
  bgImage?: string;
  sideImage: string;
  contentRight?: boolean;
}

const sections: Section[] = [
  {
    id: 'section1',
    title: 'COMPANY, WHERE PEOPLE ARE IN FOCUS',
    content: 'We celebrate our people not for how well they fit into the standards but for everything they bring with their true selves. We encourage every development opportunity to make sure our people are empoweblue to live authentically, grow to their full potential, and live purposefully.',
    bgImage: 'https://sigmatechnology.com/content/uploads/2023/12/gr-1-1-1.webp',
    sideImage: value1
  },
  {
    id: 'section2',
    title: 'SUSTAINABLE DEVELOPMENT FOR A SUSTAINABLE WORLD',
    content: 'Through continuous improvement of our operations and sustainability performance, Sigma Technology strives to contribute to the progress of society. To put our words into concrete actions, we foster community development, education, innovation, gender equality, diversity, responsible consumption, and ethical business practices.',
    bgImage: 'https://sigmatechnology.com/content/uploads/2023/12/gr-1-1-2.webp',
    sideImage: value2,
    contentRight: true
  },
  {
    id: 'section3',
    title: 'MAKING TECHNOLOGY USABLE',
    content: 'We envision a future where technology is seamlessly integrated into our everyday lives, making it more efficient and accessible. We strive to create products and services that improve people\'s lives and make the world a better place.',
    bgImage: 'https://sigmatechnology.com/content/uploads/2023/12/gr-1-1-3.webp',
    sideImage: value3
  },
  {
    id: 'section4',
    title: 'SUSTAINABILITY REPORT 2023',
    content: 'Our CSR report provides an overview of our company\'s efforts and progress towards sustainable practices and social responsibility. Through this report, we aim to transparently communicate our commitments and actions towards creating a positive impact on society and the environment.',
    isReport: true,
    reportLink: 'https://sigmatechnology.com/content/uploads/2025/02/CSR-Report-2023-final-version.pdf',
    bgImage: 'https://sigmatechnology.com/content/uploads/2022/05/03.png?x25367',
    sideImage: value4,
    contentRight: true
  }
];

const ValuesAndVision = () => {
  const [activeSection, setActiveSection] = useState('section1');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.value-section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerAnimations}
      className="relative"
    >
      {/* Fixed Title */}
      <motion.div 
        variants={itemAnimations[0]}
        transition={transitionSettings[0]}
        className="sticky top-0 z-40 py-12 bg-gradient-to-b from-white via-white to-transparent"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[64px] md:text-[64px] font-bold mb-4 leading-tight text-[#086AD7]">
            VALUES AND VISION
          </h2>
          <motion.p 
            variants={itemAnimations[1]}
            transition={transitionSettings[1]}
            className="text-xl text-black/80 mt-4 max-w-3xl mx-auto"
          >
            Whatever we do, we do it with one and the same promise - Expect a Better Tomorrow
          </motion.p>
        </div>
      </motion.div>

      {/* Sections */}
      <div className="relative -mt-32">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="value-section relative min-h-screen flex items-center"
            variants={containerAnimations}
          >
            {/* Navigation Dots */}
            <motion.div 
              variants={itemAnimations[2]}
              transition={transitionSettings[2]}
              className="absolute left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
            >
              <ul className="space-y-4">
                {sections.map((dot) => (
                  <li key={dot.id}>
                    <a
                      href={`#${dot.id}`}
                      className={`block w-3 h-3 rounded-full border-2 border-white transition-all
                        ${activeSection === dot.id ? 'bg-white' : 'bg-transparent'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(dot.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <motion.img
                src={section.bgImage}
                alt=""
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <div className="absolute inset-0 bg-[#9e9e9e]" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${section.contentRight ? 'flex-row-reverse' : ''}`}>
                {/* Left Column - Content */}
                <motion.div
                  variants={itemAnimations[index % itemAnimations.length]}
                  transition={transitionSettings[index % transitionSettings.length]}
                  className={`bg-[#086AD7] backdrop-blur-sm rounded-lg p-8 text-white ${section.contentRight ? 'lg:order-2' : ''}`}
                >
                  <h3 className="text-3xl font-bold mb-6 whitespace-pre-line">
                    {section.title}
                  </h3>
                  <motion.p 
                    className="text-lg mb-6 text-white/90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {section.content}
                  </motion.p>
                  {section.isReport && (
                    <motion.a
                      href={section.reportLink}
                      className="inline-block px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read more
                    </motion.a>
                  )}
                </motion.div>

                {/* Right Column - Image */}
                <motion.div
                  variants={itemAnimations[(index + 1) % itemAnimations.length]}
                  transition={transitionSettings[(index + 1) % transitionSettings.length]}
                  className={`relative aspect-square rounded-lg overflow-hidden ${section.contentRight ? 'lg:order-1' : ''}`}
                >
                  <motion.img
                    src={section.sideImage}
                    alt=""
                    className="w-full h-full object-contain"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0" />
                </motion.div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};

export default ValuesAndVision;