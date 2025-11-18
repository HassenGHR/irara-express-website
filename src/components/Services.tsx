import React from 'react';
import { services } from '../data/data';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Core Features & Services</h2>
          <p className="text-xl text-stone-600 dark:text-stone-400">Everything you need for seamless delivery operations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-stone-800 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-stone-100 dark:border-stone-700">
              <service.icon className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-stone-600 dark:text-stone-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;