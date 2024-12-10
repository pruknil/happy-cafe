import { router } from 'expo-router';
import {StyleSheet, Button, View, TextInput, Alert} from 'react-native';
import { useSession } from '../components/ctx';
export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View >
      <TextInput
        placeholder='Username'
        
      />
      <TextInput
       
        placeholder="Password" secureTextEntry={true}
      />


      <Button title='Sign In' onPress={() => {
        signIn();
        // Navigate after signing in. You may want to tweak this to ensure sign-in is
        // successful before navigating.
        router.replace('/');
      }}>Sign In</Button>
    </View>
  );
}

