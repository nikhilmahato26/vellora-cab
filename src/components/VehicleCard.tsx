import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Vehicle } from '../data/vehicles';
import { formatCurrency, getVehicleWhatsAppUrl } from '../utils/whatsapp';

interface VehicleCardProps {
  vehicle: Vehicle;
  selectedDuration: 12 | 24;
  onBookNow?: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  selectedDuration,
  onBookNow,
}) => {
  const currentPrice = selectedDuration === 12 ? vehicle.price12Hours : vehicle.price24Hours;
  const alternatePrice = selectedDuration === 12 ? vehicle.price24Hours : vehicle.price12Hours;
  const alternateLabel = selectedDuration === 12 ? '24 Hours' : '12 Hours';

  const whatsappUrl = getVehicleWhatsAppUrl(
    vehicle.name,
    selectedDuration,
    currentPrice
  );

  const handleBookClick = () => {
    if (onBookNow) {
      onBookNow(vehicle);
    } else {
      const element = document.getElementById('booking');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // dispatch custom event to set vehicle in form
        window.dispatchEvent(
          new CustomEvent('velora:select-vehicle', {
            detail: { vehicleName: vehicle.name, duration: selectedDuration }
          })
        );
      }
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-cyan-500 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      {/* Category & Badge */}
      <div className="relative">
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-white/95 text-slate-800 border border-slate-200 backdrop-blur-md shadow-xs">
            {vehicle.category}
          </span>
          {vehicle.name.includes('MT / AT') && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-black tracking-wider uppercase bg-cyan-50 text-cyan-700 border border-cyan-200">
              MT / AT
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900/80 text-cyan-300 backdrop-blur-md">
            <Zap className="w-3 h-3 text-cyan-400" />
            Self Drive
          </span>
        </div>

        {/* Vehicle Image Container */}
        <div className="w-full aspect-[16/10] bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden relative flex items-center justify-center p-4">
          <img
            src={vehicle.image}
            alt={`${vehicle.name} self drive car rental in Bhubaneswar`}
            className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
      </div>

      {/* Vehicle Info Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-black text-slate-900 tracking-tight font-display group-hover:text-cyan-600 transition-colors">
              {vehicle.name}
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {vehicle.description}
          </p>
        </div>

        {/* Pricing Layout */}
        <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
          <div className="flex items-center justify-between">
            {/* Primary active duration */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 block">
                {selectedDuration} Hours Rate
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-slate-900 font-display">
                  {formatCurrency(currentPrice)}
                </span>
                <span className="text-xs text-slate-500 font-medium">/{selectedDuration}h</span>
              </div>
            </div>

            {/* Alternate duration tag */}
            <div className="text-right">
              <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider block">
                {alternateLabel}
              </span>
              <span className="text-sm font-bold text-slate-700 block mt-0.5">
                {formatCurrency(alternatePrice)}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={handleBookClick}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm group/btn"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-cyan-600" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
