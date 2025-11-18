import React from 'react';
import { CheckCircle } from 'lucide-react';

const DriverRecruitment: React.FC = () => {
  return (
    <section id="drivers" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Drive with Irara Express</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 mb-8">
              Join our independent driver network and enjoy flexible earning opportunities
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Flexible Schedule</h4>
                  <p className="text-stone-600 dark:text-stone-400">Work when you want, as much as you want</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Fair Earnings</h4>
                  <p className="text-stone-600 dark:text-stone-400">Transparent pricing with weekly payouts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Safety First</h4>
                  <p className="text-stone-600 dark:text-stone-400">Insurance coverage and 24/7 support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">No Employment Constraints</h4>
                  <p className="text-stone-600 dark:text-stone-400">Be your own boss as an independent contractor</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-semibold text-lg">
              Apply Now
            </button>
          </div>

          <div className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Requirements</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                <span>Valid national ID</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                <span>Driver's license</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                <span>Smartphone (iOS/Android)</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                <span>Vehicle (motorcycle, car, van, or truck)</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                <span>Background verification</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverRecruitment;