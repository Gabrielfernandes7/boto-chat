import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { getAppThemeColors, tokens } from '@/ui/theme';

type Props = {
  onContinue: () => void;
};

export function OnboardingScreen({ onContinue }: Props) {
  const colorScheme = useColorScheme();
  const palette = getAppThemeColors(colorScheme);

  return (
    <View style={[styles.container, { backgroundColor: palette.surface }]}> 
      <Image source={require('@/assets/images/icon.png')} style={styles.logo} />
      <Text style={styles.title}>Boto Chat</Text>
      <Text style={[styles.subtitle, { color: palette.textMuted }]}>Conexões que fluem.</Text>
      <Text style={[styles.description, { color: palette.textMuted }]}> 
        Converse com quem está perto sem precisar de internet. Como o boto que se comunica por ecoalização.
      </Text>

      <Pressable style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>Começar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacing.xl,
    gap: tokens.spacing.md,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 24,
  },
  title: {
    fontSize: tokens.typography.title,
    fontWeight: '600',
    color: tokens.colors.pink,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: tokens.typography.caption,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  description: {
    fontSize: tokens.typography.caption,
    lineHeight: 18,
    textAlign: 'center',
    maxWidth: 280,
  },
  button: {
    marginTop: tokens.spacing.lg,
    backgroundColor: tokens.colors.pink,
    borderRadius: 20,
    paddingHorizontal: tokens.spacing.xxl,
    paddingVertical: tokens.spacing.md,
  },
  buttonText: {
    color: tokens.colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
});
