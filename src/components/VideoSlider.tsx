import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const videos = [
    {
      id: "Vor8Sk7--_w",
      image: "https://sigmatechnology.com/content/uploads/2023/10/Sigma-summit-2023-copy.jpg"
    },
    {
      id: "mcg0bPbnQCg",
      image: "https://sigmatechnology.com/content/uploads/2022/05/Screenshot-2022-05-17-at-17.43.24-scaled-1.jpg"
    },
    {
      id: "jaeudvN8Sb8",
      image: "https://sigmatechnology.com/content/uploads/2022/05/Screenshot-2022-05-18-at-17.41.55-1-scaled-1.jpg"
    },
    {
      id: "na_sf9TJlNw",
      image: "https://sigmatechnology.com/content/uploads/2022/05/Screenshot-2022-05-18-at-17.47.31.jpg"
    }
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="relative py-16 text-center bg-gray-50 py-28">
      {/* Triangle background */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white clip-path-triangle"></div>
      
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="w-full">
            <h3 className="text-3xl lg:text-7xl font-bold mb-2 uppercase">Say hi to our team</h3>
            <p className="text-xl mb-8">Discover videos from our yearly summits</p>
            
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination]}
              spaceBetween={35}
              slidesPerView={1}
              loop={true}  // Added loop prop
              navigation={{
                prevEl: '.tabs-button-prev',
                nextEl: '.tabs-button-next'
              }}
              pagination={{
                el: '.tabs-swiper-pagination',
                clickable: true,
                type: 'bullets',
              }}
              onSlideChange={handleSlideChange}
              className="relative"
            >
              {videos.map((video, index) => (
                <SwiperSlide key={video.id}>
                  <div className="sl-content relative">
                    <div 
                      className="bgvideo bg-cover bg-center h-[550px] rounded-lg"
                      style={{ backgroundImage: `url(${video.image})` }}
                    ></div>
                    <div className="bgvideo__watch absolute inset-0 flex items-center justify-center">
                      <a 
                        href={`https://www.youtube.com/watch?v=${video.id}`} 
                        className="bgvideo___trigger"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="inline-block">
                          <svg width="70" height="60" viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M68.791 31.6166L53.1225 58.3833C52.537 59.3838 51.4547 60.0001 50.2834 60L18.9464 59.9999C17.7754 59.9998 16.6933 59.3836 16.1078 58.3834L0.439241 31.6167C-0.146421 30.6163 -0.146413 29.3837 0.439261 28.3833L16.1077 1.61664C16.6934 0.616417 17.7756 0.000335646 18.9467 0.000448671L50.2838 0C51.4549 9.97064e-05 52.5369 0.616304 53.1224 1.61653L68.7915 28.3834C69.3772 29.3838 69.3772 30.6164 68.7915 31.6168L68.791 31.6166Z" fill="white"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M43.2188 29.5L30.2187 37.2188L30.2188 21.7812L43.2188 29.5Z" fill="#FF0000" stroke="#FF0000" strokeWidth="1.2" strokeLinejoin="round"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              
              <div className="sl-nav mt-8 flex items-center justify-center gap-4">
                {/* <div className="tabs-swiper-pagination flex gap-2"></div> */}
                <div className="flex gap-[1250px]">
                  <div className="tabs-button-prev cursor-pointer text-red-600 bg-white rounded-full p-2 shadow-lg hover:bg-red-600 hover:text-white transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="tabs-button-next cursor-pointer text-red-600 bg-white rounded-full p-2 shadow-lg  hover:bg-red-600 hover:text-white transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Swiper>
            
            <p className="my-8 max-w-3xl mx-auto lg:text-2xl">
              Your journey with us starts with an onboarding where you can learn about your future with us. But we don't stop there. 
              We believe that onboarding is equally important for new and existing team members, because as the world and technologies 
              develop, so do we develop as an organization and teams as well. That's why we meet once a year on a Summit, our yearly 
              onboarding for all the colleagues. We have a joint summit for our teams in Sweden, Hungary, and China.
            </p>
            
            <a 
              href="/open-positions/" 
              className="inline-flex items-center text-[15px] px-5 py-2 bg-[#dc2626] text-[#fff]  text-xl rounded-lg hover:bg-black hover:text-white transition-all duration-300 "
            >
              Join us!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;