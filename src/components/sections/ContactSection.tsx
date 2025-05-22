import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ContactSection: React.FC = () => {
  const { colors } = useTheme();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: colors.darkGreen }}
            >
              Supercharge Your
              <span 
                className="block"
                style={{ color: colors.lightGreen }}
              >
                Procurement Journey
              </span>
            </h2>
            <p className="text-xl">
              Ready to simplify and scale your procurement operations?
            </p>
          </div>

          <div 
            className="rounded-3xl p-8 md:p-12 max-w-3xl mx-auto backdrop-blur-sm"
            style={{ 
              background: `linear-gradient(135deg, ${colors.beige} 0%, rgba(236, 229, 221, 0.8) 100%)`,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h3 
              className="text-3xl font-bold mb-12 text-center"
              style={{ color: colors.darkGreen }}
            >
              Contact Information
            </h3>
            
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
                <div 
                  className="rounded-2xl w-16 h-16 flex items-center justify-center mb-4 md:mb-0 transform transition-transform hover:scale-110"
                  style={{ 
                    backgroundColor: colors.green,
                    color: 'white',
                    boxShadow: '0 10px 20px rgba(18, 140, 126, 0.2)'
                  }}
                >
                  <Phone size={32} />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-xl mb-2">Phone</h4>
                  <p className="text-2xl">+91 7845800822</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
                <div 
                  className="rounded-2xl w-16 h-16 flex items-center justify-center mb-4 md:mb-0 transform transition-transform hover:scale-110"
                  style={{ 
                    backgroundColor: colors.green,
                    color: 'white',
                    boxShadow: '0 10px 20px rgba(18, 140, 126, 0.2)'
                  }}
                >
                  <Mail size={32} />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-xl mb-2">Email</h4>
                  <p className="text-2xl">ray@pinnaclesolutions.in</p>
                </div>
              </div>
              
              <div 
                className="text-center mt-12 pt-12 border-t" 
                style={{ borderColor: 'rgba(18, 140, 126, 0.2)' }}
              >
                <h4 
                  className="text-3xl font-bold mb-4"
                  style={{ color: colors.darkGreen }}
                >
                  Pinnacle Solutions
                </h4>
                <p className="text-xl italic opacity-90">
                  End-to-end procurement for the toughest industry demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;