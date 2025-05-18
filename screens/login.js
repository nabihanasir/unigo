import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import GlobalStyles from '../assets/styles';

import LargeButton from '../components/button';
import { logIn } from '../components/authfunctions';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function LoginButtonPress() {
    try {
      const { userType } = await logIn(email, password);
      Alert.alert("Success", `Logged in as ${userType}`);

      // Navigate to appropriate navigator
      if (userType === "student") {
        navigation.navigate("StudentApp");
      } else if (userType === "driver") {
        navigation.navigate("DriverApp");
      } else {
        Alert.alert("Error", "Invalid user type.");
      }
    } catch (e) {
      Alert.alert("Login Error", e.message);
    }
  }

  return (
    <View style={GlobalStyles.loginComponentContainer}>
      <Text style={GlobalStyles.loginComponentTitle}>Login</Text>
      <TextInput
        style={GlobalStyles.loginComponentInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={GlobalStyles.loginComponentInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <LargeButton text='Login' onPress={LoginButtonPress} />
      <LargeButton text='Signup' onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}
