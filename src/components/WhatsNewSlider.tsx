import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const WhatsNewSlider = () => {
  const newsItems = [
    {
      id: 1,
      url: "https://sigmatechnology.com/pressrelease/margarita-iashchina-appointed-as-learning-lead-to-drive-corporate-learning-services/",
      image: "https://sigmatechnology.com/content/uploads/2025/03/zWypNXxqbjkm4shVrZUf-1024x683.jpeg.webp",
      category: "Press Release",
      title: "Margarita Iashchina Appointed as Learning Lead to Drive Corporate Learning Services",
      date: "05 Mar, 2025"
    },
    {
      id: 2,
      url: "https://sigmatechnology.com/pressrelease/sigma-technology-joins-ericssons-channel-partner-program-to-deliver-enterprise-wireless-solutions/",
      image: "https://sigmatechnology.com/content/uploads/2025/03/mp_Ericsson_HQ_Signage_17_powerpoint-1024x1024.jpg.webp",
      category: "Press Release",
      title: "Sigma Technology joins Ericsson's Channel Partner Program to deliver enterprise wireless solutions",
      date: "17 Mar, 2025"
    },
    {
      id: 3,
      url: "https://sigmatechnology.com/pressrelease/sigma-technology-cloud-and-td-synnex-establish-strategic-partnership-for-driving-digitalization-of-public-sector/",
      image: "https://sigmatechnology.com/content/uploads/2025/04/12GUvtgMKLmYHATfOlVe-1024x576.jpeg.webp",
      category: "Press Release",
      title: "Sigma Technology Cloud and TD SYNNEX establish strategic partnership",
      date: "10 Apr, 2025"
    },
    {
      id: 4,
      url: "https://sigmatechnology.com/pressrelease/sigma-technology-launches-new-business-area-in-linkoping-and-jonkoping/",
      image: "https://sigmatechnology.com/content/uploads/2025/04/EDFSPVIrXAoM7i15lGTN-1024x576.jpeg.webp",
      category: "Press Release",
      title: "Sigma Technology launches new business area in Linköping and Jönköping",
      date: "08 Apr, 2025"
    },
    {
      id: 5,
      url: "https://sigmatechnology.com/pressrelease/sigma-technology-is-among-the-swedish-delegation-represented-at-ai-action-summit-in-paris/",
      image: "https://sigmatechnology.com/content/uploads/2025/02/FMxB1v78czHyjbgmN9G6-1024x576.jpeg.webp",
      category: "Press Release",
      title: "Sigma Technology at AI Action Summit in Paris",
      date: "04 Feb, 2025"
    }
  ];

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="py-[75px] bg-[#f0e5e8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-[80px] font-bold text-black mb-4 uppercase">WHAT'S NEW</h2>
          <p className="text-black text-lg max-w-2xl">
            There is always something going on! Discover our latest news and insights.
          </p>
        </div>

        <div className="relative">
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
            {newsItems.map((item) => (
              <SwiperSlide key={item.id}>
                <a 
                  href={item.url} 
                  className="block h-96 rounded-lg overflow-hidden relative group"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${item.image})`,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-sm font-medium text-[#E30613] mb-1">{item.category}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:underline">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{item.date}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none" className="text-white">
                        <path d="M0.5 7.02539H13.8171" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.19336 1.17773L14.4998 7.00631L8.19336 13.1777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-between items-center mt-8">
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
              href="https://sigmatechnology.com/insights-library/" 
              className="flex items-center bg-[#E30613] text-white px-6 py-3 rounded-md hover:bg-[#8e0f0c] transition-colors"
            >
              Read all news
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none" className="ml-2">
                <path d="M0.5 7.02539H13.8171" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M8.19336 1.17773L14.4998 7.00631L8.19336 13.1777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSlider;