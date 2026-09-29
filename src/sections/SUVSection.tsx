import React from 'react';
import { vehicles, Vehicle } from '../data/vehicles';
import { formatCurrency, getVehicleWhatsAppUrl } from '../utils/whatsapp';
import { ArrowRight, MessageCircle, Shield, Mountain } from 'lucide-react';

interface SUVSectionProps {
  selectedDuration: 12 | 24;
  onBookNow?: (vehicle: Vehicle) => void;
}

export const SUVSection: React.FC<SUVSectionProps> = ({
  selectedDuration,
  onBookNow,
}) => {
  const suvVehicles = vehicles.filter((v) => v.category === 'SUV');

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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Mountain className="w-3.5 h-3.5 text-cyan-600" />
            <span>COMMANDING ROAD PRESENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            POWER UP <span className="text-cyan-600">YOUR JOURNEY</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Explore our robust lineup of powerful SUVs built for highway cruising, rugged escapes, and executive presence.
          </p>
        </div>

        {/* 5 SUVs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suvVehicles.map((vehicle) => {
            const currentPrice =
              selectedDuration === 12
                ? vehicle.price12Hours
                : vehicle.price24Hours;

            return (
              <div
                key={vehicle.id}
                className="bg-[#F7F9FA] rounded-2xl border border-slate-200 hover:border-cyan-500 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-slate-900 text-cyan-400">
                      SUV
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">
                      Nayapalli, Bhubaneswar
                    </span>
                  </div>

                  {/* Image */}
                  <div className="aspect-[16/10] bg-white rounded-xl overflow-hidden mb-4 p-3 flex items-center justify-center border border-slate-200">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 font-display group-hover:text-cyan-600 transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {vehicle.description}
                  </p>
                </div>

                {/* Price Matrix */}
                <div className="mt-5 pt-4 border-t border-slate-200 space-y-3">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        12 Hours
                      </span>
                      <span className="text-lg font-black text-slate-900 font-display">
                        {formatCurrency(vehicle.price12Hours)}
                      </span>
                    </div>

                    <div className="text-right border-l border-slate-100 pl-4">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        24 Hours
                      </span>
                      <span className="text-lg font-black text-cyan-700 font-display">
                        {formatCurrency(vehicle.price24Hours)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleBook(vehicle)}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Book SUV</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                    <a
                      href={getVehicleWhatsAppUrl(
                        vehicle.name,
                        selectedDuration,
                        currentPrice
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-cyan-600" />
                      <span>WhatsApp</span>
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
