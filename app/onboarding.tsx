import { router } from 'expo-router';

import { OnboardingScreen } from '@/ui/screens/OnboardingScreen';

export default function OnboardingRoute() {
  return <OnboardingScreen onContinue={() => router.push('/peers')} />;
}
