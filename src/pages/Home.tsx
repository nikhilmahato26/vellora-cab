import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { BookingWidget } from '../components/BookingWidget';
import { QuickHighlights } from '../sections/QuickHighlights';
import { About } from '../sections/About';
import { Fleet } from '../sections/Fleet';
import { FeaturedVehicles } from '../sections/FeaturedVehicles';
import { BudgetCars } from '../sections/BudgetCars';
import { SUVSection } from '../sections/SUVSection';
import { Pricing } from '../sections/Pricing';
import { HowItWorks } from '../sections/HowItWorks';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { Booking } from '../sections/Booking';
import { Contact } from '../sections/Contact';
import { CTASection } from '../components/CTASection';
import { Vehicle } from '../data/vehicles';

export const Home: React.FC = () => {
  // Global synchronized duration state (12 Hours vs 24 Hours)
  const [selectedDuration, setSelectedDuration] = useState<12 | 24>(12);

  const handleBookVehicle = (vehicle: Vehicle) => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(
        new CustomEvent('velora:select-vehicle', {
          detail: { vehicleName: vehicle.name, duration: selectedDuration }
        })
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Velora Drive Bhubaneswar | Self Drive Car Rental</title>
        <meta
          name="description"
          content="Velora Drive offers self-drive car rentals in Nayapalli, Bhubaneswar with flexible 12-hour and 24-hour rental options across a range of cars and SUVs."
        />
        <meta
          name="keywords"
          content="Velora Drive, Velora Drive Bhubaneswar, self drive car Bhubaneswar, self drive car rental Bhubaneswar, car rental Bhubaneswar, self drive cars in Bhubaneswar, Thar rental Bhubaneswar, Scorpio rental Bhubaneswar, Fortuner rental Bhubaneswar, Scorpio N rental Bhubaneswar, Thar Roxx rental Bhubaneswar, Fronx rental Bhubaneswar, car rental Nayapalli, self drive car Nayapalli"
        />
        <link rel="canonical" href="https://veloradrive.com/" />
        {/* LocalBusiness Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutoRental',
            name: 'Velora Drive',
            description:
              'Velora Drive is a self-drive car rental service based in Nayapalli, Bhubaneswar, Odisha, offering a range of cars with 12-hour and 24-hour rental options.',
            url: 'https://veloradrive.com',
            telephone: ['+917853852900', '+917853842900'],
            email: 'Veloradrive29@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Near Radha Rani Tower, Beside Reliance Fresh, Nayapalli',
              addressLocality: 'Bhubaneswar',
              addressRegion: 'Odisha',
              postalCode: '751012',
              addressCountry: 'IN',
            },
            priceRange: '₹1,199 - ₹5,999',
          })}
        </script>
      </Helmet>

      {/* 2. Hero */}
      <Hero />

      {/* 3. Booking Widget */}
      <BookingWidget />

      {/* 4. Quick Highlights */}
      <QuickHighlights />

      {/* 5. About Velora Drive */}
      <About />

      {/* 6. Fleet / Choose Your Ride (with Search + Filters) */}
      <Fleet
        selectedDuration={selectedDuration}
        onDurationChange={setSelectedDuration}
        onBookNow={handleBookVehicle}
      />

      {/* 8. Featured Vehicles */}
      <FeaturedVehicles
        selectedDuration={selectedDuration}
        onBookNow={handleBookVehicle}
      />

      {/* 9. Budget Cars */}
      <BudgetCars
        selectedDuration={selectedDuration}
        onBookNow={handleBookVehicle}
      />

      {/* 10. SUV Section */}
      <SUVSection
        selectedDuration={selectedDuration}
        onBookNow={handleBookVehicle}
      />

      {/* 11. Pricing Comparison */}
      <Pricing
        selectedDuration={selectedDuration}
        onDurationChange={setSelectedDuration}
      />

      {/* 12. How It Works */}
      <HowItWorks />

      {/* 13. Why Choose Velora Drive */}
      <WhyChooseUs />

      {/* 14. Booking Form */}
      <Booking />

      {/* 15. Location / Contact */}
      <Contact />

      {/* 16. Final CTA */}
      <CTASection />
    </>
  );
};
