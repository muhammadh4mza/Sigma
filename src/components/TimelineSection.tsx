import { useEffect, useRef, useState } from 'react';

const TimelineSection = () => {
  const timelineRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Timeline items array
  const timelineItems = [
              {
      id: "box1",
      year: "2013",
      title: "FC Rosengård",
      description: "Sigma supports the FC Rosengård club which is renowned for its focus on social development and helping young people realize their dreams.",
      logo: "https://sigmatechnology.com/content/uploads/2022/05/Logga-hemsida-2.png",
      image: "https://sigmatechnology.com/content/uploads/2022/05/272778264_1962738440593204_2728274351397346938_n-1.jpeg"
    },
    {
      id: "box2",
      year: "2015",
      title: "Star for life",
      description: "As a proud sponsor of StarforLife, a unique program aimed to empower youth in Southern Africa, we have an opportunity to help children in South Africa follow their dream and fight against HIV and AIDS.",
      logo: "https://sigmatechnology.com/content/uploads/2022/05/sfl_horizontal_tagline-2.png",
      image: "https://sigmatechnology.com/content/uploads/2022/05/Star-Choir-South-Africa-1.jpeg"
    },
    {
      id: "box3",
      year: "2016",
      title: "Swedish Club",
      description: "Sigma Technology's team is diverse and truly international. Though English is the official language for business communications, being able to speak Swedish helps create a united and fun team. Our team launched internal Swedish Club meetings, where Sigma Technology colleagues could write, talk, and practice listening comprehension.",
      logo: "https://sigmatechnology.com/content/uploads/2022/05/Group-11.png",
      image: "https://sigmatechnology.com/content/uploads/2022/05/l19SGrZFmnu08KfQWaTz.jpeg"
    },
    {
      id: "box4",
      year: "2017",
      title: "Witech",
      description: "WiTech is a female network in the Kronoberg region where Sigma Technology is a gold sponsor. WiTech aims to inspire future generations of girls to join IT, inspire more women in tech to become role models, and create a meeting place for women in tech.",
      logo: "https://sigmatechnology.com/content/uploads/2022/05/Property-1Witech.png",
      image: "https://sigmatechnology.com/content/uploads/2022/05/23847577_288679254974227_1233738845798709207_o-1.jpeg"
    },
    {
      id: "box5",
      year: "2017",
      title: "EMERGING COOKING SOLUTIONS",
      description: "Swedish-Zambian Emerging Cooking Solutions vision and mission are to change energy use in Zambia, 'level up' energy solutions, innovate and bring knowledge from North to South and back.",
      logo: "https://sigmatechnology.com/content/uploads/2022/05/Property-1EMERGING-COOKING-SOLUTIONS.png",
      image: "https://sigmatechnology.com/content/uploads/2022/05/zambia_team-2-1.jpeg"
    },
    {
      id: "box6",
      year: "2018",
      title: "Bridge Budapest",
      description: "Within the Bridge Budapest initiative we are building a movement of value-based and long-term-minded business actors to contribute to the creation of a world of meaningful work where knowledge and performance matter.",
      logo: "https://sigmatechnology.com/content/uploads/2022/05/logo-oblmpyo93cxdvmd2qehukv9w0uuyll0d39i8gm7y4c-1.png",
      image: "https://sigmatechnology.com/content/uploads/2022/05/52605660_1206750072812250_8070933389651214336_n-1.jpeg"
    },
    {
      id: "box7",
      year: "2018",
      title: "Skool",
      description: "Sigma Technology Hungary partners with Skool, a non-profit organization in Hungary, whose mission is to introduce the world of coding to young girls and underprivileged groups.",
      logo: "https://sigmatechnology.com/content/uploads/2022/05/skoolslogennel-2.png",
      image: "https://sigmatechnology.com/content/uploads/2022/05/51801920_1028045804065861_3169707601277485056_o-e1557056623998-1.jpeg"
    },
    {
      id: "box8",
      year: "2019",
      title: "SPECIAL OLYMPICS SWEDEN",
      description: "Special Olympics Sweden was established to inspire people with intellectual disabilities to engage in physical activities or sports. The main goal is to give everyone, regardless of ability, a chance to live a healthier and more physically active life.",
      logo: "https://sigmatechnology.com/content/uploads/2022/05/Property-1SPECIAL-OLYMPICS-SWEDEN.png",
      image: "https://sigmatechnology.com/content/uploads/2022/05/download-1.jpeg"
    },
    {
      id: "box9",
      year: "2019",
      title: "Edison Platform",
      description: "We support Edison Platform, an organization that aims to connect opinion leaders in the business world with child development experts and foster their long-term cooperation.",
      logo: "https://sigmatechnology.com/content/uploads/2022/05/Property-1Edison-Platform.png",
      image: "https://sigmatechnology.com/content/uploads/2022/05/edisonplatform_bg02-1.jpeg"
    },
    {
      id: "box10",
      year: "2022",
      title: "Mentor",
      description: "Sigma Technology partners with Mentor Sweden, a non-profit organization working with youth empowerment through mentoring. We started a mentorship program connecting our people with youth in socioeconomically challenged areas in Sweden",
      logo: "https://sigmatechnology.com/content/uploads/2022/05/Property-1Mentor.png",
      image: "https://sigmatechnology.com/content/uploads/2022/05/queen-w-kids-2-1.jpeg"
    }
  ];

  return (
    <section className="relative py-16 bg-red-100" id="dottimeline">
      {/* Download button */}
      <a 
        href="/content/uploads/2022/08/Sigma-Technology-Sustainability-Report-2021.pdf" 
        className="absolute right-4 z-10"
        download
      >
        <img 
          src="https://sigmatechnology.com/content/themes/sigma/assets/img/roundbtn.svg" 
          alt="Download PDF" 
          className="w-16 h-16"
        />
      </a>

      <div className="container mx-auto px-4">
        <h3 className="text-3xl lg:text-7xl font-bold text-center mb-4">MAKING THE WORLD A BETTER PLACE</h3>
        <p className="text-xl text-center mb-12">We contribute to a better tomorrow by driving innovation and education</p>
        
        <div className="relative">
          {/* SVG Timeline */}
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-white">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg 
                width="202" 
                height="4676" 
                viewBox="0 0 202 4676" 
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path 
                  d="M1 0C1 0 201 55.49 201 276 M201 276C201 495.487 1 495.487 1 716 M1 716C1 935.49 201 935.49 201 1156 M201 1156C201 1375.49 1 1375.49 1 1596 M1 1596C1 1815.49 201 1815.49 201 2036 M201 2036C201 2255.49 1 2255.49 1 2476 M1 2476C1 2695.49 201 2695.49 201 2916 M201 2916C201 3135.49 1 3135.49 1 3356 M1 3356C1 3575.49 201 3575.49 201 3796 M201 3796C201 4015.49 1 4015.49 1 4236 M1 4236C1 4455.49 201 4455.49 201 4676" 
                  stroke="#AEAEAE" 
                  strokeWidth="1" 
                  strokeDasharray="2 2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Timeline items */}
          <ul className="space-y-32" ref={timelineRef}>
            {timelineItems.map((item, index) => (
              <li 
                key={item.id} 
                id={item.id}
                className={`relative pl-8 pr-8 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-lg`}
              >
                <div className="bg-red-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="flex flex-col md:flex-clo gap-6">
                    <div className="flex-shrink-0">
                      <img src={item.logo} alt={item.title} className="h-16 object-contain justify-center" />
                      <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg mb-6 object-cover max-h-[300px]" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-4xl font-bold mb-2 text-white text-center uppercase">{item.title}</h3>
                      <p className="text-white text-center">{item.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Date */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-left-20' : '-right-20'} text-center`}>
                  <h4 className="font-bold text-lg">{item.year}</h4>
                </div>
                
                {/* Point on timeline */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500 ${index % 2 === 0 ? '-left-10' : '-right-10'}`}></div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center lg:text-3xl mt-16 max-w-3xl mx-auto uppercase font-bold text-gray-700">
          We try not to stay away from human grief and inside our big team we share a sense of compassion, conducting charity events within the company.
        </p>
      </div>
    </section>
  );
};

export default TimelineSection;