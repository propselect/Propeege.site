import { Service, Staff } from './types';

export const SERVICES: Service[] = [
  // Hair Services
  {
    id: 'hair-wash',
    name: 'Hair Washing & Conditioning',
    category: 'Hair',
    description: 'Deep clean, nourish & shine for all hair types.',
    duration: '30 mins',
    priceRange: '₦2,500 – ₦4,500',
    price: 3500,
    benefit: 'Revitalizes scalp and leaves hair silky smooth.'
  },
  {
    id: 'braiding',
    name: 'Braiding & Plaiting',
    category: 'Hair',
    description: 'All styles: cornrows, twists, Ghana weaving, knotless braids.',
    duration: '1hr – 3hrs',
    priceRange: '₦4,000 – ₦14,000',
    price: 9000,
    benefit: 'Stylish, protective, and long-lasting.'
  },
  {
    id: 'weave-on',
    name: 'Weave-on & Installations',
    category: 'Hair',
    description: 'Quality fitting & styling with professional finish.',
    duration: '1hr – 1.5hrs',
    priceRange: '₦6,000 – ₦18,000',
    price: 12000,
    benefit: 'Flawless look with maximum comfort.'
  },
  {
    id: 'hair-treatment',
    name: 'Hair Relaxing & Treatment',
    category: 'Hair',
    description: 'Strengthen, repair, and soften damaged hair.',
    duration: '45 mins',
    priceRange: '₦3,500 – ₦7,000',
    price: 5250,
    benefit: 'Restores health and manageability.'
  },
  // Skincare & Facials
  {
    id: 'basic-facial',
    name: 'Basic Cleanse & Glow Facial',
    category: 'Skincare',
    description: 'Deep clean, moisturize, and brighten your complexion.',
    duration: '40 mins',
    priceRange: '₦5,000',
    price: 5000,
    benefit: 'Instant radiance and hydration.'
  },
  {
    id: 'anti-aging-facial',
    name: 'Brightening / Anti-Aging Facial',
    category: 'Skincare',
    description: 'Even skin tone and reduce fine lines with premium products.',
    duration: '60 mins',
    priceRange: '₦9,000 – ₦14,000',
    price: 11500,
    benefit: 'Youthful and revitalized skin.'
  },
  {
    id: 'acne-treatment',
    name: 'Acne & Spot Treatment',
    category: 'Skincare',
    description: 'Targeted care for problem skin to clear and soothe.',
    duration: '50 mins',
    priceRange: '₦7,000',
    price: 7000,
    benefit: 'Clearer, healthier-looking skin.'
  },
  {
    id: 'body-scrub',
    name: 'Body Scrub & Polishing',
    category: 'Skincare',
    description: 'Exfoliate and polish for smooth, soft, glowing skin.',
    duration: '45 mins',
    priceRange: '₦6,500',
    price: 6500,
    benefit: 'Removes dead skin and improves texture.'
  },
  // Nails
  {
    id: 'basic-nail',
    name: 'Regular Manicure / Pedicure',
    category: 'Nails',
    description: 'Essential care for clean and tidy nails.',
    duration: '30 / 40 mins',
    priceRange: '₦2,500 – ₦5,000',
    price: 3750,
    benefit: 'Neat and professional appearance.'
  },
  {
    id: 'spa-nail',
    name: 'Spa Manicure / Pedicure',
    category: 'Nails',
    description: 'Exfoliation and massage for the ultimate hand/foot care.',
    duration: '45 / 60 mins',
    priceRange: '₦4,000 – ₦7,500',
    price: 5750,
    benefit: 'Deep relaxation and soft skin.'
  },
  {
    id: 'gel-polish',
    name: 'Gel Polish & Overlays',
    category: 'Nails',
    description: 'Durable and shiny gel application.',
    duration: '45 mins',
    priceRange: '₦4,000 – ₦6,000',
    price: 5000,
    benefit: 'Long-lasting color and strength.'
  },
  // Spa
  {
    id: 'body-massage',
    name: 'Full Body Massage',
    category: 'Spa',
    description: 'Total relaxation and muscle pain relief.',
    duration: '60 / 90 mins',
    priceRange: '₦11,000 – ₦17,000',
    price: 14000,
    benefit: 'Reduces stress and physical tension.'
  },
  {
    id: 'hot-stone',
    name: 'Hot Stone Massage',
    category: 'Spa',
    description: 'Deep muscle relaxation using heated stones.',
    duration: '75 mins',
    priceRange: '₦16,000',
    price: 16000,
    benefit: 'Penetrating heat for ultimate relief.'
  },
  // Special
  {
    id: 'bridal-package',
    name: 'Bridal Beauty Package',
    category: 'Special',
    description: 'Complete hair, makeup, skin, and nail styling for your big day.',
    duration: 'Full Day',
    priceRange: '₦30,000+',
    price: 30000,
    benefit: 'Look stunning and feel confident.'
  }
];

export const STAFF: Staff[] = [
  {
    id: 'staff-1',
    name: 'Halima',
    specialty: 'Master Stylist & Founder',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400',
    experience: '10+ Years',
    bio: 'Lead stylist with a passion for creative braiding and hair health.'
  },
  {
    id: 'staff-2',
    name: 'Zainab',
    specialty: 'Skincare Specialist',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    experience: '6 Years',
    bio: 'Expert in facials and body treatments for all skin types.'
  }
];

export const OPENING_HOURS = {
  weekdays: 'Monday – Saturday: 8:00 AM – 7:00 PM',
  sunday: 'Sunday: 10:00 AM – 4:00 PM'
};

export const CONTACT_INFO = {
  address: 'No 15 Gonan Ganye, Zaria, Kaduna State, Nigeria',
  phone: '+234 9027070751',
  whatsapp: '+234 9027070751',
  email: 'info@halimabeautysalon.ng',
};
