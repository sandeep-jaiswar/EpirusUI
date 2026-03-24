export const colors = {
  primary: "var(--color-primary, #000000)",
  secondary: "var(--color-secondary, #5d5e66)",
  accent: "var(--color-accent, #ba1a1a)",
  surface: "var(--color-surface, #f9f9fa)",
  "surface-low": "var(--color-surface-low, #f3f3f4)",
  "surface-high": "var(--color-surface-high, #e8e8e9)",
  "surface-highest": "var(--color-surface-highest, #e2e2e3)",
  ink: {
    primary: "var(--color-ink-primary, #000000)",
    secondary: "var(--color-ink-secondary, #474747)",
    muted: "var(--color-ink-muted, #777777)",
  },
};

export const typography = {
  fontFamilies: {
    sans: "var(--font-family-sans, 'Inter', sans-serif)",
    mono: "var(--font-family-mono, 'JetBrains Mono', monospace)",
  },
  fontSizes: {
    xs: "var(--font-size-xs, 0.75rem)",
    sm: "var(--font-size-sm, 0.875rem)",
    base: "var(--font-size-base, 1rem)",
    lg: "var(--font-size-lg, 1.125rem)",
    xl: "var(--font-size-xl, 1.25rem)",
    "2xl": "var(--font-size-2xl, 1.5rem)",
    "7xl": "var(--font-size-7xl, 4.5rem)",
  },
  fontWeights: {
    normal: "var(--font-weight-normal, 400)",
    medium: "var(--font-weight-medium, 500)",
    semibold: "var(--font-weight-semibold, 600)",
    bold: "var(--font-weight-bold, 700)",
  },
};

export const spacing = {
  px: "var(--spacing-px, 1px)",
  0: "var(--spacing-0, 0px)",
  1: "var(--spacing-1, 0.25rem)",
  2: "var(--spacing-2, 0.5rem)",
  3: "var(--spacing-3, 0.75rem)",
  4: "var(--spacing-4, 1rem)",
  5: "var(--spacing-5, 1.25rem)",
  6: "var(--spacing-6, 1.5rem)",
  8: "var(--spacing-8, 2rem)",
  10: "var(--spacing-10, 2.5rem)",
  12: "var(--spacing-12, 3rem)",
  16: "var(--spacing-16, 4rem)",
  20: "var(--spacing-20, 5rem)",
  24: "var(--spacing-24, 6rem)",
};

export const tokens = {
  colors,
  typography,
  spacing,
};
