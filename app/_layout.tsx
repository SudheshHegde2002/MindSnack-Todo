import { Slot } from 'expo-router';
import { AuthProvider } from '../contexts/AuthContext';

//slot is like a placeholder for the current route

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
