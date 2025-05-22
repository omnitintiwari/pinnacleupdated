import React, { useRef } from 'react';
import { Zap, Droplet, Monitor, Printer, Sun, Server } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useInView } from '../hooks/useInView';

const IndustriesSection: React.FC = () => {
  const { colors } = useTheme();
  const industriesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(industriesRef, { threshold: 0.1 });

  const industries = [
    {
      name: 'Telecom',
      icon: <Server size={32} />,
      color: colors.darkGreen,
    },
    {
      name: 'Oil & Gas',
      icon: <Droplet size={32} />,
      color: colors.green,
    },
    {
      name: 'Information Technology',
      icon: <Monitor size={32} />,
      color: colors.lightGreen,
    },
    {
      name: 'Printing',
      icon: <Printer size={32} />,
      color: colors.darkGreen,
    },
    {
      name: 'Energy',
      icon: <Sun size={32} />,
      color: colors.green,
    },
    {
      name: 'Testing Services',
      icon: <Zap size={32} />,
      color: colors.lightGreen,
    },
  ];

  return (
    <section 
      id="industries" 
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.paleGreen }}
      ref={industriesRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.darkGreen }}
          >
            Industries We Serve
          </h2>
          <p className="text-lg mb-2 font-medium">Niche Expertise. Tailored Solutions.</p>
          <p>
            Our industry-specific strategies help us tackle procurement bottlenecks unique to each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-500 text-center"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                opacity: isInView ? 1 : 0
              }}
            >
              <div 
                className="mx-auto rounded-lg w-16 h-16 flex items-center justify-center mb-4"
                style={{ backgroundColor: colors.beige, color: industry.color }}
              >
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold" style={{ color: industry.color }}>
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: colors.darkGreen }}
          >
            Our Partners
          </h3>
          <p className="text-center text-lg mb-8">
            We've built strategic partnerships with leading manufacturers and suppliers worldwide, 
            ensuring access to quality products and competitive pricing for our clients.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Fujikura', 'Fujitsu', 'Garmin', 'ITT', 'Intel', 'Muhlbauer', 'Nexans', 'Tesa'].map((partner, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg text-center font-medium transition-all duration-300 hover:shadow-lg"
                style={{ 
                  backgroundColor: colors.beige,
                  color: colors.darkGreen 
                }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;