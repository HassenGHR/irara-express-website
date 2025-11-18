import React from 'react';
import { howItWorksSteps } from '../data/data';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50 dark:bg-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-stone-600 dark:text-stone-400">Simple, fast, and reliable delivery in 4 steps</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-stone-600 dark:text-stone-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;