import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const PortfolioSliderSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      mainImage: "https://sigmatechnology.com/content/uploads/2022/09/Photo-5-1.jpeg?x25367",
      logo: "https://sigmatechnology.com/content/uploads/2022/09/Logga-hemsida-2-3-1.png?x25367",
      alt: "Project 1"
    },
    {
      id: 2,
      mainImage: "https://sigmatechnology.com/content/uploads/2022/09/SFL.jpeg?x25367",
      logo: "https://sigmatechnology.com/content/uploads/2022/09/sfl_horizontal_tagline-2-1-1.png?x25367",
      alt: "Project 2"
    },
    {
      id: 3,
      mainImage: "https://sigmatechnology.com/content/uploads/2022/09/SC.jpeg?x25367",
      logo: "https://sigmatechnology.com/content/uploads/2022/09/Swedish-club-1-e1655729266542-1.png?x25367",
      alt: "Project 3"
    },
    {
      id: 4,
      mainImage: "https://sigmatechnology.com/content/uploads/2022/09/witech.jpeg?x25367",
      logo: "https://sigmatechnology.com/content/uploads/2022/09/witech_logga2-1.svg?x25367",
      alt: "Project 4"
    },
    {
      id: 5,
      mainImage: "https://sigmatechnology.com/content/uploads/2022/09/cooking-solutions.jpeg?x25367",
      logo: "https://sigmatechnology.com/content/uploads/2022/09/logo-2.png?x25367",
      alt: "Project 5"
    },
    {
      id: 6,
      mainImage: "https://sigmatechnology.com/content/uploads/2022/09/bridge.jpeg?x25367",
      logo: "https://sigmatechnology.com/content/uploads/2022/09/bridgebudapest_seo_logo-1-1.png?x25367",
      alt: "Project 6"
    },
    {
      id: 7,
      mainImage: "https://sigmatechnology.com/content/uploads/2022/09/skool.jpeg?x25367",
      logo: "https://sigmatechnology.com/content/uploads/2022/09/skoolslogennel-2.png?x25367",
      alt: "Project 7"
    },
    {
      id: 8,
      mainImage: "https://sigmatechnology.com/content/uploads/2022/09/special-olympics.jpeg?x25367",
      logo: "https://sigmatechnology.com/content/uploads/2022/09/so-logo-2.svg?x25367",
      alt: "Project 8"
    },
    {
      id: 9,
      mainImage: "https://sigmatechnology.com/content/uploads/2022/09/weareopen.jpeg?x25367",
      logo: "https://sigmatechnology.com/content/uploads/2022/09/wao-logo_2_en-1-1.png?x25367",
      alt: "Project 9"
    },
    {
      id: 10,
      mainImage: "https://sigmatechnology.com/content/uploads/2022/09/mentor.jpeg?x25367",
      logo: "https://sigmatechnology.com/content/uploads/2022/09/mentor-logo-1.svg?x25367",
      alt: "Project 10"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Portfolio Slider Column */}
          <div className="w-full lg:w-1/2 relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              className="portfolio-slider"
            >
              {portfolioItems.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative group"
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                      <img
                        src={item.mainImage}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30"></div>
                    </div>
                    <div className={`absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-lg transition-all duration-300 ${activeSlide === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      <img 
                        src={item.logo} 
                        alt={`${item.alt} logo`} 
                        className="h-12 object-contain"
                      />
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            {/* <div className="swiper-button-prev !text-[#fff] after:!text-xl">Previous</div>
            <div className="swiper-button-next !text-[#fff] after:!text-xl">Next</div> */}
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 px-4 lg:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto lg:mx-0"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 capitalize">
                Our commitment and involvement
              </h3>
              <div className="prose text-gray-600 mb-8">
                <p className="text-lg leading-relaxed">
                  The United Nations adopted Agenda 2030 and 17 Sustainable Development Goals that global leaders have pledged to achieve. Sigma Technology strives to contribute to progress.
                </p>
                <p className="text-lg leading-relaxed">
                  We have identified the goals that we support through continuous improvement of our operations and sustainability performance. Sigma Technology contributes to sustainable development through community development, education and innovation, gender equality, diversity, responsible consumption, and business ethics.
                </p>
              </div>
              <motion.a
                href="sustainability/"
                className="inline-flex items-center text-[15px] px-5 py-2 bg-[#dc2626] text-[#fff]  text-xl rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
              //   whileHover={{ scale: 1.05 }}
              //   whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom Swiper Navigation Styles */}
      {/* <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 44px;
          height: 44px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          display: flex !important;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }
        .swiper-button-prev {
          left: 16px;
        }
        .swiper-button-next {
          right: 16px;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 24px;
          font-weight: bold;
        }
      `}</style> */}
    </section>
  );
};

export default PortfolioSliderSection;