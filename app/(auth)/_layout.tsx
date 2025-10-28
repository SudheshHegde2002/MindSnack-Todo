import { Stack, Redirect } from 'expo-router';
import { useAuthContext } from '../../contexts/AuthContext';

export default function AuthLayout() {
  const { isAuthenticated } = useAuthContext();
  if (isAuthenticated) return <Redirect href="/(main)/home" />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthScreen" />
    </Stack>
  );
}
