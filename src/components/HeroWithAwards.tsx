import React from 'react';

const HeroWithAwards = () => {
  return (
    <section className="hero-with-awards covered-bg relative h-[850px] min-h-[600px]">
      {/* Background images */}
      <div className="bg-cover absolute inset-0 h-full w-full overflow-hidden">
        {/* Mobile image */}
        <img
          src="https://sigmatechnology.com/content/uploads/2022/05/hero1.jpeg?x25367"
          alt="Career"
          className="background object-cover h-full w-full md:hidden"
          loading="lazy"
        />
        
        {/* Desktop image */}
        <img
          src="https://sigmatechnology.com/content/uploads/2022/05/hero1.jpeg?x25367"
          alt="Career"
          className="background object-cover h-full w-full hidden md:block"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-[850px] relative z-10">
        <div className="row flex h-full">
          <div className="col-lg-12 w-full">
            <div className="hero-content flex flex-col justify-center h-full text-white max-w-4xl mx-auto text-center md:text-left">
              <h1 className="hero-awards-title text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-center uppercase">
                Your Career at Sigma Technology
              </h1>
              <p className="hero-subtitle title-ff-4 text-xl md:text-2xl capitalize text-center">
                Work at the heart of the digital revolution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithAwards;