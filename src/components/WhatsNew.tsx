import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import NewsCard from "./NewsCard";
import discoverImage1 from '../assets/discover/1.jpeg';
import discoverImage2 from '../assets/discover/2.jpeg';
import discoverImage3 from '../assets/discover/3.jpeg';
import discoverImage4 from '../assets/discover/4.png';
import discoverImage5 from '../assets/discover/5.jpeg';
import discoverImage6 from '../assets/discover/6.jpeg';

// Define interface for news item type
interface NewsItem {
  imageUrl: string;
  title: string;
  date: string;
  description?: string;
}

// Separate data from component logic
const newsItems: NewsItem[] = [
  {
    imageUrl: discoverImage1,
    title: "Exploring Innovation in Technology",
    date: "April 23, 2024",
    description: "Discover the latest technological innovations shaping our future."
  },
  {
    imageUrl: discoverImage2,
    title: "The Future of Digital Transformation",
    date: "April 22, 2024",
    description: "How digital transformation is revolutionizing industries."
  },
  {
    imageUrl: discoverImage3,
    title: "Building Sustainable Solutions",
    date: "April 21, 2024",
    description: "Creating technology solutions with sustainability in mind."
  },
  {
    imageUrl: discoverImage4,
    title: "Advancing Tech Industries",
    date: "April 20, 2024",
    description: "Leading the way in technological advancement."
  },
  {
    imageUrl: discoverImage5,
    title: "New Horizons in Development",
    date: "April 19, 2024",
    description: "Exploring new possibilities in software development."
  },
  {
    imageUrl: discoverImage6,
    title: "New Horizons in Development",
    date: "April 19, 2024",
    description: "Exploring new possibilities in software development."
  }
];

const WhatsNew = () => {
  return (
    <section className="whats-new-section py-[150px] px-4 sm:px-6 lg:px-8">
      <div className="whats-new-container max-w-7xl mx-auto">
        <div className="whats-new-header mb-12">
          <div className="whats-new-title-wrapper">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-gray/900 mb-4 leading-tight uppercase">WHAT'S NEW</h2>
            <p className="whats-new-subtitle text-lg text-gray-900 max-w-2xl">
              There is always something going on! Discover our latest news and insights.
            </p>
          </div>
        </div>

        <div className="news-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {newsItems.map((item, index) => (
            <NewsCard 
              key={index} 
              imageUrl={item.imageUrl} 
              title={item.title}
              date={item.date}
              className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""} 
            />
          ))}
        </div>

        <div className="navigation-container flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="nav-buttons flex gap-2">
            <button className="nav-button p-2 rounded-full hover:bg-gray-800 transition-colors">
              <ChevronLeft className="w-5 h-5 text-[#086AD7]" />
            </button>
            <button className="nav-button p-2 rounded-full hover:bg-gray-800 transition-colors">
              <ChevronRight className="w-5 h-5 text-[#086AD7]" />
            </button>
          </div>
          
          <a href="#" className="read-more-button flex items-center text-[#086AD7] hover:bg-[#086AD7] hover:text-white transition-colors px-4 py-2 rounded-md">
            READ ALL NEWS
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;