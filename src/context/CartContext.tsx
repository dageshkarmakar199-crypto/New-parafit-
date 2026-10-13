import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem, SubscriptionConfig } from '../types';
import { AVAILABLE_COUPONS } from '../data/menuData';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, slot?: 'Lunch (12:00 - 1:30 PM)' | 'Dinner (7:15 - 9:00 PM)') => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItemsCount: number;
  subtotal: number;
  discountAmount: number;
  deliveryFee: number;
  grandTotal: number;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  // Favourites
  favourites: string[];
  toggleFavourite: (itemId: string) => void;
  isFavourite: (itemId: string) => boolean;
  isFavDrawerOpen: boolean;
  setIsFavDrawerOpen: (open: boolean) => void;
  // Modals
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  activePolicyModal: string | null;
  setActivePolicyModal: (policy: string | null) => void;
  quickViewItem: MenuItem | null;
  setQuickViewItem: (item: MenuItem | null) => void;
  // Subscriptions added to cart
  addSubscriptionToCart: (config: SubscriptionConfig, totalAmount: number) => void;
  // Customer info & orders
  ordersHistory: any[];
  addCompletedOrder: (order: any) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('parafit_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [favourites, setFavourites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('parafit_favs');
      return saved ? JSON.parse(saved) : ['thali-ghar-ki', 'paneer-quinoa-power-bowl'];
    } catch {
      return ['thali-ghar-ki'];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState<string | null>('PARA10');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavDrawerOpen, setIsFavDrawerOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [activePolicyModal, setActivePolicyModal] = useState<string | null>(null);
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);

  const [ordersHistory, setOrdersHistory] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('parafit_orders');
      return saved ? JSON.parse(saved) : [
        {
          id: 'PF-84920',
          date: 'Yesterday, 12:42 PM',
          items: [{ name: 'Ghar Ki Special Thali', qty: 2, price: 189 }],
          total: 340,
          status: 'Delivered to East of Kailash',
          slot: 'Lunch (12:30 PM)'
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('parafit_cart', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('parafit_favs', JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    localStorage.setItem('parafit_orders', JSON.stringify(ordersHistory));
  }, [ordersHistory]);

  const addToCart = (item: MenuItem, slot: 'Lunch (12:00 - 1:30 PM)' | 'Dinner (7:15 - 9:00 PM)' = 'Lunch (12:00 - 1:30 PM)') => {
    setItems((prev: CartItem[]) => {
      const existing = prev.find((i) => i.item.id === item.id && i.selectedSlot === slot);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id && i.selectedSlot === slot
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { id: `${item.id}-${Date.now()}`, item, quantity: 1, selectedSlot: slot }];
    });
    setIsCartOpen(true);
  };

  const addSubscriptionToCart = (config: SubscriptionConfig, totalAmount: number) => {
    const subMenuItem: MenuItem = {
      id: `sub-${Date.now()}`,
      name: `${config.frequency} · ${config.dietType}`,
      hindiName: 'मील सब्सक्रिप्शन पैकेज',
      tagline: `${config.mealSlot} · ${config.rotiPreference}`,
      description: `Includes fresh cooked daily meals delivered in East of Kailash / South Delhi zone. Pause or swap anytime.`,
      price: totalAmount,
      originalPrice: Math.round(totalAmount / (1 - config.discountPercentage / 100)),
      category: 'All',
      dietType: config.preference === 'Non-Veg' ? 'Non-Veg' : config.preference === 'Eggitarian' ? 'Egg' : 'Veg',
      image: config.dietType.includes('Protein')
        ? '/src/assets/images/meal_paneer_bowl_1791632483300.jpg'
        : '/src/assets/images/hero_thali_bowl_1791632471777.jpg',
      badge: `Save ${config.discountPercentage}%`,
      calories: 450,
      protein: config.dietType.includes('Protein') ? 28 : 20,
      carbs: 55,
      fat: 12,
      rating: 5.0,
      reviewCount: 380,
      portion: `${config.frequency} package`,
      ingredients: ['Cold Pressed Oils', 'Multigrain Roti', 'Farm Greens', 'Pure Ghee trace'],
      dietaryFeatures: ['Zero Maida', 'Zero Sugar', 'Priority Delivery'],
      spiceLevel: 'Homestyle'
    };

    setItems((prev: CartItem[]) => [
      ...prev,
      {
        id: `sub-cart-${Date.now()}`,
        item: subMenuItem,
        quantity: 1,
        selectedSlot: config.mealSlot.includes('Dinner') ? 'Dinner (7:15 - 9:00 PM)' : 'Lunch (12:00 - 1:30 PM)'
      }
    ]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((i) => i.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.id === cartItemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleFavourite = (itemId: string) => {
    setFavourites((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const isFavourite = (itemId: string) => favourites.includes(itemId);

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    const found = AVAILABLE_COUPONS.find((c) => c.code === cleanCode);
    if (!found) {
      return { success: false, message: 'Invalid coupon code. Try PARA10' };
    }
    if (subtotal < found.minAmount) {
      return { success: false, message: `Minimum cart value of ₹${found.minAmount} required for ${found.code}` };
    }
    setAppliedCoupon(found.code);
    return { success: true, message: `Coupon ${found.code} applied successfully! (${found.discount}% OFF)` };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const addCompletedOrder = (order: any) => {
    setOrdersHistory((prev) => [order, ...prev]);
    clearCart();
  };

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  let discountAmount = 0;
  if (appliedCoupon && subtotal > 0) {
    const couponObj = AVAILABLE_COUPONS.find((c) => c.code === appliedCoupon);
    if (couponObj && subtotal >= couponObj.minAmount) {
      discountAmount = Math.round((subtotal * couponObj.discount) / 100);
    }
  }

  // Free delivery for orders >= ₹299, otherwise ₹30
  const deliveryFee = subtotal >= 299 || subtotal === 0 ? 0 : 30;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItemsCount,
        subtotal,
        discountAmount,
        deliveryFee,
        grandTotal,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        favourites,
        toggleFavourite,
        isFavourite,
        isFavDrawerOpen,
        setIsFavDrawerOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isAccountOpen,
        setIsAccountOpen,
        activePolicyModal,
        setActivePolicyModal,
        quickViewItem,
        setQuickViewItem,
        addSubscriptionToCart,
        ordersHistory,
        addCompletedOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
