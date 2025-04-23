
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="text-red-600 mr-1">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0L30 15L15 30L0 15L15 0Z" fill="currentColor" />
        </svg>
      </div>
      <div className="flex items-baseline">
        <span className="font-bold text-white text-xl tracking-tight">sigma</span>
        <span className="text-white text-xs ml-0.5">technology</span>
      </div>
    </div>
  );
};

export default Logo;
