import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { X, CheckCircle2, ShieldCheck, MapPin, Phone, CreditCard, Banknote, QrCode, ArrowRight, MessageCircle } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const {
    items,
    isCheckoutOpen,
    setIsCheckoutOpen,
    grandTotal,
    subtotal,
    discountAmount,
    deliveryFee,
    addCompletedOrder,
  } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('110065');
  const [slot, setSlot] = useState<'Lunch (12:00 - 1:30 PM)' | 'Dinner (7:15 - 9:00 PM)'>('Lunch (12:00 - 1:30 PM)');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'card'>('upi');
  const [notes, setNotes] = useState('');

  const [confirmedOrder, setConfirmedOrder] = useState<any | null>(null);

  if (!isCheckoutOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) return;

    const newOrder = {
      id: `PF-${Math.floor(10000 + Math.random() * 90000)}`,
      date: 'Just Now',
      customer: { name, phone, address, pincode },
      items: items.map((i) => ({ name: i.item.name, qty: i.quantity, price: i.item.price })),
      total: grandTotal,
      slot,
      paymentMethod,
      status: 'Confirmed — Cooking in East of Kailash',
    };

    addCompletedOrder(newOrder);
    setConfirmedOrder(newOrder);
  };

  const handleWhatsAppConfirm = () => {
    if (!confirmedOrder) return;
    const itemsList = confirmedOrder.items
      .map((i: any) => `• ${i.qty}x ${i.name} - ₹${i.price * i.qty}`)
      .join('\n');

    const msg = `Order Confirmed #${confirmedOrder.id} 🎉\nName: ${name}\nPhone: ${phone}\nAddress: ${address}, Pincode: ${pincode}\nSlot: ${slot}\nPayment: ${paymentMethod.toUpperCase()}\n\nItems:\n${itemsList}\n\n*Total: ₹${grandTotal}*\nPlease share delivery status!`;

    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-[28px] overflow-hidden shadow-2xl border border-stone-200 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FFF4EA]/50">
          <div>
            <h3 className="font-display text-2xl font-bold text-stone-900">
              {confirmedOrder ? 'ORDER CONFIRMED' : 'DELIVERY & CHECKOUT'}
            </h3>
            <p className="text-xs text-stone-500">
              {confirmedOrder
                ? 'Your meal is being freshly cooked!'
                : 'East of Kailash & South Delhi delivery'}
            </p>
          </div>

          <button
            onClick={() => {
              setIsCheckoutOpen(false);
              setConfirmedOrder(null);
            }}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1">
          {confirmedOrder ? (
            /* Order Success View */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  Order ID: #{confirmedOrder.id}
                </span>
                <h4 className="text-2xl font-bold text-stone-900 mt-2">
                  Swiggy/Zomato quality, Ghar jaisa swaad!
                </h4>
                <p className="text-sm text-stone-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>! Your order is being prepared in cold-pressed oils at our East of Kailash cloud kitchen for <strong>{slot}</strong>.
                </p>
              </div>

              {/* Order Receipt Box */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2">
                <div className="flex justify-between font-bold text-stone-900 border-b border-stone-200 pb-2">
                  <span>Delivery Address:</span>
                  <span className="text-right">{address}, {pincode}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Slot Window:</span>
                  <span className="font-semibold text-stone-900">{slot}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Payment Mode:</span>
                  <span className="font-semibold text-stone-900 uppercase">{paymentMethod}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-[#E4002B] pt-2 border-t border-stone-200">
                  <span>Paid Total:</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppConfirm}
                  className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Live WhatsApp Updates on #{confirmedOrder.id}</span>
                </button>

                <button
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setConfirmedOrder(null);
                  }}
                  className="w-full py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs"
                >
                  Close & Return Home
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form View */
            <form onSubmit={handleSubmitOrder} className="space-y-5">
              {/* Customer Info */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  1. Contact Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#E4002B]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">Mobile / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#E4002B]"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  2. Delivery Address (South Delhi)
                </h4>
                <div>
                  <textarea
                    rows={2}
                    required
                    placeholder="House/Flat No., Building name, Street, Landmark in East of Kailash / GK / Lajpat Nagar"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#E4002B]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">Pincode</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#E4002B]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">Preferred Slot</label>
                    <select
                      value={slot}
                      onChange={(e: any) => setSlot(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#E4002B] bg-white"
                    >
                      <option value="Lunch (12:00 - 1:30 PM)">Lunch (12:00 PM – 1:30 PM)</option>
                      <option value="Dinner (7:15 - 9:00 PM)">Dinner (7:15 PM – 9:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Option */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  3. Select Payment Method
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-[#E4002B] bg-red-50 text-[#E4002B] font-bold ring-1 ring-[#E4002B]'
                        : 'border-stone-200 text-stone-700'
                    }`}
                  >
                    <QrCode className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-[11px] block">UPI / QR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#E4002B] bg-red-50 text-[#E4002B] font-bold ring-1 ring-[#E4002B]'
                        : 'border-stone-200 text-stone-700'
                    }`}
                  >
                    <Banknote className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-[11px] block">Cash on Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#E4002B] bg-red-50 text-[#E4002B] font-bold ring-1 ring-[#E4002B]'
                        : 'border-stone-200 text-stone-700'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-[11px] block">Cards / Netbanking</span>
                  </button>
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-[11px] font-bold text-stone-700 mb-1">
                  Kitchen / Delivery Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Less green chili, leave with guard, no bell"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#E4002B]"
                />
              </div>

              {/* Price Row */}
              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500">Total Payable Amount:</span>
                  <div className="font-display text-2xl font-bold text-[#E4002B]">
                    ₹{grandTotal}
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#E4002B] hover:bg-[#C90025] text-white font-extrabold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Confirm Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
