import React from 'react';
import About1 from '../assets/about/about-1.webp';
import HexagonImage from '../assets/about/about-1.webp';

const HexagonHeroSection = () => {
  // Awards data
  const awards = [
    {
      value: "12 YEARS",
      description: "AMONG SWEDEN'S BEST EMPLOYERS"
    },
    {
      value: "TOP 1",
      description: "MOST RECOMMENDED EMPLOYER SWEDEN"
    },
    {
      value: "200+",
      description: "JOBS ARE OUR GOAL THIS YEAR"
    }
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* Left Column - Image Section */}
          <div className="w-full md:w-5/12">
            {/* Desktop Image */}
            <div className="hidden md:block w-full h-full rounded-lg overflow-hidden">
              <img 
                src={HexagonImage} 
                className="w-[80%] h-[100vh]object-auto"
                alt="hexagon-background"
                loading="lazy"
              />
            </div>
            
            {/* Mobile Image */}
            <div className="md:hidden w-full h-full rounded-lg overflow-hidden">
              <img 
                src={About1} 
                className="w-full h-full object-cover"
                alt="hexagon-mobile"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column - Content Section */}
          <div className="w-full md:w-7/12">
            {/* Heading */}
            <h2 className="text-[64px] font-bold mb-6 uppercase leading-tight">
              A <span className="text-[#87c2e7]">GLOBAL<br />COMPANY</span> WITH<br />
              FAMILY <span className="text-[#87c2e7]">SPIRIT</span>
            </h2>
            
            {/* Description */}
            <div className="text-lg text-gray-600 space-y-4 mb-8">
              <p>
                Sigma Technology was started with a mission to make tomorrow's technology usable today. 
                Our vision is to become the leading tech consulting company where people are in focus, 
                helping our clients innovate and our people grow. Our consultants and development teams 
                provide cutting-edge expertise in software engineering, embedded systems, IT infrastructure, 
                product information, and digital solutions.
              </p>
              <p>
                We are committed to contributing to a better tomorrow, delivering superior value to our 
                customers and employees.
              </p>
            </div>
            
            {/* Awards Grid */}
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <li key={index} className="border-l-4 border-[#E30613] pl-4">
                  <p className="text-2xl font-bold">{award.value}</p>
                  <p className="text-sm">{award.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HexagonHeroSection;