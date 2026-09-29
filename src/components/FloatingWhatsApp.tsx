import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-5 z-40 flex items-center group">
      {/* Tooltip */}
      <div
        className={`mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold tracking-wide shadow-lg border border-slate-700 whitespace-nowrap transition-all duration-200 hidden sm:block ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'
        }`}
      >
        Chat With Velora Drive
      </div>

      {/* Floating Button */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat With Velora Drive on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-transform duration-200 hover:scale-110 active:scale-95"
      >
        {/* Subtle Pulse Waves */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10" />
        <MessageCircle className="w-7 h-7 text-white fill-current" />
      </a>
    </div>
  );
};
