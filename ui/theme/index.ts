import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';

import { tokens } from './tokens';

export type AppThemeColors = {
  surface: string;
  surfaceAlt: string;
  text: string;
  textMuted: string;
  border: string;
  topBorder: string;
  bubbleInbound: string;
  bubbleInboundBorder: string;
  bubbleOutbound: string;
  bubbleOutboundText: string;
  cardBg: string;
};

export function getAppThemeColors(scheme: ColorSchemeName): AppThemeColors {
  const isDark = scheme === 'dark';

  return {
    surface: isDark ? '#0f1423' : tokens.colors.white,
    surfaceAlt: isDark ? '#0d1020' : '#F8F9FF',
    text: isDark ? '#f0f0f0' : tokens.colors.dark,
    textMuted: isDark ? '#9ca3af' : tokens.colors.gray,
    border: isDark ? 'rgba(255,255,255,.08)' : tokens.colors.grayBorder,
    topBorder: isDark ? 'rgba(255,255,255,.06)' : '#f0f0f0',
    bubbleInbound: isDark ? '#1e2a4a' : tokens.colors.white,
    bubbleInboundBorder: isDark ? '#2a3a60' : tokens.colors.grayBorder,
    bubbleOutbound: tokens.colors.blue,
    bubbleOutboundText: tokens.colors.white,
    cardBg: isDark ? tokens.colors.dark2 : tokens.colors.white,
  };
}

export const botoLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: tokens.colors.pink,
    background: '#f4f1ed',
    card: tokens.colors.white,
    text: tokens.colors.dark,
    border: tokens.colors.grayBorder,
    notification: tokens.colors.green,
  },
};

export const botoDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: tokens.colors.pink,
    background: '#0f1423',
    card: tokens.colors.dark2,
    text: '#f0f0f0',
    border: 'rgba(255,255,255,.08)',
    notification: tokens.colors.green,
  },
};

export { tokens };
