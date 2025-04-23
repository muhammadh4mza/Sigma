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
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#f0e5e8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-8">
          <div className="flex flex-row items-end gap-4">
            <h2 className="text-[64px] font-bold text-gray-800">WHAT'S NEW</h2>
            <p className="text-[24px] text-gray-600">
              There is always something going on! Discover our latest news and insights.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsItems.map((item, index) => (
            <NewsCard 
              key={index} 
              imageUrl={item.imageUrl} 
              title={item.title}
              date={item.date}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""} 
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="p-2 border border-[#8e0f0c] rounded-full hover:bg-[#8e0f0c]/10 transition-colors group">
              <ChevronLeft className="w-5 h-5 text-[#8e0f0c] group-hover:text-[#8e0f0c]" />
            </button>
            <button className="p-2 border border-[#8e0f0c] rounded-full hover:bg-[#8e0f0c]/10 transition-colors group">
              <ChevronRight className="w-5 h-5 text-[#8e0f0c] group-hover:text-[#8e0f0c]" />
            </button>
          </div>
          
          <a
            href="#"
            className="inline-flex items-center text-[#8e0f0c] hover:text-[#8e0f0c]/80 font-medium border border-[#8e0f0c] px-4 py-2 rounded hover:bg-[#8e0f0c]/10 transition-colors"
          >
            READ ALL NEWS
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
