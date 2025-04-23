import React from "react";
import aboutImage from "../assets/about/about-1.webp";

interface HexagonGridProps {
  className?: string;
}

const HexagonGrid: React.FC<HexagonGridProps> = ({ className }) => {
  return (
    <div className={`td-about-4-thumb ${className || ''}`} style={{ maxWidth: '100%' }}>
      <div style={{
        width: '100%',
        height: '600px', // Adjust height as needed
        overflow: 'hidden',
      }}>
        <img 
          className="w-100 h-100"
          src={aboutImage} 
          alt="About Section Image"
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>
    </div>
  );
};

export default HexagonGrid;