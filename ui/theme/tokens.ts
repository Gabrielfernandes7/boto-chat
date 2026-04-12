export const colors = {
  pink: '#FF6FA3',
  pinkLight: '#FF9FC8',
  pinkBg: '#FFF0F6',
  blue: '#2563EB',
  blueBg: '#EEF3FF',
  blueDark: '#0C447C',
  green: '#00B894',
  greenBg: '#E1F5EE',
  greenDark: '#085041',
  dark: '#1A1A2E',
  dark2: '#1A2240',
  gray: '#6B7280',
  grayLight: '#F0F4F8',
  grayBorder: '#E5E7EB',
  red: '#E24B4A',
  redBg: '#FCEBEB',
  white: '#FFFFFF',
} as const;

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;

export const typography = {
  title: 26,
  heading: 20,
  body: 14,
  caption: 11,
  tiny: 9,
} as const;

export const tokens = {
  colors,
  spacing,
  radius,
  typography,
} as const;
