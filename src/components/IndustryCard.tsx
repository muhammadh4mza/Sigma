import React from 'react';
import { Button } from './ui/button';

interface IndustryCardProps {
  title: string;
  description?: string;
  isActive?: boolean;
  image?: string;
}

export const IndustryCard = ({ title, description, isActive, image }: IndustryCardProps) => {
  return (
    <div className={`
      aspect-[1/1.2] relative overflow-hidden
      ${isActive ? 'bg-black-800/90' : 'bg-white/20 backdrop-blur-sm hover:bg-gray-100/90'}
      clip-path-hexagon transform transition-all duration-300
    `}>
      {image && isActive && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
      )}
      
      <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
        <h3 className={`text-xl font-bold mb-4 font-oswald ${isActive ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h3>
        
        {description && isActive && (
          <>
            <p className="text-white/90 text-sm mb-6">
              {description}
            </p>
            <Button 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              ASK FOR CONSULTATION
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
