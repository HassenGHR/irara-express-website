"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import DriverRecruitment from '../components/DriverRecruitment';
import DriverPanel from '../components/DriverPanel';
import AppDemo from '../components/AppDemo';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useTheme } from '../hooks/useTheme';

const App = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

      <Navbar
        darkMode={darkMode}
        setDarkMode={toggleTheme}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        scrolled={scrolled}
      />

        <Hero />

        <Services />

        <HowItWorks />

        <DriverRecruitment />

        <DriverPanel
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <AppDemo />

        <Testimonials />

        <Contact />

        <Footer />
      </div>
  );
};

export default App;
