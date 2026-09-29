import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Fleet } from '../sections/Fleet';
import { Pricing } from '../sections/Pricing';
import { CTASection } from '../components/CTASection';
import { Vehicle } from '../data/vehicles';
import { useNavigate } from 'react-router-dom';

export const CarsPage: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState<12 | 24>(12);
  const navigate = useNavigate();

  const handleBook = (vehicle: Vehicle) => {
    navigate('/#booking');
    setTimeout(() => {
      const element = document.getElementById('booking');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.dispatchEvent(
          new CustomEvent('velora:select-vehicle', {
            detail: { vehicleName: vehicle.name, duration: selectedDuration }
          })
        );
      }
    }, 100);
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>Self Drive Cars Fleet | Velora Drive Bhubaneswar</title>
        <meta
          name="description"
          content="Explore all 8 self drive vehicle options at Velora Drive Bhubaneswar. Compare 12-hour and 24-hour rental rates on Scorpio, Thar, Fortuner, Swift, Fronx and Baleno."
        />
      </Helmet>

      {/* Hero Header for Cars Page */}
      <div className="bg-slate-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-black tracking-widest text-cyan-400 uppercase block mb-2">
            VELORA DRIVE FLEET
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white">
            EXPLORE OUR <span className="text-cyan-400">VEHICLES</span>
          </h1>
          <p className="text-slate-400 mt-3 text-base max-w-xl mx-auto">
            Choose from 8 vehicle options with flexible 12-hour and 24-hour transparent rates in Nayapalli, Bhubaneswar.
          </p>
        </div>
      </div>

      <Fleet
        selectedDuration={selectedDuration}
        onDurationChange={setSelectedDuration}
        onBookNow={handleBook}
      />

      <Pricing
        selectedDuration={selectedDuration}
        onDurationChange={setSelectedDuration}
      />

      <CTASection />
    </div>
  );
};
