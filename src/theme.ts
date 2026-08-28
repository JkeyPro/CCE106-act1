export const COLORS = {
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
} as const;

export type ThemeColors = Record<keyof typeof COLORS, string>;

export const DARK_COLORS: ThemeColors = {
  ...COLORS,
  navy: '#8CB4D1',
  navyDark: '#6F9AB8',
  bg: '#18212A',
  card: '#24313D',
  cardAlt: '#2D3C49',
  border: '#405363',
  textMuted: '#B8C6D1',
  cream: '#39434B',
};
