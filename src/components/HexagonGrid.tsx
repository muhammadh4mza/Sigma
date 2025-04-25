import React from "react";
import aboutImage from "../assets/about/about-1.webp";
import TiltedCard from "./TiltedCard/TiltedCard";

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
      <TiltedCard>
        <div className="w-full h-[800px] overflow-hidden rounded-lg shadow-lg"> {/* Increased height from 600px to 800px */}
          <img 
            src={aboutImage} 
            alt="About Section Image"
            className="w-full h-full object-cover object-center transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </TiltedCard>
    </div>
  );
};

export default HexagonGrid;