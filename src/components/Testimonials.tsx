import React from 'react';
import { testimonials } from '../data/data';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50 dark:bg-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Partners Say</h2>
          <p className="text-xl text-stone-600 dark:text-stone-400">Trusted by merchants and drivers across Algeria</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 dark:text-stone-300 mb-6 italic">"{test.text}"</p>
              <div>
                <p className="font-bold">{test.name}</p>
                <p className="text-sm text-stone-600 dark:text-stone-400">{test.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;