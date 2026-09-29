import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';

interface DurationSelectorProps {
  selectedDuration: 12 | 24;
  onSelectDuration: (duration: 12 | 24) => void;
  className?: string;
}

export const DurationSelector: React.FC<DurationSelectorProps> = ({
  selectedDuration,
  onSelectDuration,
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto ${className}`}>
      {/* 12 Hours Option */}
      <button
        type="button"
        onClick={() => onSelectDuration(12)}
        className={`relative flex items-center justify-between p-4 rounded-xl text-left transition-all duration-200 border-2 ${
          selectedDuration === 12
            ? 'border-cyan-500 bg-cyan-50/60 shadow-sm shadow-cyan-500/10'
            : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              selectedDuration === 12
                ? 'bg-cyan-500 text-white shadow-sm'
                : 'bg-slate-100 text-slate-500'
            }`}
          >
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold text-slate-900 font-display">12 HOURS</span>
              {selectedDuration === 12 && (
                <CheckCircle2 className="w-4 h-4 text-cyan-600 inline" />
              )}
            </div>
            <p className="text-xs text-slate-500 font-medium">Day Trips & Quick Tasks</p>
          </div>
        </div>
        <span
          className={`text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider ${
            selectedDuration === 12
              ? 'bg-cyan-600 text-white'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          From ₹1,199
        </span>
      </button>

      {/* 24 Hours Option */}
      <button
        type="button"
        onClick={() => onSelectDuration(24)}
        className={`relative flex items-center justify-between p-4 rounded-xl text-left transition-all duration-200 border-2 ${
          selectedDuration === 24
            ? 'border-cyan-500 bg-cyan-50/60 shadow-sm shadow-cyan-500/10'
            : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              selectedDuration === 24
                ? 'bg-cyan-500 text-white shadow-sm'
                : 'bg-slate-100 text-slate-500'
            }`}
          >
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold text-slate-900 font-display">24 HOURS</span>
              {selectedDuration === 24 && (
                <CheckCircle2 className="w-4 h-4 text-cyan-600 inline" />
              )}
            </div>
            <p className="text-xs text-slate-500 font-medium">Full Day & Weekend Getaways</p>
          </div>
        </div>
        <span
          className={`text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider ${
            selectedDuration === 24
              ? 'bg-cyan-600 text-white'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          From ₹1,699
        </span>
      </button>
    </div>
  );
};
