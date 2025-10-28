import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      backgroundColor: 'white',
    },
    card: {
      width: '100%',
      maxWidth: 420,
      borderRadius: 16,
      backgroundColor: '#F9FAFB',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#E5E7EB',
      padding: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: '#111827',
    },
    subtitle: {
      marginTop: 4,
      fontSize: 14,
      color: '#6B7280',
    },
    form: {
      marginTop: 16,
      gap: 12,
    },
    input: {
      height: 48,
      borderWidth: 1,
      borderColor: '#D1D5DB',
      borderRadius: 10,
      paddingHorizontal: 12,
      backgroundColor: 'white',
      color: '#111827',
    },
    button: {
      height: 48,
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
      fontSize: 16,
      fontWeight: '600',
    },
    helper: {
      marginTop: 12,
      fontSize: 12,
      color: '#6B7280',
      textAlign: 'center',
    },
  });
  