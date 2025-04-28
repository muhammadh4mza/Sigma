import React from 'react';

const HeroAbout = () => {
  return (
    <section className="relative h-[850px] w-full overflow-hidden">
      {/* Background Image - Responsive */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <img
          src="https://sigmatechnology.com/content/uploads/2023/03/27c4254e3910ef77027ce33c58f3b1c2-scaled-1-copy.jpg?x25367"
          alt="hero"
          className="w-full h-full object-cover md:hidden"
          loading="lazy"
        />
        {/* Desktop Image */}
        <img
          src="https://sigmatechnology.com/content/uploads/2023/03/27c4254e3910ef77027ce33c58f3b1c2-scaled-1-copy.jpg?x25367"
          alt="hero"
          className="w-full h-full object-cover hidden md:block"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="w-full lg:w-7/12">
              <div className="text-white">
                <p className="text-lg md:text-xl mb-2 font-medium">
                  We are Sigma Technology
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight uppercase">
                  a <span className="text-[#f8cf45]">Global<br />Company</span> With<br />
                  family <span className="text-[#f8cf45]">spirit</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;