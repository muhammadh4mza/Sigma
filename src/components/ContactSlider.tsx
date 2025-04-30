import { useRef, useState } from 'react';

const ContactSlider = () => {
  const [activeSlide, setActiveSlide] = useState(6); // Starting with Norway as active
  const swiperRef = useRef(null);

  const slides = [
    { id: 0, title: 'China', image: 'https://sigmatechnology.com/content/uploads/2022/04/China.jpeg?x25367' },
    { id: 1, title: 'Hungary', image: 'https://sigmatechnology.com/content/uploads/2022/04/Hungary.jpeg?x25367' },
    { id: 2, title: 'Sweden', image: 'https://sigmatechnology.com/content/uploads/2022/04/sweden-contacts-scaled.jpeg?x25367' },
    { id: 3, title: 'Germany', image: 'https://sigmatechnology.com/content/uploads/2022/04/Germany.jpeg?x25367' },
    { id: 4, title: 'Ukraine', image: 'https://sigmatechnology.com/content/uploads/2022/04/Ukraine.jpeg?x25367' },
    { id: 5, title: 'Kosovo', image: 'https://sigmatechnology.com/content/uploads/2024/07/Kosovo.jpg?x25367' },
    { id: 6, title: 'Norway', image: 'https://sigmatechnology.com/content/uploads/2022/04/Norway.jpeg?x25367' },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="relative">
      {/* Contact Info Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-6">OUR CONTACTS</h1>
              <button 
                onClick={() => window.location.hash = '#countries-contact-form'}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
              >
                Contact us
              </button>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-4">LOCAL DRIVE - GLOBAL STRENGTH</h3>
                  <p className="text-gray-700">
                    Sigma Technology has offices and representative partners in countries. Our philosophy is Local Drive - Global Strength. The global presence ensures the competence and capacity to offer high-quality local delivery in combination with a global reach.
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src="/content/themes/sigma/assets/img/carl-vikingsson-e1647871939920.png?x25367" 
                      alt="CEO Sigma" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Carl Vikingsson</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          ref={swiperRef}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id}
              className="w-full flex-shrink-0 relative"
              role="group"
              aria-label={`${slide.id + 1} / ${slides.length}`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-4">
                <div className="container mx-auto px-4">
                  <div className="text-2xl font-bold">{slide.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination and Arrows */}
        <div className="container mx-auto px-4 mt-4">
          <div className="flex justify-between items-center">
            {/* Pagination dots */}
            <div className="flex space-x-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <div className="flex space-x-4">
              <button 
                onClick={handlePrev}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSlider;