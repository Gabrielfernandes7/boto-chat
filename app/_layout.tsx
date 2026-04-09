import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import { botoDarkTheme, botoLightTheme } from '@/ui/theme';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? botoDarkTheme : botoLightTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ title: 'Boas-vindas' }} />
        <Stack.Screen name="peers" options={{ title: 'Lista de Pares' }} />
        <Stack.Screen name="chat/[peerId]" options={{ title: 'Chat' }} />
      </Stack>
    </ThemeProvider>
  );
}
