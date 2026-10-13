import { MenuItem, Testimonial, WeeklyDayPlan, FAQItem, TransformationStory } from '../types';
import { siteConfig } from '../config/siteConfig';

// Import all food images
import heroThaliImg from '../assets/images/hero_thali_bowl_1791632471777.jpg';
import paneerBowlImg from '../assets/images/meal_paneer_bowl_1791632483300.jpg';
import southIndianImg from '../assets/images/meal_south_indian_1791632495347.jpg';
import diabeticThaliImg from '../assets/images/meal_diabetic_thali_1791632506314.jpg';
import kitchenPrepImg from '../assets/images/kitchen_prep_fresh_1791632518145.jpg';

// New high-fidelity signature dishes images
import chickenStroganoffImg from '../assets/images/chicken_stroganoff_1791828408730.jpg';
import blueberryYogurtImg from '../assets/images/blueberry_yogurt_bowl_1791828425242.jpg';
import butterGarlicFishImg from '../assets/images/butter_garlic_fish_1791828440119.jpg';
import sweetPotatoCottageImg from '../assets/images/sweet_potato_cottage_cheese_1791828454769.jpg';

export {
  heroThaliImg,
  paneerBowlImg,
  southIndianImg,
  diabeticThaliImg,
  kitchenPrepImg,
  chickenStroganoffImg,
  blueberryYogurtImg,
  butterGarlicFishImg,
  sweetPotatoCottageImg
};

export const MENU_ITEMS: MenuItem[] = [
  // 1. Chicken Stroganoff & Rice (Continental / High Protein)
  {
    id: 'chicken-stroganoff-rice',
    name: 'Chicken Stroganoff & Wild Rice',
    tagline: 'Tender chicken breast in savory mushroom velouté',
    description: 'Slow-poached lean chicken breast shreds folded with button mushrooms, garlic, and fresh flat-leaf parsley in a light Greek yogurt broth. Served over fiber-rich brown and wild rice pilaf.',
    price: 349,
    originalPrice: 399,
    category: 'Signature Dishes',
    dietType: 'Non-Veg',
    image: chickenStroganoffImg,
    badge: 'Signature Hit',
    calories: 460,
    protein: 38,
    carbs: 45,
    fat: 12,
    rating: 4.95,
    reviewCount: 680,
    portion: 'Serves 1 hearty portion (480g)',
    ingredients: ['Free-Range Chicken Breast', 'Wild & Brown Rice', 'Button Mushrooms', 'Cold-Pressed Olive Oil', 'Greek Yogurt', 'Fresh Parsley'],
    dietaryFeatures: ['Zero Cream', 'High Leucine', 'Low Sodium', 'High Satiety'],
    spiceLevel: 'Mild',
  },

  // 2. Blueberry & Pecan Yogurt Bowl (Dessert / Breakfast / Salad)
  {
    id: 'blueberry-pecan-yogurt-bowl',
    name: 'Blueberry & Pecan Greek Yogurt Bowl',
    tagline: 'Antioxidant burst · 24g slow-release casein protein',
    description: 'Thick strained artisanal Greek yogurt crowned with plump fresh blueberries, toasted buttery pecans, roasted pumpkin seeds, and a delicate touch of raw organic mountain honey.',
    price: 249,
    originalPrice: 289,
    category: 'Signature Dishes',
    dietType: 'Veg',
    image: blueberryYogurtImg,
    badge: 'Guilt-Free Sweet',
    calories: 340,
    protein: 24,
    carbs: 28,
    fat: 14,
    rating: 4.92,
    reviewCount: 410,
    portion: 'Single Mason Bowl (350g)',
    ingredients: ['Strained Greek Curd', 'Fresh Blueberries', 'Toasted American Pecans', 'Pumpkin Seeds', 'Raw Forest Honey'],
    dietaryFeatures: ['Zero Refined Sugar', 'Gut Microbiome Friendly', 'Rich in Polyphenols'],
    spiceLevel: 'Mild',
  },

  // 3. Butter Garlic Fish with Grilled Vegetables (Continental / High Protein)
  {
    id: 'butter-garlic-fish-veggies',
    name: 'Butter Garlic Fish with Grilled Veggies',
    tagline: 'Clean lean omega-3s with charred greens',
    description: 'Pan-seared river sole fillet delicately basted in cold-pressed garlic oil and a trace of A2 cow butter. Accompanied by charred green asparagus, roasted cherry tomatoes, and grilled zucchini.',
    price: 389,
    originalPrice: 449,
    category: 'Signature Dishes',
    dietType: 'Non-Veg',
    image: butterGarlicFishImg,
    badge: 'Chef Special',
    calories: 390,
    protein: 36,
    carbs: 14,
    fat: 18,
    rating: 4.98,
    reviewCount: 320,
    portion: 'Single Filet Box (420g)',
    ingredients: ['Fresh River Sole Fish', 'Cold-Pressed Garlic Oil', 'A2 Desi Cow Butter (5g)', 'Baby Asparagus', 'Zucchini'],
    dietaryFeatures: ['Keto / Low-Carb', 'Zero Heavy Sauces', 'Heart-Healthy Omega-3'],
    spiceLevel: 'Mild',
  },

  // 4. Grilled Cottage Cheese & Sweet Potato Fries (Appetizer / Snack)
  {
    id: 'grilled-cottage-cheese-sweet-potato',
    name: 'Grilled Cottage Cheese & Sweet Potato Fries',
    tagline: 'Slow-baked root fries with tandoori paneer',
    description: 'Air-crisped cinnamon sweet potato fries paired with tender tandoori grilled cottage cheese cubes, sweet corn salad, and chilled mint-coriander Greek yogurt dip.',
    price: 279,
    originalPrice: 320,
    category: 'Signature Dishes',
    dietType: 'Veg',
    image: sweetPotatoCottageImg,
    badge: 'Bestseller Snack',
    calories: 420,
    protein: 26,
    carbs: 46,
    fat: 14,
    rating: 4.9,
    reviewCount: 540,
    portion: 'Platter for 1 (450g)',
    ingredients: ['Fresh Low-Fat Paneer', 'Air-Baked Sweet Potatoes', 'Sweet Corn Kernels', 'Cold-Pressed Mustard Oil', 'Mint Curd'],
    dietaryFeatures: ['Air-Baked (Zero Deep Fry)', 'High Potassium', 'Clean Pre-Workout'],
    spiceLevel: 'Medium',
  },

  // 5. Chicken Handi (Healthy North Indian)
  {
    id: 'chicken-handi-healthy',
    name: 'Slow-Claypot Healthy Chicken Handi',
    tagline: 'Claypot dum cooked · Zero cashew paste or heavy cream',
    description: 'Tender chicken drumsticks and cubes slow-simmered in an earthen handi with roasted whole spices, vine-ripened tomatoes, and ginger. Served with 3 whole wheat multigrain phulkas.',
    price: 329,
    originalPrice: 379,
    category: 'North Indian',
    dietType: 'Non-Veg',
    image: heroThaliImg,
    badge: 'Comfort Curry',
    calories: 480,
    protein: 42,
    carbs: 42,
    fat: 15,
    rating: 4.88,
    reviewCount: 490,
    portion: 'Claypot Curry + 3 Phulkas (550g)',
    ingredients: ['Chicken Thigh & Breast', 'Cold-Pressed Kachi Ghani Oil', 'Stoneground Multigrain Atta', 'Claypot Spices'],
    dietaryFeatures: ['Zero Cream', 'Zero Food Color', 'Digestive Cumin & Ginger'],
    spiceLevel: 'Homestyle',
  },

  // 6. Chicken Seekh Kebab Box (High Protein / Continental / Snacks)
  {
    id: 'chicken-seekh-kebab-box',
    name: 'Herb Grilled Chicken Seekh Platter',
    tagline: 'Minced chicken breast · 34g protein · Mint kachumber',
    description: 'Char-grilled succulent chicken breast seekh skewers tempered with roasted crushed cumin and green chilis. Served with fresh cucumber-onion salad and digestive green chutney.',
    price: 299,
    originalPrice: 349,
    category: 'High Protein',
    dietType: 'Non-Veg',
    image: chickenStroganoffImg,
    badge: '34g Protein',
    calories: 360,
    protein: 34,
    carbs: 12,
    fat: 11,
    rating: 4.86,
    reviewCount: 380,
    portion: '4 Large Skewers + Salad (380g)',
    ingredients: ['Lean Minced Chicken', 'Fresh Mint & Coriander', 'Cold-Pressed Mustard Oil', 'Sendha Namak'],
    dietaryFeatures: ['Keto Friendly', 'Zero Refined Starch Binding', 'High Bioavailable Protein'],
    spiceLevel: 'Medium',
  },

  // 7. Eggs Shakshuka with Multigrain Toast (Breakfast / Continental)
  {
    id: 'eggs-shakshuka-toast',
    name: 'Mediterranean Eggs Shakshuka',
    tagline: 'Poached farm eggs in smoky bell pepper coulis',
    description: 'Two pasture-raised organic eggs gently poached in a rich spiced tomato, roasted red pepper, and cumin sauce. Accompanied by two slices of 100% whole wheat sourdough toast.',
    price: 249,
    originalPrice: 289,
    category: 'Continental',
    dietType: 'Egg',
    image: sweetPotatoCottageImg,
    badge: 'All-Day Power',
    calories: 380,
    protein: 22,
    carbs: 34,
    fat: 16,
    rating: 4.89,
    reviewCount: 295,
    portion: 'Skillet Dish + 2 Toasts (400g)',
    ingredients: ['Pasture Eggs', 'San Marzano Tomatoes', 'Roasted Bell Peppers', 'Cold-Pressed Olive Oil', 'Multigrain Bread'],
    dietaryFeatures: ['High Choline', 'Rich in Lycopene', 'No Hydrogenated Oils'],
    spiceLevel: 'Medium',
  },

  // 8. Dal Palak & Bajra Roti Meal (North Indian / Diabetic Friendly)
  {
    id: 'dal-palak-bajra-roti',
    name: 'Spinach & Moong Dal Palak with Bajra Roti',
    tagline: 'Iron-rich greens · Slow digested pearl millet',
    description: 'Yellow moong dal tempered with mountain spinach leaves, garlic pods, and cumin in cold-pressed mustard oil. Served with two warm gluten-free Bajra (pearl millet) rotis and cucumber raita.',
    price: 199,
    originalPrice: 239,
    category: 'Diabetic Friendly',
    dietType: 'Veg',
    image: diabeticThaliImg,
    badge: 'Doctor Pick',
    calories: 410,
    protein: 19,
    carbs: 52,
    fat: 11,
    rating: 4.93,
    reviewCount: 460,
    portion: 'Full Thali Box (550g)',
    ingredients: ['Split Yellow Moong', 'Tender Spinach', 'Pearl Millet (Bajra)', 'Cold-Pressed Mustard Oil', 'Garlic Pods'],
    dietaryFeatures: ['Low Glycemic Load', 'High Inulin Fiber', 'Iron & Folate Rich'],
    spiceLevel: 'Homestyle',
  },

  // 9. Spicy Andhra Chicken Curry with Brown Rice (Regional Indian / High Protein)
  {
    id: 'spicy-andhra-chicken-curry',
    name: 'Fiery Andhra Chicken Curry & Brown Rice',
    tagline: 'Guntur chili kick with cooling cucumber pachadi',
    description: 'Coastal Andhra spiced chicken curry prepared with freshly roasted coriander, black pepper, and curry leaves. Served over steamed brown basmati rice and cooling cucumber pachadi.',
    price: 339,
    originalPrice: 389,
    category: 'High Protein',
    dietType: 'Non-Veg',
    image: heroThaliImg,
    badge: 'Bold Flavor',
    calories: 510,
    protein: 40,
    carbs: 48,
    fat: 14,
    rating: 4.91,
    reviewCount: 390,
    portion: 'Single Meal Platter (520g)',
    ingredients: ['Chicken Breast Cubes', 'Curry Leaves', 'Cold-Pressed Sesame & Mustard Oil', 'Brown Rice', 'Black Pepper'],
    dietaryFeatures: ['Thermogenic Spices', 'Zero Sugar', 'Lean Protein Source'],
    spiceLevel: 'Spicy',
  },

  // 10. Grilled Cottage Cheese Quinoa Bowl (Healthy Bowls / High Protein)
  {
    id: 'paneer-quinoa-power-bowl',
    name: 'Grilled Cottage Cheese Quinoa Power Bowl',
    tagline: '28g Clean Vegetarian Protein · Nutrient dense',
    description: 'Charred cumin-marinated cottage cheese skewers resting on organic tricolor quinoa, roasted broccoli, bell peppers, cherry tomatoes, with cold-pressed olive-mint dressing.',
    price: 259,
    originalPrice: 299,
    category: 'Continental',
    dietType: 'Veg',
    image: paneerBowlImg,
    badge: '28g Protein',
    calories: 490,
    protein: 28,
    carbs: 46,
    fat: 17,
    rating: 4.94,
    reviewCount: 520,
    portion: 'Single Meal Box (500g)',
    ingredients: ['Fresh Cottage Cheese (Paneer)', 'Organic Quinoa', 'Steamed Broccoli', 'Cold-Pressed Olive Oil', 'Bell Peppers'],
    dietaryFeatures: ['Complete Amino Acid Profile', 'Gluten-Free Grain', 'Post-Workout Fuel'],
    spiceLevel: 'Medium',
  },

  // 11. Corn Salad & Beetroot Sandwich (Salads & Snacks)
  {
    id: 'corn-salad-beetroot-sandwich',
    name: 'Sweet Corn Salad & Beetroot Hummus Sandwich',
    tagline: 'Crunchy rainbow bowl with multigrain sourdough',
    description: 'Crisp sweet corn, bell pepper, and pomegranate salad with lemon-cumin drizzle, served alongside a toasted multigrain sandwich layered with spiced roasted beetroot puree, feta, and lettuce.',
    price: 229,
    originalPrice: 269,
    category: 'Salads & Snacks',
    dietType: 'Veg',
    image: sweetPotatoCottageImg,
    badge: 'Light Lunch',
    calories: 360,
    protein: 15,
    carbs: 52,
    fat: 10,
    rating: 4.82,
    reviewCount: 280,
    portion: 'Salad Bowl + 2 Sandwich Halves (420g)',
    ingredients: ['Sweet Corn', 'Roast Beetroot', 'Multigrain Bread', 'Pomegranate Arils', 'Cold-Pressed Olive Oil'],
    dietaryFeatures: ['Nitrate Rich for Blood Flow', 'High Fiber', 'Zero Mayo'],
    spiceLevel: 'Mild',
  },

  // 12. Satvik Jain Lauki Chana Dal & Phulka Box (Satvik Jain / Indian)
  {
    id: 'satvik-jain-thali',
    name: 'Pure Satvik Jain Chana Dal & Lauki Box',
    tagline: 'Segregated Jain section · Zero onion, garlic or root veg',
    description: 'Simmered Bengal gram with fresh bottle gourd (lauki), raw banana dry roast, 3 soft whole wheat phulkas, digestive jeera rice, and fresh mint chaas.',
    price: 199,
    originalPrice: 239,
    category: 'Satvik Jain',
    dietType: 'Veg',
    image: heroThaliImg,
    badge: 'Pure Satvik',
    calories: 430,
    protein: 18,
    carbs: 62,
    fat: 11,
    rating: 4.91,
    reviewCount: 310,
    portion: 'Serves 1 (600g)',
    ingredients: ['Chana Dal', 'Bottle Gourd (Lauki)', 'Raw Banana', 'A2 Cow Ghee (trace)', 'Sendha Namak'],
    dietaryFeatures: ['No Onion & Garlic', 'No Root Vegetables', 'Fresh Ground Spices'],
    spiceLevel: 'Homestyle',
  }
];

export const CATEGORIES = [
  'All',
  'Signature Dishes',
  'High Protein',
  'North Indian',
  'Continental',
  'Salads & Snacks',
  'Diabetic Friendly',
  'Satvik Jain'
] as const;

export const TRANSFORMATION_STORIES: TransformationStory[] = [
  {
    id: 'trans-1',
    name: 'Aditya Mathur',
    age: 33,
    locality: 'Greater Kailash 1, New Delhi',
    duration: '12 Weeks',
    goal: 'Fat Loss & Corporate Energy',
    stats: {
      weightLost: '-11.4 kg',
      bodyFat: '-7.2%',
      energyBoost: '+140% Daily Productivity'
    },
    quote: 'As an investment banker working in GK-1, ordering oily restaurant lunches wrecked my energy. Parafit gave me exact 450-kcal lunches cooked in cold-pressed oil with 35g protein. The weight dropped effortlessly without feeling starved.',
    planName: '12-Week High Protein Calorie Deficit',
    beforeStats: '89.2 kg · Sluggish after meals',
    afterStats: '77.8 kg · Sharp all afternoon'
  },
  {
    id: 'trans-2',
    name: 'Sunita Aggarwal',
    age: 56,
    locality: 'East of Kailash, Block E',
    duration: '8 Weeks',
    goal: 'Diabetic Blood Sugar Control',
    stats: {
      hba1cDrop: '8.4 → 6.7 HbA1c',
      weightLost: '-5.8 kg',
      energyBoost: 'Zero sugar spikes'
    },
    quote: 'Living right in East of Kailash, having hot, low-GI meals with bajra rotis and zero refined sugar delivered by 12:30 PM changed my life. My diabetologist at Max was genuinely amazed at my 3-month blood report.',
    planName: 'Diabetic Low-GI Clinical Subscription',
    beforeStats: 'HbA1c 8.4 · Daily fluctuations',
    afterStats: 'HbA1c 6.7 · Steady, stable numbers'
  },
  {
    id: 'trans-3',
    name: 'Kabir & Divya Sethi',
    age: 29,
    locality: 'Lajpat Nagar 3',
    duration: '16 Weeks',
    goal: 'Clean Muscle Gain & Lifestyle Reset',
    stats: {
      weightLost: '+4.5 kg Lean Muscle',
      bodyFat: '-5.0%',
      energyBoost: 'Consistent gym PRs'
    },
    quote: 'Cooking high protein every evening after working in Nehru Place was exhausting. Parafit’s Chicken Stroganoff and Fish with Veggies gave us chef-grade taste with clinical macro precision. Best money we spend every month.',
    planName: 'Muscle Fuel Dual-Meal Plan',
    beforeStats: 'Inconsistent meal prep',
    afterStats: 'Daily 120g target met effortlessly'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Alok Verma',
    area: 'Greater Kailash 1, Delhi',
    profession: 'Cardiologist & Max Healthcare Consultant',
    rating: 5,
    quote: 'Finding genuinely zero-maida, cold-pressed oil meals with precise calorie counting for my patients was impossible until Parafit. Their Dal Palak and Low-GI bowls keep glucose stable. Exceptional culinary ethics.',
    tag: 'Diabetic Care · 6 Months',
    avatarText: 'AV',
    platform: 'Google'
  },
  {
    id: 'test-2',
    name: 'Sneha Chawla',
    area: 'East of Kailash, Block C',
    profession: 'Product Lead @ Tech Startup',
    rating: 5,
    quote: 'The Chicken Stroganoff and Blueberry Pecan yogurt bowl taste better than expensive cafés in Khan Market, but with full macro transparency. Delivered at 12:45 PM sharp in hot eco-packaging every single day.',
    tag: 'Monthly Lunch Sub · 9 Months',
    avatarText: 'SC',
    platform: 'Zomato'
  },
  {
    id: 'test-3',
    name: 'Priyanshu Mehta',
    area: 'Lajpat Nagar 4',
    profession: 'Civil Services Aspirant',
    rating: 5,
    quote: 'The ₹149 student box with Rajma and multigrain phulkas saved my preparation year. Zero oily lethargy, hot delivery, and consistent clean nutrition.',
    tag: 'Student Saver · 4 Months',
    avatarText: 'PM',
    platform: 'Zomato'
  },
  {
    id: 'test-4',
    name: 'Mrs. Taruna Jain',
    area: 'Kailash Colony',
    profession: 'Homemaker & Yoga Practitioner',
    rating: 5,
    quote: 'We follow strict Jain diet rules (no root vegetables, segregated vessels). Parafit takes religious dietary hygiene seriously. Their raw banana sabzi and lauki dal are unmatched in South Delhi.',
    tag: 'Jain Meal Sub · 1 Year',
    avatarText: 'TJ',
    platform: 'Google'
  }
];

export const WEEKLY_MENU: WeeklyDayPlan[] = [
  {
    day: 'Monday',
    lunch: {
      title: 'Chicken Stroganoff with Wild Brown Rice & Steamed Greens',
      description: 'Lean chicken breast in savory light mushroom velouté with steamed broccoli.',
      calories: 460,
      protein: '38g',
      carbs: '45g',
      fat: '12g'
    },
    dinner: {
      title: 'Tandoori Grilled Cottage Cheese + Sweet Corn Salad + Mint Dip',
      description: 'High-protein paneer cubes seasoned with crushed cumin and fresh lemon dressing.',
      calories: 390,
      protein: '26g',
      carbs: '28g',
      fat: '14g'
    }
  },
  {
    day: 'Tuesday',
    lunch: {
      title: 'Healthy Chicken Handi (Claypot Dum) + 3 Multigrain Phulkas',
      description: 'Zero heavy cream or cashew paste, slow-simmered in roasted tomato gravy.',
      calories: 480,
      protein: '42g',
      carbs: '42g',
      fat: '15g'
    },
    dinner: {
      title: 'Butter Garlic River Sole Fish with Asparagus & Grilled Zucchini',
      description: 'Omega-3 rich white fish filet pan-seared with cold-pressed olive garlic oil.',
      calories: 380,
      protein: '36g',
      carbs: '14g',
      fat: '16g'
    }
  },
  {
    day: 'Wednesday',
    lunch: {
      title: 'Yellow Moong Dal Palak + 2 Bajra Rotis + Sprout Salad',
      description: 'Iron-packed mountain spinach tempered with garlic and Sendha Namak.',
      calories: 410,
      protein: '20g',
      carbs: '48g',
      fat: '11g'
    },
    dinner: {
      title: 'Fiery Andhra Chicken Curry + Steamed Brown Rice + Pachadi',
      description: 'Coastal curry leaves and crushed black pepper broth with lean chicken.',
      calories: 490,
      protein: '40g',
      carbs: '46g',
      fat: '13g'
    }
  },
  {
    day: 'Thursday',
    lunch: {
      title: 'Mediterranean Eggs Shakshuka + Multigrain Toast + Cucumber Ribbons',
      description: 'Poached farm eggs in smoky bell pepper and cumin coulis.',
      calories: 380,
      protein: '22g',
      carbs: '34g',
      fat: '16g'
    },
    dinner: {
      title: 'Grilled Cottage Cheese Quinoa Power Bowl with Herb Tahini',
      description: 'Charred zucchini, sweet corn, bell peppers, and roasted sesame dressing.',
      calories: 420,
      protein: '28g',
      carbs: '42g',
      fat: '15g'
    }
  },
  {
    day: 'Friday',
    lunch: {
      title: 'Herb Chicken Seekh Platter + Mint Kachumber + Multigrain Bread',
      description: 'Lean minced chicken breast skewers grilled with mountain herbs.',
      calories: 430,
      protein: '36g',
      carbs: '38g',
      fat: '12g'
    },
    dinner: {
      title: 'Blueberry & Pecan Greek Yogurt Power Bowl + Raw Honey Drizzle',
      description: 'High-protein slow-digestive evening meal packed with natural antioxidants.',
      calories: 340,
      protein: '24g',
      carbs: '28g',
      fat: '14g'
    }
  },
  {
    day: 'Saturday',
    lunch: {
      title: 'Saturday Dum Biryani (Brown Basmati + Paneer or Chicken) + Mint Raita',
      description: 'Aromatic saffron dum cooking using cold-pressed oils and zero Dalda.',
      calories: 490,
      protein: '32g',
      carbs: '54g',
      fat: '14g'
    },
    dinner: {
      title: 'Air-Baked Sweet Potato Wedges + Grilled Tofu or Chicken + Green Dip',
      description: 'High-fiber complex carbohydrate dinner to replenish glycogen cleanly.',
      calories: 380,
      protein: '28g',
      carbs: '38g',
      fat: '12g'
    }
  },
  {
    day: 'Sunday',
    lunch: {
      title: 'Sunday Feast: Dal Makhani (Slow Cooked 8h in Claypot, No Cream) + Missi Roti',
      description: 'Black lentils slow-cooked with fresh tomato puree and a trace of A2 cow ghee.',
      calories: 460,
      protein: '22g',
      carbs: '58g',
      fat: '13g'
    },
    dinner: {
      title: 'Light Detox Veg Dalia Khichdi + Roasted Jeera Chaas',
      description: 'Soothing broken wheat & vegetable porridge to reset digestion for the workweek.',
      calories: 320,
      protein: '14g',
      carbs: '46g',
      fat: '8g'
    }
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Calorie Counting & Macros',
    question: 'How accurate are your calorie and macronutrient counts?',
    answer: 'Every recipe is standardized by weight using certified commercial scales. Our recipes are audited by a clinical nutritionist to verify the exact split of protein, complex carbs, and cold-pressed fats so you hit your fitness goals without guesswork.'
  },
  {
    id: 'faq-2',
    category: 'Subscription & Delivery',
    question: 'Can I pause or skip meals if I am traveling or dining out?',
    answer: 'Yes! You have 100% freedom to pause or resume your subscription with 3 hours prior notice on WhatsApp or website (before 9:15 AM for lunch, or before 4:30 PM for dinner). Unused days simply extend your renewal date.'
  },
  {
    id: 'faq-3',
    category: 'Kitchen & Hygiene',
    question: 'What cooking oils and cooking techniques do you use?',
    answer: 'We exclusively use 100% cold-pressed (Kachi Ghani) mustard oil, cold-pressed sesame oil, extra-virgin olive oil for salads, and trace pure A2 cow ghee. We never touch refined palm oil, cottonseed blends, or artificial food colorings.'
  },
  {
    id: 'faq-4',
    category: 'Kitchen & Hygiene',
    question: 'How do you ensure pure Jain and Diabetic preparation?',
    answer: 'We maintain dedicated food preparation zones and specific color-coded cookware for our Jain diet menu. Our Jain recipes use zero onion, zero garlic, and zero root vegetables (potatoes, onions, garlic, carrots are omitted; we use raw banana and seasonal squash). Diabetic meals are calibrated by a clinical nutritionist for a Low Glycemic Load.'
  },
  {
    id: 'faq-5',
    category: 'Subscription & Delivery',
    question: 'What are the daily delivery time windows in South Delhi?',
    answer: 'Lunch is delivered between 12:00 PM and 1:30 PM (ideal for offices and homes in East of Kailash, GK, and Nehru Place). Dinner is delivered between 7:15 PM and 9:00 PM. Meals arrive in insulated thermal carriers inside eco-friendly biodegradable containers.'
  }
];

export const AVAILABLE_COUPONS = [
  { code: 'PARA10', discount: 10, minAmount: 149, label: '10% OFF on your first trial meal or subscription' },
  { code: 'MONTHLY30', discount: 30, minAmount: 1800, label: '30% OFF on any Monthly 24-Day Subscription' },
  { code: 'STUDENT20', discount: 20, minAmount: 250, label: 'Flat 20% OFF for Students in South Delhi' }
];

export const CORPORATE_CLIENTS = [
  { name: 'Google Gurugram / Delhi', logoPlaceholder: 'G-Tech' },
  { name: 'Zomato HQ Team', logoPlaceholder: 'Z-Delivery' },
  { name: 'Deloitte India', logoPlaceholder: 'D-Advisory' },
  { name: 'Max Healthcare Specialists', logoPlaceholder: 'M-Health' },
  { name: 'Nehru Place Startups', logoPlaceholder: 'NP-Hub' },
  { name: 'Greater Kailash Co-Works', logoPlaceholder: 'GK-Works' }
];
