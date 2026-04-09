import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { tokens } from '@/ui/theme';

type Props = {
  onContinue: () => void;
};

export function OnboardingScreen({ onContinue }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/icon.png')} style={styles.logo} />
      <Text style={styles.title}>BotoChat</Text>
      <Text style={styles.subtitle}>Conexões que fluem. Como o rio, como o som.</Text>

      <Pressable style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.offWhite,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacing.lg,
    gap: tokens.spacing.md,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: tokens.radius.lg,
  },
  title: {
    fontSize: tokens.typography.title,
    fontWeight: '800',
    color: tokens.colors.rosaBoto,
  },
  subtitle: {
    fontSize: tokens.typography.body,
    color: tokens.colors.textoPrimario,
    textAlign: 'center',
  },
  button: {
    marginTop: tokens.spacing.lg,
    backgroundColor: tokens.colors.azulRio,
    borderRadius: tokens.radius.md,
    paddingHorizontal: tokens.spacing.xl,
    paddingVertical: tokens.spacing.md,
  },
  buttonText: {
    color: tokens.colors.white,
    fontSize: tokens.typography.body,
    fontWeight: '700',
  },
});
