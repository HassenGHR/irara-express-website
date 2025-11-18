import React from 'react';
import { Package } from 'lucide-react';

const AppDemo: React.FC = () => {
  return (
    <section id="app-demo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-stone-900 rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">App Demo Video</p>
              <p className="text-sm text-stone-400 mt-2">Coming Soon</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Experience the Irara Express App</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-bold mb-1">Create Your Account</h4>
                  <p className="text-stone-600 dark:text-stone-400">Quick signup with phone verification</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-bold mb-1">Request Delivery</h4>
                  <p className="text-stone-600 dark:text-stone-400">Enter pickup and drop-off locations</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-bold mb-1">Track in Real-Time</h4>
                  <p className="text-stone-600 dark:text-stone-400">Watch your delivery progress live on the map</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h4 className="font-bold mb-1">Confirm Handoff</h4>
                  <p className="text-stone-600 dark:text-stone-400">Digital signature and secure payment completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;