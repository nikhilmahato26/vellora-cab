import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { vehicles } from '../data/vehicles';
import { formatCurrency, getVehicleWhatsAppUrl } from '../utils/whatsapp';
import { BUSINESS_INFO } from '../utils/contact';
import {
  Calendar,
  Clock,
  Car,
  User,
  Phone,
  Mail,
  MapPin,
  Users,
  FileText,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const bookingSchema = z.object({
  fullName: z.string().min(2, { message: 'Full Name must be at least 2 characters' }),
  phone: z
    .string()
    .min(10, { message: 'Please enter a valid 10-digit phone number' })
    .regex(/^[0-9+ -]{10,15}$/, { message: 'Enter a valid phone number' }),
  email: z.string().email({ message: 'Enter a valid email address' }).optional().or(z.literal('')),
  vehicleRequired: z.string().min(1, { message: 'Please select a vehicle' }),
  rentalDuration: z.enum(['12', '24']),
  pickupDate: z.string().min(1, { message: 'Pickup date is required' }),
  pickupTime: z.string().min(1, { message: 'Pickup time is required' }),
  returnDate: z.string().min(1, { message: 'Return date is required' }),
  returnTime: z.string().min(1, { message: 'Return time is required' }),
  pickupLocation: z.string().min(2, { message: 'Pickup location is required' }),
  passengers: z.string().default('1'),
  additionalRequirements: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedVehicleData, setSelectedVehicleData] = useState(() => vehicles[0]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      vehicleRequired: vehicles[0].name,
      rentalDuration: '12',
      pickupDate: new Date().toISOString().split('T')[0],
      pickupTime: '09:00',
      returnDate: new Date().toISOString().split('T')[0],
      returnTime: '21:00',
      pickupLocation: 'Near Radha Rani Tower, Beside Reliance Fresh, Nayapalli, Bhubaneswar',
      passengers: '2',
      additionalRequirements: '',
    },
  });

  const watchedVehicleName = watch('vehicleRequired');
  const watchedDuration = watch('rentalDuration');

  useEffect(() => {
    const found = vehicles.find((v) => v.name === watchedVehicleName);
    if (found) {
      setSelectedVehicleData(found);
    }
  }, [watchedVehicleName]);

  // Listen to custom selection event from other sections
  useEffect(() => {
    const handleCustomSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ vehicleName: string; duration?: 12 | 24 }>;
      if (customEvent.detail) {
        if (customEvent.detail.vehicleName) {
          setValue('vehicleRequired', customEvent.detail.vehicleName);
        }
        if (customEvent.detail.duration) {
          setValue('rentalDuration', String(customEvent.detail.duration) as '12' | '24');
        }
      }
    };
    window.addEventListener('velora:select-vehicle', handleCustomSelect);
    return () => window.removeEventListener('velora:select-vehicle', handleCustomSelect);
  }, [setValue]);

  const durationNum = watchedDuration === '24' ? 24 : 12;
  const currentPrice =
    durationNum === 12
      ? selectedVehicleData.price12Hours
      : selectedVehicleData.price24Hours;

  const onSubmit = (data: BookingFormValues) => {
    const finalWhatsAppUrl = getVehicleWhatsAppUrl(
      data.vehicleRequired,
      durationNum,
      currentPrice,
      {
        name: data.fullName,
        phone: data.phone,
        email: data.email || undefined,
        pickupDate: data.pickupDate,
        pickupTime: data.pickupTime,
        returnDate: data.returnDate,
        returnTime: data.returnTime,
        pickupLocation: data.pickupLocation,
        passengers: data.passengers,
        notes: data.additionalRequirements || undefined,
      }
    );

    setSubmitted(true);

    // Open WhatsApp with prefilled message
    window.open(finalWhatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card max-w-4xl mx-auto">
      {submitted && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
          <div className="text-sm">
            <span className="font-bold block">Enquiry Prepared!</span>
            WhatsApp has been opened with your rental details. If it did not open automatically, connect directly via phone at {BUSINESS_INFO.phonePrimary}.
          </div>
        </div>
      )}

      {/* Dynamic Summary Bar */}
      <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={selectedVehicleData.image}
            alt={selectedVehicleData.name}
            className="w-16 h-12 object-contain bg-white rounded-xl p-1 border border-slate-200"
          />
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 block">
              Selected Vehicle
            </span>
            <span className="text-lg font-black text-slate-900 font-display">
              {selectedVehicleData.name}
            </span>
            <span className="text-xs text-slate-500 block">
              Category: {selectedVehicleData.category}
            </span>
          </div>
        </div>

        <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 flex items-center justify-between sm:justify-end gap-4">
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              Rental Duration: {durationNum} Hours
            </span>
            <span className="text-xl font-black text-slate-900 font-display">
              {formatCurrency(currentPrice)}
            </span>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-cyan-50 text-cyan-700 text-xs font-bold border border-cyan-200">
            {durationNum}h Plan
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <User className="w-3.5 h-3.5 text-cyan-600" />
              Full Name *
            </label>
            <input
              type="text"
              {...register('fullName')}
              placeholder="e.g. Rahul Mishra"
              className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium text-slate-900 focus:outline-none transition-colors ${
                errors.fullName
                  ? 'border-red-400 bg-red-50/20'
                  : 'border-slate-200 focus:border-cyan-500 focus:bg-white'
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              Phone Number *
            </label>
            <input
              type="tel"
              {...register('phone')}
              placeholder="e.g. 7853852900"
              className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium text-slate-900 focus:outline-none transition-colors ${
                errors.phone
                  ? 'border-red-400 bg-red-50/20'
                  : 'border-slate-200 focus:border-cyan-500 focus:bg-white'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <Mail className="w-3.5 h-3.5 text-cyan-600" />
              Email Address (Optional)
            </label>
            <input
              type="email"
              {...register('email')}
              placeholder="e.g. rahul@example.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:bg-white rounded-xl text-sm font-medium text-slate-900 focus:outline-none transition-colors"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Vehicle Required */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <Car className="w-3.5 h-3.5 text-cyan-600" />
              Vehicle Required *
            </label>
            <select
              {...register('vehicleRequired')}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:bg-white rounded-xl text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer"
            >
              {vehicles.map((v) => (
                <option key={v.id} value={v.name}>
                  {v.name} ({v.category} — 12h: ₹{v.price12Hours} / 24h: ₹{v.price24Hours})
                </option>
              ))}
            </select>
          </div>

          {/* Rental Duration */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5 text-cyan-600" />
              Rental Duration *
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label
                className={`flex items-center justify-center p-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                  watchedDuration === '12'
                    ? 'border-cyan-500 bg-cyan-50/70 text-cyan-800'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <input
                  type="radio"
                  value="12"
                  {...register('rentalDuration')}
                  className="sr-only"
                />
                <span>12 Hours Plan</span>
              </label>

              <label
                className={`flex items-center justify-center p-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                  watchedDuration === '24'
                    ? 'border-cyan-500 bg-cyan-50/70 text-cyan-800'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <input
                  type="radio"
                  value="24"
                  {...register('rentalDuration')}
                  className="sr-only"
                />
                <span>24 Hours Plan</span>
              </label>
            </div>
          </div>

          {/* Passengers */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-cyan-600" />
              Number of Passengers
            </label>
            <select
              {...register('passengers')}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:bg-white rounded-xl text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer"
            >
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4 Passengers</option>
              <option value="5">5 Passengers</option>
              <option value="6+">6+ Passengers</option>
            </select>
          </div>

          {/* Pickup Date & Time */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="flex items-center gap-1 text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                <Calendar className="w-3 h-3 text-cyan-600" />
                Pickup Date *
              </label>
              <input
                type="date"
                {...register('pickupDate')}
                className="w-full px-3 py-3 bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:bg-white rounded-xl text-xs font-semibold text-slate-900 focus:outline-none cursor-pointer"
              />
            </div>
            <div>
              <label className="flex items-center gap-1 text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                <Clock className="w-3 h-3 text-cyan-600" />
                Pickup Time *
              </label>
              <input
                type="time"
                {...register('pickupTime')}
                className="w-full px-3 py-3 bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:bg-white rounded-xl text-xs font-semibold text-slate-900 focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Return Date & Time */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="flex items-center gap-1 text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                <Calendar className="w-3 h-3 text-cyan-600" />
                Return Date *
              </label>
              <input
                type="date"
                {...register('returnDate')}
                className="w-full px-3 py-3 bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:bg-white rounded-xl text-xs font-semibold text-slate-900 focus:outline-none cursor-pointer"
              />
            </div>
            <div>
              <label className="flex items-center gap-1 text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                <Clock className="w-3 h-3 text-cyan-600" />
                Return Time *
              </label>
              <input
                type="time"
                {...register('returnTime')}
                className="w-full px-3 py-3 bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:bg-white rounded-xl text-xs font-semibold text-slate-900 focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Pickup Location */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-600" />
              Pickup Location *
            </label>
            <input
              type="text"
              {...register('pickupLocation')}
              placeholder="e.g. Near Radha Rani Tower, Beside Reliance Fresh, Nayapalli, Bhubaneswar"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:bg-white rounded-xl text-sm font-medium text-slate-900 focus:outline-none transition-colors"
            />
            {errors.pickupLocation && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.pickupLocation.message}
              </p>
            )}
          </div>

          {/* Additional Requirements */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5 text-cyan-600" />
              Additional Requirements (Optional)
            </label>
            <textarea
              rows={3}
              {...register('additionalRequirements')}
              placeholder="Any specific instructions, destination route, or notes..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:bg-white rounded-xl text-sm font-medium text-slate-900 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white font-extrabold text-sm sm:text-base tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-slate-900/10 group"
          >
            <Send className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            <span>SEND BOOKING ENQUIRY</span>
          </button>
        </div>

        <p className="text-xs text-slate-500 text-center">
          Submitting opens a pre-composed enquiry on WhatsApp. You can also contact us directly at{' '}
          <a href={BUSINESS_INFO.phonePrimaryTel} className="font-bold text-cyan-600 hover:underline">
            {BUSINESS_INFO.phonePrimary}
          </a>
          .
        </p>
      </form>
    </div>
  );
};
