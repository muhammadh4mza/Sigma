import React, { useState } from 'react';

const ServicesHeroSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, name: 'Digital solutions' },
    { id: 2, name: 'Business solutions' },
    { id: 3, name: 'Cloud solutions' },
    { id: 4, name: 'Product information' },
  ];

  const tabContents = [
    {
      id: 1,
      items: [
        { text: 'Software development', link: '/service/software-development-services/' },
        { text: 'Embedded systems development', link: '/service/embedded-systems-development/' },
        { text: 'AI/ML consulting services', link: '/service/artificial-intelligence-ai-consulting-services' },
        { text: 'Microsoft 365 Copilot', link: '/service/microsoft-365-copilot/' },
        { text: 'UX/UI design', link: null },
        { text: 'Accessibility review', link: '/service/accessibility-review-sigma-technology-cloud/' },
        { text: 'Digital strategy and transformation', link: '/service/digital-transformation-sigma-technology-cloud/' },
        { text: 'IoT', link: '/service/internet-of-things-sigma-technology-cloud/' },
        { text: 'ERP solutions', link: null },
        { text: 'Digital product passports', link: '/service/digital-product-passports/' },
        { text: 'Public sector innovation', link: '/industry/public-sector-solutions-in-scandinavia/' },
        { text: 'Automotive industry solutions', link: '/industry/automotive/' },
      ]
    },
    {
      id: 2,
      items: [
        { text: 'Data analytics & BI', link: '/service/data-analytics-and-bi-services/' },
        { text: 'Pblueictive maintenance', link: null },
        { text: 'Digital twins', link: null },
        { text: 'Corporate learning services', link: '/service/corporate-learning-services/' },
        { text: 'Smartshoring', link: '/service/smartshoring/' },
        { text: 'Learning and change management', link: '/service/learning-and-change-management/' },
        { text: 'License management', link: '/service/license-management-services/' },
        { text: 'ISO consulting', link: '/service/iso-consulting-services/' },
      ]
    },
    {
      id: 3,
      items: [
        { text: 'Cloud services', link: '/service/cloud-services/' },
        { text: 'AWS cloud solutions', link: '/service/aws-cloud-services/' },
        { text: 'Well-architected review', link: '/service/well-architected-review-consultancy/' },
        { text: 'DevOps and infrastructure', link: '/service/devops-by-sigma-technology-cloud/' },
      ]
    },
    {
      id: 4,
      items: [
        { text: 'Product information', link: '/service/product-information-services/' },
        { text: 'Product information management', link: '/service/information-management/' },
        { text: 'Workshops & Training', link: null },
        { text: 'Graphic design', link: '/service/design-services/' },
      ]
    },
  
];

const handlePrev = () => {
  setActiveTab(prev => (prev === 1 ? 4 : prev - 1));
};

const handleNext = () => {
  setActiveTab(prev => (prev === 4 ? 1 : prev + 1));
};

return (
  <section 
    className="relative min-h-screen w-full flex items-center justify-center py-16"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}
    id="service1_bg"
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    
    <div className="container mx-auto px-4 relative z-10">
      {/* Content container with fixed height */}
      <div className="bg-[#ffffff24] bg-opacity-50 rounded-xl p-8 backdrop-blur-sm shadow-2xl min-h-[600px]">
        <h3 className="text-[64px] font-bold text-center mb-12 text-[#62abff] uppercase">Our services</h3>
        
        <div className="services-content h-full">
          <div className="tabs flex flex-col h-full">
            <ul className="flex mb-8">
              {tabs.map(tab => (
                <li key={tab.id} className="mr-4">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-4 font-medium capitalize text-[20px] ${activeTab === tab.id ? 'text-[#62abff] border-b-2 border-[#62abff]' : 'text-white hover:text-[#62abff]'}`}
                  >
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="flex justify-between items-center mb-8">
              <div className="text-white border-b border-gray-200 text-[35px]">
                <span className="service-count">{activeTab}/</span>4
              </div>
              <div className="flex">
                <button 
                  onClick={handlePrev}
                  className="p-2 mr-2 bg-gray-100 rounded-full hover:bg-[#62abff] hover:text-white transition-colors"
                  aria-label="Previous tab"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 bg-gray-100 rounded-full hover:bg-[#62abff] hover:text-white transition-colors"
                  aria-label="Next tab"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Tab content with flex-grow to fill remaining space */}
            <div className="flex-grow">
              {tabContents.map(content => (
                <div 
                  key={content.id} 
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full ${activeTab === content.id ? 'block' : 'hidden'}`}
                >
                  {content.items.map((item, index) => (
                    <div key={index} className="mb-4">
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-[#fff] hover:underline font-medium hover:text-[#62abff] transition-colors capitalize" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-white font-medium capitalize">{item.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default ServicesHeroSection;