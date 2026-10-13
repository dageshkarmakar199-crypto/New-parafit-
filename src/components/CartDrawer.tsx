import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { AVAILABLE_COUPONS } from '../data/menuData';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, Tag, Check, ArrowRight, MessageCircle, ShoppingBag, ShieldCheck } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    deliveryFee,
    grandTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success?: boolean; message?: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyCoupon(couponInput);
    setCouponFeedback(res);
  };

  const freeDeliveryThreshold = 299;
  const amountNeededForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const freeDeliveryProgress = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    const itemsList = items
      .map((i) => `• ${i.quantity}x ${i.item.name} (${i.selectedSlot || 'Lunch'}) - ₹${i.item.price * i.quantity}`)
      .join('\n');

    const msg = `Hello Parafit Delivers! 👋\nI want to place an order from your website:\n\n${itemsList}\n\nSubtotal: ₹${subtotal}\nDiscount: -₹${discountAmount}\nDelivery: ₹${deliveryFee}\n*Grand Total: ₹${grandTotal}*\n\nPlease confirm delivery to my South Delhi address.`;

    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FFF4EA]/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#E4002B]" />
            <h3 className="font-display text-2xl font-bold text-stone-900">YOUR MEAL BAG</h3>
            <span className="px-2 py-0.5 rounded-full bg-[#E4002B] text-white text-xs font-extrabold">
              {items.length}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="bg-amber-50 px-5 py-2.5 border-b border-amber-200/60 text-xs">
          {amountNeededForFreeDelivery > 0 ? (
            <div className="space-y-1">
              <p className="text-amber-900 font-semibold">
                Add <strong className="text-[#E4002B]">₹{amountNeededForFreeDelivery}</strong> more for <strong className="text-emerald-700">FREE South Delhi delivery</strong>!
              </p>
              <div className="w-full h-1.5 bg-amber-200/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 transition-all duration-300"
                  style={{ width: `${freeDeliveryProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <p className="text-emerald-800 font-bold flex items-center gap-1.5">
              <span>🎉 Congratulations! You have unlocked FREE South Delhi Delivery.</span>
            </p>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 mx-auto flex items-center justify-center">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <p className="text-stone-800 font-bold text-base">Your bag is empty</p>
                <p className="text-stone-500 text-xs mt-1">
                  Add fresh homestyle thalis or custom subscriptions to get started.
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#E4002B] text-white text-xs font-bold shadow-md hover:bg-[#C90025]"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            items.map((cartItem) => (
              <div
                key={cartItem.id}
                className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center gap-3.5"
              >
                <img
                  src={cartItem.item.image}
                  alt={cartItem.item.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-stone-200"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-stone-900 truncate">
                    {cartItem.item.name}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-medium">
                    {cartItem.selectedSlot || 'Lunch (12:30 PM)'}
                  </p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-xs font-extrabold text-[#E4002B]">
                      ₹{cartItem.item.price * cartItem.quantity}
                    </span>
                    <span className="text-[10px] text-stone-400">
                      (₹{cartItem.item.price} each)
                    </span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-white rounded-full border border-stone-200 p-1 shadow-2xs">
                  <button
                    onClick={() => updateQuantity(cartItem.id, -1)}
                    className="w-6 h-6 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-bold text-stone-900 w-4 text-center">
                    {cartItem.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(cartItem.id, 1)}
                    className="w-6 h-6 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-100"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(cartItem.id)}
                  className="text-stone-400 hover:text-red-600 p-1"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Bottom Controls */}
        {items.length > 0 && (
          <div className="p-5 bg-stone-50 border-t border-stone-200 space-y-4">
            {/* Coupon Code Section */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                    <Tag className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Coupon {appliedCoupon} applied (-₹{discountAmount})</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-xs text-rose-600 font-bold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon code (e.g. PARA10)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                    className="flex-1 px-3 py-2 rounded-xl bg-white border border-stone-200 text-xs font-semibold uppercase placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#E4002B]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800"
                  >
                    Apply
                  </button>
                </form>
              )}

              {couponFeedback && (
                <p
                  className={`text-[11px] mt-1 font-semibold ${
                    couponFeedback.success ? 'text-emerald-700' : 'text-rose-600'
                  }`}
                >
                  {couponFeedback.message}
                </p>
              )}
            </div>

            {/* Bill Summary */}
            <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-200 pt-3">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="font-semibold text-stone-900">₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Special Coupon Savings:</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>South Delhi Delivery Fee:</span>
                <span>{deliveryFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-stone-900 border-t border-stone-200 pt-2">
                <span>To Pay:</span>
                <span className="text-[#E4002B]">₹{grandTotal}</span>
              </div>
            </div>

            {/* Checkout Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-3.5 rounded-full bg-[#E4002B] hover:bg-[#C90025] active:scale-95 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Instant Order via WhatsApp</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-500">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>100% Honest Ingredients · No Refined Palm Oil</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
