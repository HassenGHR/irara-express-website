"use client"
import React from 'react';
import Navbar from '../../components/Navbar';
import Services from '../../components/Services';
import Footer from '../../components/Footer';
import { useTheme } from '../../hooks/useTheme';

const ServicesPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-stone-900 text-stone-900 dark:text-white transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        setDarkMode={toggleTheme}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        scrolled={scrolled}
      />

      <main className="pt-16">
        <Services />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;