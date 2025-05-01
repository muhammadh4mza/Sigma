import React from 'react';
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";

const HeroVideoSection = () => {
  return (
    <section className="relative w-full h-[850px] overflow-hidden flex items-center justify-center mt-16">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full animate-fadeIn">
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30">
        {/* Main Title - Centeblue */}
        <div className="flex-1 flex items-center justify-center w-full pt-16">
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
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-bold uppercase mb-4 leading-tight">
                <span className="inline-block animate-float">Sigma</span>{' '}<br></br>
                <span className="inline-block animate-float delay-100">Technology</span>{' '}<br></br>
                <span className="inline-block animate-float delay-200">Group</span>
              </h1>
              <div className="w-32 h-1 bg-[#086AD7] mx-auto mt-8 animate-growWidth origin-left"></div>
            </div>
          </AnimatedContent>
        </div>

        {/* Counters Section */}
        <div className="w-full pb-8">
          <div className="hidden md:block container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6 lg:gap-8 text-center">
              
              {/* Counter Block 1 */}
              <AnimatedContent
                distance={50}
                direction="vertical"
                delay={200}
                className="flex-1 min-w-[200px] max-w-[260px]"
              >
                <div className="h-full p-4 md:p-6 bg-black bg-opacity-40 rounded-lg backdrop-blur-sm hover:bg-opacity-60 transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <p className="text-sm md:text-base mb-2">UNITING OVER</p>
                    <p className="text-2xl md:text-3xl font-bold my-2">3400 EXPERTS</p>
                  </div>
                  <p className="text-xs md:text-sm mt-2">ACROSS THE WORLD</p>
                </div>
              </AnimatedContent>

              {/* Counter Block 2 */}
              <AnimatedContent
                distance={50}
                direction="vertical"
                delay={400}
                className="flex-1 min-w-[200px] max-w-[260px]"
              >
                <div className="h-full p-4 md:p-6 bg-black bg-opacity-40 rounded-lg backdrop-blur-sm hover:bg-opacity-60 transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <p className="text-sm md:text-base mb-2">LEVERGING</p>
                    <p className="text-2xl md:text-3xl font-bold my-2">20+ YEARS</p>
                  </div>
                  <p className="text-xs md:text-sm mt-2 uppercase">of global delivery experience</p>
                </div>
              </AnimatedContent>

              {/* Counter Block 3 */}
              <AnimatedContent
                distance={50}
                direction="vertical"
                delay={600}
                className="flex-1 min-w-[200px] max-w-[260px]"
              >
                <div className="h-full p-4 md:p-6 bg-black bg-opacity-40 rounded-lg backdrop-blur-sm hover:bg-opacity-60 transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <p className="text-sm md:text-base mb-2">OPERATING</p>
                    <p className="text-2xl md:text-3xl font-bold my-2">30 LOCATIONS</p>
                  </div>
                  <p className="text-xs md:text-sm mt-2 uppercase">in 7 countries</p>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;