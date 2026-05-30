export interface Service {
  id: string;
  name: string;
  category: 'Hair' | 'Skincare' | 'Nails' | 'Spa' | 'Special';
  description: string;
  duration: string;
  priceRange: string;
  price: number;
  benefit: string;
  image?: string;
}

export interface Booking {
  id: string;
  clientName: string;
  clientPhone: string;
  serviceIds: string[];
  date: string;
  time: string;
  staffId?: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'unpaid' | 'paid';
  createdAt: string;
}

export interface Staff {
  id: string;
  name: string;
  specialty: string;
  image: string;
  experience: string;
  bio: string;
}

export interface Review {
  id: string;
  clientName: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  isVisible: boolean;
}
