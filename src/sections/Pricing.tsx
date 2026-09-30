import React from 'react';
import { DurationSelector } from '../components/DurationSelector';
import { PricingTable } from '../components/PricingTable';
import { Tag, Clock, ArrowRight } from 'lucide-react';

interface PricingProps {
  selectedDuration: 12 | 24;
  onDurationChange: (duration: 12 | 24) => void;
}

export const Pricing: React.FC<PricingProps> = ({
  selectedDuration,
  onDurationChange,
}) => {
  return (
    <section id="pricing" className="py-20 bg-[#F7F9FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Price Highlight Cards */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5 text-cyan-600" />
            <span>TRANSPARENT RENTAL PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            SELF DRIVE FROM <span className="text-cyan-600">₹1,199</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Choose from multiple vehicles with flexible 12-hour and 24-hour rental options.
          </p>
        </div>

        {/* 2 Big Starting Price Callout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-50 rounded-bl-full -z-0" />
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                STARTING PRICE
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-display">
                  ₹1,199
                </span>
                <span className="text-sm font-bold text-slate-500">/ 12 Hours</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-2">
                Ideal for same-day local errands, city trips, business meetings, or quick visits across Bhubaneswar.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-cyan-700">Swift, Fronx, Baleno (Automatic) & (Manual)</span>
              <span className="px-2.5 py-1 rounded bg-cyan-50 text-cyan-800 text-[11px] font-bold">12h Rate</span>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-100 rounded-bl-full -z-0" />
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                24-HOUR OPTIONS
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-display">
                  ₹1,699
                </span>
                <span className="text-sm font-bold text-slate-500">/ 24 Hours</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-2">
                Starting from ₹1,699 for full-day travel, weekend outings, or outstation road trips at your own pace.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">All 9 Vehicle Options available</span>
              <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-bold">24h Rate</span>
            </div>
          </div>
        </div>

        {/* Dedicated Duration Comparison Section */}
        <div className="mb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-cyan-600" />
            <span>Interactive Duration Switcher</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            CHOOSE YOUR DURATION
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            Click a duration below to toggle pricing across the entire website and fleet comparison table.
          </p>

          <DurationSelector
            selectedDuration={selectedDuration}
            onSelectDuration={onDurationChange}
            className="pt-2"
          />
        </div>

        {/* Clean Pricing Table */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-black text-slate-900 font-display">
              Complete Fleet Pricing Breakdown
            </h4>
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              Active highlight: {selectedDuration} Hours
            </span>
          </div>

          <PricingTable selectedDuration={selectedDuration} />
        </div>
      </div>
    </section>
  );
};
