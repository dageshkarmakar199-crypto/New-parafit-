export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice: number;
  category: 'All' | 'Signature Dishes' | 'High Protein' | 'North Indian' | 'Continental' | 'Salads & Snacks' | 'Diabetic Friendly' | 'Satvik Jain';
  dietType: 'Veg' | 'Non-Veg' | 'Egg';
  image: string;
  badge?: string;
  calories: number;
  protein: number; // in grams
  carbs: number; // in grams
  fat: number; // in grams
  rating: number;
  reviewCount: number;
  portion: string;
  ingredients: string[];
  dietaryFeatures: string[];
  spiceLevel: 'Mild' | 'Medium' | 'Homestyle' | 'Spicy';
  macroPercentages?: {
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  selectedSlot?: 'Lunch (12:00 - 1:30 PM)' | 'Dinner (7:15 - 9:00 PM)';
  notes?: string;
}

export interface SubscriptionConfig {
  frequency: '1 Week (6 Days)' | '4 Weeks (24 Days)' | '12 Weeks (Transformation)';
  mealSlot: 'Lunch Only' | 'Dinner Only' | 'Both Meals (Lunch + Dinner)';
  dietType: 'High Protein Fitness' | 'Weight Loss Calorie Deficit' | 'Homestyle Standard Veg' | 'Diabetic Low-GI Care' | 'Pure Satvik Jain';
  preference: 'Veg' | 'Non-Veg' | 'Eggitarian';
  daysPerWeek: number;
  basePricePerMeal: number;
  discountPercentage: number;
  rotiPreference: 'Multigrain Phulkas' | 'Bajra / Ragi Rotis' | 'Quinoa / Brown Rice';
}

export interface TransformationStory {
  id: string;
  name: string;
  age: number;
  locality: string;
  duration: string;
  goal: string;
  stats: {
    weightLost?: string;
    bodyFat?: string;
    energyBoost?: string;
    hba1cDrop?: string;
  };
  quote: string;
  planName: string;
  beforeStats: string;
  afterStats: string;
}

export interface Testimonial {
  id: string;
  name: string;
  area: string;
  profession: string;
  rating: number;
  quote: string;
  tag: string;
  avatarText: string;
  platform: 'Google' | 'Zomato';
}

export interface WeeklyDayPlan {
  day: string;
  lunch: {
    title: string;
    description: string;
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  dinner: {
    title: string;
    description: string;
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Calorie Counting & Macros' | 'Subscription & Delivery' | 'Kitchen & Hygiene';
}

export interface DeliveryZone {
  pincode: string;
  locality: string;
  eta: string;
  available: boolean;
  minOrder: number;
}
