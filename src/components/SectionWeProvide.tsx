import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SectionWeProvide = () => {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);

  const sections = [
    {
      tab: "Inclusion & Diversity",
      image: "https://sigmatechnology.com/content/uploads/2022/05/EDS_IndustrySouth_Lund_2880px_sRGB-17-1-4.jpeg?x25367",
      title: "People are our top priority",
      content: "We have created a safe workplace where sharp minds can thrive and their competence is the top priority. By now, we have gathered over 3300 professionals coming from 40 countries and continuously develop company culture to provide equal opportunities based on people's qualifications and abilities."
    },
    {
      tab: "Flexible working conditions",
      image: "https://sigmatechnology.com/content/uploads/2022/05/EDS_IndustrySouth_Lund_2880px_sRGB-17-1-3.jpeg?x25367",
      title: "Encouraging your work-life balance",
      content: "We believe flexibility and maintenance of a work-life balance create a truly healthy and friendly environment. Being a part of Sigma Technology, you will have opportunities not only to advance as an expert but grow as a personality, having time for your family, friends, hobbies, and essential activities."
    },
    {
      tab: "Technologies",
      image: "https://sigmatechnology.com/content/uploads/2022/05/EDS_IndustrySouth_Lund_2880px_sRGB-17-1-2.jpeg?x25367",
      title: "Work at the heart of the digital revolution",
      content: "At Sigma Technology, you grow and develop your career at the forefront of innovation, helping our customers with their digitalization journey developing and improving new and existing products. Together, we are fulfilling our goal of making technology usable."
    },
    {
      tab: "Talent development & superior employment",
      image: "https://sigmatechnology.com/content/uploads/2022/05/EDS_IndustryWest_GBG_2880px_sRGB-7-scaled-1.jpeg?x25367",
      title: "We help develop your true extraordinary",
      content: "Making employment a superior experience is our continuous focus and top priority. We are proud that our people voted us to become Top 3 Sweden's Best Employer three years in a row. This aligns with our ambition to become a leading technology consulting company where our people are in focus."
    },
    {
      tab: "Caring leaders",
      image: "https://sigmatechnology.com/content/uploads/2022/05/EDS_IndustryWest_GBG_2880px_sRGB-12-scaled-1.jpeg?x25367",
      title: "Safe and productive workplace made for you",
      content: "Your manager will follow you closely along your journey with us at Sigma Technology. We aim to build strong and long-term relations built on trust and transparency ensuring that you get the most suitable customer's assignment based on your professional competence, skills, qualities, and preferences."
    },
    {
      tab: "Challenging work",
      image: "https://sigmatechnology.com/content/uploads/2022/05/EDS_IndustrySouth_Lund_2880px_sRGB-4-scaled-1.jpeg?x25367",
      title: "Be challenged and take responsibility in a successful company",
      content: "You will work together with many leading Swedish and international companies and be part of a company that values long-term relationships and open/honest discussions with their clients. Close collaboration with your clients means they will trust you and challenge you to provide new solutions."
    },
    {
      tab: "Corporate spirit",
      image: "https://sigmatechnology.com/content/uploads/2022/05/IMG13759-scaled-1.jpeg?x25367",
      title: "Be healthy, strong, and have fun all together",
      content: "Challenging assignments are only one part of our life within the Sigma Family. We care about the welfare of our members. We participate in various activities such as running, cycling, playing football, and many other sports. The company also regularly hosts walking competitions."
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="section-we-provide py-16 bg-white relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img 
          src="https://sigmatechnology.com/content/uploads/2022/05/Group-128.jpeg?x25367" 
          alt="Background" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h3 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center mb-12">
          What does it mean to be a part of Sigma Technology?
        </h3>

        <div className="tabs services-content">
          {/* Tab Menu */}
          <ul className="swiper-menu flex flex-wrap justify-center gap-2 mb-8">
            {sections.map((section, index) => (
              <li 
                key={index}
                className={`swiper-menu__item px-4 py-2 rounded-lg cursor-pointer transition-colors capitalize ${activeTab === index ? 'bg-[#dc2626] text-white' : 'bg-gray-100 hover:bg-[#dc2626] hover:text-white'}`}
                onClick={() => handleTabClick(index)}
              >
                {section.tab}
              </li>
            ))}
          </ul>

          {/* Swiper Slider */}
          <div className="swiper-tabs relative">
            <Swiper
              modules={[Navigation, Pagination]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              navigation={{
                nextEl: '.tabs-button-next',
                prevEl: '.tabs-button-prev',
              }}
              pagination={{
                el: '.tabs-swiper-pagination',
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
              initialSlide={activeTab}
            >
              {sections.map((section, index) => (
                <SwiperSlide key={index}>
                  <div className="tabs-item-images">
                    <div className="sl-content flex flex-col md:flex-row gap-8">
                      <div className="slide-right-area md:w-1/2 flex justify-center items-center">
                        <img 
                          src={section.image} 
                          alt={section.title} 
                          className="w-[80%] h-[300px] rounded-lg shadow-lg "
                          loading="lazy"
                        />
                      </div>
                      <div className="slide-left-area md:w-1/2">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 capitalize">
                          {section.title}
                        </h3>
                        <p className="text-gray-700">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation + Pagination */}
            <div className="sl-nav flex flex-col items-center justify-center mt-8 gap-4 text-[#dc2626]">
              <div className="tabs-swiper-pagination swiper-pagination flex gap-2  "></div>
              {/* <div className="flex gap-4 mt-4">
                <div className="tabs-button-prev swiper-button-prev !relative !top-0 !left-0 !right-0 !mt-0 !w-10 !h-10 rounded-full bg-[#dc2626] text-white flex items-center justify-center cursor-pointer hover:bg-blue-700 transition">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="tabs-button-next swiper-button-next !relative !top-0 !left-0 !right-0 !mt-0 !w-10 !h-10 rounded-full bg-[#dc2626] text-white flex items-center justify-center cursor-pointer hover:bg-blue-700 transition">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWeProvide;
