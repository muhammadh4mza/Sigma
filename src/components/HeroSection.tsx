import React, { useRef } from "react";
import herovideo from "../assets/video/video-background.mp4";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.7)" }}
      >
        <source src={herovideo} type="video/mp4" />
        {/* Fallback text for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white">
        {/* Heading */}
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-16 md:mb-24 tracking-wider uppercase">
            SIGMA TECHNOLOGY
            <br />
            GROUP
          </h1>
        </div>

        {/* Stats */}
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mt-8">
          <div className="text-center">
            <h3 className="text-sm uppercase font-medium mb-2">UNITING OVER</h3>
            <p className="text-4xl md:text-5xl font-bold mb-2">3400 EXPERTS</p>
            <p className="text-sm uppercase font-medium">ACROSS THE WORLD</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm uppercase font-medium mb-2">LEVERAGING</h3>
            <p className="text-4xl md:text-5xl font-bold mb-2">20+ YEARS</p>
            <p className="text-sm uppercase font-medium">OF GLOBAL DELIVERY<br />EXPERIENCE</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm uppercase font-medium mb-2">OPERATING</h3>
            <p className="text-4xl md:text-5xl font-bold mb-2">30 LOCATIONS</p>
            <p className="text-sm uppercase font-medium">IN 7 COUNTRIES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
