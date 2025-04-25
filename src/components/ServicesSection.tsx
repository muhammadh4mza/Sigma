import React, { useState } from 'react';

interface ServiceItem {
  name: string;
  link?: string;
}

interface ServiceTab {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

const services: ServiceTab[] = [
  {
    id: 'digital-engineering',
    title: 'Digital & Engineering',
    description: 'From vision to innovation—power your ideas with our expert digital and engineering solutions.',
    items: [
      { name: 'Software development', link: '/service/software-development-services' },
      { name: 'Embedded systems development', link: '/service/embedded-systems-development' },
      { name: 'AI development and consulting', link: '/service/artificial-intelligence-ai-consulting-services' },
      { name: 'Cloud services', link: '/service/cloud-services' },
      { name: 'DevOps & Infrastructure', link: '/service/devops-by-sigma-technology-cloud' },
      { name: 'Test & Quality' },
      { name: 'Digital strategy and transformation', link: '/service/digital-transformation-sigma-technology-cloud' },
      { name: 'UX/UI, accessibility services', link: '/service/accessibility-review-sigma-technology-cloud' },
    ]
  },
  {
    id: 'business-solutions',
    title: 'Business solutions',
    description: 'Powering growth with tailored business solutions and expertise.',
    items: [
      { name: 'Digital Product Passports', link: '/service/digital-product-passports' },
      { name: 'Data analytics & BI', link: '/service/data-analytics-and-bi-services' },
      { name: 'License management', link: '/service/license-management-services' },
      { name: 'Microsoft 365 Copilot', link: '/service/microsoft-365-copilot' },
      { name: 'ERP implementation' },
      { name: 'CIO advisory' },
      { name: 'Predictive maintenance' },
      { name: 'ISO consulting', link: '/service/iso-consulting-services' }
    ]
  },
  {
    id: 'product-information',
    title: 'Product information',
    description: 'Deliver the right information, at the right time, in the right way.',
    items: [
      { name: 'Product information', link: '/service/product-information-services' },
      { name: 'Learning & Development', link: '/service/learning-and-change-management' },
      { name: 'Workshops & Education' },
      { name: 'Graphic design', link: '/service/design-services' }
    ]
  }
];

const ServicesSection = () => {
              const [activeTab, setActiveTab] = useState(services[0].id);
            
              return (
                <section className="relative py-20 overflow-hidden min-h-screen"> {/* Changed to min-h-screen */}
                  {/* Background Layers */}
                  <div className="absolute inset-0 z-0">
                    {/* Background Image - Changed to proper implementation */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: "url('https://sigmatechnology.com/content/uploads/2025/02/gr-1-1-1.webp')" }}
                    ></div>
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gray-900 "></div>
                    
                    
                    
                    {/* Pattern/texture (optional) */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
                  </div>
            
                  <div className="container mx-auto px-4 relative z-10 min-h-[70vh]"> {/* Added min-h */}
                    {/* Title */}
                    <div className="text-center mb-16">
                      <h2 className="text-[64px] md:text-[80px] font-bold text-white mb-4 leading-tight uppercase">
                        <span className="text-red-600">Our</span> Services
                      </h2>
                      <div className="w-[250px] h-1 bg-red-600 mx-auto"></div>
                    </div>
            
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Column - Tabs */}
                      <div className="space-y-4">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => setActiveTab(service.id)}
                            className={`w-full text-left p-6 rounded-lg transition-all duration-300 border-l-4
                              ${activeTab === service.id 
                                ? 'bg-red-600 text-white shadow-lg border-white' 
                                : 'bg-white/5 text-white hover:bg-white/10 border-transparent'
                              }`}
                          >
                            <h3 className="text-2xl font-semibold uppercase">{service.title}</h3>
                          </button>
                        ))}
                      </div>
            
                      {/* Right Column - Content */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 shadow-lg min-h-[500px]"> {/* Added min-h */}
                        {services.map((service) => (
                          <div
                            key={service.id}
                            className={`transition-opacity duration-300 h-full
                              ${activeTab === service.id ? 'block opacity-100' : 'hidden opacity-0'}`}
                          >
                            <p className="text-white/90 text-[30px] mb-8 uppercase">{service.description}</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {service.items.map((item, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                                  {item.link ? (
                                    <a
                                      href={item.link}
                                      className="text-white hover:text-red-400 transition-colors text-lg"
                                    >
                                      {item.name}
                                    </a>
                                  ) : (
                                    <span className="text-white text-lg">{item.name}</span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              );
            };
            
            export default ServicesSection;