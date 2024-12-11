import { Link, Stack, router } from 'expo-router';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableRipple } from 'react-native-paper';

export default function SignUpScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'SignUpScreen' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">SignUpScreen</ThemedText>
        <TouchableRipple onPress={() => { router.replace('/'); }}  >
          <ThemedText type="link">Go to home screen!</ThemedText>
        </TouchableRipple>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
