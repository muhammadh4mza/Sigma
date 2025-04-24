import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IndustryCard } from './IndustryCard';

interface IndustryItem {
  title: string;
  description: string;
  isActive: boolean;
  image: string;
}

interface IndustriesCarouselProps {
  industries: IndustryItem[];
}

const IndustriesCarousel = ({ industries }: IndustriesCarouselProps) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16 max-w-[1400px]">
        <div className="max-w-[80rem] mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 font-oswald">
            INDUSTRIES
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            As a partner for innovation and digital disruption, we are bordering on the impossible. 
            All organizations - from startups and small and medium businesses to large enterprises 
            and governments - benefit from our broad range of industry-specific competence and 
            technical depth.
          </p>
        </div>

        <div className="relative mt-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            spaceBetween={16}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index}>
                <div className="carousel-image-container">
                  <IndustryCard {...industry} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default IndustriesCarousel;