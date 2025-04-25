import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';

interface IndustryData {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
}

const industriesData: IndustryData[] = [
  {
    id: 1,
    title: 'Automotive',
    description: 'We support world-leading automobile manufacturers in developing intelligent IT solutions, including electrification, autonomous driving, active safety, and complex embedded systems.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1automotive-1.webp',
    link: '/industry/automotive',
    buttonText: 'Learn more'
  },
  // Add other industries here...
];

const OurService = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold mb-4">Industries</h2>
            <p className="text-gray-600 mb-8">
              As a partner for innovation and digital disruption, we are bordering on the impossible. 
              All organizations benefit from our broad range of industry-specific competence and technical depth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {industriesData.map((industry, index) => (
                <button
                  key={industry.id}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeSlide === index 
                      ? 'bg-red-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-red-100'
                  }`}
                  onClick={() => setActiveSlide(index)}
                >
                  {industry.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <Swiper
              modules={[EffectFade]}
              effect="fade"
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              className="w-full h-full"
            >
              {industriesData.map((industry) => (
                <SwiperSlide key={industry.id}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="relative aspect-video">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                      <p className="text-gray-600 mb-6">{industry.description}</p>
                      <a 
                        href={industry.link}
                        className="inline-block px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                      >
                        {industry.buttonText}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-4 mt-4">
              <button className="p-2 rounded-full bg-white shadow hover:bg-red-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-white shadow hover:bg-red-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;