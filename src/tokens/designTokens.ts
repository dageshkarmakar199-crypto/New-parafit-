/**
 * Parafit Delivers - Design Tokens & Brand System
 * Colors, Typography, Spacing, Radii, Shadows & Animation Curves
 */

export const DESIGN_TOKENS = {
  colors: {
    // Primary Brand
    brandRed: '#E4002B',
    brandRedHover: '#C90025',
    darkRed: '#B3001F',
    maroon: '#5E0010',
    deepMaroon: '#4A000A',

    // Neutrals
    creamBg: '#FFF4EA',
    cardWhite: '#FFFFFF',
    charcoalText: '#1A1A1A',
    mutedBody: '#57534E',
    borderHairline: 'rgba(26, 26, 26, 0.08)',

    // Accents
    freshGreen: '#2E9E5B', // Clean healthy tags, veg indicator
    freshGreenBg: '#ECFDF5',
    warmAmber: '#F59E0B',
    warmAmberBg: '#FEF3C7',
  },

  typography: {
    fonts: {
      display: "'Bebas Neue', 'Antonio', sans-serif",
      sans: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      handwriting: "'Caveat', cursive",
      mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    },
    scale: {
      heroDisplay: 'clamp(2.5rem, 5vw, 5.5rem)',
      sectionHeading: 'clamp(2rem, 3.5vw, 3rem)',
      cardTitle: '1.125rem', // 18px
      bodyText: '0.875rem',  // 14px
      caption: '0.75rem',    // 12px
      micro: '0.625rem',     // 10px
    },
  },

  radii: {
    card: '24px',
    modal: '28px',
    heroBadge: '9999px', // pill
    button: '9999px',    // pill
    thumbnail: '18px',
  },

  shadows: {
    cardSoft: '0 8px 30px rgba(0, 0, 0, 0.06)',
    cardHover: '0 16px 40px rgba(228, 0, 43, 0.12)',
    drawer: '0 25px 60px -15px rgba(0, 0, 0, 0.4)',
    heroGlow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)',
  },

  motion: {
    easingFast: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionFast: '150ms',
    transitionBase: '250ms',
    transitionSmooth: '500ms',
  },

  layout: {
    maxContentWidth: '1280px',
    mobileStickyMaxHeight: '15vh',
  },
} as const;
