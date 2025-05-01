import { useState } from 'react';

const EducationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "MASTER'S PROGRAMS AND COURSES",
      content: {
        heading: "At Sigma Technology, we understand how important it is for students to get hands-on experience while they are finishing their studies.",
        paragraph: "We cooperate with leading technical universities and educational institutions, offering internship projects and master thesis opportunities. Read about our internship projects together with Linnaeus University, IT-Högskolan, and Mediegymnasiet."
      }
    },
    {
      title: "SPONSORSHIP OF EDUCATIONAL PROGRAMS",
      content: {
        heading: "We have established sustainable partnerships with some of the world's leading educational establishments.",
        paragraph: "Among them are Central European University (Hungary), Óbuda University (Hungary), Peking University (China), Linnaeus University (Sweden), the University of Gothenburg (Sweden), Chalmers University of Technology (Sweden), IT-Högskolan (Sweden), Malmö University (Sweden), and others."
      }
    },
    {
      title: "UNIVERSITY COOPERATION",
      content: {
        heading: "We believe that thinking long-term and investing in research and development can help companies and organizations prepare for future challenges.",
        paragraph: "Close cooperation between academia and industry helps universities prepare future talent for the job market and future career challenges in advance. We are proud to cooperate with leading tech educational establishments. We are a strategic partner and part of the Industrial committee at Óbuda University. We have also run several licentiate Ph.D. programs together with Linnaeus University and the University of Malmö."
      }
    }
  ];

  return (
              <section 
              className="relative bg-cover bg-no-repeat bg-[position:35%_95%] h-[600px] md:h-[1200px]"
              style={{
                backgroundImage: "url('https://sigmatechnology.com/content/uploads/2022/05/mountains-2.jpeg')"
              }}
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-[#00000023] bg-opacity-50"></div>
              
              <div className="container mx-auto px-4 py-20 relative z-10 h-full flex flex-col justify-center ">
                <div className="row mb-8">
                  <h3 className="text-3xl lg:text-7xl font-bold text-black  uppercase text-center">Your start of a </h3>
                  <h3 className="text-3xl lg:text-7xl font-bold text-black mb-2 uppercase text-center"> better tomorrow</h3>
                  <p className="text-xl text-black text-center">KNOWLEDGE, EXPERIENCE, and EDUCATION are the backbone of our success</p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 h-[60%]">
                  {/* Tabs navigation */}
                  <ul className="flex flex-col space-y-2 w-full md:w-1/4">
                    {tabs.map((tab, index) => (
                      <li 
                        key={index}
                        className={`px-4 py-3 cursor-pointer rounded ${activeTab === index ? 'border-b-4 border-blue-700 text-black font-bold' : ' text-black'}`}
                        onClick={() => setActiveTab(index)}
                      >
                        <span>{tab.title}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Active tab content */}
                  <div className="w-full md:w-3/4 bg-transparent p-8 rounded h-full overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-4 uppercase">{tabs[activeTab].content.heading}</h2>
                    <p className="text-gray-700">{tabs[activeTab].content.paragraph}</p>
                  </div>
                </div>
              </div>
            </section>
  );
};

export default EducationTabs;