import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import type SwiperCore from 'swiper';

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
    linkText: 'Ask For Consultation'
  },
  {
    id: 2,
    title: 'Defense',
    description: 'We collaborate with private companies to build highly secure technology solutions and provide services for product information creation and management.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1Defence-1.webp',
    link: '/industry/manufacturing',
    linkText: 'Ask For Consultation'
  },
  {
    id: 3,
    title: 'MedTech',
    description: 'We leverage digital convergence and technological excellence to boost the healthcare sector and create superior custom digital and product information solutions.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/image-10.webp',
    link: '/industry/healthcare',
    linkText: 'Ask For Consultation'
  },
  {
    id: 4,
    title: 'Telecom',
    description: 'We support the telecom industry on the way to a big change. Using our years of experience in the telecommunications industry, we develop custom telecom software and other solutions that enhance employee and customer experience.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1telecom-1.webp',
    link: '/industry/healthcare',
    linkText: 'Ask For Consultation'
  },
  {
    id: 5,
    title: 'Logistics',
    description: 'We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1Logistics-1.webp',
    link: '/industry/healthcare',
    linkText: 'Ask For Consultation'
  },
  {
    id: 6,
    title: 'Manufacturing',
    description: 'We help international companies streamline and automate the manufacturing process and leverage data for predictive analytics and transform product information to achieve excellence in customer experience.',
    image: 'https://sigmatechnology.com/content/uploads/2023/03/Property-1Manufacturing-1.png',
    link: '/industry/healthcare',
    linkText: 'Ask For Consultation'
  },
  {
    id: 7,
    title: 'Fintech and Banking',
    description: 'We help organizations of the financial sector innovate and unleash the transformative power of digitalization through custom solutions that perfectly weave into their business DNA.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/image-9.webp',
    link: '/industry/healthcare',
    linkText: 'Ask For Consultation'
  },
  {
    id: 8,
    title: 'Public Sector',
    description: 'We support all grades of government and government-controlled organizations with custom technological solutions and digitalization services to step towards innovations.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1Public-sector-1.webp',
    link: '/industry/healthcare',
    linkText: 'Ask For Consultation'
  },
  {
    id: 9,
    title: 'Gaming',
    description: 'We support the gaming industry with the evolutionary development, design, support, and maintenance of ed-tech products, gaming platforms, and online games.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1Games-1.webp',
    link: '/industry/healthcare',
    linkText: 'Ask For Consultation'
  },
  {
    id: 10,
    title: 'Retail',
    description: 'We help retail businesses and e-commerce projects to implement or design from scratch future-proof technologies supported with advanced data and, predictive analytics & BI services.',
    image: 'https://sigmatechnology.com/content/uploads/2023/12/Property-1Retail-1.webp',
    link: '/industry/healthcare',
    linkText: 'Ask For Consultation'
  },
  {
    id: 11,
    title: 'High Tech',
    description: 'We help high-tech companies and innovative startups meet Industry 4.0 and embrace digital transformation at scale. Providing comprehensive IT solutions and technology consulting, we open opportunities for the breakthrough to the forefront of innovation.',
    image: 'https://sigmatechnology.com/content/uploads/2023/03/Property-1High-tech-1.png',
    link: '/industry/healthcare',
    linkText: 'Ask For Consultation'
  },
];

const IndustriesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore>();

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#dc2626]">INDUSTRIES</h2>
            <p className="text-lg text-gray-600">
              As a partner for innovation and digital disruption, we are bordering on the impossible. 
              All organizations - from startups and small and medium businesses to large enterprises 
              and governments - benefit from our broad range of industry-specific competence and 
              technical depth.
            </p>
            
            {/* Navigation Points in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <button
                  key={industry.id}
                  className={`text-left px-6 py-4 rounded-lg transition-all duration-300
                    ${activeIndex === index 
                      ? 'bg-red-600 text-white shadow-md' 
                      : 'hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                  onClick={() => handleButtonClick(index)}
                >
                  <h3 className="text-lg font-medium">{industry.title}</h3>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Swiper */}
          <div className="relative h-full">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={30}
              loop={false}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="h-full rounded-2xl overflow-hidden"
            >
              {industries.map((industry) => (
                <SwiperSlide key={industry.id}>
                  <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                    <div className="aspect-video w-full">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold mb-4">{industry.title}</h3>
                      <p className="text-gray-600 mb-6">{industry.description}</p>
                      <a
                        href={industry.link}
                        className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg
                          hover:bg-red-700 transition-colors duration-300 font-medium"
                      >
                        {industry.linkText}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
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