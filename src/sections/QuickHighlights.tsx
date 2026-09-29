import React from 'react';
import { KeyRound, Clock, Car, PhoneCall } from 'lucide-react';

export const QuickHighlights: React.FC = () => {
  const highlights = [
    {
      title: 'SELF DRIVE',
      description: 'Drive the car yourself and enjoy your journey.',
      icon: KeyRound,
    },
    {
      title: 'FLEXIBLE DURATIONS',
      description: 'Choose from 12-hour and 24-hour rental options.',
      icon: Clock,
    },
    {
      title: 'MULTIPLE VEHICLES',
      description: 'Choose from hatchbacks, SUVs and premium vehicles.',
      icon: Car,
    },
    {
      title: 'EASY BOOKING',
      description: 'Book through phone or WhatsApp.',
      icon: PhoneCall,
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#F7F9FA] border border-slate-200/90 hover:border-cyan-500 transition-all duration-200 shadow-xs hover:shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-cyan-600 text-cyan-400 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 tracking-wider uppercase font-display group-hover:text-cyan-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
