import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LargeButton from '../components/button';
import { signUp } from '../components/authfunctions';

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");

  async function handleSignup() {
    try {
      await signUp(email, password, userType);
      Alert.alert("Account Created", `Signed up as ${userType}`);
      if (userType === "student") {
        navigation.replace("StudentTabs");
      } else if (userType === "driver") {
        navigation.replace("DriverTabs");
      }
    } catch (err) {
      Alert.alert("Signup Error", err.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Select Role:</Text>
      <Picker
        selectedValue={userType}
        onValueChange={(value) => setUserType(value)}
        style={styles.input}
      >
        <Picker.Item label="Student" value="student" />
        <Picker.Item label="Driver" value="driver" />
      </Picker>

      <LargeButton text="Signup" onPress={handleSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  heading: { fontSize: 26, marginBottom: 20, fontWeight: 'bold', textAlign: 'center' },
  input: { height: 50, borderColor: '#aaa', borderWidth: 1, marginBottom: 15, paddingHorizontal: 15, borderRadius: 8 },
  label: { marginBottom: 5 },
});
