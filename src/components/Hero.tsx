import React, { useRef, useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
        console.log('Hero video: Successfully playing');
      } catch (err) {
        console.error('Hero video autoplay failed:', err);
        setTimeout(() => {
          video.play().catch(e => {
            console.error('Hero video retry failed:', e);
            setVideoError(true);
          });
        }, 500);
      }
    };

    const onLoadedData = () => {
      console.log('Hero video: loaded data');
      setVideoError(false);
      playVideo();
    };

    const onError = (e: Event) => {
      console.error('Hero video error:', e);
      setVideoError(true);
    };

    video.addEventListener('loadeddata', onLoadedData);
    video.addEventListener('error', onError);

    if (video.readyState >= 3) {
      playVideo();
    }

    try {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mq?.matches) {
        console.log('Hero video: Pausing due to prefers-reduced-motion');
        video.pause();
      }
    } catch {
      // ignore in non-browser environments
    }

    return () => {
      video.removeEventListener('loadeddata', onLoadedData);
      video.removeEventListener('error', onError);
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[100svh] sm:min-h-[90vh] md:min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-purple-900">
      {/* Background video with enhanced attributes */}
      {!videoError && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-105 sm:scale-110"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback gradient background when video fails */}
      {videoError && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-800 to-purple-900"
          style={{ zIndex: 0 }}
        />
      )}

      {/* Enhanced gradient overlay with subtle animation */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-orange-900/30 to-purple-900/50 sm:from-black/50 sm:via-orange-900/20 sm:to-purple-900/40 dark:from-black/70 dark:via-orange-950/30 dark:to-purple-950/50"
        aria-hidden="true"
        style={{ zIndex: 1 }}
      />

      {/* Animated light effect */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-pulse"
        aria-hidden="true"
        style={{
          zIndex: 2,
          animationDuration: '4s'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 relative flex items-center min-h-[100svh] sm:min-h-[90vh] md:min-h-[85vh] lg:min-h-[90vh]" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center w-full">
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="bg-white/25 sm:bg-white/20 dark:bg-slate-900/40 sm:dark:bg-slate-900/30 backdrop-blur-xl border border-white/30 sm:border-white/20 dark:border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white drop-shadow-lg">
                On-Demand <span className="text-orange-400 dark:text-orange-300 animate-pulse" style={{ animationDuration: '3s' }}>Logistics</span> Powered by Technology
              </h1>

              <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-slate-50 sm:text-slate-100 dark:text-slate-200 leading-relaxed">
                Real-time tracking, verified drivers, and AI-powered delivery matching. Scale your business with reliable express delivery.
              </p>

              <div className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <button
                  className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-orange-600 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold shadow-lg hover:bg-orange-700 hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-500/50 w-full sm:w-auto"
                  aria-label="Request delivery"
                >
                  <span>Request Delivery</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <button
                  className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/90 dark:bg-white/10 backdrop-blur-sm dark:border-2 dark:border-white/20 text-orange-700 dark:text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold shadow-lg hover:bg-white hover:text-black hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/50 w-full sm:w-auto"
                  aria-label="Become a driver"
                >
                  <span>Become a Driver</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/95">
                <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                <span className="font-medium"><strong>Trusted & Secure</strong> • Serving local businesses</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="w-full max-w-xs sm:max-w-sm backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/30 sm:border-white/20 dark:border-white/20 shadow-2xl transform transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
              <div className="relative flex items-center justify-center w-full aspect-square max-w-[200px] sm:max-w-[240px] mx-auto">
                <div className="absolute inset-0 rounded-full animate-gradient-border" style={{
                  background: 'conic-gradient(from 0deg, #ea580c, #f97316, #fdba74, #fed7aa, #fecaca, #fca5a5, #f87171, #dc2626, #ea580c)',
                  padding: '4px'
                }}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 via-white/10 to-transparent" />
                </div>

              {/* Inner circle with image */}
                <div className="absolute inset-1 rounded-full overflow-hidden shadow-2xl group ring-2 ring-white/20 ring-offset-2 ring-offset-transparent hover:ring-white/40 transition-all duration-300">
                  <img
                    src="/images/hero4.png"
                    alt="Company Logo"
                    className="w-full h-full object-cover rounded-full z-10 drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none" />
                </div>


              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">Smart Routing & Tracking</h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-50 leading-relaxed px-2 sm:px-0 drop-shadow-md">AI-driven matching to get parcels to customers faster and more efficiently.</p>
                <div className="mt-5 sm:mt-6 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                  <span className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-orange-500/90 to-orange-600/90 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold border border-orange-400/30 hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300 shadow-lg">
                    ⚡ Real-time GPS
                  </span>
                  <span className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-green-500/90 to-green-600/90 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold border border-green-400/30 hover:from-green-600 hover:to-green-700 hover:scale-105 transition-all duration-300 shadow-lg">
                    ✓ Verified Drivers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        @keyframes gradient-border {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }

        .animate-gradient-border {
          background-size: 200% 200%;
          animation: gradient-border 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;