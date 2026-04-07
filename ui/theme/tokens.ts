export const colors = {
  rosaBoto: '#FF6FA3',
  azulRio: '#2563EB',
  verdeFloresta: '#00B894',
  offWhite: '#FFF7E6',
  cinzaClaro: '#F0F4F8',
  azulProfundo: '#0B1E6D',
  textoPrimario: '#102A43',
  white: '#FFFFFF',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 16,
  lg: 24,
} as const;

export const typography = {
  title: 28,
  heading: 22,
  body: 16,
  caption: 13,
} as const;

export const tokens = {
  colors,
  spacing,
  radius,
  typography,
} as const;
