import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { PageIntroCurtain } from './components/PageIntroCurtain';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { MealsGrid } from './components/MealsGrid';
import { CalorieCalculator } from './components/CalorieCalculator';
import { SubscriptionBuilder } from './components/SubscriptionBuilder';
import { StorySection } from './components/StorySection';
import { TransformationsSection } from './components/TransformationsSection';
import { HowItWorks } from './components/HowItWorks';
import { WeeklyMenuPreview } from './components/WeeklyMenuPreview';
import { OfferBanner } from './components/OfferBanner';
import { CorporateCatering } from './components/CorporateCatering';
import { Testimonials } from './components/Testimonials';
import { DeliveryChecker } from './components/DeliveryChecker';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { FavouritesDrawer } from './components/FavouritesDrawer';
import { AccountModal } from './components/AccountModal';
import { PolicyModal } from './components/PolicyModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { NotFoundModal } from './components/NotFoundModal';

export default function App() {
  const [is404Open, setIs404Open] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FFF4EA] text-[#1A1A1A] font-sans relative selection:bg-[#E4002B] selection:text-white">
        {/* Page Load Intro Curtain */}
        <PageIntroCurtain />

        {/* Custom Interactive Desktop Cursor */}
        <CustomCursor />

        {/* 1. Promo Bar & Sticky Glass Navbar */}
        <Navbar />

        <main>
          {/* 2. Full Viewport Dark Red Hero with 3D-Feel Meal Plate & Steam */}
          <Hero />

          {/* 3. Trust Marquee (Zero Sugar, No Maida, Cold-Pressed Oils, Calorie Counted) */}
          <TrustMarquee />

          {/* 4 & 5. Category Chips & Signature Dishes / Popular Meals Grid */}
          <MealsGrid />

          {/* NEW PREMIUM UPGRADE: Goal-Based Calorie & Macro Calculator */}
          <CalorieCalculator />

          {/* 6. Subscription Plan Builder with Live Pricing & Savings */}
          <SubscriptionBuilder />

          {/* 7. Pinned Scroll Storytelling ("Structure Your Diet: The Parafit Method") */}
          <StorySection />

          {/* NEW PREMIUM UPGRADE: Transformations & Proof (Before/After & Zomato/Google Proof) */}
          <div id="transformations">
            <TransformationsSection />
          </div>

          {/* 8. How It Works (4 Steps with Animated Scooter Path) */}
          <HowItWorks />

          {/* 9. Weekly Menu Preview (Tabbed Mon-Sun with Macro Breakdown) */}
          <WeeklyMenuPreview />

          {/* 10. Offer Banner ("Up to 30% OFF" with Rotating Badge) */}
          <OfferBanner />

          {/* NEW PREMIUM UPGRADE: Corporate Workplace Catering */}
          <CorporateCatering />

          {/* 11. Testimonials (Auto-Sliding South Delhi Reviews) */}
          <Testimonials />

          {/* 12. Delivery-Area Checker & Embedded Google Map with Open Now Status */}
          <DeliveryChecker />

          {/* 13. FAQ Accordion & Big WhatsApp Consultation CTA */}
          <FaqSection />
        </main>

        {/* 14. Footer with Address, Hours, Socials, Policy Links & Newsletter */}
        <Footer />

        {/* Desktop Floating Phone/WhatsApp Helpline */}
        <FloatingContactButtons />

        {/* Mobile Sticky Floating Bottom Navigation with Raised Order Button */}
        <MobileBottomNav />

        {/* Modals & Drawers */}
        <CartDrawer />
        <CheckoutModal />
        <FavouritesDrawer />
        <AccountModal />
        <PolicyModal />
        <NotFoundModal isOpen={is404Open} onClose={() => setIs404Open(false)} />
      </div>
    </CartProvider>
  );
}
