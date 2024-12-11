import { router } from 'expo-router';
import {View} from 'react-native';
import { TextInput,Button,PaperProvider ,Portal,MD3LightTheme as DefaultTheme,} from 'react-native-paper';
import { useSession } from '@/components/ctx';
export default function SignIn() {
  const { signIn } = useSession();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };
  return (
    <PaperProvider theme={theme}>
      <Portal>

      <TextInput
        placeholder='Username'
        
      />

    <TextInput
      label="Password"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
    />

      <Button mode="contained-tonal"  onPress={() => {
        signIn();
        // Navigate after signing in. You may want to tweak this to ensure sign-in is
        // successful before navigating.
        router.replace('/');
      }}>Sign In</Button>

    </Portal>
    </PaperProvider>
  );
}

