import React from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/contact';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const CTASection: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-slate-100/80 border-t border-slate-200 relative overflow-hidden">
      {/* Decorative Cyan Circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-50/60 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
          VELORA DRIVE • SELF DRIVE RENTAL
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
          FIND YOUR CAR. <span className="text-cyan-600">START YOUR JOURNEY.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Choose from Velora Drive's self-drive vehicle options in Bhubaneswar and select the rental duration that fits your plans.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
          <button
            type="button"
            onClick={() => handleScroll('fleet')}
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white font-black text-sm tracking-wide transition-all duration-200 shadow-md shadow-slate-900/10 flex items-center gap-2 group"
          >
            <span>Explore Cars</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm transition-colors flex items-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={BUSINESS_INFO.phonePrimaryTel}
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm transition-colors flex items-center gap-2 shadow-xs"
          >
            <Phone className="w-4 h-4 text-cyan-600" />
            <span>Call {BUSINESS_INFO.phonePrimary}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
