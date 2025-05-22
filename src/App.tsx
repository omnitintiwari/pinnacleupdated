import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import IndustriesSection from './components/sections/IndustriesSection';
import ContactSection from './components/sections/ContactSection';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="font-sans text-gray-800 overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <IndustriesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;