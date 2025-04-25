import React from 'react';

const HeroVideoSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
          poster="https://sigmatechnology.com/content/uploads/2025/04/Rectangle-101-1.webp"
        >
          <source 
            src="https://sigmatechnology.com/content/uploads/2023/03/d534-4038-8d7c-de399073b2d3-1.mp4" 
            media="(min-width: 990px)" 
            type="video/mp4" 
          />
          <source 
            src="https://sigmatechnology.com/content/uploads/2025/04/d534-4038-8d7c-de399073b2d3-mobile-2-1.mp4" 
            media="(max-width: 989px)" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-30">
        {/* Main Title - Centered both vertically and horizontally */}
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[80px] font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase">
            Sigma Technology Group
          </h1>
        </div>

        {/* Counters Section - Hidden on tablets, shown on desktop */}
        <div className="hidden md:block container mx-auto px-4 mt-auto mb-16">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center">
            {/* Counter Block 1 */}
            <div className="mb-4 md:mb-0">
              <p className="text-sm md:text-base">UNITING OVER</p>
              <p className="text-3xl md:text-4xl font-bold my-2">3400 EXPERTS</p>
              <p className="text-xs md:text-sm">ACROSS THE WORLD</p>
            </div>

            {/* Counter Block 2 */}
            <div className="mb-4 md:mb-0">
              <p className="text-sm md:text-base">leveraging</p>
              <p className="text-3xl md:text-4xl font-bold my-2">20+ years</p>
              <p className="text-xs md:text-sm">of global delivery<br />experience</p>
            </div>

            {/* Counter Block 3 */}
            <div className="mb-4 md:mb-0">
              <p className="text-sm md:text-base">Operating</p>
              <p className="text-3xl md:text-4xl font-bold my-2">30 locations</p>
              <p className="text-xs md:text-sm">in 7 countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;