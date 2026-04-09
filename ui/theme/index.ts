import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

import { tokens } from './tokens';

export const botoLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: tokens.colors.rosaBoto,
    background: tokens.colors.offWhite,
    card: tokens.colors.white,
    text: tokens.colors.textoPrimario,
    border: tokens.colors.cinzaClaro,
    notification: tokens.colors.verdeFloresta,
  },
};

export const botoDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: tokens.colors.rosaBoto,
    background: tokens.colors.azulProfundo,
    card: '#112240',
    text: tokens.colors.white,
    border: '#243B53',
    notification: tokens.colors.verdeFloresta,
  },
};

export { tokens };
