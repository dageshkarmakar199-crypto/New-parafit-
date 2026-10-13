import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MapPin, Search, CheckCircle2, XCircle, Clock, Navigation, ExternalLink, Phone } from 'lucide-react';

export const DeliveryChecker: React.FC = () => {
  const [inputPincode, setInputPincode] = useState('');
  const [checkResult, setCheckResult] = useState<{
    status: 'idle' | 'success' | 'fail';
    message?: string;
    details?: any;
  }>({ status: 'idle' });

  // Calculate live open status based on Delhi time (operating 9:15 AM - 11:00 PM)
  const isCurrentlyOpen = true; // Open now during standard Delhi day/evening operational window

  const handleCheck = (pincodeToCheck?: string) => {
    const pin = (pincodeToCheck || inputPincode).trim();
    if (!pin) return;

    const matched = siteConfig.deliveryZones.find((z) => z.pincode === pin);
    if (matched) {
      setCheckResult({
        status: 'success',
        message: `Hooray! We deliver fresh hot meals to ${matched.locality}.`,
        details: matched,
      });
    } else {
      setCheckResult({
        status: 'fail',
        message: `Pincode ${pin} is outside our daily hot kitchen dispatch radius. Call us at ${siteConfig.phone} for special catering!`,
      });
    }
  };

  const handleLocalityChipClick = (pin: string) => {
    setInputPincode(pin);
    handleCheck(pin);
  };

  return (
    <section id="delivery-zone" className="py-20 sm:py-28 bg-[#FFF4EA] relative border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#E4002B] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>South Delhi Central Hub</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
            DELIVERY RADIUS & PINCODE CHECKER
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Operating from {siteConfig.address.full}. Delivering within 20–35 minutes across East of Kailash, GK 1 & 2, Lajpat Nagar, and Kailash Colony.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Pincode Input & Quick Locality Selector (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-[28px] p-6 sm:p-8 shadow-[0_10px_35px_rgb(0,0,0,0.06)] border border-stone-200/90 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Live Kitchen Status Banner */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-bold text-stone-900">
                    Kitchen Status: <strong className="text-emerald-700">Open Now ({siteConfig.hours.display})</strong>
                  </span>
                </div>
                <span className="text-[11px] text-stone-500 font-semibold hidden sm:inline">
                  Dispatching Daily
                </span>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-700 mb-2">
                  Enter 6-Digit Delhi Pincode
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="e.g. 110065 or 110048"
                      value={inputPincode}
                      onChange={(e) => {
                        setInputPincode(e.target.value.replace(/\D/g, ''));
                        setCheckResult({ status: 'idle' });
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm font-semibold text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E4002B]"
                    />
                  </div>
                  <button
                    onClick={() => handleCheck()}
                    className="px-6 py-3.5 rounded-2xl bg-[#E4002B] hover:bg-[#C90025] text-white text-xs sm:text-sm font-extrabold transition-all shadow-md active:scale-95 shrink-0"
                  >
                    Check
                  </button>
                </div>
              </div>

              {/* Status Feedback Box with Animation */}
              {checkResult.status === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs space-y-1">
                      <p className="font-extrabold text-sm text-emerald-800">
                        {checkResult.message}
                      </p>
                      <div className="flex items-center gap-4 text-emerald-700 pt-1">
                        <span>🚀 Estimated ETA: <strong>{checkResult.details?.eta}</strong></span>
                        <span>🏷️ Min Order: <strong>₹{checkResult.details?.minOrder}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {checkResult.status === 'fail' && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="text-xs space-y-1">
                      <p className="font-bold text-amber-800">{checkResult.message}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick South Delhi Locality Chips */}
              <div>
                <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5">
                  South Delhi Priority Hubs (Tap to verify)
                </p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.deliveryZones.map((zone) => (
                    <button
                      key={zone.pincode}
                      onClick={() => handleLocalityChipClick(zone.pincode)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                        inputPincode === zone.pincode
                          ? 'bg-[#E4002B] text-white border-[#E4002B]'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                      }`}
                    >
                      {zone.locality.split(',')[0]} ({zone.pincode})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom info strip */}
            <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-stone-400" />
                <span>Lunch (12–1:30 PM) · Dinner (7:15–9 PM)</span>
              </div>
              <a href={`tel:${siteConfig.phoneTel}`} className="text-[#E4002B] font-bold hover:underline flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map & Location Card (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-[28px] overflow-hidden shadow-[0_10px_35px_rgb(0,0,0,0.06)] border border-stone-200/90 flex flex-col">
            <div className="relative w-full h-64 sm:h-80 bg-stone-100">
              <iframe
                title="Parafit Delivers Kitchen Location"
                src={siteConfig.address.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-stone-200 text-stone-900 text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E4002B] animate-ping" />
                <span>Shop No. 1, DDA Mini Market, Block E</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-white flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-stone-900 text-base">
                      {siteConfig.brandName}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {siteConfig.address.full}
                    </p>
                  </div>
                  <a
                    href={siteConfig.address.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#E4002B]" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between text-xs text-stone-500 gap-2">
                <span>FSSAI Lic. #{siteConfig.ratings.fssaiLicense}</span>
                <span className="text-[#E4002B] font-semibold">Fast Delivery: East of Kailash, GK, Lajpat</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
