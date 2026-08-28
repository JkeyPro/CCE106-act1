export type ThemeColors = {
  navy: string;
  navyDark: string;
  bg: string;
  card: string;
  cardAlt: string;
  border: string;
  textMuted: string;
  orange: string;
  orangeLight: string;
  yellow: string;
  yellowText: string;
  cream: string;
};

export const lightColors: ThemeColors = {
  navy: '#5D8AA8',
  navyDark: '#4A7089',
  bg: '#F5F1E9',
  card: '#FFFFFF',
  cardAlt: '#F8F5EE',
  border: '#E7E1D3',
  textMuted: '#5A6B7B',
  orange: '#E8791A',
  orangeLight: '#F4A24A',
  yellow: '#F4D35E',
  yellowText: '#5A4300',
  cream: '#FBEFC7',
};

export const darkColors: ThemeColors = {
  navy: '#7BA7C2',
  navyDark: '#5D8AA8',
  bg: '#121417',
  card: '#1E2126',
  cardAlt: '#262A30',
  border: '#33383F',
  textMuted: '#9AA5B1',
  orange: '#E8791A',
  orangeLight: '#F4A24A',
  yellow: '#F4D35E',
  yellowText: '#2A2000',
  cream: '#3A3423',
};

// Kept for anything that still imports COLORS directly (defaults to light theme).
export const COLORS = lightColors;