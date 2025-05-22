import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const { colors } = useTheme();
  
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
    ],
    services: [
      { name: 'Supplier Selection', href: '#services' },
      { name: 'Sourcing & Vetting', href: '#services' },
      { name: 'Negotiation', href: '#services' },
      { name: 'Logistics', href: '#services' },
    ],
    industries: [
      { name: 'Telecom', href: '#industries' },
      { name: 'Oil & Gas', href: '#industries' },
      { name: 'IT', href: '#industries' },
      { name: 'Energy', href: '#industries' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer 
      className="pt-16 pb-6"
      style={{ backgroundColor: colors.darkGreen, color: colors.beige }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Logo />
            </div>
            <p className="mb-4 max-w-md">
              End-to-end procurement for the toughest industry demands.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div 
          className="pt-6 mt-6 border-t"
          style={{ borderColor: 'rgba(236, 229, 221, 0.2)' }}
        >
          <p className="text-center">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;