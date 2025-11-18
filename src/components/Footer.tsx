import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-orange-500/40 hover:ring-orange-500/70 transition-all duration-300 shadow-lg hover:shadow-orange-500/20">
                <img 
                  src="/images/logo.jpg" 
                  alt="Irara Express Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-white to-stone-300 bg-clip-text text-transparent">Irara Express</span>
            </div>
            <p className="text-stone-400 text-sm mb-4 leading-relaxed">On-demand logistics powered by technology</p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-stone-800/50 hover:bg-orange-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 group">
                <Facebook className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-stone-800/50 hover:bg-orange-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-400/30 group">
                <Twitter className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-stone-800/50 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30 group">
                <Instagram className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-stone-800/50 hover:bg-orange-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-700/30 group">
                <Linkedin className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-white">Company</h4>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors hover:transtone-x-1 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors hover:transtone-x-1 inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors hover:transtone-x-1 inline-block">Press</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors hover:transtone-x-1 inline-block">Blog</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-white">Support</h4>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors hover:transtone-x-1 inline-block">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors hover:transtone-x-1 inline-block">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors hover:transtone-x-1 inline-block">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors hover:transtone-x-1 inline-block">Safety</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-white">Legal</h4>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors hover:transtone-x-1 inline-block">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors hover:transtone-x-1 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors hover:transtone-x-1 inline-block">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors hover:transtone-x-1 inline-block">Licenses</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800/50 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-xs md:text-sm">© 2025 Irara Express. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-stone-400 text-xs md:text-sm">
            <a href="tel:+213671071613" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
              <div className="w-7 h-7 rounded-full bg-stone-800/50 flex items-center justify-center group-hover:bg-orange-600/20 transition-all">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>+213 671 071 613</span>
            </a>
            <a href="mailto:contact@iraraexpress.dz" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
              <div className="w-7 h-7 rounded-full bg-stone-800/50 flex items-center justify-center group-hover:bg-orange-600/20 transition-all">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span>contact@iraraexpress.dz</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-white {
          background-image: linear-gradient(white 1px, transparent 1px),
                            linear-gradient(90deg, white 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;