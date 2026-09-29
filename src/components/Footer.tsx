import React from 'react';
import { Car, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/contact';
import { vehicles } from '../data/vehicles';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Cars', href: '#fleet' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVehicleSelect = (vehicleName: string) => {
    const fleetSection = document.getElementById('fleet');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(
        new CustomEvent('velora:select-vehicle', {
          detail: { vehicleName }
        })
      );
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center font-bold text-xl border border-slate-700">
                <Car className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block leading-tight font-display">
                  VELORA <span className="text-cyan-400">DRIVE</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block -mt-0.5">
                  SELF DRIVE CAR RENTAL
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Self-drive car rental in Nayapalli, Bhubaneswar with flexible 12-hour and 24-hour rental options.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-cyan-400 border border-slate-700">
                DRIVE YOUR WAY
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-500" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicles List */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2">
              Our Vehicles
            </h4>
            <ul className="space-y-2 text-xs">
              {vehicles.map((v) => (
                <li key={v.id}>
                  <button
                    type="button"
                    onClick={() => handleVehicleSelect(v.name)}
                    className="hover:text-cyan-400 text-left transition-colors flex items-center justify-between w-full group"
                  >
                    <span className="text-slate-300 group-hover:text-cyan-400 font-medium">
                      {v.name}
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      From ₹{v.price12Hours}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  Near Radha Rani Tower,<br />
                  Beside Reliance Fresh, Nayapalli,<br />
                  Bhubaneswar, Odisha – 751012
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="space-x-2">
                  <a href={BUSINESS_INFO.phonePrimaryTel} className="hover:text-cyan-400 font-semibold">
                    {BUSINESS_INFO.phonePrimary}
                  </a>
                  <span className="text-slate-600">/</span>
                  <a href={BUSINESS_INFO.phoneSecondaryTel} className="hover:text-cyan-400 font-semibold">
                    {BUSINESS_INFO.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={BUSINESS_INFO.emailMailto} className="hover:text-cyan-400">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="mt-5">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-extrabold text-xs tracking-wide transition-colors"
              >
                Chat On WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Velora Drive. All Rights Reserved.</p>
          <p className="text-slate-400">
            Self Drive Car Rental in Nayapalli, Bhubaneswar, Odisha – 751012
          </p>
        </div>
      </div>
    </footer>
  );
};
