import React, { useState, useEffect } from 'react';

const ValuesAndVision: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id^="section"]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(parseInt(section.id.replace('section', '')));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navigation dots */}
      <div className="container mx-auto">
        <ul className="fixed left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
          {[1, 2, 3, 4].map((num) => (
            <li key={num}>
              <a
                href={`#section${num}`}
                className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === num ? 'bg-blue-500' : 'bg-gray-300 hover:bg-blue-300'
                }`}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Fixed title */}
      <div className="fixed top-14 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto py-4">
          <h2 className="text-2xl font-bold">VALUES AND VISION</h2>
        </div>
      </div>

      {/* Desktop Sections */}
      <div className="hidden md:block">
        {/* Your existing desktop sections here */}
        {/* Each section remains the same as in your current code */}
        <section className="pt-36 activeValue" id="section1">
          <div className="container mx-auto">
            <p className="text-lg mb-8">Whatever we do, we do it with one and the same promise - Expect a Better Tomorrow</p>
            <div className="content-value-1">
              <div className="hex-value-1 p-8 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-4">Company, where people are in focus</h3>
                <p className="text-gray-700">We celebrate our people not for how well they fit into the standards but for everything they bring with their true selves. We encourage every development opportunity to make sure our people are empowered to live authentically, grow to their full potential, and live purposefully.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 activeValue" id="section2">
          <div className="container mx-auto">
            <div className="content-value-2">
              <div className="hex-value-2 p-8 bg-white shadow-lg rounded-lg relative">
                <div className="value2-left absolute left-0 top-0 w-16 h-full bg-blue-100"></div>
                <h3 className="text-xl font-bold mb-4 ml-20">Sustainable development for a sustainable world</h3>
                <p className="text-gray-700 ml-20">Through continuous improvement of our operations and sustainability performance, Sigma Technology strives to contribute to the progress of society. To put our words into concrete actions, we foster community development, education, innovation, gender equality, diversity, responsible consumption, and ethical business practices.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20" id="section3">
          <div className="container mx-auto">
            <div className="content-value-3">
              <div className="hex-value-3 p-8 bg-white shadow-lg rounded-lg relative">
                <div className="value3-left absolute left-0 top-0 w-16 h-full bg-blue-100"></div>
                <div className="value31-left absolute left-16 top-0 w-4 h-full bg-blue-200"></div>
                <div className="value32-left absolute left-20 top-0 w-4 h-full bg-blue-300"></div>
                <div className="value33-left absolute left-24 top-0 w-4 h-full bg-blue-400"></div>
                <h3 className="text-xl font-bold mb-4 ml-28">Making<br />technology usable</h3>
                <p className="text-gray-700 ml-28">We envision a future where technology is seamlessly integrated into our everyday lives, making it more efficient and accessible. We strive to create products and services that improve people's lives and make the world a better place.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20" id="section4">
          <div className="container mx-auto">
            <div className="content-value-4">
              <div className="hex-value-4 p-8 bg-white shadow-lg rounded-lg relative">
                <div className="value4-left absolute left-0 top-0 w-16 h-full bg-blue-100"></div>
                <div className="value41-left absolute left-16 top-0 w-4 h-full bg-blue-200"></div>
                <div className="value42-left absolute left-20 top-0 w-4 h-full bg-blue-300"></div>
                <div className="value43-left absolute left-24 top-0 w-4 h-full bg-blue-400"></div>
                <h3 className="text-xl font-bold mb-4 ml-28">SUSTAINBILITY<br />REPORT 2023</h3>
                <p className="text-gray-700 ml-28 mb-6">Our CSR report provides an overview of our company's efforts and progress towards sustainable practices and social responsibility. Through this report, we aim to transparently communicate our commitments and actions towards creating a positive impact on society and the environment.</p>
                <a href="https://sigmatechnology.com/content/uploads/2025/02/CSR-Report-2023-final-version.pdf?x25367" className="ml-28 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Read more</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Sections */}
      <div className="block md:hidden">
        <section className="py-10 title-val">
          <div className="container mx-auto">
            <p className="font-bold">VALUES AND VISION</p>
            <p className="text-lg mt-2">Whatever we do, we do it with one and the same promise - Expect a Better Tomorrow</p>
          </div>
        </section>
        
        <section className="py-10">
          <div className="container mx-auto">
            <div className="content-value-mobile-1 p-6 bg-white rounded-lg shadow">
              <div className="hex-value-mobile-1">
                <p className="font-bold mb-3">Company, where people are in focus</p>
                <p className="text-gray-700">We celebrate our people not for how well they fit into the standards but for everything they bring with their true selves. We encourage every development opportunity to make sure our people are empowered to live authentically, grow to their full potential, and live purposefully.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-10">
          <div className="container mx-auto">
            <div className="content-value-mobile-2 p-6 bg-white rounded-lg shadow">
              <div className="hex-value-mobile-2">
                <p className="font-bold mb-3">Sustainable development for a sustainable world</p>
                <p className="text-gray-700">Through continuous improvement of our operations and sustainability performance, Sigma Technology strives to contribute to the progress of society. To put our words into concrete actions, we foster community development, education, innovation, gender equality, diversity, responsible consumption, and ethical business practices.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-10">
          <div className="container mx-auto">
            <div className="content-value-mobile-3 p-6 bg-white rounded-lg shadow">
              <div className="hex-value-mobile-3">
                <p className="font-bold mb-3">Making<br />technology usable</p>
                <p className="text-gray-700">We envision a future where technology is seamlessly integrated into our everyday lives, making it more efficient and accessible. We strive to create products and services that improve people's lives and make the world a better place.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-10">
          <div className="container mx-auto">
            <div className="content-value-mobile-4 p-6 bg-white rounded-lg shadow mb-6">
              <div className="hex-value-mobile-4">
                <p className="font-bold mb-3">SUSTAINBILITY<br />REPORT 2023</p>
                <p className="text-gray-700">Our CSR report provides an overview of our company's efforts and progress towards sustainable practices and social responsibility. Through this report, we aim to transparently communicate our commitments and actions towards creating a positive impact on society and the environment.</p>
              </div>
            </div>
            <a href="https://sigmatechnology.com/content/uploads/2025/02/CSR-Report-2023-final-version.pdf?x25367" className="inline-block px-6 py-2 bg-white text-blue-500 border border-blue-500 rounded hover:bg-blue-50 transition">Read more</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ValuesAndVision;