import React, { createContext, useContext, useMemo, useState } from 'react';
import { darkColors, COLORS, ThemeColors } from '../components/theme';

type ThemeContextValue = {
  colors: ThemeColors;
  isDark: boolean;
  setIsDark: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const colors = isDark ? darkColors : COLORS;
  const value = useMemo(() => ({ colors, isDark, setIsDark }), [colors, isDark]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
