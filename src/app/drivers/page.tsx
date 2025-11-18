"use client"
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import DriverRecruitment from '../../components/DriverRecruitment';
import DriverPanel from '../../components/DriverPanel';
import Footer from '../../components/Footer';
import { useTheme } from '../../hooks/useTheme';

const DriversPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

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
        <DriverRecruitment />

        <DriverPanel
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
      </main>

      <Footer />
    </div>
  );
};

export default DriversPage;