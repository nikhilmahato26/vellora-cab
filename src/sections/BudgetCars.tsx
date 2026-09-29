import React from 'react';
import { vehicles, Vehicle } from '../data/vehicles';
import { formatCurrency, getVehicleWhatsAppUrl } from '../utils/whatsapp';
import { ArrowRight, MessageCircle, Wallet, Check } from 'lucide-react';

interface BudgetCarsProps {
  selectedDuration: 12 | 24;
  onBookNow?: (vehicle: Vehicle) => void;
}

export const BudgetCars: React.FC<BudgetCarsProps> = ({
  selectedDuration,
  onBookNow,
}) => {
  const budgetVehicles = vehicles.filter((v) => v.category === 'Hatchback');

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
    <section className="py-20 bg-[#F7F9FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Wallet className="w-3.5 h-3.5 text-cyan-600" />
            <span>ACCESSIBLE & EFFICIENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            SMART CARS. <span className="text-cyan-600">SMART PRICES.</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Affordable, reliable, and convenient self-drive cars designed for smart city mobility in Bhubaneswar.
          </p>
        </div>

        {/* 3 Budget Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {budgetVehicles.map((vehicle) => {
            const currentPrice =
              selectedDuration === 12
                ? vehicle.price12Hours
                : vehicle.price24Hours;

            return (
              <div
                key={vehicle.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-cyan-500 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover group"
              >
                <div>
                  {/* Top tags */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                      {vehicle.category}
                    </span>
                    {vehicle.name.includes('MT / AT') && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-cyan-50 text-cyan-700 border border-cyan-200">
                        MT / AT Available
                      </span>
                    )}
                  </div>

                  {/* Vehicle Image */}
                  <div className="aspect-[16/10] bg-slate-50 rounded-xl overflow-hidden mb-4 flex items-center justify-center p-3">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-slate-900 font-display group-hover:text-cyan-600 transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {vehicle.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="border-r border-slate-200 pr-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        12 Hours
                      </span>
                      <span className="text-base font-black text-slate-900 font-display">
                        ₹1,199
                      </span>
                    </div>
                    <div className="pl-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        24 Hours
                      </span>
                      <span className="text-base font-black text-slate-900 font-display">
                        ₹1,699
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleBook(vehicle)}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Book Now</span>
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
