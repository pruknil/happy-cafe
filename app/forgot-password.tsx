import { Stack, router } from 'expo-router';
import { StyleSheet, View ,Text} from 'react-native';
import { TouchableRipple } from 'react-native-paper';

export default function ForgotPasswordScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'ForgotPasswordScreen' }} />
      <View style={styles.container}>
        <Text>ForgotPasswordScreen</Text>
        <TouchableRipple onPress={() => { router.replace('/'); }}  >
          <Text>Go to home screen!</Text>
        </TouchableRipple>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
