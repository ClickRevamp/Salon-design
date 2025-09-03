// Design tokens for the beauty salon project

export const colors = {
  // Primary design system colors
  blush: "#EEDDE2",
  mauve: "#D9C2C8", 
  porcelain: "#FAF8F7",
  ink: "#1C1A1A",
  gold: "#CFB27C",
  
  // Brand palette
  brand: {
    bg: "#FAF8F7",
    text: "#1C1A1A", 
    accent: "#CFB27C",
  },
} as const;

export const radii = {
  sm: "calc(var(--radius) - 4px)",
  md: "calc(var(--radius) - 2px)",
  lg: "var(--radius)",
  xl: "1.25rem",
  "2xl": "1.5rem",
} as const;

export const shadows = {
  soft: "0 2px 8px rgba(28, 26, 26, 0.06)",
  card: "0 4px 16px rgba(28, 26, 26, 0.08)",
} as const;

// Export all tokens as a single object
export const tokens = {
  colors,
  radii,
  shadows,
} as const;
