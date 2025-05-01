import { useState, useEffect } from 'react';

const ContactSlider = () => {
  const [activeSlide, setActiveSlide] = useState(6); // Starting with Norway as active
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    { id: 0, title: 'China', image: 'https://sigmatechnology.com/content/uploads/2022/04/China.jpeg' },
    { id: 1, title: 'Hungary', image: 'https://sigmatechnology.com/content/uploads/2022/04/Hungary.jpeg' },
    { id: 2, title: 'Sweden', image: 'https://sigmatechnology.com/content/uploads/2022/04/sweden-contacts-scaled.jpeg' },
    { id: 3, title: 'Germany', image: 'https://sigmatechnology.com/content/uploads/2022/04/Germany.jpeg' },
    { id: 4, title: 'Ukraine', image: 'https://sigmatechnology.com/content/uploads/2022/04/Ukraine.jpeg' },
    { id: 5, title: 'Kosovo', image: 'https://sigmatechnology.com/content/uploads/2024/07/Kosovo.jpg' },
    { id: 6, title: 'Norway', image: 'https://sigmatechnology.com/content/uploads/2022/04/Norway.jpeg' },
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setActiveSlide(index);
  };

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === activeSlide ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-black/30"></div>
            {/* Country Title Overlay */}
            <div className="absolute bottom-20 left-0 right-0 text-center">
              <div className="contact-slide-title text-white text-4xl md:text-5xl uppercase lg:text-6xl font-bold tracking-wide">
                {slide.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Contact Info Section */}
        <div className="flex-grow flex items-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-7xl mx-auto">
              <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:pr-10">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">OUR CONTACTS</h1>
                <button 
                  onClick={() => document.getElementById('countries-contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#086AD7] hover:bg-[#fff] text-white hover:text-[#086AD7] font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Contact us
                </button>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="max-w-md mx-auto lg:mx-0">
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white mb-4">LOCAL DRIVE - GLOBAL STRENGTH</h3>
                    <p className="text-white leading-relaxed">
                      Sigma Technology has offices and representative partners in countries. Our philosophy is Local Drive - Global Strength. The global presence ensures the competence and capacity to offer high-quality local delivery in combination with a global reach.
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img 
                        src="https://sigmatechnology.com/content/themes/sigma/assets/img/carl-vikingsson-e1647871939920.png?x25367" 
                        alt="CEO Sigma" 
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#086AD7]"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Carl Vikingsson</p>
                      <p className="text-sm text-white">CEO Sigma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="container mx-auto px-4 pb-8">
          <div className="flex justify-between items-center bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg max-w-3xl mx-auto">
            <button
              onClick={handlePrev}
              className="p-2 text-[#086AD7] hover:text-black transition-colors"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex-1 flex justify-center">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === activeSlide ? 'bg-[#086AD7]' : 'bg-gray-300 hover:bg-[#086AD7]'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="p-2 text-[#086AD7] hover:text-black transition-colors"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSlider;