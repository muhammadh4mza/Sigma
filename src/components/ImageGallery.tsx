import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FullWidthImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: "https://sigmatechnology.com/content/uploads/2022/09/15-320x320.jpeg?x25367", alt: "15" },
    { id: 2, src: "https://sigmatechnology.com/content/uploads/2022/09/12-320x320.jpeg?x25367", alt: "12" },
    { id: 3, src: "https://sigmatechnology.com/content/uploads/2022/09/11-320x320.jpeg?x25367", alt: "11" },
    { id: 4, src: "https://sigmatechnology.com/content/uploads/2022/09/10-320x320.jpeg?x25367", alt: "10" },
    { id: 5, src: "https://sigmatechnology.com/content/uploads/2022/09/Screenshot-13-320x320.jpeg?x25367", alt: "Screenshot 13" },
    { id: 6, src: "https://sigmatechnology.com/content/uploads/2022/09/8-320x320.jpeg?x25367", alt: "8" },
    { id: 7, src: "https://sigmatechnology.com/content/uploads/2022/09/7-320x320.jpeg?x25367", alt: "7" },
    { id: 8, src: "https://sigmatechnology.com/content/uploads/2022/09/14-320x320.jpeg?x25367", alt: "14" },
    { id: 9, src: "https://sigmatechnology.com/content/uploads/2022/09/6-320x320.jpeg?x25367", alt: "6" },
    { id: 10, src: "https://sigmatechnology.com/content/uploads/2022/09/5-320x320.jpeg?x25367", alt: "5" },
    { id: 11, src: "https://sigmatechnology.com/content/uploads/2022/09/4-320x320.jpeg?x25367", alt: "4" },
    { id: 12, src: "https://sigmatechnology.com/content/uploads/2022/09/3-320x320.jpeg?x25367", alt: "3" },
    { id: 13, src: "https://sigmatechnology.com/content/uploads/2022/09/2-320x320.jpeg?x25367", alt: "2" },
    { id: 14, src: "https://sigmatechnology.com/content/uploads/2022/09/1-320x320.jpeg?x25367", alt: "1" },
    { id: 15, src: "https://sigmatechnology.com/content/uploads/2022/09/13-320x320.jpeg?x25367", alt: "13" },
    { id: 16, src: "https://sigmatechnology.com/content/uploads/2022/09/1661169335528-320x320.jpeg?x25367", alt: "1661169335528" },
    { id: 17, src: "https://sigmatechnology.com/content/uploads/2022/09/1656499440873-320x320.jpeg?x25367", alt: "1656499440873" },
    { id: 18, src: "https://sigmatechnology.com/content/uploads/2022/09/067_midsummer2022_web-320x320.jpg?x25367", alt: "067 midsummer2022 web" }
  ];

  const openImage = (index) => {
    setSelectedImage(images[index].src);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex].src);
  };

  return (
    <section id="gallery-project" className="w-full">
      <div id="image-gallery" className="w-full">
        <div className="flex flex-wrap w-full">
          {images.map((image, index) => (
            <motion.div 
              key={image.id}
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="img-wrapper relative w-full h-0 pb-[100%] overflow-hidden group">
                <button 
                  onClick={() => openImage(index)}
                  className="absolute inset-0 w-full h-full focus:outline-none"
                  aria-label={`View image ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-40">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="36" 
                      height="36" 
                      viewBox="0 0 73 72" 
                      fill="none"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <g clipPath="url(#clip0_52_4577)">
                        <path d="M58.5187 30.1767C58.5187 37.6475 55.5853 44.4254 50.7903 49.4246C45.6756 54.7609 38.4738 58.0937 30.5009 58.0937C15.0065 58.075 2.46436 45.5863 2.46436 30.1767C2.46436 14.7672 15.0065 2.25981 30.5009 2.25981C45.9953 2.25981 58.5375 14.7485 58.5375 30.1767H58.5187Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M70.7036 69.5151L50.7903 49.4246" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M30.5009 19.7102V40.6433" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M41.0122 30.1767H19.9895" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            id="overlay" 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button 
              id="prevButton" 
              className="absolute left-4 md:left-8 text-white text-4xl md:text-5xl z-10 p-4 hover:bg-white hover:bg-opacity-10 rounded-full transition-all"
              onClick={() => navigate('prev')}
              aria-label="Previous image"
            >
              &lt;
            </button>
            
            <div className="relative w-full h-full max-w-6xl max-h-screen flex items-center justify-center p-4">
              <img 
                src={selectedImage} 
                alt="" 
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
            
            <button 
              id="nextButton" 
              className="absolute right-4 md:right-8 text-white text-4xl md:text-5xl z-10 p-4 hover:bg-white hover:bg-opacity-10 rounded-full transition-all"
              onClick={() => navigate('next')}
              aria-label="Next image"
            >
              &gt;
            </button>
            
            <button 
              id="exitButton" 
              className="absolute top-4 right-4 text-white text-3xl p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-all"
              onClick={closeImage}
              aria-label="Close gallery"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FullWidthImageGallery;