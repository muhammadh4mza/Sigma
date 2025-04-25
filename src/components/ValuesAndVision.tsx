import React, { useState, useEffect } from 'react';

interface Section {
  id: string;
  title: string;
  content: string;
  isReport?: boolean;
  reportLink?: string;
  bgImage?: string;
}

const sections: Section[] = [
  {
    id: 'section1',
    title: 'Company, where people are in focus',
    content: 'We celebrate our people not for how well they fit into the standards but for everything they bring with their true selves. We encourage every development opportunity to make sure our people are empowered to live authentically, grow to their full potential, and live purposefully.',
    bgImage: 'https://sigmatechnology.com/content/uploads/2023/12/gr-1-1-1.webp'
  },
  {
    id: 'section2',
    title: 'Sustainable development for a sustainable world',
    content: 'Through continuous improvement of our operations and sustainability performance, Sigma Technology strives to contribute to the progress of society. To put our words into concrete actions, we foster community development, education, innovation, gender equality, diversity, responsible consumption, and ethical business practices.',
    bgImage: 'https://sigmatechnology.com/content/uploads/2023/12/gr-1-1-2.webp'
  },
  {
    id: 'section3',
    title: 'Making\ntechnology usable',
    content: 'We envision a future where technology is seamlessly integrated into our everyday lives, making it more efficient and accessible. We strive to create products and services that improve people\'s lives and make the world a better place.',
    bgImage: 'https://sigmatechnology.com/content/uploads/2023/12/gr-1-1-3.webp'
  },
  {
    id: 'section4',
    title: 'SUSTAINABILITY\nREPORT 2023',
    content: 'Our CSR report provides an overview of our company\'s efforts and progress towards sustainable practices and social responsibility. Through this report, we aim to transparently communicate our commitments and actions towards creating a positive impact on society and the environment.',
    isReport: true,
    reportLink: 'https://sigmatechnology.com/content/uploads/2025/02/CSR-Report-2023-final-version.pdf',
    bgImage: 'https://sigmatechnology.com/content/uploads/2023/12/gr-1-1-4.webp'
  }
];

const ValuesAndVision = () => {
  const [activeSection, setActiveSection] = useState('section1');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.value-section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navigation Dots */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block w-3 h-3 rounded-full border-2 border-white transition-all
                  ${activeSection === section.id ? 'bg-white' : 'bg-transparent'}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Fixed Title */}
      <div className="sticky top-0 z-40 py-12 bg-gradient-to-b from-black/70 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white">VALUES AND VISION</h2>
          <p className="text-xl text-white/80 mt-4">
            Whatever we do, we do it with one and the same promise - Expect a Better Tomorrow
          </p>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="value-section relative min-h-screen flex items-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={section.bgImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
              <h3 className="text-3xl font-bold mb-6 whitespace-pre-line">
                {section.title}
              </h3>
              <p className="text-lg mb-6 text-white/90">
                {section.content}
              </p>
              {section.isReport && (
                <a
                  href={section.reportLink}
                  className="inline-block px-6 py-3 bg-white text-black rounded-full 
                    hover:bg-gray-100 transition-colors"
                >
                  Read more
                </a>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ValuesAndVision;