import React from 'react';
import { vehicles, Vehicle } from '../data/vehicles';
import { formatCurrency, getVehicleWhatsAppUrl } from '../utils/whatsapp';
import { ArrowRight, MessageCircle, Sparkles, Shield, Clock } from 'lucide-react';

interface FeaturedVehiclesProps {
  selectedDuration: 12 | 24;
  onBookNow?: (vehicle: Vehicle) => void;
}

export const FeaturedVehicles: React.FC<FeaturedVehiclesProps> = ({
  selectedDuration,
  onBookNow,
}) => {
  // Get Fortuner, Thar Roxx, Scorpio N
  const featuredIds = ['fortuner', 'thar-roxx', 'scorpio-n'];
  const featuredList = featuredIds
    .map((id) => vehicles.find((v) => v.id === id))
    .filter(Boolean) as Vehicle[];

  const handleBook = (vehicle: Vehicle) => {
    if (onBookNow) {
      onBookNow(vehicle);
    } else {
      const element = document.getElementById('booking');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.dispatchEvent(
          new CustomEvent('velora:select-vehicle', {
            detail: { vehicleName: vehicle.name, duration: selectedDuration }
          })
        );
      }
    }
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>PREMIUM SPOTLIGHT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
              FEATURED <span className="text-cyan-600">FLAGSHIPS</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md font-medium">
            Commanding presence, spacious luxury, and authentic power for special trips across Odisha.
          </p>
        </div>

        {/* Featured Vehicle Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredList.map((vehicle) => {
            const currentPrice =
              selectedDuration === 12
                ? vehicle.price12Hours
                : vehicle.price24Hours;

            return (
              <div
                key={vehicle.id}
                className="bg-[#F7F9FA] rounded-3xl border border-slate-200 hover:border-cyan-500 overflow-hidden transition-all duration-300 hover:shadow-card-hover flex flex-col justify-between group"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] bg-white p-5 flex items-center justify-center border-b border-slate-200 overflow-hidden">
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-slate-900 text-cyan-400">
                      FLAGSHIP {vehicle.category}
                    </span>
                  </div>

                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} self drive car in Bhubaneswar`}
                    className="w-full h-full object-contain object-center transform group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight font-display group-hover:text-cyan-600 transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {vehicle.description}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-cyan-600" />
                        <span>12 Hours:</span>
                      </div>
                      <span className="font-extrabold text-base text-slate-900 font-display">
                        {formatCurrency(vehicle.price12Hours)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-cyan-600" />
                        <span>24 Hours:</span>
                      </div>
                      <span className="font-extrabold text-base text-slate-900 font-display">
                        {formatCurrency(vehicle.price24Hours)}
                      </span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => handleBook(vehicle)}
                      className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white font-extrabold text-xs sm:text-sm tracking-wide uppercase transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Book {vehicle.name}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href={getVehicleWhatsAppUrl(
                        vehicle.name,
                        selectedDuration,
                        currentPrice
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-cyan-50 text-cyan-800 border border-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-cyan-600" />
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
