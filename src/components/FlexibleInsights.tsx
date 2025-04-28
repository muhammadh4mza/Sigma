import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FlexibleInsights = () => {
  const teamMembers = [
    {
      id: 1,
      image: "https://sigmatechnology.com/content/uploads/2022/05/03.png?x25367",
      name: "Amelie Olsen",
      position: "Unit manager",
      quote: "I'm feeling inspired! I am working with competent and experienced people at the forefront of technology. Instantly I was welcomed with a great team spirit, and there is an incredible dedication and devotion to our customers and pride in what we do. We are taking part in the digital revolution, together with the world's leading brands, and the sky is the limit. How can this not be exciting!"
    },
    {
      id: 2,
      image: "https://sigmatechnology.com/content/uploads/2022/05/01.png?x25367",
      name: "Frank Camara",
      position: "Unit manager",
      quote: "I chose Sigma Technology because we have similar values. I see it as a matter of course to be a part of the digital journey, where we will be the leading technology consulting company with a strong focus on people. With my technical background and experience as a consultant, I hope to be able to contribute to this."
    },
    {
      id: 3,
      image: "https://sigmatechnology.com/content/uploads/2022/05/Property-105.png?x25367",
      name: "Jimmy Dahlqvist",
      position: "Head of AWS Technologies",
      quote: "I chose Sigma Technology as I believe that the company is in a very interesting phase of strong growth. I enjoy great opportunities to influence and build from the ground up. My vision is that within a couple of years, Sigma Technology will be the obvious partner to help companies with their journey to the cloud from start to finish."
    },
    {
      id: 4,
      image: "https://sigmatechnology.com/content/uploads/2022/05/02.png?x25367",
      name: "Istvan Szabo",
      position: "Technical Writer",
      quote: "What I love at Sigma is that I have the opportunity to do the things I love. Apart from my technical writer position, I'm also supporting the team with IT, which helps me to strengthen my IT knowledge and learn some development things. Another important thing for me is the team spirit and supporting management in the company, which helps a person to develop and grow."
    },
    {
      id: 5,
      image: "https://sigmatechnology.com/content/uploads/2022/05/Group-96-2.png?x25367",
      name: "And you?",
      cta: "If you share our vision of enabling technology of tomorrow",
      buttonText: "Join us",
      buttonLink: "https://sigmatechnology.com/open-positions/"
    }
  ];

  return (
    <section className="flexible-insights text-center relative py-20 bg-gray-50">
      {/* Triangle background */}
      <div className="trianglebg absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-transparent clip-path-triangle z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="row">
          <div className="col-lg-12 w-full">
            <h3 className="title text-3xl md:text-4xl font-bold mb-4">insights</h3>
            <p className="subtitle text-xl mb-12">Meet our people</p>
            
            <div className="slinsight relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.tabs-button-next',
                  prevEl: '.tabs-button-prev',
                }}
                pagination={{
                  el: '.tabs-swiper-pagination',
                  clickable: true,
                }}
                spaceBetween={35}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                  768: {
                    slidesPerView: 1.2,
                  },
                  1024: {
                    slidesPerView: 1.5,
                  }
                }}
              >
                {teamMembers.map((member) => (
                  <SwiperSlide key={member.id} className="py-4">
                    <div className="sl-content bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row h-full">
                      <div className="slide-left-area md:w-1/2 p-6 flex items-center justify-center">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="max-h-80 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="slide-right-area md:w-1/2 p-8 text-left flex flex-col justify-center">
                        {member.position ? (
                          <>
                            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                            <p className="position text-gray-500 mb-4">{member.position}</p>
                            <div className="text text-gray-700">{member.quote}</div>
                          </>
                        ) : (
                          <>
                            <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
                            <div className="text btslide text-gray-700 mb-6">{member.cta}</div>
                            <a 
                              href={member.buttonLink} 
                              className="button inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                            >
                              {member.buttonText}
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Controls */}
              <div className="swiper-button-prev tabs-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="swiper-button-next tabs-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="tabs-swiper-pagination swiper-pagination mt-6 !relative"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-path-triangle {
          clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
        }
      `}</style>
    </section>
  );
};

export default FlexibleInsights;