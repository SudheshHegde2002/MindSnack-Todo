import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useAuthContext } from '../../contexts/AuthContext';
import { styles } from './Styles';
export default function AuthScreen() {
  const { signIn } = useAuthContext();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to Todoly</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#A0A0A0"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#A0A0A0"
            style={styles.input}
          />
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={signIn}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
        </View>

        <Text style={styles.helper}>No account? Just tap Sign In to proceed </Text>
      </View>
    </View>
  );
}

