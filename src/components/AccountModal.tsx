import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { siteConfig } from '../config/siteConfig';
import { X, User, Phone, CheckCircle2, Package, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export const AccountModal: React.FC = () => {
  const { isAccountOpen, setIsAccountOpen, ordersHistory } = useCart();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isAccountOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode.length >= 4) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-[28px] overflow-hidden shadow-2xl border border-stone-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FFF4EA]/50">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#E4002B]" />
            <h3 className="font-display text-2xl font-bold text-stone-900">
              {isLoggedIn ? 'MY ACCOUNT & ORDERS' : 'QUICK LOGIN / SIGNUP'}
            </h3>
          </div>

          <button
            onClick={() => setIsAccountOpen(false)}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          {!isLoggedIn ? (
            /* Login Simulation Form */
            <div className="space-y-4">
              <div className="text-center space-y-1">
                <p className="text-sm font-bold text-stone-900">
                  Track meal dispatches & manage subscriptions
                </p>
                <p className="text-xs text-stone-500">
                  Enter your mobile number to receive a secure OTP [DEMO]
                </p>
              </div>

              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Mobile Number
                    </label>
                    <div className="flex">
                      <span className="px-3.5 py-2.5 rounded-l-xl bg-stone-100 border border-r-0 border-stone-200 text-xs font-bold text-stone-600 flex items-center">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="Enter 10-digit number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                        className="flex-1 px-3.5 py-2.5 rounded-r-xl border border-stone-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#E4002B]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#E4002B] hover:bg-[#C90025] text-white text-xs font-extrabold shadow-md transition-colors"
                  >
                    Send One-Time Password
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-3">
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                    OTP sent to +91 {phoneNumber} [Placeholder: Enter <strong>1234</strong>]
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Enter 4-Digit OTP</label>
                    <input
                      type="text"
                      maxLength={4}
                      placeholder="1234"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      className="w-full text-center tracking-widest text-lg font-mono py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-[#E4002B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-md transition-colors"
                  >
                    Verify & Enter Account
                  </button>
                </form>
              )}
            </div>
          ) : (
            /* Logged in User Profile + Orders History */
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Welcome Back, Foodie!</h4>
                  <p className="text-xs text-stone-500">{phoneNumber ? `+91 ${phoneNumber}` : siteConfig.phone}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                  Verified Member
                </span>
              </div>

              {/* Order History */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-[#E4002B]" />
                  <span>Recent Meals & Subscriptions</span>
                </h4>

                {ordersHistory.length === 0 ? (
                  <p className="text-xs text-stone-400">No orders placed yet.</p>
                ) : (
                  ordersHistory.map((ord: any) => (
                    <div
                      key={ord.id}
                      className="p-3.5 rounded-xl border border-stone-200 bg-white text-xs space-y-1.5 shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-stone-900">{ord.id}</span>
                        <span className="text-stone-400 text-[11px]">{ord.date}</span>
                      </div>
                      <p className="text-stone-600">
                        {ord.items.map((i: any) => `${i.qty}x ${i.name}`).join(', ')}
                      </p>
                      <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                        <span className="font-bold text-[#E4002B]">₹{ord.total}</span>
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {ord.status}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
