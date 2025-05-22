import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      style={{ backgroundColor: isScrolled ? colors.white : 'transparent' }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#industries" className="nav-link">Industries</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{ 
                backgroundColor: colors.lightGreen,
                color: colors.white,
                boxShadow: `0 4px 12px rgba(37, 211, 102, 0.2)`
              }}
            >
              Get Free Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} style={{ color: colors.darkGreen }} />
            ) : (
              <Menu size={24} style={{ color: colors.darkGreen }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 space-y-4 transition-all duration-300"
            style={{ backgroundColor: colors.white }}
          >
            <a href="#about" className="block py-2" onClick={toggleMenu}>About</a>
            <a href="#services" className="block py-2" onClick={toggleMenu}>Services</a>
            <a href="#industries" className="block py-2" onClick={toggleMenu}>Industries</a>
            <a href="#contact" className="block py-2" onClick={toggleMenu}>Contact</a>
            <a 
              href="#contact" 
              className="block py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
              style={{ 
                backgroundColor: colors.lightGreen,
                color: colors.white,
                boxShadow: `0 4px 12px rgba(37, 211, 102, 0.2)`
              }}
              onClick={toggleMenu}
            >
              Get Free Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header