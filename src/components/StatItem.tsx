import React from "react";
import abouticon from "../assets/icons/iconabout-1.svg";

interface StatItemProps {
  number: string;
  description: string[];
}

const StatItem: React.FC<StatItemProps> = ({ number, description }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">
        <img 
          src={abouticon} 
          alt="About Icon" 
          className="w-8 h-8 transform hover:scale-110 transition-transform duration-300 filter hover:brightness-125"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
            minWidth: '32px', // Ensures minimum size
            minHeight: '32px'
          }}
        />
      </div>
      <div>
        <h3 className="font-bold text-2xl">{number}</h3>
        {description.map((line, index) => (
          <p 
            key={index} 
            className="stat-description"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StatItem;
