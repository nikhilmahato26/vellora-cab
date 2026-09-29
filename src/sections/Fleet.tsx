import React, { useState, useMemo } from 'react';
import { vehicles, Vehicle, TOTAL_VEHICLE_OPTIONS } from '../data/vehicles';
import { VehicleCard } from '../components/VehicleCard';
import {
  VehicleFilters,
  CategoryFilter,
  SortOption,
} from '../components/VehicleFilters';
import { Car, Layers } from 'lucide-react';

interface FleetProps {
  selectedDuration: 12 | 24;
  onDurationChange: (duration: 12 | 24) => void;
  onBookNow?: (vehicle: Vehicle) => void;
}

export const Fleet: React.FC<FleetProps> = ({
  selectedDuration,
  onDurationChange,
  onBookNow,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('ALL');
  const [sortBy, setSortBy] = useState<SortOption>('recommended');

  const filteredVehicles = useMemo(() => {
    return vehicles
      .filter((v) => {
        // Search query filter
        const matchesSearch = v.name
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase());

        // Category filter
        const matchesCategory =
          selectedCategory === 'ALL'
            ? true
            : selectedCategory === 'SUV'
            ? v.category === 'SUV'
            : v.category === 'Hatchback';

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        const priceA = selectedDuration === 12 ? a.price12Hours : a.price24Hours;
        const priceB = selectedDuration === 12 ? b.price12Hours : b.price24Hours;

        if (sortBy === 'price-asc') {
          return priceA - priceB;
        } else if (sortBy === 'price-desc') {
          return priceB - priceA;
        }
        return 0; // 'recommended' uses default order
      });
  }, [searchQuery, selectedCategory, sortBy, selectedDuration]);

  return (
    <section id="fleet" className="py-20 bg-[#F7F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-black tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5 text-cyan-600" />
            <span>{TOTAL_VEHICLE_OPTIONS} VEHICLE OPTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            CHOOSE YOUR <span className="text-cyan-600">RIDE</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            From compact city cars to powerful SUVs, choose the vehicle that fits your journey.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10">
          <VehicleFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedDuration={selectedDuration}
            onDurationChange={onDurationChange}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalResults={filteredVehicles.length}
          />
        </div>

        {/* Vehicle Cards Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                selectedDuration={selectedDuration}
                onBookNow={onBookNow}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <Car className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No vehicles found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              No vehicle matched "{searchQuery}". Try clearing your search or selecting "ALL" categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ALL');
              }}
              className="mt-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-cyan-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
