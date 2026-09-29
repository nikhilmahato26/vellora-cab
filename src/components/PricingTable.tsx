import React from 'react';
import { vehicles, Vehicle } from '../data/vehicles';
import { formatCurrency, getVehicleWhatsAppUrl } from '../utils/whatsapp';
import { ArrowRight, MessageCircle, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/contact';

interface PricingTableProps {
  selectedDuration: 12 | 24;
  onBookVehicle?: (vehicle: Vehicle) => void;
}

export const PricingTable: React.FC<PricingTableProps> = ({
  selectedDuration,
  onBookVehicle,
}) => {
  const handleBook = (vehicle: Vehicle) => {
    if (onBookVehicle) {
      onBookVehicle(vehicle);
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
    <div className="w-full">
      {/* Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Desktop View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider">
                  Vehicle Model
                </th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider">
                  Category
                </th>
                <th
                  className={`py-4 px-6 text-xs font-bold uppercase tracking-wider text-right ${
                    selectedDuration === 12 ? 'text-cyan-400 bg-slate-800' : ''
                  }`}
                >
                  12 Hours Rate
                </th>
                <th
                  className={`py-4 px-6 text-xs font-bold uppercase tracking-wider text-right ${
                    selectedDuration === 24 ? 'text-cyan-400 bg-slate-800' : ''
                  }`}
                >
                  24 Hours Rate
                </th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {vehicles.map((v, index) => {
                const isEven = index % 2 === 0;
                return (
                  <tr
                    key={v.id}
                    className={`hover:bg-cyan-50/40 transition-colors ${
                      isEven ? 'bg-white' : 'bg-slate-50/50'
                    }`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={v.image}
                          alt={v.name}
                          className="w-14 h-9 object-contain bg-slate-100 rounded-lg p-1 border border-slate-200"
                          loading="lazy"
                        />
                        <div>
                          <span className="font-extrabold text-sm text-slate-900 block font-display">
                            {v.name}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            Nayapalli, Bhubaneswar
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200">
                        {v.category}
                      </span>
                    </td>
                    <td
                      className={`py-4 px-6 text-right font-display text-base font-extrabold ${
                        selectedDuration === 12
                          ? 'text-cyan-700 bg-cyan-50/30'
                          : 'text-slate-800'
                      }`}
                    >
                      {formatCurrency(v.price12Hours)}
                    </td>
                    <td
                      className={`py-4 px-6 text-right font-display text-base font-extrabold ${
                        selectedDuration === 24
                          ? 'text-cyan-700 bg-cyan-50/30'
                          : 'text-slate-800'
                      }`}
                    >
                      {formatCurrency(v.price24Hours)}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleBook(v)}
                          className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
                        >
                          <span>Book</span>
                          <ArrowRight className="w-3 h-3 text-cyan-400" />
                        </button>
                        <a
                          href={getVehicleWhatsAppUrl(
                            v.name,
                            selectedDuration,
                            selectedDuration === 12 ? v.price12Hours : v.price24Hours
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`WhatsApp enquire for ${v.name}`}
                          className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing Disclaimer */}
      <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" />
        <p className="text-xs text-slate-600 leading-relaxed">
          {BUSINESS_INFO.pricingDisclaimer}
        </p>
      </div>
    </div>
  );
};
