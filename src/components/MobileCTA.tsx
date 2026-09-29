import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/contact';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const MobileCTA: React.FC = () => {
  const handleScrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl px-3 py-2.5 safe-area-pb">
      <div className="grid grid-cols-3 gap-2">
        {/* Call CTA */}
        <a
          href={BUSINESS_INFO.phonePrimaryTel}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-cyan-600 mb-0.5" />
          <span className="text-[11px] font-extrabold tracking-wide uppercase">CALL</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-extrabold tracking-wide uppercase">WHATSAPP</span>
        </a>

        {/* Book CTA */}
        <button
          type="button"
          onClick={handleScrollToBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white shadow-sm transition-colors"
        >
          <Calendar className="w-4 h-4 text-cyan-400 mb-0.5" />
          <span className="text-[11px] font-extrabold tracking-wide uppercase">BOOK</span>
        </button>
      </div>
    </div>
  );
};
