import React from 'react';
import { BookingForm } from '../components/BookingForm';
import { Calendar, ShieldCheck } from 'lucide-react';

export const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-cyan-600" />
            <span>DIRECT SELF-DRIVE ENQUIRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            BOOK YOUR <span className="text-cyan-600">SELF-DRIVE CAR</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Fill out your trip details below. Your submission will prepare an instant prefilled enquiry for quick confirmation via WhatsApp or phone.
          </p>
        </div>

        <BookingForm />
      </div>
    </section>
  );
};
