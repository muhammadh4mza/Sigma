import React, { useState, useEffect } from 'react';

const PassionSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "I'm passionate about communication",
      text: "We can share the spirit, and that's what I do with music.",
      name: "Flora Ujvary",
      position: "Technical Writer at Sigma Technology",
      image: "https://sigmatechnology.com/content/uploads/2022/05/Flora.png?x25367",
      videoId: "_CemuuxCyRU"
    },
    {
      id: 2,
      quote: "I'm passionate about strength",
      text: "Mastering yourself is true power.",
      name: "Peter Szasz",
      position: "IT Engineering Consultant at Sigma Technology",
      image: "https://sigmatechnology.com/content/uploads/2022/05/Peter.png?x25367",
      videoId: "Gdgu06RhgBc"
    },
    {
      id: 3,
      quote: "I'm passionate about freedom",
      text: "The secret of freedom lies in courage.",
      name: "Levente Eros",
      position: "System Architect at Sigma Technology",
      image: "https://sigmatechnology.com/content/uploads/2022/05/Eros.png?x25367",
      videoId: "iMDvtP-Hi80"
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const playVideo = (videoId) => {
    // Implement your video play functionality here
    console.log("Play video:", videoId);
  };

  return (
    <section className="py-36 bg-[#f9f5f6] text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl lg:text-7xl uppercase font-bold mb-4">Do you believe in the power of passion?</h3>
          <p className="text-xl mb-12">
            Being really dedicated is giving you the edge. We believe that your passion is the beginning of a better tomorrow.
          </p>
        </div>

        <div className="relative">
          {/* Slider container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* Left area - quote */}
                    <div className="md:w-1/3 text-right">
                      <p className="text-2xl lg:text-3xl font-bold mb-4 uppercase text-[#dc2626]">{testimonial.quote}</p>
                      <p className="text-lg">{testimonial.text}</p>
                    </div>

                    {/* Center area - hexagon image */}
                    <div className="relative w-[650px] h-[450px] flex items-center justify-center">
                      <div className="absolute w-full h-full bg-white clip-hexagon">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover clip-hexagon"
                        />
                      </div>
                      <button 
                        onClick={() => playVideo(testimonial.videoId)}
                        className="absolute z-10 hover:scale-110 transition-transform"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="54" viewBox="0 0 61 54" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M60.1173 28.3436L46.4245 51.7353C45.9127 52.6096 44.9669 53.1482 43.9433 53.1482L16.5575 53.1481C15.5341 53.148 14.5885 52.6095 14.0768 51.7354L0.383858 28.3436C-0.127959 27.4693 -0.127952 26.3922 0.383876 25.5179L14.0767 2.12618C14.5886 1.25207 15.5343 0.713672 16.5578 0.713771L43.9437 0.713379C44.9671 0.713466 45.9127 1.25197 46.4244 2.12609L60.1178 25.518C60.6296 26.3923 60.6296 27.4694 60.1178 28.3437L60.1173 28.3436Z" fill="white"></path>
                          <path fillRule="evenodd" clipRule="evenodd" d="M37.7695 26.4941L26.4087 33.2396V19.7485L37.7695 26.4941Z" fill="#FF0000" stroke="#FF0000" strokeWidth="1.2" strokeLinejoin="round"></path>
                        </svg>
                      </button>
                    </div>

                    {/* Right area - name and position */}
                    <div className="md:w-1/3 text-left">
                      <p className="text-2xl lg:text-3xl font-bold mb-4 uppercase text-[#dc2626]">{testimonial.name}</p>
                      <p className="text-lg">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            {/* Pagination dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-[#dc2626]' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS or in a style tag */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
      `}</style>
    </section>
  );
};

export default PassionSlider;