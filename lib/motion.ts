// Single source of truth for all animation constants.
// Never hardcode easing or duration values in components — import from here.

// Easing curves
export const EASE_OUT_EXPO  = [0.16, 1, 0.3, 1] as const;     // fast start, long smooth tail — primary curve
export const EASE_IN_OUT    = [0.4, 0, 0.2, 1] as const;      // material — for exits
export const EASE_SPRING       = { type: "spring", stiffness: 400, damping: 30 } as const;
export const EASE_SPRING_SOFT  = { type: "spring", stiffness: 280, damping: 24 } as const;

// Durations (seconds)
export const DUR_FAST = 0.2;
export const DUR_BASE = 0.25;
export const DUR_SLOW = 0.4;

// Page transition variants
export const PAGE_VARIANTS = {
  initial: { opacity: 0, x: 18 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: -12 },
};

// Section fade-in variants
export const SECTION_VARIANTS = {
  hidden: { opacity: 0, x: -14 },
  show:   { opacity: 1, x: 0 },
};

// Stagger container
export const STAGGER_CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

// Stagger child item
export const STAGGER_ITEM = {
  hidden: { opacity: 0, x: -10, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: DUR_SLOW, ease: EASE_OUT_EXPO },
  },
};
