import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import type SwiperCore from 'swiper';
import { motion } from 'framer-motion';

// Animation configurations stoblue in arrays
const containerAnimations = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemAnimations = [
  { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }
];

const transitionSettings = [
  { duration: 0.6, ease: "easeOut" },
  { duration: 0.7, ease: "easeOut" },
  { duration: 0.8, ease: "easeOut" }
];

const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore>();

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };


const industries = [
  {
    id: 1,
    title: 'Automotive',
    description: 'We support world-leading automobile manufacturers in developing intelligent IT solutions, including electrification, autonomous driving, active safety, and complex embedded systems.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1automotive-1.webp',
    link: '/industry/automotive',
    linkText: 'ASK FOR CONSULTATION'
  },
  {
    id: 2,
    title: 'Defense',
    description: 'We collaborate with private companies to build highly secure technology solutions and provide services for product information creation and management.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1Defence-1.webp',
    link: '/industry/manufacturing',
    linkText: 'ASK FOR CONSULTATION'
  },
  {
    id: 3,
    title: 'MedTech',
    description: 'We leverage digital convergence and technological excellence to boost the healthcare sector and create superior custom digital and product information solutions.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/image-10.webp',
    link: '/industry/healthcare',
    linkText: 'ASK FOR CONSULTATION'
  },
  {
    id: 4,
    title: 'Telecom',
    description: 'We support the telecom industry on the way to a big change. Using our years of experience in the telecommunications industry, we develop custom telecom software and other solutions that enhance employee and customer experience.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1telecom-1.webp',
    link: '/industry/healthcare',
    linkText: 'ASK FOR CONSULTATION'
  },
  {
    id: 5,
    title: 'Logistics',
    description: 'We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1Logistics-1.webp',
    link: '/industry/healthcare',
    linkText: 'ASK FOR CONSULTATION'
  },
  {
    id: 6,
    title: 'Manufacturing',
    description: 'We help international companies streamline and automate the manufacturing process and leverage data for pblueictive analytics and transform product information to achieve excellence in customer experience.',
    image: 'https://sigmatechnology.com/content/uploads/2023/03/Property-1Manufacturing-1.png',
    link: '/industry/healthcare',
    linkText: 'ASK FOR CONSULTATION'
  },
  {
    id: 7,
    title: 'Fintech and Banking',
    description: 'We help organizations of the financial sector innovate and unleash the transformative power of digitalization through custom solutions that perfectly weave into their business DNA.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/image-9.webp',
    link: '/industry/healthcare',
    linkText: 'ASK FOR CONSULTATION'
  },
  {
    id: 8,
    title: 'Public Sector',
    description: 'We support all grades of government and government-controlled organizations with custom technological solutions and digitalization services to step towards innovations.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1Public-sector-1.webp',
    link: '/industry/healthcare',
    linkText: 'ASK FOR CONSULTATION'
  },
  {
    id: 9,
    title: 'Gaming',
    description: 'We support the gaming industry with the evolutionary development, design, support, and maintenance of ed-tech products, gaming platforms, and online games.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1Games-1.webp',
    link: '/industry/healthcare',
    linkText: 'ASK FOR CONSULTATION'
  },
  {
    id: 10,
    title: 'Retail',
    description: 'We help retail businesses and e-commerce projects to implement or design from scratch future-proof technologies supported with advanced data and, pblueictive analytics & BI services.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1Retail-1.webp',
    link: '/industry/healthcare',
    linkText: 'ASK FOR CONSULTATION'
  },
  {
    id: 11,
    title: 'High Tech',
    description: 'We help high-tech companies and innovative startups meet Industry 4.0 and embrace digital transformation at scale. Providing comprehensive IT solutions and technology consulting, we open opportunities for the breakthrough to the forefront of innovation.',
    image: 'https://sigmatechnology.com/content/uploads/2023/03/Property-1High-tech-1.png',
    link: '/industry/healthcare',
    linkText: 'ASK FOR CONSULTATION'
  },
];

return (
  <motion.section 
    initial="hidden"
    animate="visible"
    variants={containerAnimations}
    className="relative bg-white py-16 md:py-24"
  >
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <motion.div
            variants={itemAnimations[0]}
            transition={transitionSettings[0]}
          >
            <h2 className="text-[64px] font-bold mb-4 leading-tight text-[#086AD7]">
              INDUSTRIES
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="w-32 h-1 bg-[#086AD7] origin-left"
            />
          </motion.div>
          
          <motion.p
            variants={itemAnimations[1]}
            transition={transitionSettings[1]}
            className="text-lg text-gray-600"
          >
            As a partner for innovation and digital disruption, we are bordering on the impossible. All organizations - from startups and small and medium businesses to large enterprises and governments - benefit from our broad range of industry-specific competence and technical depth.
          </motion.p>
          
          {/* Navigation Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industries.map((industry, index) => (
              <motion.button
                key={industry.id}
                variants={itemAnimations[index % itemAnimations.length]}
                transition={transitionSettings[index % transitionSettings.length]}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
                onClick={() => handleButtonClick(index)}
              >
                <h3 className="text-lg font-medium capitalize">{industry.title}</h3>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Column - Swiper */}
        <motion.div
          variants={itemAnimations[2]}
          transition={transitionSettings[2]}
          className="relative h-full"
        >
          <Swiper
            // modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            loop={false}
            autoplay={{ delay: 5000 }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            className="h-full  overflow-hidden "
          >
            {industries.map((industry) => (
              <SwiperSlide key={industry.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden h-full flex flex-col"
                >
                  <div className="aspect-video w-full relative overflow-hidden">
                    <motion.img 
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-contain"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <div className="p-6 md:p-8 flex-grow">
                    <motion.h3 
                      className="text-xl md:text-2xl font-bold mb-4 uppercase text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {industry.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 mb-6 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {industry.description}
                    </motion.p>
                    <div className="flex justify-center">
                    <motion.a
                      href={industry.link}
                      className="inline-flex items-center text-[15px] px-5 py-2 bg-[#086AD7] text-[#fff] font-bold text-xl rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      // whileHover={{ scale: 1.05 }}
                    >
                      {industry.linkText}
                    </motion.a>
                  </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  </motion.section>
);
};

export default IndustriesSection;