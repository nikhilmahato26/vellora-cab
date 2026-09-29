import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/contact';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#F7F9FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-cyan-600" />
            <span>NAYAPALLI, BHUBANESWAR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            GET IN <span className="text-cyan-600">TOUCH</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Reach out to Velora Drive for vehicle availability, duration plans, and booking confirmations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-200 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Phone Numbers
                  </span>
                  <div className="text-lg font-black text-slate-900 font-display flex flex-wrap items-center gap-3">
                    <a href={BUSINESS_INFO.phonePrimaryTel} className="hover:text-cyan-600 transition-colors">
                      {BUSINESS_INFO.phonePrimary}
                    </a>
                    <span className="text-slate-300">/</span>
                    <a href={BUSINESS_INFO.phoneSecondaryTel} className="hover:text-cyan-600 transition-colors">
                      {BUSINESS_INFO.phoneSecondary}
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 pt-1">
                    Primary phone & alternate contact line
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={BUSINESS_INFO.phonePrimaryTel}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Call Now</span>
                </a>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-200 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Email Address
                  </span>
                  <div className="text-lg font-black text-slate-900 font-display">
                    <a href={BUSINESS_INFO.emailMailto} className="hover:text-cyan-600 transition-colors">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 pt-1">
                    Direct email for enquiries and itinerary requirements
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <a
                  href={BUSINESS_INFO.emailMailto}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            {/* Business Card Identity */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-md border border-slate-800">
              <span className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase block mb-1">
                SELF DRIVE CAR RENTAL
              </span>
              <h3 className="text-2xl font-black font-display tracking-tight text-white mb-2">
                VELORA DRIVE
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Near Radha Rani Tower, Beside Reliance Fresh, Nayapalli, Bhubaneswar, Odisha – 751012
              </p>
            </div>
          </div>

          {/* Right Column: Location / Find Velora Drive Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight font-display">
                  FIND VELORA DRIVE
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-cyan-50 text-cyan-700 border border-cyan-200">
                  {BUSINESS_INFO.pincode}
                </span>
              </div>

              {/* Landmark breakdown */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-sm">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Landmark
                  </span>
                  <p className="font-extrabold text-slate-900 mt-0.5">
                    Near Radha Rani Tower, Beside Reliance Fresh
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Area & City
                  </span>
                  <p className="font-extrabold text-slate-900 mt-0.5">
                    Nayapalli, Bhubaneswar, Odisha
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Postal Code
                  </span>
                  <p className="font-extrabold text-slate-900 mt-0.5">
                    751012
                  </p>
                </div>
              </div>

              {/* Visual Map Representation Box */}
              <div className="h-48 rounded-2xl bg-gradient-to-br from-slate-100 to-cyan-50/50 border border-slate-200 p-5 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white flex items-center justify-center shadow-xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-slate-900 block">Nayapalli Hub</span>
                      <span className="text-[10px] text-slate-500">Bhubaneswar, Odisha</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/80 border border-slate-200 text-slate-700">
                    Self Drive Pickup Point
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="text-xs font-semibold text-slate-700">
                    Near Radha Rani Tower • Beside Reliance Fresh
                  </div>
                </div>

                {/* Subtle map grid styling effect */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#0891B2_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
            </div>

            {/* Map CTA */}
            <div className="pt-6">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white font-extrabold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm group"
              >
                <Navigation className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
