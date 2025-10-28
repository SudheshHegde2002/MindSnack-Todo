import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      marginBottom: 16,
    },
    button: {
      height: 44,
      paddingHorizontal: 16,
      borderRadius: 10,
      backgroundColor: '#111827',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonPressed: {
      opacity: 0.9,
    },
    buttonText: {
      color: 'white',
      fontSize: 15,
      fontWeight: '600',
    },
  });
  