import { BUSINESS_INFO } from './contact';

export interface BookingDetails {
  vehicleName: string;
  duration: 12 | 24;
  price: number;
  name?: string;
  phone?: string;
  email?: string;
  pickupDate?: string;
  pickupTime?: string;
  returnDate?: string;
  returnTime?: string;
  pickupLocation?: string;
  passengers?: number | string;
  notes?: string;
}

export function formatCurrency(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN');
}

export function getGeneralWhatsAppUrl(): string {
  const message = `Hello Velora Drive, I would like to enquire about your self-drive car rental services. Please share the availability and booking details.`;
  return `https://wa.me/91${BUSINESS_INFO.phonePrimary}?text=${encodeURIComponent(message)}`;
}

export function getVehicleWhatsAppUrl(vehicleName: string, duration: 12 | 24, price: number, details?: Partial<BookingDetails>): string {
  const lines: string[] = [
    `Hello Velora Drive,`,
    ``,
    `I am interested in booking:`,
    ``,
    `Vehicle: ${vehicleName}`,
    `Duration: ${duration} Hours`,
    `Rental Price: ${formatCurrency(price)}`
  ];

  if (details?.name) lines.push(`Name: ${details.name}`);
  if (details?.phone) lines.push(`Phone: ${details.phone}`);
  if (details?.pickupDate) lines.push(`Pickup Date: ${details.pickupDate}`);
  if (details?.pickupTime) lines.push(`Pickup Time: ${details.pickupTime}`);
  if (details?.returnDate) lines.push(`Return Date: ${details.returnDate}`);
  if (details?.returnTime) lines.push(`Return Time: ${details.returnTime}`);
  if (details?.pickupLocation) lines.push(`Pickup Location: ${details.pickupLocation}`);
  if (details?.passengers) lines.push(`Passengers: ${details.passengers}`);
  if (details?.notes) lines.push(`Notes: ${details.notes}`);

  lines.push(``);
  lines.push(`Please share availability and booking details.`);

  const message = lines.join('\n');
  return `https://wa.me/91${BUSINESS_INFO.phonePrimary}?text=${encodeURIComponent(message)}`;
}
