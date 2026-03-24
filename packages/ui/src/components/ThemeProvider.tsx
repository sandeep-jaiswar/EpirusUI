import * as React from "react";

export interface Theme {
  primary?: string;
  secondary?: string;
  accent?: string;
  surface?: string;
  surfaceLow?: string;
  surfaceHigh?: string;
  surfaceHighest?: string;
  inkPrimary?: string;
  inkSecondary?: string;
  inkMuted?: string;
  fontFamilySans?: string;
  fontFamilyMono?: string;
  fontSizeBase?: string;
  spacingUnit?: string;
}

export const lightTheme: Theme = {
  primary: "#000000",
  secondary: "#5d5e66",
  accent: "#ba1a1a",
  surface: "#f9f9fa",
  surfaceLow: "#f3f3f4",
  surfaceHigh: "#e8e8e9",
  surfaceHighest: "#e2e2e3",
  inkPrimary: "#000000",
  inkSecondary: "#474747",
  inkMuted: "#777777",
  fontFamilySans: "'Inter', sans-serif",
  fontFamilyMono: "'JetBrains Mono', monospace",
  fontSizeBase: "1rem",
  spacingUnit: "1rem",
};

export const darkTheme: Theme = {
  primary: "#ffffff",
  secondary: "#a1a1aa",
  accent: "#ffb4ab",
  surface: "#09090b",
  surfaceLow: "#18181b",
  surfaceHigh: "#27272a",
  surfaceHighest: "#3f3f46",
  inkPrimary: "#ffffff",
  inkSecondary: "#d4d4d8",
  inkMuted: "#71717a",
  fontFamilySans: "'Inter', sans-serif",
  fontFamilyMono: "'JetBrains Mono', monospace",
  fontSizeBase: "1rem",
  spacingUnit: "1rem",
};

interface ThemeContextType {
  theme: Theme;
  mode: "light" | "dark" | "custom";
  setTheme: (theme: Theme) => void;
  toggleMode: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children, initialTheme = lightTheme }: { children: React.ReactNode; initialTheme?: Theme }) {
  const [theme, setThemeState] = React.useState<Theme>(initialTheme);
  const [mode, setMode] = React.useState<"light" | "dark" | "custom">("light");

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setMode("custom");
  };

  const toggleMode = () => {
    if (mode === "light") {
      setThemeState(darkTheme);
      setMode("dark");
    } else {
      setThemeState(lightTheme);
      setMode("light");
    }
  };

  React.useEffect(() => {
    const root = document.documentElement;
    const mapping: Record<string, string | undefined> = {
      "--color-primary": theme.primary,
      "--color-secondary": theme.secondary,
      "--color-accent": theme.accent,
      "--color-surface": theme.surface,
      "--color-surface-low": theme.surfaceLow,
      "--color-surface-high": theme.surfaceHigh,
      "--color-surface-highest": theme.surfaceHighest,
      "--color-ink-primary": theme.inkPrimary,
      "--color-ink-secondary": theme.inkSecondary,
      "--color-ink-muted": theme.inkMuted,
      "--font-family-sans": theme.fontFamilySans,
      "--font-family-mono": theme.fontFamilyMono,
      "--font-size-base": theme.fontSizeBase,
    };

    Object.entries(mapping).forEach(([key, value]) => {
      if (value) root.style.setProperty(key, value);
    });
    
    if (theme.spacingUnit) {
      const unit = parseFloat(theme.spacingUnit);
      root.style.setProperty("--spacing-1", `${unit * 0.25}rem`);
      root.style.setProperty("--spacing-2", `${unit * 0.5}rem`);
      root.style.setProperty("--spacing-3", `${unit * 0.75}rem`);
      root.style.setProperty("--spacing-4", `${unit}rem`);
      root.style.setProperty("--spacing-5", `${unit * 1.25}rem`);
      root.style.setProperty("--spacing-6", `${unit * 1.5}rem`);
      root.style.setProperty("--spacing-8", `${unit * 2}rem`);
      root.style.setProperty("--spacing-10", `${unit * 2.5}rem`);
      root.style.setProperty("--spacing-12", `${unit * 3}rem`);
      root.style.setProperty("--spacing-16", `${unit * 4}rem`);
      root.style.setProperty("--spacing-20", `${unit * 5}rem`);
      root.style.setProperty("--spacing-24", `${unit * 6}rem`);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
