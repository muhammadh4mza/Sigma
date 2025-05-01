import React from 'react';

const TextWithVideo = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[white]">
      {/* Triangle Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#E6F0FB] clip-path-triangle z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-5/12">
            <h3 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-6 uppercase">ABOUT US</h3>
            
            {/* Desktop Description */}
            <div className="hidden md:block space-y-4 text-gray-700">
              <p><strong className="font-bold capitalize">Decades of experience</strong>.</p>
              <p>
                Sigma Technology Group is a privately-owned technology consulting company operating in Sweden, Hungary, China, Norway, Germany, Kosovo and Ukraine. We offer an ideal combination of cross-industry expertise, a sustainability-first approach to development, and a partnership-oriented business. We focus on delivering software development, product information, embedded systems design & development, digital solutions, and IT infrastructure with expert consultants, development teams, and offshore delivery.
              </p>
              <p><strong className="font-bold">Vision</strong>.</p>
              <p>
                Back in 1997, the company was started with a mission to make technology usable and put people in focus. Expect a Better Tomorrow is the foundation of everything we do – for our employees, customers, and the world around us.
              </p>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="w-full lg:w-7/12">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              {/* Video Thumbnail */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://sigmatechnology.com/content/uploads/2023/11/EDS_IndustryWest_GBG_2880px_sRGB-3-copy.webp')" }}
              ></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://www.youtube.com/watch?v=vg6lYCFcGp4" 
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-16 h-14 md:w-20 md:h-16 group-hover:scale-110 transition-transform">
                    <svg 
                      width="100%" 
                      height="100%" 
                      viewBox="0 0 70 60" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M68.791 31.6166L53.1225 58.3833C52.537 59.3838 51.4547 60.0001 50.2834 60L18.9464 59.9999C17.7754 59.9998 16.6933 59.3836 16.1078 58.3834L0.439241 31.6167C-0.146421 30.6163 -0.146413 29.3837 0.439261 28.3833L16.1077 1.61664C16.6934 0.616417 17.7756 0.000335646 18.9467 0.000448671L50.2838 0C51.4549 9.97064e-05 52.5369 0.616304 53.1224 1.61653L68.7915 28.3834C69.3772 29.3838 69.3772 30.6164 68.7915 31.6168L68.791 31.6166Z" 
                        fill="white"
                      ></path>
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M43.2188 29.5L30.2187 37.2188L30.2188 21.7812L43.2188 29.5Z" 
                        fill="#086AD7" 
                        stroke="#086AD7" 
                        strokeWidth="1.2" 
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Mobile Description */}
            <div className="mt-8 md:hidden space-y-4 text-gray-700">
              <p><strong className="font-bold capitalize">Decades of experience</strong>.</p>
              <p>
                Sigma Technology Group is a privately-owned technology consulting company operating in Sweden, Hungary, China, Norway, Germany, Kosovo and Ukraine. We offer an ideal combination of cross-industry expertise, a sustainability-first approach to development, and a partnership-oriented business. We focus on delivering software development, product information, embedded systems design & development, digital solutions, and IT infrastructure with expert consultants, development teams, and offshore delivery.
              </p>
              <p><strong className="font-bold">Vision</strong>.</p>
              <p>
                Back in 1997, the company was started with a mission to make technology usable and put people in focus. Expect a Better Tomorrow is the foundation of everything we do – for our employees, customers, and the world around us.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Triangle clip-path styling - add to your global CSS */}
      <style jsx>{`
        .clip-path-triangle {
          clip-path: polygon(0 0, 100% 0, 100% 30%, 0 100%);
        }
        @media (min-width: 1024px) {
          .clip-path-triangle {
            clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
          }
        }
      `}</style>
    </section>
  );
};

export default TextWithVideo;