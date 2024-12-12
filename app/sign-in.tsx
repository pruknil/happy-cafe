import { useSession } from '@/components/ctx';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  Card,
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Text,
  TextInput,
  TouchableRipple,
} from 'react-native-paper';
export default function SignIn() {
  const { signIn } = useSession();


  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });



  return (
      <SafeAreaView>
        <Card>
          <Card.Content>
            <Text variant="titleLarge">Sign In</Text>
            <TextInput
              label="Email"
              returnKeyType="next"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text, error: '' })}
              error={!!email.error}
              autoCapitalize="none"
              textContentType="emailAddress"
              keyboardType="email-address"
            />

            <TextInput
              label="Password"
              returnKeyType="done"
              value={password.value}
              onChangeText={(text) => setPassword({ value: text, error: '' })}
              error={!!password.error}
              secureTextEntry
            />

            <View style={styles.forgotPassword}>

              <TouchableRipple onPress={() => { router.replace('/forgot-password'); }}  >
                <Text style={styles.label}>Forgot your password?</Text>
              </TouchableRipple>

            </View>

            <Button mode="contained" onPress={() => {
              signIn(email.value, password.value);
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


          </Card.Content>
        </Card>
      </SafeAreaView>
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
