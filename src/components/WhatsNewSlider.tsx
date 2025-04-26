import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhatsNewSlider = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const newsItems = [
    {
      id: 1,
      url: "/pressrelease/margarita-iashchina-appointed-as-learning-lead-to-drive-corporate-learning-services/",
      image: "https://sigmatechnology.com/content/uploads/2025/03/zWypNXxqbjkm4shVrZUf-1024x683.jpeg.webp",
      category: "Press Release",
      title: "Margarita Iashchina Appointed as Learning Lead to Drive Corporate Learning Services",
      date: "05 Mar, 2025"
    },
    {
      id: 2,
      url: "/pressrelease/sigma-technology-joins-ericssons-channel-partner-program-to-deliver-enterprise-wireless-solutions/",
      image: "https://sigmatechnology.com/content/uploads/2025/03/mp_Ericsson_HQ_Signage_17_powerpoint-1024x1024.jpg.webp",
      category: "Press Release",
      title: "Sigma Technology joins Ericsson's Channel Partner Program to deliver enterprise wireless solutions",
      date: "17 Mar, 2025"
    },
    {
      id: 3,
      url: "/pressrelease/sigma-technology-cloud-and-td-synnex-establish-strategic-partnership-for-driving-digitalization-of-public-sector/",
      image: "https://sigmatechnology.com/content/uploads/2025/04/12GUvtgMKLmYHATfOlVe-1024x576.jpeg.webp",
      category: "Press Release",
      title: "Sigma Technology Cloud and TD SYNNEX establish strategic partnership",
      date: "10 Apr, 2025"
    },
    {
      id: 4,
      url: "/pressrelease/sigma-technology-launches-new-business-area-in-linkoping-and-jonkoping/",
      image: "https://sigmatechnology.com/content/uploads/2025/04/EDFSPVIrXAoM7i15lGTN-1024x576.jpeg.webp",
      category: "Press Release",
      title: "Sigma Technology launches new business area in Linköping and Jönköping",
      date: "08 Apr, 2025"
    },
    {
      id: 5,
      url: "/pressrelease/sigma-technology-is-among-the-swedish-delegation-represented-at-ai-action-summit-in-paris/",
      image: "https://sigmatechnology.com/content/uploads/2025/02/FMxB1v78czHyjbgmN9G6-1024x576.jpeg.webp",
      category: "Press Release",
      title: "Sigma Technology at AI Action Summit in Paris",
      date: "04 Feb, 2025"
    }
  ];

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-[75px] bg-[#f0e5e8] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-[64px] font-bold text-black mb-4 uppercase">WHAT'S NEW</h2>
          <p className="text-black text-lg max-w-2xl">
            There is always something going on! Discover our latest news and insights.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.15,
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <a 
                    href={item.url} 
                    className="block h-96 rounded-lg overflow-hidden relative group"
                  >
                    {/* Image with zoom effect */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${item.image})`,
                      }}
                    />
                    
                    {/* Red overlay animation */}
                    <div className="absolute inset-0 bg-[#E30613] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    
                    {/* Content with slide-up animation */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-sm font-medium text-[#E30613] mb-1">{item.category}</div>
                      <h3 className="text-xl font-bold mb-2 group-hover:underline">{item.title}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{item.date}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none" className="text-white transform group-hover:translate-x-1 transition-transform">
                          <path d="M0.5 7.02539H13.8171" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M8.19336 1.17773L14.4998 7.00631L8.19336 13.1777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <motion.div 
            variants={itemVariants}
            className="flex justify-between items-center mt-8"
          >
            <div className="flex space-x-4">
              <button
                ref={prevRef}
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#E30613] text-[#E30613] hover:bg-[#E30613] hover:text-white transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                ref={nextRef}
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#E30613] text-[#E30613] hover:bg-[#E30613] hover:text-white transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <a 
              href="/insights-library/" 
              className="flex items-center bg-[#E30613] text-white px-6 py-3 rounded-md hover:bg-[#8e0f0c] transition-colors"
            >
              Read all news
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none" className="ml-2">
                <path d="M0.5 7.02539H13.8171" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M8.19336 1.17773L14.4998 7.00631L8.19336 13.1777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhatsNewSlider;