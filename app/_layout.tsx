import { SessionProvider } from '@/components/ctx';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider
} from 'react-native-paper';
import 'react-native-reanimated';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
 // const colorScheme = useColorScheme();
 const theme = {
  ...DefaultTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
};

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}> 
      <SessionProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false, contentStyle:{ backgroundColor: theme.colors.background }}} />
          <Stack.Screen name="sign-in" options={{ headerShown: false , contentStyle:{ backgroundColor: theme.colors.background }}} />
          <Stack.Screen name="signup" options={{ headerShown: false , contentStyle:{ backgroundColor: theme.colors.background }}} />
          <Stack.Screen name="forgot-password"  options={{ headerShown: false , contentStyle:{ backgroundColor: theme.colors.background }}} />
          <Stack.Screen name="+not-found"  options={{ headerShown: false , contentStyle:{ backgroundColor: theme.colors.background }}} />
        </Stack>
        <StatusBar style="auto" />
      </SessionProvider>
    </PaperProvider>
  );
}
