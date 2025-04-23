
import React from "react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const menuItems = ["About", "Services", "Career", "Insights", "Contact", "Languages"];

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6">
      <Logo />
      <div className="hidden md:flex items-center space-x-10">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <button className="md:hidden text-white">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
