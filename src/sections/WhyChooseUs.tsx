import React from 'react';
import { Layers, CalendarClock, Tag, Compass, MessageSquare, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../utils/contact';

const iconMap = {
  Layers: Layers,
  CalendarClock: CalendarClock,
  Tag: Tag,
  Compass: Compass,
  MessageSquare: MessageSquare,
  MapPin: MapPin,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F9FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <span>SERVICE HIGHLIGHTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            WHY <span className="text-cyan-600">VELORA DRIVE?</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Dedicated self-drive car rental built around convenience, clear duration plans, and honest rates in Bhubaneswar.
          </p>
        </div>

        {/* 6 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap] || Layers;
            return (
              <div
                key={point.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-card-hover group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-cyan-600 text-cyan-400 group-hover:text-white flex items-center justify-center transition-colors mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black text-slate-900 font-display group-hover:text-cyan-700 transition-colors mb-2">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-slate-400 group-hover:text-cyan-600 transition-colors uppercase tracking-wider">
                  Velora Standard
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
