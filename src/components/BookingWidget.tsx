import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Car, ArrowRight, Sparkles } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { BUSINESS_INFO } from '../utils/contact';

interface BookingWidgetProps {
  onCheckCars?: (params: {
    location: string;
    startDate: string;
    startTime: string;
    duration: 12 | 24;
    vehicleId: string;
  }) => void;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ onCheckCars }) => {
  const [pickupLocation, setPickupLocation] = useState(
    'Nayapalli, Bhubaneswar'
  );
  const [startDate, setStartDate] = useState(
    () => new Date().toISOString().split('T')[0]
  );
  const [startTime, setStartTime] = useState('10:00');
  const [duration, setDuration] = useState<12 | 24>(12);
  const [selectedVehicle, setSelectedVehicle] = useState('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onCheckCars) {
      onCheckCars({
        location: pickupLocation,
        startDate,
        startTime,
        duration,
        vehicleId: selectedVehicle,
      });
    }

    // Scroll down to fleet section and apply filter
    const fleetSection = document.getElementById('fleet');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Also dispatch event for vehicle and duration selection
    if (selectedVehicle !== 'all') {
      const matched = vehicles.find((v) => v.id === selectedVehicle);
      if (matched) {
        window.dispatchEvent(
          new CustomEvent('velora:select-vehicle', {
            detail: { vehicleName: matched.name, duration }
          })
        );
      }
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 z-20">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-card border border-slate-200/90 relative overflow-hidden">
        {/* Subtle top cyan line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-slate-900" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-display">
                Find Your Ride
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select your rental duration & explore self-drive pricing in Bhubaneswar
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Rental Duration:
            </span>
            <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setDuration(12)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  duration === 12
                    ? 'bg-white text-cyan-700 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                12 Hours
              </button>
              <button
                type="button"
                onClick={() => setDuration(24)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  duration === 24
                    ? 'bg-white text-cyan-700 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                24 Hours
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {/* Pickup Location */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 focus-within:border-cyan-500 focus-within:bg-white transition-all">
            <label className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-600" />
              Pickup Location
            </label>
            <input
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder="Nayapalli, Bhubaneswar"
              className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none"
            />
          </div>

          {/* Rental Start Date */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 focus-within:border-cyan-500 focus-within:bg-white transition-all">
            <label className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
              <Calendar className="w-3.5 h-3.5 text-cyan-600" />
              Rental Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer"
            />
          </div>

          {/* Rental Start Time */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 focus-within:border-cyan-500 focus-within:bg-white transition-all">
            <label className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
              <Clock className="w-3.5 h-3.5 text-cyan-600" />
              Start Time
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer"
            />
          </div>

          {/* Select Vehicle */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 focus-within:border-cyan-500 focus-within:bg-white transition-all">
            <label className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
              <Car className="w-3.5 h-3.5 text-cyan-600" />
              Select Vehicle
            </label>
            <select
              value={selectedVehicle}
              aria-label="Select Vehicle"
              onChange={(e) => setSelectedVehicle(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer"
            >
              <option value="all">All 9 Vehicle Options</option>
              {vehicles.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name} ({duration === 12 ? `₹${v.price12Hours}` : `₹${v.price24Hours}`})
                </option>
              ))}
            </select>
          </div>

          {/* CTA Submit Button */}
          <div className="sm:col-span-2 lg:col-span-1 flex items-end">
            <button
              type="submit"
              className="w-full h-[52px] bg-slate-900 hover:bg-cyan-600 text-white font-black text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-sm group"
            >
              <span>Check Cars</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        <p className="text-[11px] text-slate-600 mt-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block" />
          Filter rates based on the supplied 12-hour and 24-hour pricing in Nayapalli, Bhubaneswar.
        </p>
      </div>
    </div>
  );
};
