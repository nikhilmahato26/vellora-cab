import React from 'react';
import { MapPin, Clock, Car, PhoneCall, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/contact';

export const About: React.FC = () => {
  const highlights = [
    'Self-drive car rental in Nayapalli, Bhubaneswar',
    'Multiple vehicle options including hatchbacks and SUVs',
    'Flexible 12-hour rental options for day tasks',
    'Convenient 24-hour rental options for full-day travel',
    'Transparent pricing with no hidden vehicle rates',
    'Easy booking directly through phone or WhatsApp',
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
              ABOUT VELORA DRIVE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display">
              YOUR JOURNEY. <br />
              <span className="text-cyan-600">YOUR CAR. YOUR FREEDOM.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Velora Drive is a self-drive car rental service based in Nayapalli, Bhubaneswar, Odisha, offering a range of cars with 12-hour and 24-hour rental options.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you require a compact hatchback like the Swift, Fronx, Baleno Manual, or Baleno Automatic for city errands, or a commanding SUV like the Scorpio Classic S11, Thar, Thar Roxx, Scorpio N, or Fortuner for longer excursions, Velora Drive provides transparent self-drive rates tailored to your timeline.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Information Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F7F9FA] p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-cyan-500 text-white flex items-center justify-center mb-4 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display mb-1">
                  Bhubaneswar Based
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Located near Radha Rani Tower, beside Reliance Fresh in Nayapalli, Bhubaneswar, Odisha (751012).
                </p>
              </div>

              <div className="bg-[#F7F9FA] p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center mb-4 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display mb-1">
                  12h & 24h Durations
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Select either 12 hours or 24 hours with upfront pricing for every listed vehicle option.
                </p>
              </div>

              <div className="bg-[#F7F9FA] p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center mb-4 shadow-sm">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display mb-1">
                  Multiple Vehicles
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  From budget compacts to rugged 4x4s and premium luxury SUVs for your road journey.
                </p>
              </div>

              <div className="bg-[#F7F9FA] p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-cyan-500 text-white flex items-center justify-center mb-4 shadow-sm">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display mb-1">
                  Easy Booking
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Connect quickly with Velora Drive via phone or WhatsApp to verify availability and confirm your booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
