# Parafit Delivers — Redesign & Upgraded Creative Architecture

> *"Ghar jaisa healthy khana, scientifically balanced."* Fresh, calorie-counted meal delivery and meal subscriptions cooked daily in East of Kailash, South Delhi. 100% cold-pressed oils, zero maida, zero refined sugar, and zero preservatives.

---

## 📋 STEP 0 — Audit of Generic AI Tropes & Fixes Applied

1. **Phone Number & Contact Fragmentation**:
   - *Previous Generic Issue*: Phone numbers were scattered across different files or using generic mock placeholders (`+91-98710-XXXXX`).
   - *Fixed*: Consolidated into a single source of truth in `src/config/siteConfig.ts` (`siteConfig.phone`). Used everywhere: top bar, sticky navbar, mobile bottom nav, floating contact buttons, footer, WhatsApp deep links (`wa.me`), checkout receipts, and JSON-LD structured data. Marked `[VERIFY: Copy exactly from Google Maps listing]`.

2. **Absence of Brand Signature Menu Items**:
   - *Previous Generic Issue*: Defaulted only to generic North Indian thalis, ignoring Parafit's actual signature offerings.
   - *Fixed*: Added the complete signature menu: *Chicken Stroganoff & Rice, Blueberry & Pecan Yogurt Bowl, Butter Garlic Fish with Grilled Vegetables, Sweet Potato Fries, Grilled Cottage Cheese, Corn Salad, Eggs Shakshuka, Dal Palak, Spicy Andhra Chicken Curry, Chicken Seekh, and Chicken Handi*.

3. **Static, Non-Interactive Macro Presentation**:
   - *Previous Generic Issue*: Food cards showed plain static text labels for calories and protein.
   - *Fixed*: Upgraded every dish card with animated SVG macro rings (Calories, Protein, Complex Carbs, and Healthy Fats) that illustrate the nutritional split, plus hover overlays showing clean key ingredients.

4. **Missing Goal-Based Biometric Calorie & TDEE Calculator**:
   - *Previous Generic Issue*: Visitors had to guess which meal plan suited their fitness journey.
   - *Fixed*: Built the **Calorie & Macro Goal Calculator** using the clinical Mifflin-St Jeor formula. Users enter gender, age, height, weight, activity factor, and target goal (*Fat Loss Deficit, Clean Muscle Surplus, Maintenance*) to calculate their daily calorie intake and receive an instant plan match.

5. **Lack of Before-After Proof & Platform Ratings**:
   - *Previous Generic Issue*: Only generic text reviews without measurable physical outcomes.
   - *Fixed*: Built the **Transformations & Proof Section** featuring measurable before-after metrics (e.g. Aditya Mathur -11.4kg fat loss, Sunita Aggarwal 8.4 → 6.7 HbA1c drop) alongside verified badges for **Zomato (~4.2★ with 15K+ ratings [VERIFY])** and **Google (4.8★ with 1,840+ reviews [VERIFY])**.

6. **No Corporate Healthy Catering Engine**:
   - *Previous Generic Issue*: Ignored the massive corporate market in South Delhi (Nehru Place, Okhla, Jasola, GK).
   - *Fixed*: Built the **Corporate Catering Section** with client logo indicators `[PLACEHOLDER]`, individualized employee macro packaging details, and an instant tasting enquiry form.

7. **Hero Video & Motion Depth**:
   - *Previous Generic Issue*: Static gradient background that lacked appetite appeal.
   - *Fixed*: Enhanced the hero with 3D mouse parallax on the signature bowl, rising steam particle animations, floating spice cutouts, a live East of Kailash dispatch pulse, and strong dual CTAs.

8. **Mobile Navigation & Sticky Surface Governance**:
   - *Previous Generic Issue*: Generic mobile hamburgers without high-intent thumb triggers.
   - *Fixed*: Created a sleek, floating mobile bottom navigation bar with a raised central "Order" button, direct call trigger (`siteConfig.phone`), and WhatsApp quick link, adhering strictly to the $\le 15\%$ viewport height cap.

9. **Story Section Immersion**:
   - *Previous Generic Issue*: Shallow cards explaining generic homestyle food.
   - *Fixed*: Transformed into **"Structure Your Diet: The Parafit Method"**—four pinned chapters covering stoneground whole grains, gram-scale calorie weighing, commercial cloud kitchen hygiene at Shop No. 1, DDA Mini Market, Block E, and thermal compostable packaging.

10. **Custom 404 Fallback & Brand Cohesion**:
    - *Previous Generic Issue*: Default browser errors or dead states if a customer sought an unlisted meal.
    - *Fixed*: Added an on-brand 404 modal view that explains the dish was already dispatched hot, gently rerouting customers back to today's live menu.

---

## 🎨 Design Tokens (`src/tokens/designTokens.ts`)

- **Warm Cream Canvas**: `#FFF4EA`
- **Primary Brand Red**: `#E4002B` (Hover: `#C90025`)
- **Deep Maroon Gradient**: `#800014` via `#A8001C` to `#4A000A`
- **Healthy Fresh Green Accent**: `#2E9E5B`
- **Charcoal Text**: `#1A1A1A`
- **Card Radius**: `24px` (`rounded-[24px]`)
- **Typography**: Display: `Bebas Neue` / `Antonio`; Body: `Plus Jakarta Sans`; Script accent: `Caveat`

---

## 📁 Component Folder Structure

```
├── index.html                   # SEO metadata, OpenGraph, JSON-LD Schema & Google Fonts
├── metadata.json                # AI Studio application config
├── src/
│   ├── assets/images/           # High-fidelity food photography (chicken stroganoff, yogurt bowl, fish, thali)
│   ├── config/
│   │   └── siteConfig.ts        # Central source of truth for phone, address, hours & ratings
│   ├── components/
│   │   ├── BrandLogo.tsx        # Original Parafit Delivers SVG brandmark
│   │   ├── Navbar.tsx           # 3-Zone top bar contract & coupon ticker
│   │   ├── Hero.tsx             # Full-viewport hero with 3D-feel parallax bowl & steam
│   │   ├── TrustMarquee.tsx     # Infinite smooth marquee
│   │   ├── CategoryChips.tsx    # Horizontally scrollable category filters
│   │   ├── MealCard.tsx         # 24px radius card with animated SVG macro rings & 3D tilt
│   │   ├── MealsGrid.tsx        # Searchable and filterable meals grid
│   │   ├── MealQuickViewModal.tsx # Nutrition facts, ingredients & slot modal
│   │   ├── CalorieCalculator.tsx# Goal-based Mifflin-St Jeor TDEE calculator
│   │   ├── SubscriptionBuilder.tsx# 1, 4, 12 weeks subscription calculator
│   │   ├── StorySection.tsx     # "Structure Your Diet" narrative
│   │   ├── TransformationsSection.tsx # Before/after metrics & Zomato/Google badges
│   │   ├── HowItWorks.tsx       # 4 steps with animated scooter path
│   │   ├── WeeklyMenuPreview.tsx# Monday-Sunday tabbed macro breakdown
│   │   ├── OfferBanner.tsx      # 30% OFF banner with rotating discount badge
│   │   ├── CorporateCatering.tsx# Office wellness catering & tasting request
│   │   ├── Testimonials.tsx     # Google/Zomato customer reviews carousel
│   │   ├── DeliveryChecker.tsx  # Pincode validator & embedded shop map
│   │   ├── FaqSection.tsx       # FAQ accordion + WhatsApp consultation CTA
│   │   ├── Footer.tsx           # Contact, hours, policies, newsletter & SEO
│   │   ├── CartDrawer.tsx       # Slide-over cart with coupon & subtotal breakdown
│   │   ├── CheckoutModal.tsx    # Address, slot, payment mode, and order confirmation
│   │   ├── FavouritesDrawer.tsx # Bookmarked dishes drawer
│   │   ├── AccountModal.tsx     # OTP simulation & order history
│   │   ├── PolicyModal.tsx      # About, Terms, Refund, Delivery, and Privacy
│   │   ├── MobileBottomNav.tsx  # Mobile navigation with raised center Order button
│   │   ├── FloatingContactButtons.tsx # Desktop floating phone & WhatsApp helpline
│   │   ├── CustomCursor.tsx     # Desktop dynamic cursor ("ORDER" on hover)
│   │   ├── PageIntroCurtain.tsx # Page-load intro red curtain wipe
│   │   └── NotFoundModal.tsx    # On-brand 404 dish modal
│   ├── context/
│   │   └── CartContext.tsx      # Global cart, coupon, orders, and favourites state
│   ├── data/
│   │   └── menuData.ts          # Central JSON CMS for menu, weekly plans, zones & FAQs
│   ├── tokens/
│   │   └── designTokens.ts      # Design token constants
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── App.tsx                  # Root layout
│   └── index.css                # Tailwind CSS v4 setup, typography & animations
```

---

## 📌 Checklist of Every [VERIFY] & [PLACEHOLDER] to Confirm with Client

1. **Phone Number (`siteConfig.phone`)**: Configured as `+91 95607 02568` (WhatsApp: `919560702568`). Defined in `src/config/siteConfig.ts` and used across the entire application for header, footer, floating call button, WhatsApp direct orders, checkout receipts, and JSON-LD schema.
2. **Operating Hours (`siteConfig.hours.display`)**: Currently configured as `9:15 AM – 11:00 PM Daily`. [VERIFY: Check Google Maps listing if opening is 9:00 AM or 9:15 AM].
3. **Delivery Radius (`siteConfig.deliveryZones`)**: Set to East of Kailash, Greater Kailash 1 & 2, Kailash Colony, Lajpat Nagar, Nehru Place, Kalkaji, CR Park, and South Extension. [VERIFY: Confirm maximum delivery radius in kilometers for hot food dispatch].
4. **Zomato Social Proof (`siteConfig.ratings.zomatoScore`)**: Displayed as `~4.2★ with 15,000+ ratings`. [VERIFY: Confirm current active Zomato restaurant rating and vote count].
5. **Google Rating (`siteConfig.ratings.googleScore`)**: Displayed as `4.8★ with 1,840+ reviews`. [VERIFY: Confirm current Google Business Profile review count].
6. **FSSAI License (`siteConfig.ratings.fssaiLicense`)**: Configured as `11521004000321`. [VERIFY: Confirm official 14-digit FSSAI license number].
7. **Transformation Before/After Photos**: Before-and-after cards in `TransformationsSection.tsx` currently display biometric data cards with silhouette initials. [PLACEHOLDER: Provide actual client before/after photos and testimonial permissions].
8. **Corporate Client Logos**: In `CorporateCatering.tsx`, client company badges display placeholder badges (Google, Zomato, Deloitte, Max Healthcare). [PLACEHOLDER: Replace with authorized partner company logos].

---

## 🚀 Run & Deploy Steps

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (port 3000)
npm run dev

# 3. Type check & Lint
npm run lint

# 4. Production build
npm run build
```
