import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Contact } from '../sections/Contact';
import { Booking } from '../sections/Booking';
import { CTASection } from '../components/CTASection';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Contact Velora Drive | Nayapalli, Bhubaneswar</title>
        <meta
          name="description"
          content="Contact Velora Drive in Nayapalli, Bhubaneswar for self drive car bookings, vehicle enquiries, and rental details. Call 7853852900 or 7853842900."
        />
      </Helmet>

      {/* Header */}
      <div className="bg-slate-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-black tracking-widest text-cyan-400 uppercase block mb-2">
            CONNECT WITH US
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white">
            CONTACT <span className="text-cyan-400">VELORA DRIVE</span>
          </h1>
          <p className="text-slate-400 mt-3 text-base max-w-xl mx-auto">
            Located near Radha Rani Tower, Beside Reliance Fresh, Nayapalli, Bhubaneswar.
          </p>
        </div>
      </div>

      <Contact />
      <Booking />
      <CTASection />
    </div>
  );
};
