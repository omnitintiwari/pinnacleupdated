import React, { useRef } from 'react';
import { Search, Check, MessageSquare, Truck, PhoneCall } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useInView } from '../hooks/useInView';

const ServicesSection: React.FC = () => {
  const { colors } = useTheme();
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(servicesRef, { threshold: 0.1 });

  const services = [
    {
      title: 'Supplier Discovery',
      description: 'We handpick trusted suppliers aligned with your needs.',
      icon: <Search size={40} />,
    },
    {
      title: 'Sourcing & Selection',
      description: 'You get the right equipment vetted for quality and compliance.',
      icon: <Check size={40} />,
    },
    {
      title: 'Deal Negotiation',
      description: 'We negotiate better pricing, support, and terms for you.',
      icon: <MessageSquare size={40} />,
    },
    {
      title: 'Delivery Coordination',
      description: 'Timely shipping, minimal cost — optimized for efficiency.',
      icon: <Truck size={40} />,
    },
    {
      title: 'After-sales Support',
      description: 'We help your team adapt to new systems and continue offering support.',
      icon: <PhoneCall size={40} />,
    },
  ];

  const strengths = [
    'Global client trust',
    '90%+ repeat business',
    'Full-spectrum services',
    'Deep industry knowledge',
  ];

  const differentiators = [
    '20+ years of cross-sector insight',
    'Seasoned procurement experts',
    'Measurable savings and results',
    'Top-tier quality assurance',
  ];

  return (
    <section 
      id="services" 
      className="py-16 md:py-24"
      ref={servicesRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.darkGreen }}
          >
            Why Pinnacle?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div 
              className="border rounded-lg p-6"
              style={{ borderColor: colors.lightGreen }}
            >
              <h3 className="font-bold text-xl mb-4">What Sets Us Apart</h3>
              <ul className="space-y-3">
                {strengths.map((strength, index) => (
                  <li 
                    key={index} 
                    className="flex items-center" 
                  >
                    <span 
                      className="w-4 h-4 rounded-lg mr-2 flex-shrink-0"
                      style={{ backgroundColor: colors.lightGreen }}
                    ></span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            
            <div 
              className="border rounded-lg p-6"
              style={{ borderColor: colors.green }}
            >
              <h3 className="font-bold text-xl mb-4">Our Differentiators</h3>
              <ul className="space-y-3">
                {differentiators.map((diff, index) => (
                  <li 
                    key={index} 
                    className="flex items-center" 
                  >
                    <span 
                      className="w-4 h-4 rounded-lg mr-2 flex-shrink-0"
                      style={{ backgroundColor: colors.green }}
                    ></span>
                    {diff}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <h2 
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          style={{ color: colors.darkGreen }}
        >
          Our Services
        </h2>
        <p className="text-center text-xl mb-2 font-medium">Procurement, Done Right</p>
        <p className="text-center mb-12">
          We cover the entire procurement lifecycle — from identifying needs to after-sales support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-500"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                opacity: isInView ? 1 : 0,
                borderTop: `4px solid ${colors.lightGreen}`
              }}
            >
              <div 
                className="rounded-lg w-16 h-16 flex items-center justify-center mb-4"
                style={{ backgroundColor: colors.paleGreen, color: colors.darkGreen }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkGreen }}>
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block px-10 py-5 rounded-lg text-white font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            style={{ 
              backgroundColor: colors.green,
              boxShadow: `0 10px 30px rgba(18, 140, 126, 0.3)`
            }}
          >
            Discuss Your Procurement Needs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;