import React from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export type CategoryFilter = 'ALL' | 'SUV' | 'HATCHBACK';
export type SortOption = 'recommended' | 'price-asc' | 'price-desc';

interface VehicleFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  selectedDuration: 12 | 24;
  onDurationChange: (duration: 12 | 24) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalResults: number;
}

export const VehicleFilters: React.FC<VehicleFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedDuration,
  onDurationChange,
  sortBy,
  onSortChange,
  totalResults,
}) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-4">
      {/* Top Row: Search and Sort */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search your car... (e.g. Scorpio, Thar, Fronx)"
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
          />
        </div>

        {/* Duration toggle button group & Sort Dropdown */}
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          {/* Duration Selector */}
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => onDurationChange(12)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedDuration === 12
                  ? 'bg-white text-cyan-700 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              12 Hours
            </button>
            <button
              type="button"
              onClick={() => onDurationChange(24)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedDuration === 24
                  ? 'bg-white text-cyan-700 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              24 Hours
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative min-w-[170px] flex-1 sm:flex-none">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={sortBy}
              aria-label="Sort vehicles by price or recommendation"
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="w-full pl-8 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-cyan-500 appearance-none cursor-pointer"
            >
              <option value="recommended">Sort: Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Category Tabs */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100 flex-wrap gap-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          <span className="text-xs font-semibold text-slate-600 mr-1 hidden sm:inline">
            Category:
          </span>
          <button
            type="button"
            onClick={() => onCategoryChange('ALL')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'ALL'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            ALL
          </button>
          <button
            type="button"
            onClick={() => onCategoryChange('SUV')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'SUV'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            SUV
          </button>
          <button
            type="button"
            onClick={() => onCategoryChange('HATCHBACK')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'HATCHBACK'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            HATCHBACK / COMPACT
          </button>
        </div>

        <div className="text-xs font-semibold text-slate-600 ml-auto">
          Showing <span className="font-bold text-slate-900">{totalResults}</span> vehicle options
        </div>
      </div>
    </div>
  );
};
