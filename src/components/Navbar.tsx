import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo/logo.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Career', link: '/career' },
    { name: 'Insights', link: '/insights-library' },
    { name: 'Contact', link: '/contact' },
    { name: 'Languages', link: '/languages' },
  ];

  return (
    <header className="relative bg-[#343434] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="brand">
            <a href="/" className="inline-block">
              <img
                src="https://sigmatechnology.com/content/themes/sigma/img/logo.svg?"
                height="37"
                width="129"
                alt="Sigma Technology"
                className="h-9 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <a 
                  href={item.link} 
                  className="text-white hover:text-[#dc2626] transition-colors"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            id="burger-menu"
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#343434] shadow-lg z-50 py-4 px-6">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    className="text-white hover:text-[#dc2626] block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;