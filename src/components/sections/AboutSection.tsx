import React from 'react';
import { Shield, TrendingUp, Users, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useInView } from '../hooks/useInView';

const AboutSection: React.FC = () => {
  const { colors } = useTheme();
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(aboutRef, { threshold: 0.1 });

  const challenges = [
    {
      title: 'Complex Supply Chains',
      description: 'Juggling multiple suppliers across international markets.',
      icon: <Users size={32} />,
    },
    {
      title: 'Cost Pressures',
      description: 'Delivering quality while staying within budget.',
      icon: <TrendingUp size={32} />,
    },
    {
      title: 'Tight Timelines',
      description: 'Racing against deadlines with limited resources.',
      icon: <Clock size={32} />,
    },
    {
      title: 'Regulatory Hurdles',
      description: 'Navigating changing industry norms and compliance.',
      icon: <Shield size={32} />,
    },
  ];

  return (
    <section 
      id="about" 
      className="py-16 md:py-24" 
      style={{ backgroundColor: colors.beige }}
      ref={aboutRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.darkGreen }}
          >
            Let's Be Honest: Picking The Right Procurement Partner Isn't Easy
          </h2>
          <p className="text-lg">
            Too many promises, not enough results. With countless vendors and limited time, 
            it's a decision that can define your business trajectory.
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${
            isInView ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-500"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                opacity: isInView ? 1 : 0
              }}
            >
              <div 
                className="rounded-lg w-16 h-16 flex items-center justify-center mb-4"
                style={{ backgroundColor: colors.paleGreen, color: colors.darkGreen }}
              >
                {challenge.icon}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkGreen }}>
                {challenge.title}
              </h3>
              <p>{challenge.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h3 
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ color: colors.darkGreen }}
          >
            About Pinnacle Solutions
          </h3>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h4 className="text-xl font-semibold mb-2">22 Years of Procurement Mastery</h4>
            <p className="mb-4">
              Our innovative procurement processes, honed by industry pioneers, redefine how companies buy smarter.
            </p>
            <p className="mb-4">
              We've worked with OEM giants across telecom, energy, IT, testing, and printing — building 
              procurement systems that deliver on cost, quality, and speed.
            </p>
            <p>
              Born from our founder's hands-on experience as a procurement customer, pinnacle was built 
              to ensure no client's requirement goes unmet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;