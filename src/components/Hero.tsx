import React from 'react';
import { ArrowRight, Phone, Calendar, ShieldCheck, Clock, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/contact';

export const Hero: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F7F9FA] via-white to-[#F7F9FA]"
    >
      {/* Subtle Cyan Background Glow / Accents */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-10 left-10 w-[350px] h-[350px] bg-cyan-50/60 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-black tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>{BUSINESS_INFO.name} • BHUBANESWAR</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-display">
                DRIVE YOUR <span className="text-cyan-600 underline decoration-cyan-400 decoration-wavy decoration-2 underline-offset-8">WAY.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight font-display">
                Premium Self Drive Cars in Bhubaneswar
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Choose from our range of self-drive cars, select your rental duration and start your journey with Velora Drive.
            </p>

            {/* Three CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => handleScroll('fleet')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white font-black text-sm tracking-wide transition-all duration-200 shadow-md shadow-slate-900/10 flex items-center gap-2 group"
              >
                <span>Explore Cars</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => handleScroll('booking')}
                className="px-6 py-3.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-300 font-extrabold text-sm transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-cyan-600" />
                <span>Book Now</span>
              </button>

              {/* Third CTA */}
              <a
                href={BUSINESS_INFO.phonePrimaryTel}
                className="px-4 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-sm transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>Call {BUSINESS_INFO.phonePrimary}</span>
              </a>
            </div>

            {/* Key trust badges */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-600" />
                <span>12h & 24h Options</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-600" />
                <span>Transparent Rates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-600" />
                <span>Nayapalli, Bhubaneswar</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Car & Floating Badges */}
          <div className="lg:col-span-6 relative">
            {/* Background cyan gradient disc */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/40 via-cyan-100/20 to-transparent rounded-3xl transform rotate-1 scale-95 -z-0" />

            <div className="relative bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xl overflow-hidden">
              {/* Top Floating Badge */}
              <div className="flex items-center justify-between mb-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-cyan-300 text-xs font-bold">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Self Drive Rental</span>
                </div>
                <span className="text-xs font-bold text-slate-500">
                  Nayapalli, Bhubaneswar
                </span>
              </div>

              {/* Main Automotive Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-2 sm:p-4">
                <img
                  src="/images/hero-car.jpg"
                  alt="Velora Drive premium self drive car in Bhubaneswar"
                  className="w-full h-full object-contain object-center transform hover:scale-102 transition-transform duration-500"
                  fetchPriority="high"
                />
              </div>

              {/* Bottom Floating Price Card */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
                    Starting Self-Drive Price
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-black font-display text-white">
                      ₹1,199
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ 12 Hours</span>
                  </div>
                </div>

                <div className="text-right border-l border-slate-700 pl-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    24 Hours Option
                  </span>
                  <span className="text-lg font-black font-display text-cyan-400 block">
                    From ₹1,699
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
