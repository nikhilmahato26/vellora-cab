export interface Vehicle {
  id: string;
  name: string;
  category: "SUV" | "Hatchback";
  price12Hours: number;
  price24Hours: number;
  image: string;
  description: string;
  featured?: boolean;
}

export const vehicles: Vehicle[] = [
  {
    id: "scorpio-classic-s11",
    name: "Scorpio Classic S11",
    category: "SUV",
    price12Hours: 2799,
    price24Hours: 3699,
    image: "/images/Scorpio s11🫶🏻🥹.jpeg",
    description: "Classic muscular SUV built for commanding road presence and comfortable self-drive journeys across Bhubaneswar and beyond."
  },
  {
    id: "fronx",
    name: "Fronx",
    category: "Hatchback",
    price12Hours: 1199,
    price24Hours: 1699,
    image: "/images/FRONX🤍.jpeg",
    description: "Modern aerodynamic compact crossover offering effortless city driving, high fuel efficiency, and smart styling."
  },
  {
    id: "swift",
    name: "Swift",
    category: "Hatchback",
    price12Hours: 1199,
    price24Hours: 1699,
    image: "/images/_Elegance in Motion_ The Spirit of Maruti Suzuki_.jpeg",
    description: "Dynamic and responsive compact hatchback ideal for swift city navigation, easy parking, and budget-friendly self-drives."
  },
  {
    id: "thar",
    name: "Thar",
    category: "SUV",
    price12Hours: 2699,
    price24Hours: 3499,
    image: "/images/4a0586fb-c7e0-432c-aaef-3139b6f9020d.jpeg",
    description: "Iconic authentic 4x4 off-roader designed for adventure enthusiasts who demand bold styling and raw power."
  },
  {
    id: "fortuner",
    name: "Fortuner",
    category: "SUV",
    price12Hours: 4499,
    price24Hours: 5999,
    image: "/images/306eb310-da58-4f59-b42e-eb902b308634.jpeg",
    description: "The pinnacle of luxury SUV power, legendary reliability, and spacious comfort for executive and family road trips.",
    featured: true
  },
  {
    id: "baleno-automatic",
    name: "Baleno (Automatic)",
    category: "Hatchback",
    price12Hours: 1199,
    price24Hours: 1699,
    image: "/images/Yeni Suzuki Baleno Geldi_ Level 2 ADAS ve Yeni Motorla Baştan Aşağı Yenilendi.jpeg",
    description: "Effortless automatic transmission hatchback tailored for stress-free urban driving, smooth gear shifts, and relaxed travel."
  },
  {
    id: "baleno-manual",
    name: "Baleno (Manual)",
    category: "Hatchback",
    price12Hours: 1199,
    price24Hours: 1699,
    image: "/images/В нашей стране начались продажи компактных хэтчбеков Suzuki Baleno.jpeg",
    description: "Premium manual 5-speed hatchback offering superior driver control, excellent fuel economy, and smooth city commuting."
  },
  {
    id: "scorpio-n",
    name: "Scorpio N",
    category: "SUV",
    price12Hours: 2999,
    price24Hours: 3999,
    image: "/images/b0eb9ed6-672c-4293-a11d-a1bf7bdbd6a2.jpeg",
    description: "Big Daddy of SUVs featuring refined high-end engineering, elevated stance, and superior highway stability.",
    featured: true
  },
  {
    id: "thar-roxx",
    name: "Thar Roxx",
    category: "SUV",
    price12Hours: 3799,
    price24Hours: 4999,
    image: "/images/dd54c858-a3b7-4d34-8e81-21f1f4398b70.jpeg",
    description: "The new 5-door lifestyle SUV combining ultimate off-road heritage with premium 5-passenger comfort and presence.",
    featured: true
  }
];

export const TOTAL_VEHICLE_OPTIONS = vehicles.length;
