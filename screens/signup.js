import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import React, { useState } from 'react';
import { useUserAuth } from '../contexts/userAuthContext';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LargeButton from '../components/button';
import { signUp } from '../components/authfunctions';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  pickerWrapper: {
    marginBottom: 20,
  },
  picker: {
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
  },
  label: {
    marginBottom: 5,
  },
});
export default function SignUp({navigation}){
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  return(

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
      
   <LargeButton
  text="signup"
  onPress={async () => {
  console.log("Sign up button pressed"); // Step 1
  try {
    console.log("Email:", email);
    console.log("Password:", password);

    await signUp(email, password); // Step 2
    console.log("Sign-up successful"); // Step 3

    navigation.navigate("MainApp"); // Step 4
  } catch (err) {
    console.log("Error during sign up:", err); // Step 5
    setError(err.message);
  }
}}
//   {async () => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//     navigation.navigate("MainApp");
//   } catch (err) {
//     console.log(err);
//     setError(err.message);
//   }
// }}
  // onPress={async () => {
  //   try {
  //     await signUp(email, password);
  //     navigation.navigate("MainApp");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // }}
/>

   </View> 
  )
}