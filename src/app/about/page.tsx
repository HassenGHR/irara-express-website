"use client"
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useTheme } from '../../hooks/useTheme';

const About = () => {
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

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900 dark:text-white">
              About Irara Express
            </h1>
            <p className="text-xl md:text-2xl text-orange-600 dark:text-orange-400 font-medium">
              Fast. Professional. Tracked.
            </p>
          </div>

          {/* Main Content with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Section */}
            <div className="order-2 md:order-1">
              <div className="relative h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="images/delivery.jpg" 
                  alt="Delivery service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-lg font-semibold">Delivering Excellence Across Algeria</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-stone-900 dark:text-white">
                  Who We Are
                </h2>
                
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
                  Irara Express is transforming delivery services in Algeria. We connect you with verified, professional drivers who deliver your parcels quickly and safely—all tracked in real-time on your phone.
                </p>

                <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
                  Whether you're a business shipping dozens of orders daily or an individual sending an important package across town, Irara Express gives you speed, security, and peace of mind.
                </p>

                <h3 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-white">
                  How We're Different
                </h3>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-stone-700 dark:text-stone-300">
                    <span className="text-green-500 mr-3 mt-1 text-xl">✓</span>
                    <span>Express delivery in hours, not days</span>
                  </li>
                  <li className="flex items-start text-stone-700 dark:text-stone-300">
                    <span className="text-green-500 mr-3 mt-1 text-xl">✓</span>
                    <span>Real-time tracking every step of the way</span>
                  </li>
                  <li className="flex items-start text-stone-700 dark:text-stone-300">
                    <span className="text-green-500 mr-3 mt-1 text-xl">✓</span>
                    <span>Verified drivers you can trust</span>
                  </li>
                  <li className="flex items-start text-stone-700 dark:text-stone-300">
                    <span className="text-green-500 mr-3 mt-1 text-xl">✓</span>
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start text-stone-700 dark:text-stone-300">
                    <span className="text-green-500 mr-3 mt-1 text-xl">✓</span>
                    <span>Secure payment including Cash-on-Delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-orange-50 to-stone-50 dark:from-stone-800 dark:to-stone-900 rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-stone-900 dark:text-white">
              Our Mission
            </h2>
            
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
              We believe everyone deserves reliable, professional delivery service. By combining cutting-edge technology with local expertise, we're making express delivery accessible, affordable, and trustworthy for all Algerians.
            </p>

            <p className="text-xl font-semibold text-center text-orange-600 dark:text-orange-400">
              Join dozens of merchants and customers who trust Irara Express for their urgent deliveries.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;