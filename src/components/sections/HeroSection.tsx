import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import StatCounter from '../ui/StatCounter';

const HeroSection: React.FC = () => {
  const { colors } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen pt-24 flex items-center opacity-0 transition-opacity duration-1000 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${colors.paleGreen} 0%, ${colors.beige} 100%)` 
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${colors.darkGreen} 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
          opacity: 0.1
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                style={{ color: colors.darkGreen }}
              >
                End-to-End
                <span 
                  className="block"
                  style={{ color: colors.lightGreen }}
                >
                  Procurement
                </span>
                Services
              </h1>
              
              <p className="text-xl md:text-2xl font-medium" style={{ color: colors.green }}>
                Elevate Your Procurement Strategy with Pinnacle Solutions
              </p>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 max-w-xl">
              From sourcing to delivery, every piece of the puzzle handled with precision. 
              We're the trusted procurement partner of global industry leaders, with a 90%+ 
              repeat client rate that speaks for itself.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a 
                href="#contact" 
                className="px-8 py-4 rounded text-white font-medium text-lg transition-all duration-300 transform hover:scale-105"
                style={{ 
                  backgroundColor: colors.lightGreen,
                  boxShadow: `0 10px 30px rgba(37, 211, 102, 0.3)` 
                }}
              >
                Get Free Consultation
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 rounded font-medium text-lg transition-all duration-300 transform hover:scale-105 border-2"
                style={{ 
                  borderColor: colors.darkGreen,
                  color: colors.darkGreen,
                }}
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-xl">
              <StatCounter 
                value={90} 
                suffix="%" 
                label="Repeat Rate" 
                color={colors.darkGreen}
                duration={2000}
              />
              <StatCounter 
                value={22} 
                label="Years of Expertise" 
                color={colors.green}
                duration={2000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;