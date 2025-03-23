import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="App" dir="rtl">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <ContactUs/>
      <SocialMedia/>
    </div>
  );
}

export default App;