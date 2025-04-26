import React from 'react';

const GlobalLocalSection = () => {
  return (
    <section className="relative min-h-screen py-16 flex items-center" id="text-with-squere">
      {/* Main Background Image with Dark Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://sigmatechnology.com/content/uploads/2022/12/pexels-arthouse-studio-4344434-1-1.jpeg"
          alt="Technology background"
          className="w-full h-full object-cover"
          
        />
      </div>
      {/* <div className="absolute inset-0 bg-black"></div> */}

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          {/* Left Column - White Card */}
          <div className="w-full lg:w-5/12 p-10">
            <h3 className="text-[64px] font-bold mb-8 text-left text-[#dc2626] leading-none">GLOBAL YET LOCAL</h3>
            <div className="space-y-6 text-center text-lg">
              <p className="text-left text-black">
                Sigma Technology combines a strong local presence with a global reach – "Local Drive. Global Strength".
              </p>
              <p className="text-left text-black">
                The local presence at the clients' main R&amp;D hubs combined with our global operations makes us a unique supplier within our area.
              </p>
              <p className="text-left text-black">
                The aim is to always outperform our competitors with Superior Supplier Value.
              </p>
            </div>
          </div>

          {/* Right Column - Image Background with Red Overlay */}
          <div className="w-full lg:w-7/12 rounded-xl text-white relative min-h-[600px]">
            {/* Background Image with Red Overlay */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <img
                src="https://sigmatechnology.com/content/themes/sigma/assets/img/value2.svg"
                alt="Global offices"
                className="w-full h-full object-contain"
              />
              {/* <div className="absolute inset-0 bg-[#dc2626] bg-opacity-85"></div> */}
            </div>
            
            {/* Content */}
            <div className="relative p-16 pr-36 pl-36 h-full flex flex-col justify-center">
              <div className="hexagon-shape absolute top-10 right-10 w-28 h-28 bg-white opacity-20"></div>
              
              <h3 className="text-[43px] font-bold mb-8 text-center leading-none text-white">LOCAL DRIVE – GLOBAL STRENGTH</h3>
              
              <div className="space-y-6 text-center text-lg mb-10 text-white">
                <p>Sigma Technology has offices and representative partners in</p>
                <p className="text-2xl font-semibold text-white">14 countries worldwide</p>
                <p>
                  Our philosophy is Local Drive – Global Strength. The global presence ensures the competence and capacity to offer high-quality local delivery.
                </p>
              </div>
              
              <div className="mt-auto flex justify-center ">
                <a 
                  href="https://sigmatechnology.com/contact/" 
                  className="inline-flex items-center px-10 py-5 bg-white text-[#dc2626] font-bold text-xl rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Contact us
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 15 14" fill="none" className="ml-4">
                    <path d="M0.5 7.02539H13.8171" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.19336 1.17773L14.4998 7.00631L8.19336 13.1777" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hexagon shape styling */}
      {/* <style jsx>{`
        .hexagon-shape {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style> */}
    </section>
  );
};

export default GlobalLocalSection;