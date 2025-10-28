import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useAuthContext } from '../../contexts/AuthContext';
import { styles } from './Styles';
export default function HomeScreen() {
  const { signOut } = useAuthContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todoly</Text>
      <Text style={styles.subtitle}>You are signed in</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={signOut}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
}


