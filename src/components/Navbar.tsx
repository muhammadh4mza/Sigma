import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Careers', link: '/careers' },
    { name: 'Insight', link: '/insight' },
    { name: 'Contact', link: '/contact' },
    { name: 'Languages', link: '/languages' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 10 pixels
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]); // Add scrolled as a dependency

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#086AD7] transition-all duration-300 ${scrolled ? 'shadow-lg py-2' : 'py-1'}`}>
      <div className="container mx-1px-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="brand">
            <Link to="/" className="inline-block">
              <img
                src="http://huscomintl.com/assets/img/logo-2.png"
                height="100px"
                width="129"
                alt="Sigma Technology"
                className="h-20 w-20 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-36">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link 
                  to={item.link} 
                  className="text-white text-[16px] uppercase hover:text-[#ffffff] font-semibold transition-colors duration-300 relative py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffffff] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-[#343434] transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}>
          <ul className="space-y-4 px-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.link} 
                  className="text-white hover:text-[#086AD7] block py-2 transition-colors duration-300 relative"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#086AD7] transition-all duration-300 hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;