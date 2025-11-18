import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { routes } from '../routes';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  mobileMenu: boolean;
  setMobileMenu: (open: boolean) => void;
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, mobileMenu, setMobileMenu, scrolled }) => {
  // Fix hydration mismatch - only render theme toggle after component mounts
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/60 dark:bg-stone-900/60 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center gap-3">
              {/* Circular Logo */}
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-orange-500/30 hover:ring-orange-500/60 transition-all duration-300 shadow-lg">
                <img 
                  src="/images/logo.jpg" 
                  alt="Irara Express Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100">
                Irara Express
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-sm font-medium text-stone-700 dark:text-stone-200 px-3 py-2 rounded-md hover:bg-stone-50 dark:hover:bg-stone-800 transition border-b-2 border-transparent hover:border-orange-500"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm font-medium text-stone-700 dark:text-stone-200 px-3 py-2 rounded-md hover:bg-stone-50 dark:hover:bg-stone-800 transition border-b-2 border-transparent hover:border-orange-500"
            >
              About
            </a>
            <a
              href={routes.services}
              className="text-sm font-medium text-stone-700 dark:text-stone-200 px-3 py-2 rounded-md hover:bg-stone-50 dark:hover:bg-stone-800 transition border-b-2 border-transparent hover:border-orange-500"
            >
              Services
            </a>
            <a
              href={routes.howItWorks}
              className="text-sm font-medium text-stone-700 dark:text-stone-200 px-3 py-2 rounded-md hover:bg-stone-50 dark:hover:bg-stone-800 transition border-b-2 border-transparent hover:border-orange-500"
            >
              How It Works
            </a>
            <a
              href={routes.drivers}
              className="text-sm font-medium text-stone-700 dark:text-stone-200 px-3 py-2 rounded-md hover:bg-stone-50 dark:hover:bg-stone-800 transition border-b-2 border-transparent hover:border-orange-500"
            >
              Become a Driver
            </a>
            <a
              href={routes.contact}
              className="text-sm font-medium text-stone-700 dark:text-stone-200 px-3 py-2 rounded-md hover:bg-stone-50 dark:hover:bg-stone-800 transition border-b-2 border-transparent hover:border-orange-500"
            >
              Contact
            </a>

            <div className="flex items-center gap-3">
              {/* Theme Toggle - Only render after mount to prevent hydration mismatch */}
              {mounted ? (
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  aria-pressed={darkMode}
                  title="Toggle color theme"
                  className="p-2 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-stone-900"
                >
                  {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-stone-700" />}
                </button>
              ) : (
                <div className="p-2 w-9 h-9" />
              )}

              <a
                href="#get-started"
                className="inline-flex items-center px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-orange-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="flex items-center md:hidden gap-2">
            {/* Theme Toggle for Mobile - Only render after mount */}
            {mounted ? (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-pressed={darkMode}
                title="Toggle color theme"
                className="p-2 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-stone-900"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-stone-700" />}
              </button>
            ) : (
              <div className="p-2 w-9 h-9" />
            )}

            <button
              className="p-2 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-stone-900"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-expanded={mobileMenu}
              aria-controls="mobile-menu"
              aria-label={mobileMenu ? 'Close menu' : 'Open menu'}
            >
              {mobileMenu ? <X className="w-6 h-6 text-stone-700 dark:text-stone-200" /> : <Menu className="w-6 h-6 text-stone-700 dark:text-stone-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with smooth scale/opacity transition */}
      <div
        id="mobile-menu"
        className={`md:hidden origin-top transform transition-all duration-250 ${
          mobileMenu ? 'scale-y-100 opacity-100 max-h-screen' : 'scale-y-95 opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 px-4 py-4">
          <div className="space-y-3">
            <a href="/" className="block px-3 py-2 rounded-md text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 transition">
              Home
            </a>
            <a href="/about" className="block px-3 py-2 rounded-md text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 transition">
              About
            </a>
            <a href={routes.services} className="block px-3 py-2 rounded-md text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 transition">
              Services
            </a>
            <a href={routes.howItWorks} className="block px-3 py-2 rounded-md text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 transition">
              How It Works
            </a>
            <a href={routes.drivers} className="block px-3 py-2 rounded-md text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 transition">
              Become a Driver
            </a>
            <a href={routes.contact} className="block px-3 py-2 rounded-md text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 transition">
              Contact
            </a>

            <div className="pt-2 border-t border-stone-100 dark:border-stone-800">
              {/* Theme Toggle in Mobile Menu - Only render after mount */}
              {mounted ? (
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md hover:bg-stone-50 dark:hover:bg-stone-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-stone-900"
                  title="Toggle color theme"
                  aria-pressed={darkMode}
                >
                  {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-stone-700" />}
                  <span className="text-sm font-medium text-stone-700 dark:text-stone-200">
                    {darkMode ? 'Light mode' : 'Dark mode'}
                  </span>
                </button>
              ) : (
                <div className="w-full h-10" />
              )}

              <a
                href="#get-started"
                className="mt-2 block text-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;