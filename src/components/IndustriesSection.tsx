import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface IndustryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
}

const industries: IndustryItem[] = [
  {
    id: 1,
    title: 'Automotive',
    description: 'We support world-leading automobile manufacturers in developing intelligent IT solutions, including electrification, autonomous driving, active safety, and complex embedded systems.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1automotive-1.webp',
    link: '/industry/automotive',
    linkText: 'Learn more'
  },
  // Add other industries here
];

const IndustriesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Industries</h2>
            <p className="text-lg text-gray-600">
              As a partner for innovation and digital disruption, we are bordering on the impossible. 
              All organizations - from startups and small and medium businesses to large enterprises 
              and governments - benefit from our broad range of industry-specific competence and 
              technical depth.
            </p>
            
            {/* Navigation Points */}
            <div className="flex flex-col space-y-4">
              {industries.map((industry, index) => (
                <button
                  key={industry.id}
                  className={`text-left px-4 py-2 rounded-lg transition-all
                    ${activeIndex === index 
                      ? 'bg-red-600 text-white' 
                      : 'hover:bg-red-50 text-gray-700'
                    }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {industry.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Swiper */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="h-full w-full"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {industries.map((industry) => (
                <SwiperSlide key={industry.id}>
                  <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                      <p className="text-gray-600 mb-6">{industry.description}</p>
                      <a
                        href={industry.link}
                        className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg
                          hover:bg-red-700 transition-colors"
                      >
                        {industry.linkText}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;