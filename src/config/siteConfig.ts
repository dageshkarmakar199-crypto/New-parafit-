/**
 * Centralized Site Configuration for Parafit Delivers
 * CRITICAL RULE: siteConfig.phone is defined HERE ONCE and used everywhere across the application:
 * header, footer, contact modal, floating call button, WhatsApp link (wa.me), JSON-LD schema.
 */

export const siteConfig = {
  name: 'Parafit Delivers',
  brandName: 'Parafit Delivers',
  legalName: 'Parafit Delivers Food Services LLP',
  tagline: 'Healthy, Calorie-Counted Meal Delivery & Diet Plans',
  positioning: 'Ghar jaisa healthy khana, scientifically balanced.',
  
  // SINGLE AUTHORITATIVE PHONE NUMBER ACROSS ENTIRE APPLICATION
  // [VERIFY: Copy exactly from Google Maps listing for Shop No. 1, DDA Mini Market, Block E, East of Kailash]
  phone: '+91 95607 02568',
  phoneRaw: '919560702568',
  phoneTel: '+919560702568',

  email: 'info@parafit.in',
  instagramHandle: '@parafit.in',
  instagramUrl: 'https://instagram.com/parafit.in',
  websiteUrl: 'https://parafitdelivers.in',

  address: {
    shop: 'Shop No. 1, DDA Mini Market',
    block: 'Block E',
    locality: 'East of Kailash',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110065',
    full: 'Shop No. 1, DDA Mini Market, Block E, East of Kailash, New Delhi 110065',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Shop%20No.%201,%20DDA%20Mini%20Market,%20Block%20E,%20East%20of%20Kailash,%20New%20Delhi%20110065&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Shop+No.+1,+DDA+Mini+Market,+Block+E,+East+of+Kailash,+New+Delhi+110065'
  },

  // Operating Hours [VERIFY: approx. 9:15 AM - 11 PM daily]
  hours: {
    display: '9:15 AM – 11:00 PM Daily',
    opens: '09:15',
    closes: '23:00',
    lunchSlot: '12:00 PM – 1:30 PM',
    dinnerSlot: '7:15 PM – 9:00 PM'
  },

  // Social Proof [VERIFY: Ratings and counts]
  ratings: {
    zomatoScore: '4.2',
    zomatoVotes: '15,000+',
    zomatoLabel: 'Zomato (~4.2★ with 15K+ ratings [VERIFY])',
    googleScore: '4.8',
    googleVotes: '1,840+',
    googleLabel: 'Google (4.8★ with 1,840+ reviews [VERIFY])',
    fssaiLicense: '11521004000321' // [VERIFY: FSSAI registration]
  },

  // South Delhi Delivery Zones [VERIFY: Delivery radius]
  deliveryZones: [
    { pincode: '110065', locality: 'East of Kailash (Kitchen Hub), Sant Nagar, Garhi', eta: '20-30 min', minOrder: 149 },
    { pincode: '110048', locality: 'Greater Kailash 1 & 2, Alaknanda, Masjid Moth', eta: '25-35 min', minOrder: 149 },
    { pincode: '110024', locality: 'Lajpat Nagar 1-4, Defence Colony, Amar Colony', eta: '30-40 min', minOrder: 180 },
    { pincode: '110019', locality: 'Kailash Colony, Kalkaji, Nehru Place, CR Park', eta: '25-35 min', minOrder: 149 },
    { pincode: '110049', locality: 'South Extension 1 & 2, Andrews Ganj', eta: '35-45 min', minOrder: 220 },
    { pincode: '110014', locality: 'Jangpura, Bhogal, Nizamuddin West', eta: '35-45 min', minOrder: 250 },
    { pincode: '110017', locality: 'Malviya Nagar, Saket, Sheikh Sarai', eta: '40-50 min', minOrder: 300 }
  ],

  // Cuisines & Capabilities
  cuisines: [
    'Healthy Food',
    'North Indian',
    'Continental',
    'Salads & Bowls',
    'High Protein',
    'Low Carb / Keto',
    'Diabetic Friendly',
    'Pure Satvik Jain'
  ]
};

/**
 * Generates an authoritative WhatsApp URL with prefilled text
 */
export const getWhatsAppUrl = (messageText: string = 'Hi Parafit Delivers! I want to order healthy meals in South Delhi.') => {
  return `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(messageText)}`;
};

/**
 * Generates an authoritative tel: link
 */
export const getTelUrl = () => {
  return `tel:${siteConfig.phoneTel}`;
};
