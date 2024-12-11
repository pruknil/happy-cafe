import { router } from 'expo-router';
import { View } from 'react-native';
import { TextInput, PaperProvider, MD3LightTheme as DefaultTheme, } from 'react-native-paper';
import { useSession } from '@/components/ctx';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { memo, useState } from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Avatar, Card, IconButton, TouchableRipple, Divider, Portal, Dialog, Button, Text, MD2Colors } from 'react-native-paper';
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

  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });



  return (
    <PaperProvider theme={theme}>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>

        <TouchableRipple onPress={() => { router.replace('/forgot-password'); }}  >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableRipple>

      </View>

      <Button mode="contained" onPress={() => {
        signIn();
        router.replace('/');
      }}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableRipple onPress={() => { router.replace('/signup'); }}  >
          <Text style={styles.link}>Sign up</Text>
        </TouchableRipple>
      </View>
      {/* <Portal>

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

    </Portal> */}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {

  },
  link: {
    fontWeight: 'bold',

  },
});
