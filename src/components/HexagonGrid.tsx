import React from "react";
import aboutImage from "../assets/about/about-1.webp";

interface HexagonGridProps {
  className?: string;
}

const HexagonGrid: React.FC<HexagonGridProps> = ({ className }) => {
  return (
    <div 
      className={`
        relative 
        max-w-full 
        ${className || ''}
      `}
    >
      <div className="w-full h-[800px] overflow-hidden">
        <img 
          src={aboutImage} 
          alt="About Section Image"
          className="w-full h-full object-auto object-center transition-all duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
};

export default HexagonGrid;