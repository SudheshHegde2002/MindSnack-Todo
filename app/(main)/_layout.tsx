import { Stack, Redirect } from 'expo-router';
import { useAuthContext } from '../../contexts/AuthContext';

export default function MainLayout() {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) return <Redirect href="/(auth)/AuthScreen" />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
    </Stack>
  );
}
