import React from 'react';
import { useCart } from '../context/CartContext';
import { siteConfig } from '../config/siteConfig';
import { X, ShieldCheck, FileText, Truck, RefreshCw, Mail, Phone, MapPin } from 'lucide-react';

export const PolicyModal: React.FC = () => {
  const { activePolicyModal, setActivePolicyModal } = useCart();

  if (!activePolicyModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-[28px] overflow-hidden shadow-2xl border border-stone-200 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FFF4EA]/50">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#E4002B]" />
            <h3 className="font-display text-2xl font-bold text-stone-900">
              {activePolicyModal.toUpperCase()} POLICY & DETAILS
            </h3>
          </div>

          <button
            onClick={() => setActivePolicyModal(null)}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-stone-700 space-y-4 leading-relaxed">
          {activePolicyModal === 'About' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-stone-900">About Parafit Delivers</h4>
              <p>
                Founded in East of Kailash, New Delhi, Parafit Delivers was created with one simple conviction: daily meals should be nourishing, transparent, and completely free from unhealthy industrial cooking habits.
              </p>
              <p>
                Unlike commercial takeaway outlets that rely on heavy palm oil, excessive sodium, and refined maida, we cook like an honest Indian home kitchen: 100% cold-pressed (Kachi Ghani) mustard oil, stoneground multigrain flours, and zero refined white sugar.
              </p>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <p className="font-bold text-stone-900">Our Kitchen Hub:</p>
                <p>{siteConfig.address.full}</p>
                <p className="mt-1 font-semibold text-emerald-700">FSSAI Registration #{siteConfig.ratings.fssaiLicense}</p>
              </div>
            </div>
          )}

          {activePolicyModal === 'Delivery' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-stone-900">South Delhi Delivery Policy</h4>
              <p>
                We service East of Kailash, Greater Kailash 1 & 2, Lajpat Nagar 1-4, Kailash Colony, Nehru Place, CR Park, and adjacent South Delhi colonies.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li><strong>Lunch Window:</strong> 12:00 PM – 1:30 PM daily. Orders must be booked before 10:00 AM for same-day lunch delivery.</li>
                <li><strong>Dinner Window:</strong> 7:15 PM – 9:00 PM daily. Orders must be booked before 5:00 PM for same-day dinner delivery.</li>
                <li><strong>Packaging:</strong> 100% biodegradable kraft containers packed inside insulated thermal bags to retain maximum heat.</li>
              </ul>
            </div>
          )}

          {activePolicyModal === 'Refund' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-stone-900">Refund, Swap & Pause Policy</h4>
              <p>
                We understand that life in Delhi gets unpredictable. We want our subscriptions to be completely stress-free.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li><strong>Pause Meal Days:</strong> You may pause your subscription days at any time by giving 3 hours prior notice on WhatsApp. Unconsumed meal credits never expire during your subscription cycle.</li>
                <li><strong>Quality Guarantee:</strong> If a meal box arrives damaged, spilled, or delayed past the delivery window, we provide an immediate free meal replacement or credit refund.</li>
                <li><strong>Cancellation:</strong> Subscriptions can be canceled before the halfway point with a pro-rata refund for remaining unconsumed days.</li>
              </ul>
            </div>
          )}

          {activePolicyModal === 'Terms' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-stone-900">Terms & Conditions of Service</h4>
              <p>
                By placing an order on Parafit Delivers, you agree to our standard service guidelines:
              </p>
              <p>
                All meals are prepared fresh on order in our licensed kitchen. While we maintain dedicated cooking utensils for Jain and allergen-conscious meals, customers with severe medical allergies must inform our concierge via WhatsApp prior to subscription initiation.
              </p>
            </div>
          )}

          {activePolicyModal === 'Privacy' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-stone-900">Privacy Policy</h4>
              <p>
                Your phone number, delivery address, and dietary requirements are used solely for fulfilling your daily meal dispatch and customer support communications. We never sell or share customer data with third-party advertisers.
              </p>
            </div>
          )}

          {activePolicyModal === 'Contact' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-stone-900">Contact Parafit Kitchen</h4>
              <div className="space-y-2 text-stone-600">
                <p><strong>Address:</strong> {siteConfig.address.full}</p>
                <p><strong>Phone:</strong> {siteConfig.phone}</p>
                <p><strong>Email:</strong> {siteConfig.email}</p>
                <p><strong>Operating Hours:</strong> {siteConfig.hours.display}</p>
                <p><strong>FSSAI License:</strong> {siteConfig.ratings.fssaiLicense}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 text-right">
          <button
            onClick={() => setActivePolicyModal(null)}
            className="px-6 py-2 rounded-full bg-[#E4002B] text-white text-xs font-bold hover:bg-[#C90025] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
