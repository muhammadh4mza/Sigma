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

  // Add scroll event listener to handle header shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-[#343434] shadow-sm transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="brand">
            <Link to="/" className="inline-block">
              <img
                src="https://sigmatechnology.com/content/themes/sigma/img/logo.svg?"
                height="37"
                width="129"
                alt="Sigma Technology"
                className="h-9 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link 
                  to={item.link} 
                  className="text-white hover:text-[#dc2626] transition-colors duration-300 relative py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dc2626] transition-all duration-300 group-hover:w-full"></span>
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
                  className="text-white hover:text-[#dc2626] block py-2 transition-colors duration-300 relative"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#dc2626] transition-all duration-300 hover:w-full"></span>
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