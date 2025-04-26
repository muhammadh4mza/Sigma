import React from 'react';
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";

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
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
        <div className="relative w-full h-[400px] flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase">
              Sigma Technology Group
            </h1>
          </div>
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
              <p className="text-sm md:text-base">LEVERGING</p>
              <p className="text-3xl md:text-4xl font-bold my-2 uppercase">20+ years</p>
              <p className="text-xs md:text-sm uppercase">of global delivery<br />experience</p>
            </div>

            {/* Counter Block 3 */}
            <div className="mb-4 md:mb-0">
              <p className="text-sm md:text-base">OPERATING</p>
              <p className="text-3xl md:text-4xl font-bold my-2 uppercase">30 locations</p>
              <p className="text-xs md:text-sm uppercase">in 7 countries</p>
            </div>
          </div>
        </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default HeroVideoSection;