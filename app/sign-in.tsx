import { useSession } from '@/components/ctx';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  Card, Text,
  TextInput,
  TouchableRipple
} from 'react-native-paper';
export default function SignIn() {
  const { signIn } = useSession();


  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });



  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Card.Content>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              label="Email"
              returnKeyType="next"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text, error: '' })}
              error={!!email.error}
              autoCapitalize="none"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              label="Password"
              returnKeyType="done"
              value={password.value}
              onChangeText={(text) => setPassword({ value: text, error: '' })}
              error={!!password.error}
              secureTextEntry
            /></View>


          <View style={styles.forgotPassword}>

            <TouchableRipple onPress={() => { router.replace('/forgot-password'); }}  >
              <Text style={styles.forgotPassword}>Forgot your password?</Text>
            </TouchableRipple>

          </View>

          <Button mode="contained" onPress={() => {
            signIn(email.value, password.value);
            router.replace('/');
          }}>
            Login
          </Button>

          <View style={styles.row}>
            <Text style={styles.signUp}>Don’t have an account? </Text>
            <TouchableRipple onPress={() => { router.replace('/signup'); }}  >
              <Text style={styles.signUpLink}>Sign up</Text>
            </TouchableRipple>
          </View>


        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  row: {
    flexDirection: 'row',
    marginTop: 15,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 30,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#000',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  signUp: {
    color: '#000',
  },
  signUpLink: {
    color: '#1E90FF',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
});
