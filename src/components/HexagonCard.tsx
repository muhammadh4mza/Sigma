import React from 'react';

interface HexagonCardProps {
  title: string;
  isHighlighted?: boolean;
  className?: string;
}

const HexagonCard = ({ title, isHighlighted, className = '' }: HexagonCardProps) => {
  return (
    <div 
      className={`
        ${isHighlighted ? 'bg-red-600 text-white' : 'bg-white/20 backdrop-blur-sm'}
        ${className}
        aspect-square h-[180px] flex items-center justify-center
        clip-path-hexagon transform transition-transform duration-300 hover:scale-105
      `}
    >
      <h3 className="text-center font-medium text-lg px-4 font-oswald">
        {title}
      </h3>
    </div>
  );
};

export default HexagonCard;
